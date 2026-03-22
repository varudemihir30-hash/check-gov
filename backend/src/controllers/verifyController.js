const { PrismaClient } = require('@prisma/client');
const { extractTextFromFile, analyzeWithAI, determineFinalResult } = require('../services/aiService');
const { fetchUrlContent } = require('../services/scraperService');
const { getUploadedFilesMetadata } = require('../services/fileService');
const { findMatchingSchemes, getBestMatch } = require('../services/matchService');
const { generateVerificationId } = require('../utils/generateVerificationId');
const { analyzeForFraudPatterns } = require('../utils/fraudPatterns');
const { hashMobileNumber } = require('../utils/indianNumbers');

const prisma = new PrismaClient();

/**
 * POST /api/verify
 * Main verification pipeline
 */
async function verifyScheme(req, res) {
  try {
    const {
      inputType = 'url',
      content = '',
      schemeName,
      state = 'all',
      sector,
      source = 'web',
      userName,
      userMobile,
    } = req.body;

    const uploadedFiles = req.files || [];
    const filesMeta = getUploadedFilesMetadata(uploadedFiles);

    // ── Step 1: Extract content based on input type ──────────────────
    let extractedText = content;
    let extractedMeta = {};

    if ((inputType === 'document' || inputType === 'file') && uploadedFiles.length > 0) {
      // Use Gemini Vision to extract text from first document
      const firstFile = uploadedFiles[0];
      const visionResult = await extractTextFromFile(firstFile.path);
      extractedText = visionResult.extractedText || '';
      extractedMeta = visionResult;
    } else if (inputType === 'url' && content) {
      // Fetch and parse the URL
      const urlContent = await fetchUrlContent(content);
      extractedText = [urlContent.title, urlContent.h1, urlContent.content].filter(Boolean).join('\n');
      extractedMeta = { isOfficialGovSite: urlContent.isOfficialGovSite };
    } else if (inputType === 'sms') {
      // SMS text used as-is
      extractedText = content;
    } else if (inputType === 'qr') {
      extractedText = content;
    }

    // ── Step 2: Fuzzy match against scheme database ───────────────────
    const searchTerm = schemeName || extractedMeta?.schemeName || extractedText?.slice(0, 100) || '';
    const topMatches = await findMatchingSchemes(searchTerm, 3);
    const bestMatch = topMatches.length > 0 ? topMatches[0] : null;

    // ── Step 3: Static fraud pre-screening ────────────────────────────
    const staticIndicators = analyzeForFraudPatterns(extractedText);

    // If URL is supplied and it IS an official gov site — boost confidence
    if (inputType === 'url' && extractedMeta?.isOfficialGovSite) {
      // official gov site is a strong positive signal, remove false positives
    }

    // ── Step 4: AI Analysis with Gemini ──────────────────────────────
    const aiResult = await analyzeWithAI({
      matchedScheme: bestMatch,
      extractedText: extractedText.slice(0, 8000),
      staticFraudIndicators: staticIndicators,
    });

    // ── Step 5: Final decision ────────────────────────────────────────
    const finalResult = determineFinalResult(aiResult, !!bestMatch);

    // Combine fraud indicators from static + AI
    const allFraudIndicators = [
      ...staticIndicators,
      ...(aiResult.fraud_indicators || []),
    ];

    // ── Step 6: Save to database ──────────────────────────────────────
    const verificationId = generateVerificationId();

    const verification = await prisma.verification.create({
      data: {
        verificationId,
        userName: userName || null,
        userMobileHash: hashMobileNumber(userMobile),
        schemeId: bestMatch?.id || null,
        inputType: inputType.toUpperCase(),
        inputContent: extractedText.slice(0, 5000),
        uploadedFiles: filesMeta,
        result: finalResult,
        confidenceScore: aiResult.confidence,
        fraudIndicators: allFraudIndicators.length > 0 ? allFraudIndicators : null,
        aiAnalysis: aiResult.analysis,
        source,
        state,
      },
      include: {
        scheme: {
          select: { name: true, nameHindi: true, officialUrl: true, ministry: true },
        },
      },
    });

    // ── Step 7: Return response ───────────────────────────────────────
    res.json({
      success: true,
      verificationId: verification.verificationId,
      result: verification.result,
      confidenceScore: verification.confidenceScore,
      matchedScheme: aiResult.matched_scheme || bestMatch?.name || null,
      matchedSchemeHindi: bestMatch?.nameHindi || null,
      ministry: bestMatch?.ministry || null,
      officialLink: aiResult.official_link || bestMatch?.officialUrl || null,
      fraudIndicators: allFraudIndicators,
      analysis: aiResult.analysis,
      topMatches: topMatches.slice(0, 3).map(m => ({
        name: m.name,
        nameHindi: m.nameHindi,
        ministry: m.ministry,
        officialUrl: m.officialUrl || m.official_url,
        score: m.score,
      })),
      isOfficialGovSite: extractedMeta?.isOfficialGovSite || false,
    });
  } catch (error) {
    console.error('[VerifyController] Error:', error);
    res.status(500).json({ success: false, error: 'Verification failed. Please try again.' });
  }
}

/**
 * GET /api/verify/:verificationId
 * Get verification result by ID
 */
async function getVerificationById(req, res) {
  try {
    const { verificationId } = req.params;
    const verification = await prisma.verification.findUnique({
      where: { verificationId },
      include: {
        scheme: {
          select: { name: true, nameHindi: true, officialUrl: true, ministry: true, sector: true },
        },
      },
    });

    if (!verification) {
      return res.status(404).json({ success: false, error: 'Verification not found' });
    }

    res.json({ success: true, verification });
  } catch (error) {
    console.error('[VerifyController] getById error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve verification' });
  }
}

/**
 * GET /api/verify/recent
 * Last 20 anonymous verifications (for live feed ticker)
 */
async function getRecentVerifications(req, res) {
  try {
    const verifications = await prisma.verification.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
      select: {
        verificationId: true,
        result: true,
        confidenceScore: true,
        inputType: true,
        state: true,
        createdAt: true,
        scheme: { select: { name: true, nameHindi: true } },
      },
    });

    res.json({ success: true, verifications });
  } catch (error) {
    console.error('[VerifyController] getRecent error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch recent verifications' });
  }
}

/**
 * POST /api/verify/:id/report
 * Report a verification as fraudulent
 */
async function reportVerification(req, res) {
  try {
    const { id } = req.params;
    const { description, reportedByMobile } = req.body;

    if (!description) {
      return res.status(400).json({ success: false, error: 'Description is required to report' });
    }

    const verification = await prisma.verification.findUnique({ where: { verificationId: id } });
    if (!verification) {
      return res.status(404).json({ success: false, error: 'Verification not found' });
    }

    const report = await prisma.fraudReport.create({
      data: {
        verificationId: verification.id,
        reportedByMobile: reportedByMobile || null,
        description,
        status: 'PENDING',
      },
    });

    res.json({ success: true, reportId: report.id, message: 'Fraud report submitted. Thank you for helping keep India safe!' });
  } catch (error) {
    console.error('[VerifyController] reportVerification error:', error);
    res.status(500).json({ success: false, error: 'Failed to submit report' });
  }
}

module.exports = { verifyScheme, getVerificationById, getRecentVerifications, reportVerification };

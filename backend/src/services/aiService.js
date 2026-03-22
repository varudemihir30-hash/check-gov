const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

let genAI;
let model;
let visionModel;

function getGenAI() {
  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    visionModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }
  return { model, visionModel };
}

/**
 * Extract text from an image or PDF using Gemini Vision API
 */
async function extractTextFromFile(filePath) {
  try {
    const { visionModel } = getGenAI();
    const fileBuffer = fs.readFileSync(filePath);
    const base64Data = fileBuffer.toString('base64');
    const ext = path.extname(filePath).toLowerCase();

    const mimeTypeMap = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.pdf': 'application/pdf',
    };
    const mimeType = mimeTypeMap[ext] || 'image/jpeg';

    const prompt = `You are analyzing a document related to Indian government schemes. 
    Extract all visible text from this document. Also identify:
    - Scheme name (if any)
    - Ministry name (if any)
    - Any money/benefit amounts mentioned
    - Any URLs or phone numbers
    - Any dates or deadlines
    
    Return the full extracted text followed by a JSON summary:
    {
      "extractedText": "...",
      "schemeName": "...",
      "ministry": "...",
      "amounts": [],
      "urls": [],
      "phones": [],
      "dates": []
    }`;

    const result = await visionModel.generateContent([
      prompt,
      {
        inlineData: {
          mimeType,
          data: base64Data,
        },
      },
    ]);

    const text = result.response.text();
    
    // Try to parse JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch (e) {
        return { extractedText: text, schemeName: null, ministry: null, amounts: [], urls: [], phones: [], dates: [] };
      }
    }
    return { extractedText: text, schemeName: null, ministry: null, amounts: [], urls: [], phones: [], dates: [] };
  } catch (error) {
    console.error('Gemini Vision error:', error.message);
    return { extractedText: '', error: error.message };
  }
}

/**
 * Main AI verification using Gemini
 */
async function analyzeWithAI({ matchedScheme, extractedText, staticFraudIndicators }) {
  try {
    const { model } = getGenAI();

    const schemeInfo = matchedScheme
      ? `Matched Scheme: ${matchedScheme.name} (${matchedScheme.nameHindi})
Ministry: ${matchedScheme.ministry}
Official URL: ${matchedScheme.officialUrl}
Type: ${matchedScheme.type}
Description: ${matchedScheme.description}`
      : 'No matching scheme found in database.';

    const staticIndicatorsText = staticFraudIndicators && staticFraudIndicators.length > 0
      ? `Static pre-screening detected these red flags: ${staticFraudIndicators.join('; ')}`
      : 'No static red flags detected in pre-screening.';

    const prompt = `You are an Indian government scheme fraud detection expert with deep knowledge of all central and state government schemes.

Scheme Database Match:
${schemeInfo}

User Submitted Content:
${extractedText || 'No content provided'}

Pre-screening Analysis:
${staticIndicatorsText}

Analyze the submitted content and return ONLY a JSON object (no additional text):
{
  "result": "verified" | "fraud" | "unverified",
  "confidence": 0.0-1.0,
  "matched_scheme": "scheme name or null",
  "fraud_indicators": ["list of specific red flags if fraud, empty array if none"],
  "analysis": "2-3 sentence explanation in simple English that a common Indian citizen can understand",
  "official_link": "real gov.in URL if verified, null otherwise"
}

Red flags to detect:
- Asking for registration fees, processing fees or any payment to receive benefits
- Unofficial phone numbers or WhatsApp/Telegram contact methods
- Misspelled ministry names or government entity names
- Promises of unrealistic amounts or guaranteed benefits
- Requests for OTP, PIN, banking details or Aadhar OTP
- Unofficial domains (.com, .net instead of .gov.in or .nic.in)
- Urgency language ("limited time", "act now", "expires today")
- Missing or wrong official URL
- Inconsistencies with the actual scheme in the database

Confidence scoring:
- 0.85-1.0: Very high certainty
- 0.65-0.85: Reasonably confident
- 0.40-0.65: Moderate confidence
- 0.00-0.40: Low confidence / unclear`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Extract JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        result: parsed.result || 'unverified',
        confidence: Math.min(1, Math.max(0, parsed.confidence || 0.5)),
        matched_scheme: parsed.matched_scheme || null,
        fraud_indicators: parsed.fraud_indicators || [],
        analysis: parsed.analysis || 'Unable to analyze content.',
        official_link: parsed.official_link || null,
      };
    }

    return {
      result: 'unverified',
      confidence: 0.5,
      matched_scheme: null,
      fraud_indicators: [],
      analysis: 'AI analysis could not be completed. Please verify manually through official government websites.',
      official_link: null,
    };
  } catch (error) {
    console.error('Gemini AI analysis error:', error.message);
    return {
      result: 'unverified',
      confidence: 0,
      matched_scheme: null,
      fraud_indicators: ['AI service temporarily unavailable'],
      analysis: 'AI analysis could not be completed due to a service error. Please verify through official government websites.',
      official_link: null,
    };
  }
}

/**
 * Determine final verification result using confidence + fraud indicators
 */
function determineFinalResult(aiResult, dbMatchFound) {
  const { result, confidence, fraud_indicators } = aiResult;

  if (confidence > 0.75 && dbMatchFound && fraud_indicators.length === 0) {
    return 'VERIFIED';
  }
  if (fraud_indicators.length > 0 && confidence < 0.4) {
    return 'FRAUD';
  }
  if (result === 'fraud' && confidence > 0.6) {
    return 'FRAUD';
  }
  if (result === 'verified' && confidence > 0.7) {
    return 'VERIFIED';
  }
  return 'UNVERIFIED';
}

module.exports = { extractTextFromFile, analyzeWithAI, determineFinalResult };

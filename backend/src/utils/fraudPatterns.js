/**
 * Static fraud pattern rules for quick pre-screening
 * before Gemini AI analysis runs.
 */

const FRAUD_PATTERNS = {
  // Keywords that strongly indicate fraud
  highRiskKeywords: [
    'registration fee', 'processing fee', 'application fee', 'transfer fee',
    'registration charge', 'processing charge',
    'send money', 'pay now', 'immediate payment',
    'otp', 'pin number', 'atm pin', 'debit card number',
    'whatsapp', 'telegram',
    'limited time offer', 'act now', 'last chance', 'hurry',
    'guaranteed', 'free money', 'instant approval',
    'account number', 'cvv', 'credit card number',
    'aadhar xerox', 'pan card xerox',
  ],

  // Unofficial domains (fraud indicators)
  unofficialDomains: [
    '.com', '.net', '.org', '.in (non-gov)', '.co.in',
    'blogspot', 'wordpress', 'wixsite', 'weebly',
  ],

  // Official domains that mark something as likely legitimate
  officialDomains: [
    '.gov.in', '.nic.in', '.india.gov.in', '.mygov.in', '.digilocker.gov.in',
  ],

  // Suspicious phone/contact patterns  
  suspiciousContactPatterns: [
    /whatsapp/i,
    /telegram/i,
    /\+91\s*[6-9]\d{9}/,  // Mobile numbers (not toll-free)
    /1800\d{6,7}/,         // some fake toll-free numbers
  ],

  // Unrealistic promise patterns
  unrealisticPromises: [
    /get ₹\d+,?\d+ in \d+ hours/i,
    /instant ₹\d+/i,
    /free ₹\d+/i,
    /win ₹\d+/i,
    /earn ₹\d+,\d{3} per/i,
  ],

  // Misspelled ministry names (common in fraud)
  commonMinistryMisspellings: [
    'minestry', 'ministrry', 'minstry', 'gouverment', 'govement',
    'goverment', 'indian gouv', 'pradhan mantri (fake)',
  ],
};

/**
 * Quick static analysis of text content for red flags.
 * Returns array of detected indicators.
 */
function analyzeForFraudPatterns(text) {
  if (!text) return [];
  const lowerText = text.toLowerCase();
  const indicators = [];

  // Check high-risk keywords
  for (const keyword of FRAUD_PATTERNS.highRiskKeywords) {
    if (lowerText.includes(keyword.toLowerCase())) {
      indicators.push(`Contains suspicious keyword: "${keyword}"`);
    }
  }

  // Check unofficial domains in URLs
  const urlMatches = text.match(/https?:\/\/[^\s]+/gi) || [];
  for (const url of urlMatches) {
    const isOfficial = FRAUD_PATTERNS.officialDomains.some(d => url.includes(d));
    if (!isOfficial) {
      indicators.push(`Unofficial domain found: ${url}`);
    }
  }

  // Check suspicious contact patterns
  for (const pattern of FRAUD_PATTERNS.suspiciousContactPatterns) {
    if (pattern.test(text)) {
      indicators.push(`Suspicious contact method detected`);
      break;
    }
  }

  // Check unrealistic promises
  for (const pattern of FRAUD_PATTERNS.unrealisticPromises) {
    if (pattern.test(text)) {
      indicators.push(`Unrealistic financial promise detected`);
      break;
    }
  }

  // Check misspelled ministry names
  for (const misspell of FRAUD_PATTERNS.commonMinistryMisspellings) {
    if (lowerText.includes(misspell)) {
      indicators.push(`Misspelled government entity: "${misspell}"`);
    }
  }

  return indicators;
}

/**
 * Check if a URL is an official government URL
 */
function isOfficialGovUrl(url) {
  if (!url) return false;
  return FRAUD_PATTERNS.officialDomains.some(domain => url.includes(domain));
}

module.exports = { FRAUD_PATTERNS, analyzeForFraudPatterns, isOfficialGovUrl };

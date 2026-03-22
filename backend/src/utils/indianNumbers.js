/**
 * Indian number formatting utilities
 */

/**
 * Format a number in Indian style (lakhs/crores)
 * e.g. 1500000 → "15,00,000" or "₹15 Lakh"
 */
function formatIndianNumber(num) {
  if (num === null || num === undefined) return '0';
  const numStr = Math.round(num).toString();
  const lastThree = numStr.slice(-3);
  const rest = numStr.slice(0, -3);
  const formatted = rest
    ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree
    : lastThree;
  return formatted;
}

/**
 * Format amount as Indian currency string
 * e.g. 500000 → "₹5 Lakh"
 */
function formatIndianCurrency(amount) {
  if (!amount) return '₹0';
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Crore`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} Lakh`;
  }
  if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)} Thousand`;
  }
  return `₹${amount}`;
}

/**
 * Hash a mobile number using SHA-256 for privacy
 */
function hashMobileNumber(mobile) {
  const crypto = require('crypto');
  if (!mobile) return null;
  // Normalize: strip spaces, dashes, +91 prefix
  const cleaned = mobile.replace(/[\s\-+]/g, '').replace(/^91/, '');
  return crypto.createHash('sha256').update(cleaned).digest('hex');
}

/**
 * Validate Indian mobile number format
 */
function isValidIndianMobile(mobile) {
  if (!mobile) return false;
  const cleaned = mobile.replace(/[\s\-+]/g, '').replace(/^91/, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

module.exports = {
  formatIndianNumber,
  formatIndianCurrency,
  hashMobileNumber,
  isValidIndianMobile,
};

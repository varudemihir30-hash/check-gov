const { v4: uuidv4 } = require('uuid');

/**
 * Generates a unique verification ID in the format: SY-YEAR-XXXXXX
 */
function generateVerificationId() {
  const year = new Date().getFullYear();
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let suffix = '';
  for (let i = 0; i < 6; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SY-${year}-${suffix}`;
}

module.exports = { generateVerificationId };

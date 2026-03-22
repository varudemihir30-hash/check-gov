const rateLimit = require('express-rate-limit');

/**
 * Verification endpoint: 10 requests per IP per hour
 */
const verifyRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: {
    success: false,
    error: 'Too many verification requests. Please try again after 1 hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Scheme browsing: 100 requests per IP per minute
 */
const schemesRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,
  message: {
    success: false,
    error: 'Rate limit exceeded. Please slow down your requests.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * General API rate limit
 */
const generalRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 200,
  message: {
    success: false,
    error: 'Too many requests from this IP.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { verifyRateLimit, schemesRateLimit, generalRateLimit };

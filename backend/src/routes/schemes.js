const express = require('express');
const router = express.Router();
const {
  listSchemes, searchSchemesHandler, getSectors, getStates,
  getSchemeBySlug, triggerSync,
} = require('../controllers/schemeController');
const { schemesRateLimit } = require('../middleware/rateLimit');
const { adminAuth } = require('../middleware/auth');

// Apply schemes rate limit to all routes
router.use(schemesRateLimit);

router.get('/', listSchemes);
router.get('/search', searchSchemesHandler);
router.get('/sectors', getSectors);
router.get('/states', getStates);
router.post('/sync', adminAuth, triggerSync);
router.get('/:slug', getSchemeBySlug);

module.exports = router;

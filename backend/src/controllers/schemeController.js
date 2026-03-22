const { PrismaClient } = require('@prisma/client');
const { searchSchemes, findMatchingSchemes } = require('../services/matchService');

const prisma = new PrismaClient();

/**
 * GET /api/schemes
 * List all schemes with optional filters and pagination
 */
async function listSchemes(req, res) {
  try {
    const { sector, state, type, q, page = 1, limit = 20 } = req.query;

    const result = await searchSchemes(q || '', {
      sector: sector ? sector.toUpperCase() : undefined,
      state,
      type: type ? type.toUpperCase() : undefined,
      page: parseInt(page),
      limit: Math.min(parseInt(limit), 100),
    });

    res.json({ success: true, ...result });
  } catch (error) {
    console.error('[SchemeController] listSchemes error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch schemes' });
  }
}

/**
 * GET /api/schemes/search?q=
 * Fuzzy search across English + Hindi names
 */
async function searchSchemesHandler(req, res) {
  try {
    const { q } = req.query;
    if (!q || q.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Query "q" must be at least 2 characters' });
    }

    const matches = await findMatchingSchemes(q, 10);
    res.json({ success: true, results: matches, count: matches.length });
  } catch (error) {
    console.error('[SchemeController] searchSchemes error:', error);
    res.status(500).json({ success: false, error: 'Search failed' });
  }
}

/**
 * GET /api/schemes/sectors
 * Return all sectors with total scheme count
 */
async function getSectors(req, res) {
  try {
    const sectorCounts = await prisma.scheme.groupBy({
      by: ['sector'],
      where: { isActive: true },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
    });

    const sectors = sectorCounts.map(s => ({
      sector: s.sector,
      label: s.sector.replace(/_/g, ' & ').replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
      count: s._count.id,
    }));

    res.json({ success: true, sectors });
  } catch (error) {
    console.error('[SchemeController] getSectors error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch sectors' });
  }
}

/**
 * GET /api/schemes/states
 * Return all states with scheme count
 */
async function getStates(req, res) {
  try {
    const stateCounts = await prisma.scheme.groupBy({
      by: ['state'],
      where: { isActive: true },
      _count: { id: true },
    });

    const states = stateCounts
      .filter(s => s.state !== null)
      .sort((a, b) => (a.state || '').localeCompare(b.state || ''))
      .map(s => ({ state: s.state, count: s._count.id }));

    const centralCount = stateCounts.find(s => s.state === null)?._count.id || 0;
    
    res.json({ success: true, states, centralSchemesCount: centralCount });
  } catch (error) {
    console.error('[SchemeController] getStates error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch states' });
  }
}

/**
 * GET /api/schemes/:slug
 * Get full scheme detail by slug
 */
async function getSchemeBySlug(req, res) {
  try {
    const { slug } = req.params;
    const scheme = await prisma.scheme.findUnique({
      where: { slug },
    });

    if (!scheme) {
      return res.status(404).json({ success: false, error: 'Scheme not found' });
    }

    res.json({ success: true, scheme });
  } catch (error) {
    console.error('[SchemeController] getSchemeBySlug error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch scheme' });
  }
}

/**
 * POST /api/schemes/sync (Admin)
 * Trigger manual re-sync from data sources
 */
async function triggerSync(req, res) {
  try {
    const { syncAllSources } = require('../services/scraperService');
    // Start async without blocking
    syncAllSources().catch(err => console.error('[SyncTrigger] Error:', err));

    res.json({ success: true, message: 'Sync started in background. Check logs for progress.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to trigger sync' });
  }
}

module.exports = { listSchemes, searchSchemesHandler, getSectors, getStates, getSchemeBySlug, triggerSync };

const { PrismaClient } = require('@prisma/client');
let redis;

try {
  const { Redis } = require('ioredis');
  redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  redis.on('error', (err) => {
    console.warn('[StatsController] Redis connection error, stats will not be cached:', err.message);
    redis = null;
  });
} catch (e) {
  console.warn('[StatsController] Redis not available, running without cache');
}

const prisma = new PrismaClient();
const STATS_CACHE_KEY = 'sachyojana:stats';
const STATS_CACHE_TTL = 3600; // 1 hour

/**
 * GET /api/stats
 * Return aggregated platform statistics
 */
async function getStats(req, res) {
  try {
    // Try Redis cache first
    if (redis) {
      try {
        const cached = await redis.get(STATS_CACHE_KEY);
        if (cached) {
          return res.json({ success: true, fromCache: true, ...JSON.parse(cached) });
        }
      } catch (e) {
        // Cache miss, continue
      }
    }

    // Compute stats from DB
    const [
      totalVerifications,
      verifiedCount,
      fraudCount,
      schemesIndexed,
      stateSchemes,
    ] = await Promise.all([
      prisma.verification.count(),
      prisma.verification.count({ where: { result: 'VERIFIED' } }),
      prisma.verification.count({ where: { result: 'FRAUD' } }),
      prisma.scheme.count({ where: { isActive: true } }),
      prisma.scheme.groupBy({ by: ['state'], where: { isActive: true } }),
    ]);

    const legitimatePercent = totalVerifications > 0
      ? Math.round((verifiedCount / totalVerifications) * 100)
      : 0;

    const statesCovered = stateSchemes.filter(s => s.state !== null).length;

    const stats = {
      totalVerifications,
      verifiedCount,
      fraudCount,
      unverifiedCount: totalVerifications - verifiedCount - fraudCount,
      legitimatePercent,
      fraudsDetected: fraudCount,
      schemesIndexed,
      statesCovered,
      lastUpdated: new Date().toISOString(),
    };

    // Cache in Redis
    if (redis) {
      try {
        await redis.setex(STATS_CACHE_KEY, STATS_CACHE_TTL, JSON.stringify(stats));
      } catch (e) {
        // Cache write failed, not critical
      }
    }

    res.json({ success: true, fromCache: false, ...stats });
  } catch (error) {
    console.error('[StatsController] getStats error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch statistics' });
  }
}

/**
 * Refresh stats cache (called by cron job)
 */
async function refreshStatsCache() {
  if (!redis) return;
  try {
    const [total, verified, fraud, schemes] = await Promise.all([
      prisma.verification.count(),
      prisma.verification.count({ where: { result: 'VERIFIED' } }),
      prisma.verification.count({ where: { result: 'FRAUD' } }),
      prisma.scheme.count({ where: { isActive: true } }),
    ]);

    const stats = {
      totalVerifications: total,
      verifiedCount: verified,
      fraudCount: fraud,
      legitimatePercent: total > 0 ? Math.round((verified / total) * 100) : 0,
      schemesIndexed: schemes,
      lastUpdated: new Date().toISOString(),
    };

    await redis.setex(STATS_CACHE_KEY, STATS_CACHE_TTL, JSON.stringify(stats));
    console.log('[StatsCron] Stats cache refreshed');
  } catch (error) {
    console.error('[StatsCron] Refresh error:', error.message);
  }
}

module.exports = { getStats, refreshStatsCache };

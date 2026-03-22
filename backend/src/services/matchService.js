const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Fuzzy match a scheme name against the database using Prisma's contains + similarity.
 * Returns top N matches ordered by relevance.
 * Uses pg_trgm for efficient trigram similarity if available.
 */
async function findMatchingSchemes(schemeName, limit = 3) {
  if (!schemeName || schemeName.trim().length < 3) return [];

  const searchTerm = schemeName.trim();

  try {
    // Use raw SQL with pg_trgm similarity for best fuzzy matching
    const results = await prisma.$queryRaw`
      SELECT 
        id, name, "name_hindi", slug, ministry, sector, type, state,
        description, "official_url", "launch_year",
        GREATEST(
          similarity(name, ${searchTerm}),
          similarity("name_hindi", ${searchTerm})
        ) as score
      FROM schemes
      WHERE 
        is_active = true AND (
          name ILIKE ${'%' + searchTerm + '%'} OR
          "name_hindi" ILIKE ${'%' + searchTerm + '%'} OR
          similarity(name, ${searchTerm}) > 0.1 OR
          similarity("name_hindi", ${searchTerm}) > 0.1
        )
      ORDER BY score DESC
      LIMIT ${limit}
    `;

    return results || [];
  } catch (error) {
    // Fallback to basic ILIKE if pg_trgm not available
    console.warn('[MatchService] pg_trgm unavailable, using basic match:', error.message);
    return await fallbackMatch(searchTerm, limit);
  }
}

/**
 * Fallback basic match using ILIKE (no pg_trgm needed)
 */
async function fallbackMatch(schemeName, limit = 3) {
  const terms = schemeName.split(' ').filter(t => t.length > 3);
  
  const where = {
    isActive: true,
    OR: [
      { name: { contains: schemeName, mode: 'insensitive' } },
      { nameHindi: { contains: schemeName, mode: 'insensitive' } },
      ...terms.map(term => ({ name: { contains: term, mode: 'insensitive' } })),
    ],
  };

  const schemes = await prisma.scheme.findMany({
    where,
    take: limit,
    select: {
      id: true,
      name: true,
      nameHindi: true,
      slug: true,
      ministry: true,
      sector: true,
      type: true,
      state: true,
      description: true,
      officialUrl: true,
      launchYear: true,
    },
  });

  return schemes.map(s => ({ ...s, score: 0.5 }));
}

/**
 * Get the best single match for a scheme name
 */
async function getBestMatch(schemeName) {
  const matches = await findMatchingSchemes(schemeName, 1);
  return matches.length > 0 ? matches[0] : null;
}

/**
 * Search schemes with text query across name + description
 */
async function searchSchemes(query, filters = {}) {
  const { sector, state, type, page = 1, limit = 20 } = filters;
  const skip = (page - 1) * limit;

  const where = {
    isActive: true,
    ...(sector && { sector }),
    ...(type && { type }),
    ...(state && state !== 'all'
      ? { OR: [{ state }, { state: null }] }
      : {}),
    ...(query && {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { nameHindi: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { ministry: { contains: query, mode: 'insensitive' } },
      ],
    }),
  };

  const [schemes, total] = await Promise.all([
    prisma.scheme.findMany({
      where,
      skip,
      take: limit,
      orderBy: { name: 'asc' },
      select: {
        id: true,
        name: true,
        nameHindi: true,
        slug: true,
        ministry: true,
        sector: true,
        type: true,
        state: true,
        description: true,
        officialUrl: true,
        launchYear: true,
        isActive: true,
      },
    }),
    prisma.scheme.count({ where }),
  ]);

  return { schemes, total, page, limit, totalPages: Math.ceil(total / limit) };
}

module.exports = { findMatchingSchemes, getBestMatch, searchSchemes };

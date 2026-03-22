const axios = require('axios');
const cheerio = require('cheerio');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Scrape scheme list from myScheme.gov.in
 */
async function scrapeMyScheme() {
  console.log('[Scraper] Starting myScheme.gov.in scrape...');
  const scraped = [];

  try {
    // Fetch the main scheme list page
    const response = await axios.get('https://www.myscheme.gov.in/schemes', {
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SachYojanaBot/1.0; +https://sachyojana.in)',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-IN,en;q=0.9,hi;q=0.8',
      },
    });

    const $ = cheerio.load(response.data);

    // Parse scheme cards
    $('[class*="scheme"]').each((i, el) => {
      const name = $(el).find('h2, h3, [class*="title"], [class*="name"]').first().text().trim();
      const ministry = $(el).find('[class*="ministry"], [class*="department"]').first().text().trim();
      const link = $(el).find('a').first().attr('href');

      if (name && name.length > 5) {
        scraped.push({
          name,
          ministry: ministry || 'Government of India',
          link: link ? (link.startsWith('http') ? link : `https://www.myscheme.gov.in${link}`) : null,
        });
      }
    });

    console.log(`[Scraper] Found ${scraped.length} schemes from myScheme.gov.in`);
  } catch (error) {
    console.error('[Scraper] myScheme.gov.in error:', error.message);
  }

  return scraped;
}

/**
 * Fetch scheme detail page
 */
async function scrapeSchemeDetail(url) {
  try {
    const response = await axios.get(url, {
      timeout: 20000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SachYojanaBot/1.0)',
      },
    });

    const $ = cheerio.load(response.data);

    // Extract key fields
    const detail = {
      description: $('[class*="description"], [class*="about"], p').slice(0, 3).map((i, el) => $(el).text().trim()).get().join(' '),
      eligibility: [],
      benefits: [],
      documents: [],
      officialUrl: $('a[href*=".gov.in"], a[href*=".nic.in"]').first().attr('href') || url,
    };

    // Eligibility criteria
    $('[class*="eligib"] li, [id*="eligib"] li').each((i, el) => {
      const text = $(el).text().trim();
      if (text) detail.eligibility.push(text);
    });

    // Documents required
    $('[class*="document"] li, [id*="document"] li').each((i, el) => {
      const text = $(el).text().trim();
      if (text) detail.documents.push(text);
    });

    return detail;
  } catch (error) {
    console.error(`[Scraper] Error fetching detail for ${url}:`, error.message);
    return null;
  }
}

/**
 * Scrape india.gov.in scheme listings
 */
async function scrapeIndiaGov() {
  console.log('[Scraper] Starting india.gov.in scrape...');
  const scraped = [];

  try {
    const response = await axios.get('https://www.india.gov.in/my-government/schemes', {
      timeout: 30000,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SachYojanaBot/1.0)' },
    });

    const $ = cheerio.load(response.data);

    $('a').each((i, el) => {
      const href = $(el).attr('href') || '';
      const text = $(el).text().trim();
      if (href.includes('.gov.in') && text.length > 10) {
        scraped.push({ name: text, url: href });
      }
    });

    console.log(`[Scraper] Found ${scraped.length} scheme links from india.gov.in`);
  } catch (error) {
    console.error('[Scraper] india.gov.in error:', error.message);
  }

  return scraped;
}

/**
 * Fetch content from a URL for verification purposes
 */
async function fetchUrlContent(url) {
  try {
    const response = await axios.get(url, {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SachYojanaBot/1.0)',
      },
      maxRedirects: 5,
    });

    const $ = cheerio.load(response.data);
    
    // Remove scripts, styles, nav, footer
    $('script, style, nav, footer, header, .nav, .footer, .header').remove();
    
    // Extract main content
    const title = $('title').text().trim();
    const h1 = $('h1').first().text().trim();
    const mainContent = $('main, article, .content, .main-content, body')
      .first()
      .text()
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 5000); // Limit to 5000 chars

    return {
      url,
      title,
      h1,
      content: mainContent,
      isOfficialGovSite: url.includes('.gov.in') || url.includes('.nic.in'),
    };
  } catch (error) {
    console.error('[Scraper] URL fetch error:', error.message);
    return {
      url,
      title: null,
      content: null,
      error: error.message,
      isOfficialGovSite: false,
    };
  }
}

/**
 * Fetch data.gov.in dataset (if API key available)
 */
async function fetchDataGovIn(resourceId, filters = {}) {
  const apiKey = process.env.DATA_GOV_IN_API_KEY;
  if (!apiKey || apiKey === 'your_data_gov_in_api_key_here') {
    console.log('[DataGovIn] API key not configured, skipping');
    return [];
  }

  try {
    const params = new URLSearchParams({
      'api-key': apiKey,
      format: 'json',
      limit: 100,
      ...filters,
    });

    const response = await axios.get(
      `https://api.data.gov.in/resource/${resourceId}?${params}`,
      { timeout: 20000 }
    );

    return response.data?.records || [];
  } catch (error) {
    console.error('[DataGovIn] Error:', error.message);
    return [];
  }
}

/**
 * Full sync — scrape all sources and upsert into DB
 */
async function syncAllSources() {
  console.log('[Sync] Starting full scheme sync from all sources...');
  let totalSynced = 0;

  try {
    const schemesFromMyScheme = await scrapeMyScheme();

    for (const scheme of schemesFromMyScheme.slice(0, 50)) {
      // Avoid duplicate imports
      const existing = await prisma.scheme.findFirst({
        where: { name: { contains: scheme.name.slice(0, 30), mode: 'insensitive' } },
      });

      if (!existing && scheme.name) {
        const slug = scheme.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
          .slice(0, 100);

        await prisma.scheme.upsert({
          where: { slug },
          create: {
            name: scheme.name,
            slug,
            ministry: scheme.ministry || 'Government of India',
            sector: 'SOCIAL_WELFARE',
            type: 'CENTRAL',
            officialUrl: scheme.link || '',
            isActive: true,
            lastVerifiedAt: new Date(),
          },
          update: {
            lastVerifiedAt: new Date(),
          },
        });
        totalSynced++;
      }
    }

    console.log(`[Sync] Synced ${totalSynced} new schemes from external sources.`);
    return { success: true, synced: totalSynced };
  } catch (error) {
    console.error('[Sync] Sync error:', error.message);
    return { success: false, error: error.message };
  }
}

module.exports = {
  scrapeMyScheme,
  scrapeSchemeDetail,
  scrapeIndiaGov,
  fetchUrlContent,
  fetchDataGovIn,
  syncAllSources,
};

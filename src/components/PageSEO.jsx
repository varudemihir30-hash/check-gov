import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.sachyojana.com';

/**
 * Centralized SEO tags (title, description, canonical, robots, Open Graph).
 * Uses Helmet so each route sets its own metadata.
 */
export default function PageSEO({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  keywords,
}) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />

      {keywords ? <meta name="keywords" content={keywords} /> : null}
    </Helmet>
  );
}


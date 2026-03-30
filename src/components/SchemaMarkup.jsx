import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sachyojna.com';

export default function SchemaMarkup({ schema }) {
  const safeSchema = schema
    ? schema
    : {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: SITE_URL,
        name: 'SachYojana',
      };

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(safeSchema) }}
      />
    </Helmet>
  );
}


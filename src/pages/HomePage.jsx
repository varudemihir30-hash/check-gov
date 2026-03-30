import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero';
import FraudAwareness from '../components/FraudAwareness';
import UploadVerify from '../components/UploadVerify';
import VerificationResult from '../components/VerificationResult';
import HowItWorks from '../components/HowItWorks';

import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash, location.pathname]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SachYojana',
    url: 'https://sachyojna.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sachyojna.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <PageSEO
        title="SachYojana - Indian Government Schemes Portal"
        description="Learn about Indian government schemes and verify scheme information safely. Avoid frauds with practical guidance."
        canonicalPath="/"
        ogType="website"
      />
      <SchemaMarkup schema={schema} />

      <Hero />
      <FraudAwareness />
      <UploadVerify />
      <VerificationResult />
      <HowItWorks />
    </>
  );
}


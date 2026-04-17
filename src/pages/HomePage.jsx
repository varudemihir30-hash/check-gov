import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Hero from '../components/Hero';
import FraudAwareness from '../components/FraudAwareness';
import UploadVerify from '../components/UploadVerify';
import VerificationResult from '../components/VerificationResult';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Directory from '../components/Directory';

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
    url: 'https://www.sachyojana.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.sachyojana.com/?q={search_term_string}',
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

      {/* Government affiliation disclaimer — AdSense trust signal */}
      <div style={{ background: '#fff8e1', borderBottom: '1px solid #ffe082', padding: '0.6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', fontSize: '0.85rem', color: '#5d4037' }}>
          <strong>Disclaimer:</strong> SachYojana is an independent informational website and is <strong>not affiliated with the Government of India</strong> or any government department.
        </div>
      </div>

      <Hero />
      <Stats />
      <FraudAwareness />
      <UploadVerify />
      <VerificationResult />
      <HowItWorks />

      {/* About This Site section */}
      <section style={{ background: '#f8f6f0', padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--oxford-blue)', marginBottom: '1rem' }}>
            About SachYojana
          </h2>
          <p style={{ lineHeight: 1.8, maxWidth: 760, marginBottom: '1rem', color: '#333' }}>
            SachYojana is a free, citizen-facing informational portal that helps people across India discover, understand, and
            verify government schemes (yojanas). We break down complex eligibility criteria, application processes, and
            required documents into plain language — so every citizen can access the information they deserve.
          </p>
          <p style={{ lineHeight: 1.8, maxWidth: 760, marginBottom: '1.5rem', color: '#333' }}>
            Our platform also equips citizens with practical fraud-awareness tools to identify fake schemes and scam
            communications. We are not affiliated with any government department; our mission is purely educational and
            protective.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn btn-gold" style={{ textDecoration: 'none', padding: '0.7rem 1.4rem' }}>
              Learn More About Us
            </Link>
            <Link to="/schemes" className="btn btn-ghost" style={{ textDecoration: 'none', padding: '0.7rem 1.4rem' }}>
              Browse All Schemes →
            </Link>
          </div>
        </div>
      </section>

      {/* Schemes directory */}
      <Directory />
    </>
  );
}


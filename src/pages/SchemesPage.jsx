import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const LAST_UPDATED = 'April 17, 2026';

const schemes = [
  {
    slug: 'pm-kisan-samman-nidhi',
    title: 'PM Kisan Samman Nidhi',
    category: 'Agriculture',
    state: 'All India',
    summary:
      'Direct income support of ₹6,000 per year in three equal instalments to small and marginal farmers across India.',
  },
  {
    slug: 'ayushman-bharat',
    title: 'Ayushman Bharat – PM Jan Arogya Yojana',
    category: 'Health',
    state: 'All India',
    summary:
      'Health insurance cover of up to ₹5 lakh per family per year for secondary and tertiary hospitalization across empanelled hospitals.',
  },
  {
    slug: 'pm-awas-yojana',
    title: 'Pradhan Mantri Awas Yojana',
    category: 'Housing',
    state: 'All India',
    summary:
      'Financial assistance for constructing or upgrading houses for eligible rural and urban beneficiaries under the "Housing for All" mission.',
  },
  {
    slug: 'pm-ujjwala-yojana',
    title: 'Pradhan Mantri Ujjwala Yojana',
    category: 'Energy',
    state: 'All India',
    summary:
      'Free LPG connections to women from Below Poverty Line (BPL) and deprived households, reducing dependence on solid fuels for cooking.',
  },
];

export default function SchemesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Indian Government Schemes Directory — SachYojana',
    url: 'https://www.sachyojana.com/schemes',
    description:
      'Browse detailed, plain-language guides to popular Indian government schemes covering agriculture, health, housing, education, and more.',
    dateModified: '2026-04-17',
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="Indian Government Schemes Directory — SachYojana"
        description="Browse plain-language guides to popular Indian government schemes: PM Kisan, Ayushman Bharat, PM Awas Yojana, PM Ujjwala Yojana, and more."
        canonicalPath="/schemes"
        ogType="website"
        keywords="Indian government schemes, yojana list, PM Kisan, Ayushman Bharat, PM Awas Yojana, government welfare schemes India"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Schemes' }]} />

      <h1 style={{ fontSize: '2.3rem', marginBottom: '0.5rem' }}>
        Indian Government Schemes Directory
      </h1>
      <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.6 }}>
        Last Updated: {LAST_UPDATED}
      </p>
      <p style={{ marginBottom: '2rem', fontSize: '1.02rem', lineHeight: 1.8 }}>
        India's central and state governments run hundreds of welfare programmes covering agriculture, health,
        housing, education, women's empowerment, and more. Use the guides below to understand scheme eligibility,
        benefits, and application procedures in plain language. Always confirm final details through official
        government portals.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {schemes.map((s) => (
          <div
            key={s.slug}
            className="premium-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '1.4rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#C9982A',
                  background: 'rgba(201,152,42,0.1)',
                  padding: '2px 8px',
                  borderRadius: 3,
                }}
              >
                {s.category}
              </span>
              <span style={{ fontSize: '0.78rem', opacity: 0.55 }}>{s.state}</span>
            </div>
            <h2 style={{ fontSize: '1.1rem', margin: 0, lineHeight: 1.35 }}>{s.title}</h2>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.85, flexGrow: 1 }}>
              {s.summary}
            </p>
            <Link
              to={`/schemes/${s.slug}`}
              style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                color: 'var(--oxford-blue)',
                fontWeight: 700,
                textDecoration: 'underline',
                fontSize: '0.9rem',
              }}
            >
              Read full guide →
            </Link>
          </div>
        ))}
      </div>

      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>How to use this directory</h2>
        <p style={{ marginBottom: '0.8rem', lineHeight: 1.8 }}>
          Each scheme guide on this site explains the programme in detail — covering eligibility criteria, benefits
          amount, required documents, and the step-by-step application process. Guides are written in plain English
          and updated when major changes are announced.
        </p>
        <p style={{ margin: 0, lineHeight: 1.8 }}>
          <strong>Important:</strong> SachYojana is an independent informational portal and is not affiliated with the
          Government of India. For official applications and final eligibility decisions, always use the official
          government portal or your nearest Common Service Centre (CSC).
        </p>
      </div>

      <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>How to check if a scheme is real or fake</h2>
      <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
        Fraudsters frequently create fake "government scheme" messages over SMS, WhatsApp, and social media. Here
        are the key indicators of a legitimate scheme:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2 }}>
        <li>Official scheme websites end with <strong>.gov.in</strong> or <strong>.nic.in</strong></li>
        <li>The government never asks for <strong>OTPs, PINs, or upfront fees</strong> to receive benefits</li>
        <li>Verify SMS sender IDs — official messages come from recognized government short codes</li>
        <li>Cross-check scheme names on the official <strong>myScheme portal (myscheme.gov.in)</strong></li>
        <li>Report suspicious links or messages to the National Cyber Crime portal (<strong>cybercrime.gov.in</strong>) or call <strong>1930</strong></li>
      </ul>
    </div>
  );
}

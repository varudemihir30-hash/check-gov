import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED = '2026-03-30';
const MODIFIED  = '2026-04-17';

export default function AyushmanBharatPage() {
  const url = 'https://www.sachyojana.com/schemes/ayushman-bharat';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ayushman Bharat PM-JAY 2025: Eligibility, Hospital List & How to Get Health Card',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { '@type': 'Organization', name: 'SachYojana' },
    publisher: { '@type': 'Organization', name: 'SachYojana', url: 'https://www.sachyojana.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="Ayushman Bharat PM-JAY 2025: Eligibility, Hospital List & Health Card — SachYojana"
        description="Complete guide to Ayushman Bharat PM-JAY — ₹5 lakh free health insurance per family. Who qualifies, how to get your health card, find hospitals, and avoid fraud."
        canonicalPath="/schemes/ayushman-bharat"
        ogType="article"
        keywords="Ayushman Bharat, PM-JAY, Ayushman card, health card, free treatment hospital, PMJAY eligibility 2025"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Schemes', href: '/schemes' },
          { label: 'Ayushman Bharat PM-JAY' },
        ]}
      />

      <div style={{ marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#C9982A', background: 'rgba(201,152,42,0.1)', padding: '2px 8px', borderRadius: 3 }}>Health</span>
        {' '}<span style={{ fontSize: '0.78rem', opacity: 0.55, marginLeft: '0.5rem' }}>All India</span>
      </div>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.4rem', lineHeight: 1.2 }}>
        Ayushman Bharat – PM Jan Arogya Yojana (PM-JAY) 2025
      </h1>
      <p style={{ fontSize: '0.88rem', opacity: 0.6, marginBottom: '1.5rem' }}>
        Last Updated: April 17, 2026 &nbsp;|&nbsp; Published: March 30, 2026
      </p>

      <p style={{ fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
        <strong>Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)</strong> is the world's largest government-funded
        health insurance scheme, providing health coverage of up to <strong>₹5 lakh per family per year</strong> for
        secondary and tertiary hospitalization. The scheme targets the bottom 40% of the Indian population — approximately
        55 crore beneficiaries across 12 crore families — identified through the Socio-Economic Caste Census (SECC) 2011
        data. Treatment is cashless and paperless at all empanelled public and private hospitals.
      </p>

      <h2>Key highlights at a glance</h2>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <tbody>
            {[
              ['Scheme Name', 'Ayushman Bharat – PM Jan Arogya Yojana (AB PM-JAY)'],
              ['Launched By', 'National Health Authority (NHA), Ministry of Health & Family Welfare'],
              ['Launch Date', 'September 23, 2018'],
              ['Coverage', '₹5 lakh per family per year'],
              ['Beneficiaries', '~55 crore people (12 crore families)'],
              ['Hospital Network', '29,000+ empanelled hospitals (public + private)'],
              ['Official Portal', 'pmjay.gov.in / beneficiary.nha.gov.in'],
              ['Helpline', '14555 / 1800-111-565 (toll-free)'],
            ].map(([k, v]) => (
              <tr key={k} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <td style={{ padding: '0.6rem 0.8rem', fontWeight: 700, background: '#f8f6f0', width: '35%' }}>{k}</td>
                <td style={{ padding: '0.6rem 0.8rem' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What does Ayushman Bharat cover?</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        PM-JAY covers over <strong>1,929 treatment packages</strong> across specialties including cardiology, oncology,
        neurosurgery, orthopaedics, and more. Key coverage details include:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>All pre- and post-hospitalization expenses up to 3 days and 15 days respectively</li>
        <li>Diagnostic services, medicines, consumables, ICU charges, and surgeon fees</li>
        <li>Treatment at both government and private empanelled hospitals</li>
        <li>Cashless and paperless treatment — no upfront payment required at empanelled hospitals</li>
        <li>Covers all pre-existing conditions from day one</li>
        <li>The entire family is covered under one card — no individual cap per member</li>
      </ul>

      <h2>Who is eligible for Ayushman Bharat?</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Eligibility is based on SECC 2011 data for rural and urban populations. There is no income-based
        registration — if your family appears in the SECC list, you are automatically eligible.
      </p>
      <h3>Rural eligibility criteria (any one of the following):</h3>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1rem' }}>
        <li>Households with no adult member between 16–59 years</li>
        <li>Female-headed household with no adult male member between 16–59 years</li>
        <li>Households with a disabled member and no able-bodied adult</li>
        <li>SC/ST households</li>
        <li>Landless households earning a major part of income from manual casual labour</li>
        <li>Households living in kutcha (mud) walls and roof</li>
      </ul>
      <h3>Urban eligibility (occupational categories):</h3>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Ragpicker, beggar, domestic worker, street vendor, cobbler/hawker</li>
        <li>Construction worker, plumber, mason, painter, welder, security guard</li>
        <li>Sweeper, sanitation worker, gardener</li>
        <li>Home-based worker, artisan, handicraft worker</li>
        <li>Transport worker (driver, conductor, helper, cart puller, rickshaw puller)</li>
        <li>Shop worker, assistant, peon, small establishment worker</li>
        <li>Washer man, chowkidar</li>
      </ul>

      <h2>How to check if your family is eligible</h2>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Visit <strong>pmjay.gov.in</strong> and click "Am I Eligible?"</li>
        <li>Enter your mobile number and the OTP received.</li>
        <li>Search by name, HHD number, ration card number, or mobile number linked to your Aadhaar.</li>
        <li>Select your state and district to filter results.</li>
        <li>If your name appears, your family is eligible. You can proceed to get your Ayushman card.</li>
      </ol>

      <h2>How to get your Ayushman Bharat Health Card (ABHA Card)</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        The Ayushman Bharat Health Account (ABHA) card is the beneficiary card used to access cashless treatment.
        Here is how to get yours:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li><strong>At a hospital:</strong> Visit any empanelled hospital and speak to the Ayushman Mitra (designated facilitation officer). Carry your Aadhaar card.</li>
        <li><strong>At a CSC:</strong> Visit your nearest Common Service Centre (CSC) with your Aadhaar. The operator will verify your eligibility and generate your card.</li>
        <li><strong>Online:</strong> Visit beneficiary.nha.gov.in, log in with your mobile number, verify via Aadhaar OTP, and download your e-card.</li>
      </ul>

      <h2>How to find an empanelled hospital near you</h2>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Visit <strong>pmjay.gov.in</strong> → "Find Hospital"</li>
        <li>Enter your state, district, and medical specialty needed.</li>
        <li>A list of empanelled hospitals in your area will appear.</li>
        <li>You can also call the helpline <strong>14555</strong> for hospital information.</li>
      </ol>

      <h2>How to protect yourself from Ayushman Bharat fraud</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Several scams target PM-JAY beneficiaries. Common fraud tactics include:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Fake SMS messages claiming your Ayushman card is "expiring" and asking you to pay a renewal fee — <strong>cards do not expire and there is no fee</strong></li>
        <li>Fake agents charging money to register for the scheme — <strong>registration is completely free</strong></li>
        <li>Phishing websites mimicking pmjay.gov.in — always verify the URL before entering personal details</li>
        <li>Fraudulent hospitals billing patients under the scheme when they are not empanelled — always verify empanelment at pmjay.gov.in</li>
      </ul>

      <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 8, padding: '1.2rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <strong>⚠️ Disclaimer:</strong> SachYojana is an independent informational website and is not affiliated with the
        National Health Authority or the Government of India. This content is for educational purposes only. For official
        eligibility verification and card generation, use <strong>pmjay.gov.in</strong> or call <strong>14555</strong>.
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
        <Link to="/schemes/pm-kisan-samman-nidhi" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>← PM Kisan Samman Nidhi</Link>
        <span style={{ margin: '0 1rem', opacity: 0.3 }}>|</span>
        <Link to="/schemes/pm-awas-yojana" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>Next: PM Awas Yojana →</Link>
      </div>
    </div>
  );
}

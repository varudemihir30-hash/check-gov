import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED = '2026-03-30';
const MODIFIED  = '2026-04-17';

export default function PmUjjwalaPage() {
  const url = 'https://www.sachyojana.com/schemes/pm-ujjwala-yojana';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'PM Ujjwala Yojana 2.0: Free LPG Connection Eligibility, Documents & How to Apply',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { '@type': 'Organization', name: 'SachYojana' },
    publisher: { '@type': 'Organization', name: 'SachYojana', url: 'https://www.sachyojana.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="PM Ujjwala Yojana 2.0: Free LPG Connection Eligibility & How to Apply — SachYojana"
        description="Complete guide to PM Ujjwala Yojana 2.0 — free LPG cooking gas connections for BPL families. Eligibility, required documents, application process, and refill subsidy explained."
        canonicalPath="/schemes/pm-ujjwala-yojana"
        ogType="article"
        keywords="PM Ujjwala Yojana 2.0, free LPG connection, PMUY eligibility, Ujjwala Yojana application, BPL LPG connection"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Schemes', href: '/schemes' },
          { label: 'PM Ujjwala Yojana' },
        ]}
      />

      <div style={{ marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#C9982A', background: 'rgba(201,152,42,0.1)', padding: '2px 8px', borderRadius: 3 }}>Energy</span>
        {' '}<span style={{ fontSize: '0.78rem', opacity: 0.55, marginLeft: '0.5rem' }}>All India</span>
      </div>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.4rem', lineHeight: 1.2 }}>
        Pradhan Mantri Ujjwala Yojana 2.0: Free LPG Connection for BPL Families
      </h1>
      <p style={{ fontSize: '0.88rem', opacity: 0.6, marginBottom: '1.5rem' }}>
        Last Updated: April 17, 2026 &nbsp;|&nbsp; Published: March 30, 2026
      </p>

      <p style={{ fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
        <strong>Pradhan Mantri Ujjwala Yojana (PMUY)</strong> was launched in May 2016 to provide free LPG (liquefied
        petroleum gas) cooking connections to women from Below Poverty Line (BPL) households. The scheme aims to replace
        unclean cooking fuels — primarily firewood, cow dung cake, and crop residue — with clean cooking gas, improving
        the health of rural women and reducing indoor air pollution. <strong>Ujjwala 2.0</strong>, launched in August
        2021, expanded the scope to include migrants and additional beneficiary categories.
      </p>

      <h2>Key highlights at a glance</h2>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <tbody>
            {[
              ['Scheme Name', 'Pradhan Mantri Ujjwala Yojana (PMUY 2.0)'],
              ['Ministry', 'Ministry of Petroleum & Natural Gas'],
              ['Target Beneficiaries', 'Women from BPL/deprived households'],
              ['Benefit', 'Free LPG connection + 1 free refill + free stove (hotplate)'],
              ['Connection Providers', 'Indian Oil (IOCL), HP Gas (HPCL), Bharat Gas (BPCL)'],
              ['Official Portal', 'pmuy.gov.in'],
              ['Helpline', '1906 (LPG helpline)'],
            ].map(([k, v]) => (
              <tr key={k} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <td style={{ padding: '0.6rem 0.8rem', fontWeight: 700, background: '#f8f6f0', width: '35%' }}>{k}</td>
                <td style={{ padding: '0.6rem 0.8rem' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What do you get under PM Ujjwala Yojana?</h2>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>One free LPG connection (cylinder + regulator)</li>
        <li>One free LPG refill (14.2 kg cylinder)</li>
        <li>One free LPG stove (single or double burner hotplate) — available in most cases</li>
        <li>LPG subsidy on subsequent refills (subject to government policy)</li>
        <li>The connection is issued in the <strong>woman's name</strong></li>
        <li>Under Ujjwala 2.0: migrants can apply with a <strong>self-declaration of address</strong> — proof of residence in the destination address is not mandatory</li>
      </ul>

      <h2>Who is eligible for PM Ujjwala Yojana 2.0?</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        The scheme is open to women (18 years and above) from the following household categories who do not
        already have an LPG connection:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>SC/ST households</li>
        <li>Pradhan Mantri Awas Yojana (PMAY) beneficiaries — rural and urban</li>
        <li>Antyodaya Anna Yojana (AAY) cardholders</li>
        <li>Forest dwellers</li>
        <li>Households listed in SECC 2011 data (Most Deprived 7 categories)</li>
        <li>Tea and ex-tea garden tribes</li>
        <li>People residing in islands and river islands</li>
        <li><strong>Ujjwala 2.0 addition:</strong> Migrant households — no permanent address proof required; self-declaration accepted</li>
      </ul>

      <h3>Key conditions</h3>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>The applicant must be an adult woman (18 years or above)</li>
        <li>No existing LPG connection in the household (any family member's name)</li>
        <li>The applicant must have an Aadhaar card and a bank account</li>
      </ul>

      <h2>Documents required</h2>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li><strong>Aadhaar card</strong> of the woman applicant (mandatory)</li>
        <li><strong>Bank account details</strong> — passbook with account number and IFSC code (Aadhaar-linked preferred)</li>
        <li><strong>BPL certificate / ration card</strong> — for SECC/AAY category households</li>
        <li><strong>Caste certificate</strong> (for SC/ST applicants)</li>
        <li><strong>Self-declaration of family composition and no existing LPG connection</strong></li>
        <li><strong>For migrants (Ujjwala 2.0):</strong> Self-declaration of current address in lieu of formal address proof</li>
      </ul>

      <h2>How to apply for PM Ujjwala Yojana 2.0</h2>
      <h3>Option 1: Apply online</h3>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.2rem' }}>
        <li>Visit <strong>pmuy.gov.in</strong> and click "Apply for New Ujjwala 2.0 Connection".</li>
        <li>Choose your preferred LPG distributor (Indian Oil, HP Gas, or Bharat Gas).</li>
        <li>Click "Apply" on the respective oil company's Ujjwala portal.</li>
        <li>Fill in personal details, upload documents (Aadhaar, bank details, category proof).</li>
        <li>Submit and note your application number. You will be contacted by a nearby distributor.</li>
      </ol>

      <h3>Option 2: Apply at your nearest LPG distributor</h3>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Visit the nearest Indian Oil, HP Gas, or Bharat Gas distributor in your area.</li>
        <li>Ask for the Ujjwala Yojana application form (Form KYC1 for Ujjwala).</li>
        <li>Fill in the form and submit it with photocopies of required documents.</li>
        <li>The distributor will verify your eligibility and process the connection.</li>
      </ol>

      <h2>LPG refill subsidy — what to expect</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        After the initial free refill, subsequent refills must be purchased at market rates. However, Ujjwala
        beneficiaries are entitled to the <strong>Pradhan Mantri Ujjwala Yojana LPG subsidy</strong> on each refill
        (subject to government policy). The subsidy amount is credited directly to your Aadhaar-linked bank account
        through DBT (Direct Benefit Transfer) after you purchase a refill. This is called the PAHAL (DBTL) scheme.
        Ensure your bank account is Aadhaar-linked and active to receive the subsidy.
      </p>

      <h2>How to check your Ujjwala application status</h2>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Visit your respective oil company portal (IndianOil, HPCL, or BPCL).</li>
        <li>Navigate to the "Ujjwala / New Connection" section and enter your application number or Aadhaar.</li>
        <li>You can also contact your LPG distributor directly or call the helpline <strong>1906</strong>.</li>
      </ol>

      <h2>Avoid PM Ujjwala Yojana fraud</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Fraudsters target rural women with fake "Ujjwala registration agents" who charge money for "processing" or
        "registration". Protect yourself:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>The Ujjwala connection is <strong>completely free</strong> — no registration fee, no agent fee</li>
        <li>Apply only through official portals (pmuy.gov.in) or directly at an authorized LPG distributor</li>
        <li>Do not share your Aadhaar OTP or bank details with unknown agents</li>
        <li>If you receive a suspicious call claiming to be from a gas company, hang up and call the official helpline <strong>1906</strong></li>
      </ul>

      <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 8, padding: '1.2rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <strong>⚠️ Disclaimer:</strong> SachYojana is an independent informational website and is not affiliated with the
        Ministry of Petroleum & Natural Gas or any oil marketing company. For official applications, use
        <strong> pmuy.gov.in</strong> or visit your nearest authorized LPG distributor directly.
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
        <Link to="/schemes/pm-awas-yojana" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>← PM Awas Yojana</Link>
        <span style={{ margin: '0 1rem', opacity: 0.3 }}>|</span>
        <Link to="/schemes" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>Back to All Schemes →</Link>
      </div>
    </div>
  );
}

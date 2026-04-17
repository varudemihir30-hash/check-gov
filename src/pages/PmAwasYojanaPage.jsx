import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED = '2026-03-30';
const MODIFIED  = '2026-04-17';

export default function PmAwasYojanaPage() {
  const url = 'https://www.sachyojana.com/schemes/pm-awas-yojana';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'PM Awas Yojana 2025: Eligibility, Subsidy & How to Apply for Housing Scheme',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { '@type': 'Organization', name: 'SachYojana' },
    publisher: { '@type': 'Organization', name: 'SachYojana', url: 'https://www.sachyojana.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="PM Awas Yojana 2025: Eligibility, Subsidy & How to Apply — SachYojana"
        description="Complete guide to Pradhan Mantri Awas Yojana (PMAY) for rural and urban beneficiaries. Learn about eligibility, subsidy amount, documents needed, and how to apply."
        canonicalPath="/schemes/pm-awas-yojana"
        ogType="article"
        keywords="PM Awas Yojana, PMAY eligibility 2025, housing scheme India, PMAY Urban, PMAY Gramin, housing subsidy"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Schemes', href: '/schemes' },
          { label: 'PM Awas Yojana' },
        ]}
      />

      <div style={{ marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#C9982A', background: 'rgba(201,152,42,0.1)', padding: '2px 8px', borderRadius: 3 }}>Housing</span>
        {' '}<span style={{ fontSize: '0.78rem', opacity: 0.55, marginLeft: '0.5rem' }}>All India</span>
      </div>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.4rem', lineHeight: 1.2 }}>
        Pradhan Mantri Awas Yojana (PMAY) 2025: Housing Scheme for All
      </h1>
      <p style={{ fontSize: '0.88rem', opacity: 0.6, marginBottom: '1.5rem' }}>
        Last Updated: April 17, 2026 &nbsp;|&nbsp; Published: March 30, 2026
      </p>

      <p style={{ fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
        <strong>Pradhan Mantri Awas Yojana (PMAY)</strong> is the Government of India's flagship "Housing for All"
        programme. It provides financial assistance to eligible families to construct new houses or upgrade existing
        kutcha (mud) homes. The scheme operates in two verticals: <strong>PMAY – Gramin (PMAY-G)</strong> for rural
        households and <strong>PMAY – Urban (PMAY-U)</strong> for urban households. Both verticals aim to provide
        pucca (permanent) housing with basic amenities to every eligible Indian family.
      </p>

      <h2>Key highlights at a glance</h2>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <tbody>
            {[
              ['Scheme Name', 'Pradhan Mantri Awas Yojana (PMAY-G & PMAY-U)'],
              ['Ministry', 'MoRD (Rural) / MoHUA (Urban)'],
              ['PMAY-G Assistance', '₹1.20 lakh (plain areas) / ₹1.30 lakh (hilly/NE areas)'],
              ['PMAY-U Interest Subsidy', 'Up to ₹2.67 lakh (EWS/LIG category, CLSS)'],
              ['PMAY-G Official Portal', 'pmayg.nic.in'],
              ['PMAY-U Official Portal', 'pmaymis.gov.in'],
              ['Helpline', '1800-11-6163 (PMAY-G) / 1800-11-3377 (PMAY-U)'],
            ].map(([k, v]) => (
              <tr key={k} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <td style={{ padding: '0.6rem 0.8rem', fontWeight: 700, background: '#f8f6f0', width: '40%' }}>{k}</td>
                <td style={{ padding: '0.6rem 0.8rem' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>PMAY – Gramin (Rural)</h2>
      <h3>Who is eligible?</h3>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Beneficiaries for PMAY-G are selected from the Awaas+ survey data (previously SECC 2011). Priority is given to:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.2rem' }}>
        <li>Households that are houseless (no dwelling unit) or live in zero, one, or two-room kutcha houses</li>
        <li>SC/ST households, freed bonded labourers, minorities in difficult areas</li>
        <li>Households with disabled persons or widows as primary members</li>
        <li>War widows and families of those killed in action</li>
        <li>Families affected by natural calamities or displaced from their homes</li>
      </ul>
      <h3>Benefits under PMAY-G</h3>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.2rem' }}>
        <li>Financial assistance of <strong>₹1.20 lakh</strong> for plain areas and <strong>₹1.30 lakh</strong> for hilly, difficult, and Integrated Action Plan (IAP) areas</li>
        <li>Additional assistance of ₹12,000 under the Swachh Bharat Mission for toilet construction</li>
        <li>90 days of unskilled labour wages under MGNREGS for construction work</li>
        <li>The house must be at least 25 sq. m. in area with basic amenities: electricity, clean cooking fuel, and water supply</li>
        <li>The house is registered in the name of the woman (wife) or jointly with the husband</li>
      </ul>

      <h2>PMAY – Urban (Cities & Towns)</h2>
      <h3>Components of PMAY-U</h3>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.2rem' }}>
        <li><strong>In-situ Slum Redevelopment (ISSR):</strong> Using land as a resource to rehouse slum dwellers with private sector participation</li>
        <li><strong>Affordable Housing in Partnership (AHP):</strong> Government contributes ₹1.5 lakh per EWS house constructed in partnership with states and private developers</li>
        <li><strong>Beneficiary-Led Construction (BLC):</strong> Subsidy of up to ₹1.5 lakh for EWS families to construct or enhance their own house on their own land</li>
        <li><strong>Credit Linked Subsidy Scheme (CLSS):</strong> Interest subsidy on home loans for EWS, LIG, and MIG categories</li>
      </ul>

      <h3>CLSS interest subsidy details</h3>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#002147', color: '#fff' }}>
              <th style={{ padding: '0.6rem 0.8rem', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '0.6rem 0.8rem', textAlign: 'left' }}>Annual Income</th>
              <th style={{ padding: '0.6rem 0.8rem', textAlign: 'left' }}>Subsidy Rate</th>
              <th style={{ padding: '0.6rem 0.8rem', textAlign: 'left' }}>Max Subsidy</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['EWS', 'Up to ₹3 lakh', '6.5%', '₹2.67 lakh'],
              ['LIG', '₹3–6 lakh', '6.5%', '₹2.67 lakh'],
              ['MIG-I', '₹6–12 lakh', '4%', '₹2.35 lakh'],
              ['MIG-II', '₹12–18 lakh', '3%', '₹2.30 lakh'],
            ].map(([a, b, c, d]) => (
              <tr key={a} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <td style={{ padding: '0.6rem 0.8rem', fontWeight: 600 }}>{a}</td>
                <td style={{ padding: '0.6rem 0.8rem' }}>{b}</td>
                <td style={{ padding: '0.6rem 0.8rem' }}>{c}</td>
                <td style={{ padding: '0.6rem 0.8rem' }}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Documents required</h2>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Aadhaar card (all adult family members)</li>
        <li>Income certificate (for PMAY-U CLSS — issued by state authority)</li>
        <li>Land ownership or lease documents (for rural application)</li>
        <li>Bank account details (Aadhaar-linked) for DBT payments</li>
        <li>BPL certificate (if applicable)</li>
        <li>Caste certificate (if applying under SC/ST category)</li>
        <li>Photograph of current dwelling showing its condition</li>
      </ul>

      <h2>How to apply for PMAY-G (Rural)</h2>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Beneficiary selection is done by the Gram Sabha based on Awaas+ survey data — you cannot apply directly online for rural PMAY.</li>
        <li>If you believe you qualify but are not selected, contact your <strong>Gram Panchayat</strong> or Block Development Officer (BDO).</li>
        <li>You can check if your name is on the waiting list at <strong>pmayg.nic.in → Awaassoft → Beneficiary Search</strong>.</li>
      </ol>

      <h2>How to apply for PMAY-U (Urban)</h2>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Visit <strong>pmaymis.gov.in</strong> and click "Citizen Assessment".</li>
        <li>Select your applicable component (ISSR, AHP, BLC, or CLSS).</li>
        <li>Enter your Aadhaar number for verification.</li>
        <li>Fill in the application form with household, income, and property details.</li>
        <li>Submit and note your application ID for tracking.</li>
        <li>For CLSS (home loan interest subsidy), apply through a Primary Lending Institution (PLI) such as a bank or housing finance company.</li>
      </ol>

      <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 8, padding: '1.2rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <strong>⚠️ Disclaimer:</strong> SachYojana is an independent informational website. We are not affiliated with the
        Ministry of Housing or Government of India. For official applications and subsidy claims, use
        <strong> pmayg.nic.in</strong> (rural) or <strong>pmaymis.gov.in</strong> (urban) directly. Never pay a fee to
        any agent claiming to register you for PMAY.
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
        <Link to="/schemes/ayushman-bharat" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>← Ayushman Bharat</Link>
        <span style={{ margin: '0 1rem', opacity: 0.3 }}>|</span>
        <Link to="/schemes/pm-ujjwala-yojana" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>Next: PM Ujjwala Yojana →</Link>
      </div>
    </div>
  );
}

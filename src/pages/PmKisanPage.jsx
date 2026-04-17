import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED = '2026-03-30';
const MODIFIED  = '2026-04-17';

export default function PmKisanPage() {
  const url = 'https://www.sachyojana.com/schemes/pm-kisan-samman-nidhi';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'PM Kisan Samman Nidhi 2025: Eligibility, Benefits & How to Apply',
    description:
      'Complete guide to PM Kisan Samman Nidhi — ₹6,000 annual income support for small and marginal farmers. Learn who qualifies, documents needed, and how to check your status.',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { '@type': 'Organization', name: 'SachYojana' },
    publisher: { '@type': 'Organization', name: 'SachYojana', url: 'https://www.sachyojana.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="PM Kisan Samman Nidhi 2025: Eligibility, Benefits & How to Apply — SachYojana"
        description="Complete guide to PM Kisan Samman Nidhi — ₹6,000 annual income support for small and marginal farmers. Eligibility, documents, how to apply online, e-KYC, and status check."
        canonicalPath="/schemes/pm-kisan-samman-nidhi"
        ogType="article"
        keywords="PM Kisan Samman Nidhi, PM Kisan eligibility, PM Kisan apply online, PM Kisan status check, PM Kisan 2025"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Schemes', href: '/schemes' },
          { label: 'PM Kisan Samman Nidhi' },
        ]}
      />

      <div style={{ marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#C9982A', background: 'rgba(201,152,42,0.1)', padding: '2px 8px', borderRadius: 3 }}>Agriculture</span>
        {' '}<span style={{ fontSize: '0.78rem', opacity: 0.55, marginLeft: '0.5rem' }}>All India</span>
      </div>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.4rem', lineHeight: 1.2 }}>
        PM Kisan Samman Nidhi 2025: Eligibility, Benefits &amp; How to Apply
      </h1>
      <p style={{ fontSize: '0.88rem', opacity: 0.6, marginBottom: '1.5rem' }}>
        Last Updated: April 17, 2026 &nbsp;|&nbsp; Published: March 30, 2026
      </p>

      <p style={{ fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
        The <strong>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</strong> is a central government scheme that provides
        direct income support of <strong>₹6,000 per year</strong> to eligible small and marginal farmers across India.
        The amount is paid in three equal instalments of ₹2,000 directly into the beneficiary's bank account through
        Direct Benefit Transfer (DBT). Launched in February 2019, the scheme has benefited over 11 crore farmer families
        across the country.
      </p>

      <h2>Key highlights at a glance</h2>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <tbody>
            {[
              ['Scheme Name', 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)'],
              ['Launched By', 'Ministry of Agriculture & Farmers Welfare, Govt. of India'],
              ['Launch Date', 'February 24, 2019'],
              ['Annual Benefit', '₹6,000 (3 instalments of ₹2,000 each)'],
              ['Payment Mode', 'Direct Benefit Transfer (DBT) to bank account'],
              ['Official Portal', 'pmkisan.gov.in'],
              ['Helpline', '155261 / 011-24300606'],
            ].map(([k, v]) => (
              <tr key={k} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <td style={{ padding: '0.6rem 0.8rem', fontWeight: 700, background: '#f8f6f0', width: '35%' }}>{k}</td>
                <td style={{ padding: '0.6rem 0.8rem' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Who is eligible for PM Kisan?</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        The scheme is open to all <strong>landholding farmer families</strong> who own cultivable land, subject to
        certain exclusions. The eligibility criteria were updated after initial launch to cover all farmers irrespective
        of land size (originally limited to those holding up to 2 hectares). Current eligibility is as follows:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>The farmer (or farmer's family) must own cultivable land as per land records held by state or UT governments.</li>
        <li>The Aadhaar number must be linked to the registered bank account for DBT payments.</li>
        <li>e-KYC must be completed — this is mandatory. Failing to complete e-KYC can result in payment being held.</li>
        <li>Land records (Khasra-Khatauni or equivalent) must be updated and verified by state authorities.</li>
      </ul>

      <h3>Who is NOT eligible?</h3>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        The following categories are excluded from the PM Kisan scheme, even if they own agricultural land:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Former and current holders of constitutional posts (Presidents, MPs, MLAs, Ministers, etc.)</li>
        <li>Retired/serving officers and employees of Central and State government services (excluding Group D/Class IV)</li>
        <li>Professionals such as doctors, engineers, lawyers, chartered accountants, and architects</li>
        <li>Individuals who paid income tax in the last assessment year</li>
        <li>Retired pensioners drawing a monthly pension of ₹10,000 or more (excluding Multi Tasking Staff)</li>
      </ul>

      <h2>Documents required for PM Kisan registration</h2>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li><strong>Aadhaar card</strong> — mandatory for registration and e-KYC</li>
        <li><strong>Land ownership documents</strong> — Khasra-Khatauni, Jamabandi, or state equivalent</li>
        <li><strong>Bank passbook / account details</strong> — account number and IFSC code must be correct</li>
        <li><strong>Mobile number</strong> — linked to Aadhaar for OTP-based e-KYC</li>
      </ul>

      <h2>How to apply for PM Kisan online</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        New farmer registration can be done through the official PM Kisan portal or at a nearby Common Service Centre (CSC).
        Follow these steps:
      </p>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Visit <strong>pmkisan.gov.in</strong> (official portal — always verify the URL).</li>
        <li>Click on <strong>"Farmers Corner" → "New Farmer Registration"</strong>.</li>
        <li>Select Rural Farmer or Urban Farmer as applicable.</li>
        <li>Enter your <strong>Aadhaar number</strong>, select your state, and enter the captcha.</li>
        <li>Fill in the registration form with your personal details, land records (survey/Khasra number), and bank account information.</li>
        <li>Submit the form. You will receive an OTP on your Aadhaar-linked mobile for verification.</li>
        <li>After submission, complete the <strong>e-KYC process</strong> using OTP (online) or biometric (at CSC).</li>
        <li>Your application will be verified by the state government. If approved, you will start receiving instalments.</li>
      </ol>

      <h2>How to complete PM Kisan e-KYC</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        e-KYC is mandatory for all registered beneficiaries. Without e-KYC, instalment payments will be held. There are
        two methods:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li><strong>OTP-based e-KYC (online):</strong> Go to pmkisan.gov.in → Farmers Corner → e-KYC. Enter your Aadhaar number and OTP received on your registered mobile.</li>
        <li><strong>Biometric e-KYC (CSC):</strong> Visit your nearest CSC with your Aadhaar card for fingerprint-based verification — this is recommended if your mobile number is not linked to Aadhaar.</li>
      </ul>

      <h2>How to check your PM Kisan payment status</h2>
      <ol style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>Go to <strong>pmkisan.gov.in</strong>.</li>
        <li>Click <strong>"Farmers Corner" → "Beneficiary Status"</strong>.</li>
        <li>Enter your Aadhaar number, account number, or mobile number.</li>
        <li>The page shows all instalment details — dates credited and amounts.</li>
      </ol>

      <h2>Common reasons for payment not received</h2>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li><strong>e-KYC incomplete</strong> — the most common reason. Complete e-KYC immediately.</li>
        <li>Aadhaar not linked to bank account — visit your bank branch with your Aadhaar card.</li>
        <li>Name mismatch between Aadhaar, land records, and bank account.</li>
        <li>Incorrect IFSC code or bank account number submitted during registration.</li>
        <li>Land records not updated or verification pending with state government.</li>
      </ul>

      <h2>How to protect yourself from PM Kisan fraud</h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Fraudsters frequently impersonate PM Kisan officials and ask farmers to pay "processing fees" or share OTPs to
        "release" their instalment. Remember:
      </p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginBottom: '1.5rem' }}>
        <li>The government <strong>never charges a fee</strong> to register for or receive PM Kisan benefits.</li>
        <li>Never share your Aadhaar OTP with anyone — government officials will never ask for it over a call.</li>
        <li>Only use <strong>pmkisan.gov.in</strong> — do not use links sent via SMS, WhatsApp, or email.</li>
        <li>If you suspect fraud, report to the National Cyber Crime helpline: <strong>1930</strong> or <strong>cybercrime.gov.in</strong>.</li>
      </ul>

      <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 8, padding: '1.2rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <strong>⚠️ Disclaimer:</strong> SachYojana is an independent informational website. We are not affiliated with the
        Government of India, Ministry of Agriculture, or the PM-KISAN programme. All information is for educational
        purposes. For official registration and status checks, use <strong>pmkisan.gov.in</strong> directly.
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
        <Link to="/schemes" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>← Back to Schemes Directory</Link>
        <span style={{ margin: '0 1rem', opacity: 0.3 }}>|</span>
        <Link to="/schemes/ayushman-bharat" style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>Next: Ayushman Bharat →</Link>
      </div>
    </div>
  );
}

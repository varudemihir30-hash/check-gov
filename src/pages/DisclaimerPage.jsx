import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED_DATE = '2026-03-30';

export default function DisclaimerPage() {
  const canonicalUrl = 'https://www.sachyojana.com/disclaimer';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Disclaimer',
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    author: { '@type': 'Person', name: 'SachYojana Team' },
    publisher: { '@type': 'Organization', name: 'SachYojana' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="Disclaimer - SachYojana"
        description="Read the SachYojana disclaimer: our portal is informational, not affiliated with the government, and does not guarantee benefits."
        canonicalPath="/disclaimer"
        ogType="article"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]} />

      <h1 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Disclaimer</h1>

      <p style={{ marginBottom: '1.2rem', fontSize: '1.02rem' }}>
        The information provided on SachYojana is intended for educational and informational purposes. By using this
        website, you agree that we are not an official government resource and we do not represent any government
        department.
      </p>

      <h2>1. Informational portal only</h2>
      <p style={{ marginBottom: '1rem' }}>
        SachYojana helps citizens understand government schemes at a high level and provides guidance to reduce the risk
        of fraud. We may describe general eligibility concepts and process steps, but this content is not an official
        interpretation of any scheme.
      </p>

      <h3>Not affiliated with the government</h3>
      <p style={{ marginBottom: '1rem' }}>
        Our website is not affiliated with, sponsored by, or connected to any government body. Any references to scheme
        names or programs are for informational identification only. Official eligibility, documentation requirements,
        and application procedures are determined by the relevant government authorities.
      </p>

      <h2>2. No guarantees of benefits or outcomes</h2>
      <p style={{ marginBottom: '1rem' }}>
        We do not guarantee that a user will receive benefits, approvals, or payments. Scheme outcomes depend on official
        assessments, policies, and eligibility conditions. If you apply for a program, your eligibility must be evaluated
        through official channels.
      </p>
      <p style={{ marginBottom: '1.2rem' }}>
        We also recommend that you treat any claim of instant or guaranteed approval with caution, especially if it
        requests upfront fees or sensitive personal information.
      </p>

      <h2>3. Verification and user responsibility</h2>
      <p style={{ marginBottom: '1rem' }}>
        Any tools or guidance presented on our site are designed to encourage cautious verification. Users should verify
        scheme information by visiting official websites and reading official notifications.
      </p>
      <h3>How to verify safely</h3>
      <p style={{ marginBottom: '1rem' }}>
        When you see scheme-related offers:
      </p>
      <ul style={{ margin: 0, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
        <li style={{ marginBottom: '0.6rem' }}>Check whether the URL belongs to the relevant official domain.</li>
        <li style={{ marginBottom: '0.6rem' }}>Confirm the scheme name, department, and official documents.</li>
        <li style={{ marginBottom: '0.6rem' }}>Be wary of requests for “processing fees” or “verification charges”.</li>
        <li style={{ marginBottom: '0.6rem' }}>Do not share OTPs, PINs, or sensitive credentials with unknown parties.</li>
      </ul>

      <h2>4. Accuracy of information</h2>
      <p style={{ marginBottom: '1rem' }}>
        While we aim to publish helpful and accurate information, scheme details can change and may vary by region and
        beneficiary category. We do not guarantee completeness, accuracy, or timeliness of all content on the site.
      </p>

      <h2>5. External links</h2>
      <p style={{ marginBottom: '1rem' }}>
        Our site may include links to third-party resources. We do not control those resources and we are not responsible
        for their content or availability. Accessing external links is at your own discretion.
      </p>

      <h2>6. Limitation of liability</h2>
      <p style={{ marginBottom: 0 }}>
        To the maximum extent permitted by applicable law, SachYojana and its team are not responsible for any loss or damage
        that may arise from reliance on the information provided on this website. Users are encouraged to rely on official
        resources for final decisions.
      </p>
    </div>
  );
}


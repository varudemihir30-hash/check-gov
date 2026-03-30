import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED_DATE = '2026-03-30';

export default function AboutUsPage() {
  const url = 'https://sachyojna.com/about';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'About SachYojana',
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    author: { '@type': 'Person', name: 'SachYojana Team' },
    publisher: { '@type': 'Organization', name: 'SachYojana' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="About Us - SachYojana"
        description="Learn what SachYojana is: an informational portal for Indian government schemes, built to help citizens understand programs and avoid fraud."
        canonicalPath="/about"
        ogType="article"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

      <h1 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>About SachYojana</h1>

      <p style={{ marginBottom: '1.2rem', fontSize: '1.02rem' }}>
        SachYojana is an informational portal designed to help citizens access clear, practical information about Indian
        government schemes (yojanas). We focus on simplifying how people discover scheme details, understand eligibility
        basics, and recognize common red flags used in fraud attempts.
      </p>

      <h2>What we are (and what we are not)</h2>
      <p style={{ marginBottom: '1rem' }}>
        We provide educational content and guidance to help you verify and interpret scheme information. Our goal is to
        support better awareness so users can make informed decisions and avoid scams.
      </p>
      <h3>Informational purpose</h3>
      <p style={{ marginBottom: '1rem' }}>
        This website is built as a citizen-facing information resource. It does not claim to be the official website of
        any department, and it does not replace official notices. If you need authoritative details, always confirm
        them through the relevant government source.
      </p>

      <h2>How we structure scheme information</h2>
      <p style={{ marginBottom: '1rem' }}>
        Government schemes can be complex. Eligibility conditions, documents, time frames, and processes may vary across
        regions and beneficiary categories. To make this easier to digest, we organize content in a reader-friendly
        way:
      </p>
      <h3>Plain-language explanations</h3>
      <p style={{ marginBottom: '1rem' }}>
        Where possible, we describe key ideas in straightforward language. We highlight the most important points so you can
        quickly understand what the scheme is about and what you may need to do next.
      </p>
      <h3>Fraud awareness guidance</h3>
      <p style={{ marginBottom: '1rem' }}>
        Many scams imitate official communication and ask people to pay “fees”, “processing charges”, or “verification
        charges”. We include guidance on what to be careful about, how to check official URLs/domains, and what to
        do if you suspect fraud.
      </p>

      <h2>Why we include verification-focused features</h2>
      <p style={{ marginBottom: '1rem' }}>
        Scammers often provide fake websites, cloned forms, or misleading SMS messages. Our site offers a verification-oriented
        experience to help users think critically about scheme-related information before sharing personal details.
      </p>
      <h3>Encouraging safer behavior</h3>
      <p style={{ marginBottom: '1rem' }}>
        We encourage users to verify details using official channels and to avoid sharing sensitive personal information
        with unknown third parties. If any offer claims unrealistic guarantees or pressures you to act immediately, treat it
        as a potential red flag.
      </p>

      <h2>Privacy and responsible usage</h2>
      <p style={{ marginBottom: '1rem' }}>
        Privacy is important for any site that collects user input. If you submit information through any form, we aim to handle
        data responsibly and reduce unnecessary retention. For details about data collection, cookies, and third-party advertising,
        please read our Privacy Policy.
      </p>
      <h3>Content uniqueness and accuracy</h3>
      <p style={{ marginBottom: '1rem' }}>
        We strive to publish unique, original explanations and to keep content helpful for citizens. Still, scheme information can
        change over time. For official updates, please rely on the relevant government department’s website and official announcements.
      </p>

      <h2>How you can use this portal effectively</h2>
      <p style={{ marginBottom: '1rem' }}>
        To get the best experience:
      </p>
      <ul style={{ margin: 0, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
        <li style={{ marginBottom: '0.6rem' }}>Start by reading the scheme details and eligibility highlights.</li>
        <li style={{ marginBottom: '0.6rem' }}>
          Cross-check official links and official documents before acting.
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          Look for warning signs such as “guaranteed benefits”, “instant approval”, or requests for upfront payments.
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          If you see suspicious activity, report it using the guidance available on the site and contact official authorities when appropriate.
        </li>
      </ul>

      <p style={{ marginBottom: 0 }}>
        If you have questions or suggestions, you can reach us through the Contact page. Thank you for using SachYojana as a
        resource to learn, verify, and protect your interests.
      </p>
    </div>
  );
}


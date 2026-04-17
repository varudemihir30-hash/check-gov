import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED_DATE = '2026-03-30';

export default function PrivacyPolicyPage() {
  const canonicalUrl = 'https://www.sachyojana.com/privacy-policy';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Privacy Policy',
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    author: { '@type': 'Person', name: 'SachYojana Team' },
    publisher: { '@type': 'Organization', name: 'SachYojana' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="Privacy Policy - SachYojana"
        description="Read SachYojana’s Privacy Policy: cookies, data collection, third-party advertising, and Google AdSense information."
        canonicalPath="/privacy-policy"
        ogType="article"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

      <h1 style={{ fontSize: '2.3rem', marginBottom: '0.5rem' }}>Privacy Policy</h1>
      <p style={{ marginBottom: '1.2rem', fontSize: '0.9rem', opacity: 0.65 }}>Last Updated: April 17, 2026</p>

      <p style={{ marginBottom: '1.2rem', fontSize: '1.02rem' }}>
        This Privacy Policy explains how SachYojana (“we”, “our”, “us”) handles information when you visit our website and use
        our services. It also describes how cookies may be used to support website functionality and to enable advertising, including
        advertisements served by third parties.
      </p>

      <h2>1. Information we may collect</h2>
      <p style={{ marginBottom: '1rem' }}>
        The types of information we may collect include:
      </p>
      <ul style={{ margin: 0, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
        <li style={{ marginBottom: '0.6rem' }}>
          Information you provide directly, such as when you submit the contact form (name, email, and message).
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          Usage data related to how you interact with the website (for example, pages viewed and approximate device/browser information).
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          Data processed by embedded services and analytics providers, subject to their policies.
        </li>
      </ul>

      <h2>2. Cookies and similar technologies</h2>
      <p style={{ marginBottom: '1rem' }}>
        Cookies are small files stored on your device. We may use cookies for:
      </p>
      <ul style={{ margin: 0, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
        <li style={{ marginBottom: '0.6rem' }}>
          Remembering your preferences (for example, language selection and cookie consent choices).
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          Improving performance and understanding how users navigate our site.
        </li>
        <li style={{ marginBottom: '0.6rem' }}>
          Enabling advertisement-related functionality where applicable.
        </li>
      </ul>

      <h3>Cookie consent</h3>
      <p style={{ marginBottom: '1rem' }}>
        When you first visit our site, we display a cookie consent banner. You can accept or reject non-essential cookies.
        Essential cookies required for basic functionality may still be used.
      </p>

      <h2>3. Third-party advertising</h2>
      <p style={{ marginBottom: '1rem' }}>
        Some advertisements may be served by third-party ad networks. These vendors may use cookies or other technologies to
        deliver relevant ads, measure advertising performance, and improve targeting.
      </p>

      <h3>Google AdSense</h3>
      <p style={{ marginBottom: '1rem' }}>
        If Google AdSense is enabled on our site, Google may use cookies to serve ads based on your visits to this and other sites.
        You can review how Google uses cookies and how to manage ad settings using Google’s Ads settings and related privacy pages.
      </p>

      <h2>4. How we use information</h2>
      <p style={{ marginBottom: '1rem' }}>
        We use information to operate and maintain the website, to respond to user messages, to improve content clarity, and to
        provide a safer experience. We also use information to prevent abuse and to protect users from fraudulent activity.
      </p>

      <h2>5. Data retention and security</h2>
      <p style={{ marginBottom: '1rem' }}>
        We aim to keep information only for as long as it is needed to fulfill the purposes described in this policy. We implement
        reasonable security measures to protect data, but no method of transmission over the internet or electronic storage is 100% secure.
      </p>

      <h2>6. Your choices</h2>
      <p style={{ marginBottom: '1rem' }}>
        Depending on your location and applicable laws, you may have certain rights regarding access, correction, deletion, or
        objection to processing. You can also adjust your cookie preferences using the consent banner.
      </p>

      <h2>7. Changes to this policy</h2>
      <p style={{ marginBottom: 0 }}>
        We may update this Privacy Policy from time to time. When we make changes, we will update the “Last Updated” date
        shown at the top of this page and revise the content accordingly. Please check this page periodically to stay informed.
      </p>

      <h2 style={{ marginTop: '1.8rem' }}>8. Managing cookies and ad settings</h2>
      <p style={{ marginBottom: '1rem' }}>
        You can manage many cookies through your browser settings. Some advertising features also provide additional controls
        through ad preferences tools offered by the advertising partners involved. If Google AdSense is enabled, you may use
        Google’s ad settings to review and manage personalization choices.
      </p>

      <h2>9. Children’s privacy</h2>
      <p style={{ marginBottom: '1rem' }}>
        Our website is intended for general audiences. We do not knowingly collect personal information from children without
        appropriate legal authorization. If you believe a child has shared personal information with us, please contact us so we
        can take appropriate steps.
      </p>

      <h2>10. Contact</h2>
      <p style={{ marginBottom: 0 }}>
        If you have questions about this Privacy Policy or your information, please use the Contact page on this site.
      </p>
    </div>
  );
}


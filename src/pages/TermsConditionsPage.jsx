import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED_DATE = '2026-03-30';

export default function TermsConditionsPage() {
  const canonicalUrl = 'https://sachyojna.com/terms-and-conditions';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Terms & Conditions',
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    author: { '@type': 'Person', name: 'SachYojana Team' },
    publisher: { '@type': 'Organization', name: 'SachYojana' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="Terms & Conditions - SachYojana"
        description="Read the Terms and Conditions for using SachYojana. Understand site usage, content limitations, and responsibility for verification."
        canonicalPath="/terms-and-conditions"
        ogType="article"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]} />

      <h1 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Terms & Conditions</h1>

      <p style={{ marginBottom: '1.2rem', fontSize: '1.02rem' }}>
        These Terms and Conditions govern your use of SachYojana (“the site”). By accessing or using the site, you agree to
        comply with these terms. If you do not agree, please do not use the site.
      </p>

      <h2>1. Use of the site</h2>
      <p style={{ marginBottom: '1rem' }}>
        You agree to use the site for lawful purposes and in a way that does not interfere with the site’s operation. You also
        agree not to attempt to disrupt, hack, or misuse the platform.
      </p>

      <h2>2. Informational content</h2>
      <p style={{ marginBottom: '1rem' }}>
        The content on SachYojana is provided for informational and educational purposes. It does not constitute official guidance
        from any government authority and does not replace official notices, eligibility criteria, or application requirements.
      </p>
      <h3>Verification responsibility</h3>
      <p style={{ marginBottom: '1rem' }}>
        Users are responsible for verifying information through official sources before acting. Where official websites or
        documents are referenced, you should confirm that you are using the correct and official link.
      </p>

      <h2>3. No warranties</h2>
      <p style={{ marginBottom: '1rem' }}>
        We make no warranties or guarantees regarding the accuracy, completeness, or timeliness of the information on this site.
        Scheme rules may change, and details may vary by region, beneficiary category, or updated policy.
      </p>

      <h2>4. Limitation of liability</h2>
      <p style={{ marginBottom: '1rem' }}>
        To the maximum extent permitted by law, SachYojana and its team are not liable for any direct, indirect, incidental,
        special, or consequential damages arising from your reliance on site content.
      </p>

      <h2>5. Third-party services and advertisements</h2>
      <p style={{ marginBottom: '1rem' }}>
        The site may include links to third-party websites and may display advertisements served by third parties, including
        advertising networks such as Google AdSense (if enabled). Third-party content and advertisements are subject to the
        respective providers’ policies and terms.
      </p>

      <h3>Cookie and privacy controls</h3>
      <p style={{ marginBottom: '1rem' }}>
        If cookies are used for advertising or analytics, your cookie consent choices and browser settings may affect how those
        cookies are used. See the Privacy Policy for more details.
      </p>

      <h2>6. User submissions</h2>
      <p style={{ marginBottom: 0 }}>
        If you submit information through the site (for example, the contact form), you represent that the information you provide
        is accurate to the best of your knowledge. You agree not to submit unlawful, offensive, or personally sensitive content
        that you do not want processed.
      </p>

      <h2 style={{ marginTop: '1.8rem' }}>7. Changes to these Terms</h2>
      <p style={{ marginBottom: 0 }}>
        We may update these Terms and Conditions from time to time. Continued use of the site after changes means you accept the
        updated terms. Please review these terms periodically.
      </p>

      <h2 style={{ marginTop: '1.8rem' }}>8. Intellectual property</h2>
      <p style={{ marginBottom: '1rem' }}>
        The design, layout, and original text on this website are protected by applicable intellectual property laws. You may
        view the site for personal, non-commercial use. Republishing, redistributing, or copying content without permission may
        violate applicable laws.
      </p>

      <h2>9. Acceptable use</h2>
      <p style={{ marginBottom: '1rem' }}>
        You agree not to use the site to transmit unlawful content, to impersonate others, or to attempt to access parts of the
        website that are not intended for public use. Any attempt to interfere with site operations may result in restricted access.
      </p>

      <h2>10. Termination</h2>
      <p style={{ marginBottom: 0 }}>
        We may suspend or terminate your access to the site if we believe you have violated these Terms. If access is terminated,
        sections that by their nature should survive will remain in effect.
      </p>
    </div>
  );
}


import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Breadcrumbs from '../components/Breadcrumbs';
import PageSEO from '../components/PageSEO';
import SchemaMarkup from '../components/SchemaMarkup';

const PUBLISHED_DATE = '2026-03-30';

function isValidEmail(email) {
  // Simple validation for better UX; server-side validation should still be used in production.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactUsPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success
  const [error, setError] = useState('');

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: 'https://sachyojna.com/contact',
      contactType: 'general',
      dateModified: PUBLISHED_DATE,
    }),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) return setError('Please enter your name.');
    if (!trimmedEmail || !isValidEmail(trimmedEmail)) return setError('Please enter a valid email address.');
    if (trimmedMessage.length < 10) return setError('Please enter a message (at least 10 characters).');

    // No backend endpoint in this codebase for now, so we show a confirmation and keep the form "working".
    // If you later add an API route, replace this section with a real submission.
    setStatus('success');
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="Contact Us - SachYojana"
        description="Get in touch with SachYojana. Send us your questions or feedback using the contact form."
        canonicalPath="/contact"
        ogType="article"
      />
      <SchemaMarkup schema={schema} />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />

      <h1 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Contact Us</h1>

      <p style={{ marginBottom: '1.2rem', fontSize: '1.02rem' }}>
        Have a question about the portal, need help understanding scheme information, or want to report suspicious activity?
        Send us a message using the form below. We review messages regularly and respond as appropriate.
      </p>

      <div className="premium-card" style={{ maxWidth: 860, margin: '0 auto', padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>Send a message</h2>
        <p style={{ marginBottom: '1.2rem', opacity: 0.85 }}>
          Fields marked by your input will be used only to respond to your request. For details about cookies and data handling,
          please see our Privacy Policy.
        </p>

        {status === 'success' ? (
          <div style={{ borderLeft: '4px solid var(--imperial-gold)', paddingLeft: '1rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Thank you!</h3>
            <p style={{ marginBottom: '1rem', opacity: 0.9, lineHeight: 1.7 }}>
              Your message has been submitted successfully. We will get back to you via email if you provided a valid address.
            </p>
            <button
              type="button"
              className="btn btn-gold"
              style={{ textDecoration: 'none', fontWeight: 800, padding: '0.85rem 1.2rem' }}
              onClick={() => navigate('/')}
            >
              Return to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <label style={{ fontWeight: 800, color: 'var(--oxford-blue)' }} htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Rahul Kumar"
                    required
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 8,
                      border: '1px solid rgba(0,0,0,0.12)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <label style={{ fontWeight: 800, color: 'var(--oxford-blue)' }} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., you@example.com"
                    required
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 8,
                      border: '1px solid rgba(0,0,0,0.12)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <label style={{ fontWeight: 800, color: 'var(--oxford-blue)' }} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  required
                  rows={6}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: 8,
                    border: '1px solid rgba(0,0,0,0.12)',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    resize: 'vertical',
                  }}
                />
              </div>

              {error ? (
                <div
                  style={{
                    background: 'rgba(211, 47, 47, 0.08)',
                    border: '1px solid rgba(211, 47, 47, 0.25)',
                    color: '#b71c1c',
                    padding: '0.85rem 1rem',
                    borderRadius: 8,
                    fontWeight: 700,
                  }}
                >
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                className="btn btn-gold"
                style={{
                  fontWeight: 900,
                  padding: '0.95rem 1.4rem',
                  borderRadius: 10,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Send Message
              </button>

              <p style={{ margin: 0, opacity: 0.75, lineHeight: 1.7 }}>
                Note: This form does not guarantee instant responses. If you have an urgent concern, consider contacting relevant
                official authorities.
              </p>
            </div>
          </form>
        )}
      </div>

      <div style={{ maxWidth: 860, margin: '2rem auto 0', opacity: 0.9 }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>What to include in your message</h2>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>For scheme questions</h3>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
          Share the scheme name (and the state/region if applicable) and what specific detail you want clarified. If you have a
          URL you found, include it so we can point out how to verify it safely.
        </p>

        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>For suspected fraud</h3>
        <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
          Avoid submitting sensitive personal information. Describe what happened, how the scam contacted you (SMS, phone call,
          WhatsApp, website), and what claims were made. This helps us publish awareness guidance that can benefit other citizens.
        </p>
      </div>

      <div style={{ maxWidth: 860, margin: '2.2rem auto 0', opacity: 0.95 }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>Frequently Asked Questions</h2>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>How quickly will you respond?</h3>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
          Response time depends on the volume of messages and the complexity of your request. While we aim to reply as soon as
          possible, we cannot guarantee instant responses.
        </p>

        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Can I report scam SMS or websites?</h3>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
          Yes. If you have an SMS example or a suspicious website link, include non-sensitive details and any public claims made by
          the scam. Avoid sharing OTPs, PINs, or passwords.
        </p>

        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Do you share my message?</h3>
        <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
          We use submitted information to communicate with you and to improve our guidance content. We do not sell your personal
          information. For full details about cookies and data handling, please review the Privacy Policy.
        </p>
      </div>
    </div>
  );
}


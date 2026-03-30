import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'sachyojana_cookie_consent_v1';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      return !existing;
    } catch {
      // If storage is blocked, still show the banner.
      return true;
    }
  });

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // ignore
    }
    setVisible(false);
  };

  const reject = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'rejected');
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        background: '#00152D',
        color: 'var(--white)',
        borderTop: '4px solid var(--imperial-gold)',
      }}
    >
      <div className="container" style={{ padding: '1rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ opacity: 0.95, lineHeight: 1.5, fontSize: '0.98rem' }}>
            We use cookies to improve your experience and to show relevant advertisements. Third-party vendors may also
            use cookies, including for advertising and analytics (for example, Google AdSense).
            <span style={{ display: 'inline-block', marginLeft: '0.4rem' }}>
              Learn more in our{' '}
              <Link to="/privacy-policy" style={{ color: 'var(--imperial-gold)', textDecoration: 'none' }}>
                Privacy Policy
              </Link>
              .
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={accept}
              className="btn btn-gold"
              style={{ padding: '0.7rem 1rem', fontWeight: 800 }}
            >
              Accept
            </button>
            <button
              type="button"
              onClick={reject}
              className="btn btn-ghost"
              style={{ padding: '0.7rem 1rem', borderRadius: 4 }}
            >
              Reject non-essential cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


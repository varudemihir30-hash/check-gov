import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{ background: '#00152D', color: 'var(--white)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div className="flex flex-col items-center justify-center mb-12 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem' }}>
          <div className="flex flex-col items-center justify-center gap-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="flex items-center gap-3">
              <ShieldCheck size={32} className="text-gold" />
              <div>
                <span className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, lineHeight: 1 }}>
                  {t('navTitle')}
                </span>
              </div>
            </div>
            <p className="hindi-text text-gold m-0" style={{ fontSize: '1.2rem' }}>सत्य की रक्षा करें</p>
            <p className="m-0" style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6 }}>
              {t('footerDesc')}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md-flex-row justify-between items-start gap-10"
          style={{ opacity: 0.95, marginBottom: '3rem' }}
        >
          <div style={{ maxWidth: '520px' }}>
            <div style={{ fontWeight: 800, marginBottom: '0.9rem' }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link to="/" style={{ color: 'var(--white)', textDecoration: 'none' }}>Home</Link>
              <Link to="/schemes" style={{ color: 'var(--white)', textDecoration: 'none' }}>Schemes Directory</Link>
              <Link to="/about" style={{ color: 'var(--white)', textDecoration: 'none' }}>About Us</Link>
              <Link to="/contact" style={{ color: 'var(--white)', textDecoration: 'none' }}>Contact Us</Link>
              <Link to="/privacy-policy" style={{ color: 'var(--white)', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link to="/disclaimer" style={{ color: 'var(--white)', textDecoration: 'none' }}>Disclaimer</Link>
              <Link to="/terms-and-conditions" style={{ color: 'var(--white)', textDecoration: 'none' }}>
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div style={{ maxWidth: '520px' }}>
            <div style={{ fontWeight: 800, marginBottom: '0.9rem' }}>Information Notice</div>
            <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.7, fontSize: '0.9rem' }}>
              SachYojana is an informational portal for citizens. It is not an official government website and is not
              affiliated with any government department. For official decisions and updates, please refer to the relevant
              government sources.
            </p>
          </div>
        </div>

        <div className="flex flex-col md-flex-row justify-between items-center gap-4" style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          <div className="text-center md-text-left">© 2026 SachYojana. All rights reserved.</div>
          <div className="flex items-center justify-center gap-2">
            <span>Built with love in India 🇮🇳</span>
            <span>|</span>
            <span className="text-gold hindi-text" style={{ fontSize: '1rem', opacity: 1 }}>Jai Hind</span>
          </div>
        </div>

      </div>

      <style>{`
        .mb-12 { margin-bottom: 3rem; }
        .text-center { text-align: center; }
        .m-0 { margin: 0; }
        @media (min-width: 768px) {
          .md-flex-row { flex-direction: row; display: flex; }
          .md-text-left { text-align: left; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#00152D', color: 'var(--white)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div className="grid grid-cols-1 md-grid-cols-4 gap-8 mb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem' }}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck size={32} className="text-gold" />
              <div>
                <span className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, lineHeight: 1 }}>
                  SachYojana
                </span>
              </div>
            </div>
            <p className="hindi-text text-gold" style={{ fontSize: '1.2rem' }}>सत्य की रक्षा करें</p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6 }}>
              India's premium portal for verifying government schemes, preventing fraud, and ensuring public benefit transparency.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-gold font-bold uppercase tracking-wider mb-2" style={{ fontSize: '0.9rem' }}>Quick Links</h4>
            <a href="#" className="footer-link">Verify Scheme</a>
            <a href="#" className="footer-link">Scheme Directory</a>
            <a href="#" className="footer-link">Fraud Guidelines</a>
            <a href="#" className="footer-link">Report Issue</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-gold font-bold uppercase tracking-wider mb-2" style={{ fontSize: '0.9rem' }}>Government</h4>
            <a href="#" className="footer-link">India.gov.in</a>
            <a href="#" className="footer-link">MyGov</a>
            <a href="#" className="footer-link">Digital India</a>
            <a href="#" className="footer-link">DBT Portal</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-gold font-bold uppercase tracking-wider mb-2" style={{ fontSize: '0.9rem' }}>Legal</h4>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Use</a>
            <a href="#" className="footer-link">Disclaimer</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
        </div>

        <div className="flex flex-col md-flex-row justify-between items-center gap-4" style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          <div className="text-center md-text-left">© 2026 SachYojana Verification Portal. All rights reserved.</div>
          <div className="flex items-center justify-center gap-2">
            <span>Built with ❤️ in India 🇮🇳</span>
            <span>|</span>
            <span className="text-gold hindi-text" style={{ fontSize: '1rem', opacity: 1 }}>Jai Hind 🙏</span>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link {
          color: white;
          opacity: 0.7;
          text-decoration: none;
          transition: opacity 0.2s, color 0.2s;
        }
        .footer-link:hover {
          opacity: 1;
          color: var(--imperial-gold);
        }
        .mb-12 { margin-bottom: 3rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .text-center { text-align: center; }
        @media (min-width: 768px) {
          .md-grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .md-flex-row { flex-direction: row; }
          .md-text-left { text-align: left; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

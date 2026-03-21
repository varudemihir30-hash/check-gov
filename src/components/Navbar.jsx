import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { languages } from '../translations';

const Navbar = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-oxford relative w-full" style={{ padding: '1.5rem 0', zIndex: 50 }}>
      {/* Tricolor stripe */}
      <div className="tricolor-stripe"></div>
      
      <div className="container flex justify-between items-center relative gap-4">
        <div className="flex items-center gap-4">
          <ShieldCheck size={36} className="text-gold" />
          <div className="flex flex-col">
            <span className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>
              {t('navTitle')}
            </span>
            <span className="text-gold hindi-text" style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              {t('navSub')}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md-flex items-center gap-8">
          <a href="#" className="text-white hover-text-gold" style={{ textDecoration: 'none' }}>{t('home')}</a>
          <a href="#verify" className="text-white hover-text-gold" style={{ textDecoration: 'none' }}>{t('verifyScheme')}</a>
          
          <div className="flex items-center gap-2 text-white relative" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <Globe size={18} className="text-gold" />
            <select 
              value={language || 'en'} 
              onChange={(e) => changeLanguage(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', padding: '0.2rem' }}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code} style={{ color: '#002147' }}>{lang.nativeName} ({lang.code.toUpperCase()})</option>
              ))}
            </select>
          </div>

          <a href="#verify" className="btn btn-gold text-oxford">{t('verifyNow')}</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle text-white" 
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute w-full bg-oxford flex flex-col items-center gap-4 p-6 shadow-2xl z-50 transition-all border-b" style={{ top: '100%', left: 0, borderBottom: '4px solid var(--imperial-gold)' }}>
          <a href="#" className="text-white font-bold" onClick={() => setMobileMenuOpen(false)}>{t('home')}</a>
          <a href="#verify" className="text-white font-bold" onClick={() => setMobileMenuOpen(false)}>{t('verifyScheme')}</a>
          <select 
            value={language || 'en'} 
            onChange={(e) => { changeLanguage(e.target.value); setMobileMenuOpen(false); }}
            className="w-full p-3 mt-2 font-bold"
            style={{ color: '#002147', borderRadius: '4px' }}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.nativeName} ({lang.code.toUpperCase()})</option>
            ))}
          </select>
        </div>
      )}

      <style>{`
        .md-flex { display: none !important; }
        .hover-text-gold { transition: color 0.2s; }
        .hover-text-gold:hover { color: var(--imperial-gold) !important; }
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

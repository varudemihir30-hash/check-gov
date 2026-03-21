import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, BadgeInfo, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-oxford relative section-padding" style={{ paddingBottom: '10rem', borderBottom: 'none' }}>
      {/* Ashoka Chakra watermark */}
      <div 
        style={{ 
          position: 'absolute', top: '50%', right: '-10%', transform: 'translateY(-50%)', 
          opacity: 0.03, pointerEvents: 'none'
        }}
      >
        <svg width="800" height="800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#C9982A" strokeWidth="2"/>
          {Array.from({length: 24}).map((_, i) => (
            <line key={i} x1="50" y1="50" x2="50" y2="5" stroke="#C9982A" strokeWidth="1" transform={`rotate(${i * 15} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="10" fill="#C9982A" />
        </svg>
      </div>

      <div className="container relative py-12">
        <div className="w-full md-w-half">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6" style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '0.5rem 1rem', borderRadius: '50px', border: '1px solid rgba(201, 152, 42, 0.3)' }}>
              <span style={{ fontSize: '1.2rem' }}>🇮🇳</span>
              <span className="text-white" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>GOVERNMENT OF INDIA VERIFICATION PORTAL</span>
            </div>

            <h1 className="text-white hindi-text" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              {t('heroHeadline')}
            </h1>
            <h2 className="text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', opacity: 0.9, marginBottom: '1.5rem' }}>
              {t('heroSub')}
            </h2>

            <p className="text-white" style={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '500px', marginBottom: '2.5rem' }}>
              {t('heroDesc')}
            </p>

            <div className="flex gap-4 action-buttons w-full block">
              <a href="#verify" className="btn btn-gold text-oxford flex items-center justify-center gap-2 text-lg" style={{ textDecoration: 'none' }}>
                <ShieldCheck size={20} />
                {t('verifyNow')}
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 trust-badges" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gold"><Shield size={16}/> <span className="text-white" style={{ fontSize: '0.85rem' }}>{t('trust1')}</span></div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gold"><CheckCircle size={16}/> <span className="text-white" style={{ fontSize: '0.85rem' }}>{t('trust2')}</span></div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gold"><BadgeInfo size={16}/> <span className="text-white" style={{ fontSize: '0.85rem' }}>{t('trust3')}</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .md-w-half { width: 100%; box-sizing: border-box; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-12 { margin-top: 3rem; }
        @media (min-width: 768px) {
          .md-w-half { width: 55%; }
        }
        @media (max-width: 640px) {
          .action-buttons { flex-direction: column; }
          .trust-badges { flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

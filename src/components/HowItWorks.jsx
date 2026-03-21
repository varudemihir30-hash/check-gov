import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { num: 1, title: t('step1Title'), desc: t('step1Desc') },
    { num: 2, title: t('step2Title'), desc: t('step2Desc') },
    { num: 3, title: t('step3Title'), desc: t('step3Desc') }
  ];

  return (
    <section className="bg-ivory section-padding text-center">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-gold hindi-text" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1.1 }}>{t('howTitle')}</h2>
          <h3 className="text-oxford" style={{ fontSize: '1.8rem', opacity: 0.9 }}>{t('howSub')}</h3>
        </div>

        <div className="flex flex-col md-flex-row justify-center items-start gap-12 relative">
          
          <div className="hidden md-block absolute" style={{ top: '35px', left: '15%', right: '15%', height: '2px', borderTop: '2px dashed var(--imperial-gold)', zIndex: 0, opacity: 0.5 }}></div>

          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 relative z-10 flex flex-col items-center"
            >
              <div className="bg-oxford flex items-center justify-center text-gold font-bold mb-6 mx-auto" style={{ width: '70px', height: '70px', borderRadius: '50%', fontSize: '1.5rem', border: '4px solid var(--warm-ivory)' }}>
                {step.num}
              </div>
              <h4 className="text-oxford font-bold mb-3" style={{ fontSize: '1.3rem' }}>{step.title}</h4>
              <p className="mx-auto" style={{ color: '#666', fontSize: '1rem', maxWidth: '250px' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .mb-12 { margin-bottom: 3rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .hidden { display: none; }
        @media (min-width: 768px) {
          .md-flex-row { flex-direction: row; display: flex; }
          .md-block { display: block; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;

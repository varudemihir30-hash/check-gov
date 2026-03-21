import React from 'react';
import { ShieldAlert, AlertCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const rules = [
  "Government will never ask for an OTP or PIN over phone.",
  "Official links end with .gov.in or .nic.in.",
  "Never pay money to receive a scheme's benefits.",
  "Verify SMS sender IDs (e.g., AD-GOVIND)."
];

const FraudAwareness = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white section-padding">
      <div className="container">
        <div className="grid md-grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-gold hindi-text" style={{ fontSize: '2.5rem', marginBottom: '0.2rem', lineHeight: 1.2 }}>{t('fraudTitle')}</h2>
            <h3 className="text-oxford mb-8" style={{ fontSize: '1.8rem', opacity: 0.9 }}>{t('fraudSub')}</h3>
            
            <div className="flex flex-col gap-4">
              {rules.map((rule, i) => (
                <div key={i} className="bg-ivory p-4 shadow-sm" style={{ borderLeft: '4px solid #D32F2F', borderRadius: '0 8px 8px 0' }}>
                  <div className="flex items-start gap-3">
                    <AlertCircle size={24} style={{ color: '#D32F2F', flexShrink: 0, marginTop: '2px' }} />
                    <p className="text-oxford" style={{ fontSize: '1.05rem', fontWeight: 500 }}>{rule}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card bg-oxford text-center p-8 flex flex-col items-center justify-center gap-6" style={{ borderTop: '4px solid #FF9933', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
            <div className="text-gold p-4 mt-2 mx-auto" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', width: 'fit-content' }}>
              <ShieldAlert size={48} />
            </div>
            <div>
              <h3 className="text-white hindi-text" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{t('reportTitle')}</h3>
              <p className="text-white" style={{ opacity: 0.8, fontSize: '1.1rem' }}>{t('reportSub')}</p>
            </div>
            
            <div className="flex items-center justify-center gap-3 my-2 w-full">
              <PhoneCall size={36} className="text-gold" />
              <span className="text-gold" style={{ fontSize: '3.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>1930</span>
            </div>

            <button className="btn btn-gold w-full text-center" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.1rem', padding: '1rem', backgroundColor: '#FF9933', color: 'white', border: 'none' }}>
              {t('reportBtn')}
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .mb-8 { margin-bottom: 2rem; }
        .p-4 { padding: 1rem; }
        .p-8 { padding: 2rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .mt-2 { margin-top: 0.5rem; }
        .my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
        @media (min-width: 768px) {
          .md-grid-cols-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
};

export default FraudAwareness;

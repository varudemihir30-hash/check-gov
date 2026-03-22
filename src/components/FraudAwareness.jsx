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
        <div className="grid md-grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          
          <div>
            <h2 className="text-oxford hindi-text mb-6" style={{ fontSize: '2rem', lineHeight: 1.2, fontWeight: 700 }}>
              {t('fraudTitle')}
            </h2>
            
            <div className="flex flex-col gap-3">
              {rules.map((rule, i) => (
                <div key={i} className="bg-ivory p-3 shadow-sm" style={{ borderLeft: '4px solid #D32F2F', borderRadius: '0 8px 8px 0' }}>
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} style={{ color: '#D32F2F', flexShrink: 0, marginTop: '2px' }} />
                    <p className="text-oxford m-0" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{rule}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card bg-oxford text-center p-6 flex flex-col items-center justify-center gap-5 w-full" style={{ maxWidth: '400px', margin: '0 auto', borderTop: '4px solid var(--imperial-gold)', boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <div className="text-gold p-3 mt-1 mx-auto" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', width: 'fit-content' }}>
              <ShieldAlert size={40} />
            </div>
            <div>
              <h3 className="text-white hindi-text m-0" style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{t('reportTitle')}</h3>
              <p className="text-white m-0" style={{ opacity: 0.8, fontSize: '0.95rem' }}>{t('reportSub')}</p>
            </div>
            
            <div className="flex items-center justify-center gap-3 my-1 w-full">
              <PhoneCall size={32} className="text-gold" />
              <span className="text-gold" style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>1930</span>
            </div>

            <button className="btn w-full text-center font-bold" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem', padding: '0.85rem 1rem', backgroundColor: 'var(--imperial-gold)', color: 'var(--oxford-blue)', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
              {t('reportBtn')}
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .mb-6 { margin-bottom: 1.5rem; }
        .p-3 { padding: 0.75rem; }
        .p-6 { padding: 1.5rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-5xl { max-width: 64rem; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .m-0 { margin: 0; }
        .mt-1 { margin-top: 0.25rem; }
        .my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }
        .w-full { width: 100%; box-sizing: border-box; }
        @media (min-width: 768px) {
          .md-grid-cols-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
};

export default FraudAwareness;

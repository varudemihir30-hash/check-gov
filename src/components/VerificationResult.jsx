import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Download, Share2, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

const VerificationResult = () => {
  const { t } = useLanguage();
  const [resultStatus, setResultStatus] = useState(null);

  useEffect(() => {
    const handleVerify = (e) => {
      setResultStatus(e.detail.type);
      
      if (e.detail.type === 'success') {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
          confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FF9933', '#FFFFFF', '#138808'] });
          confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FF9933', '#FFFFFF', '#138808'] });
          if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
      }
    };

    window.addEventListener('show-verify-result', handleVerify);
    return () => window.removeEventListener('show-verify-result', handleVerify);
  }, []);

  if (!resultStatus) return null;

  return (
    <section id="verification-result" className="bg-ivory py-12" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container mx-auto" style={{ maxWidth: '800px' }}>
        
        <AnimatePresence mode="wait">
          {resultStatus === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="premium-card text-center relative overflow-hidden"
              style={{ borderTop: '4px solid #138808' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.02, pointerEvents: 'none', background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'40\' stroke=\'%23138808\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")' }}></div>
              
              <div className="inline-block p-4 rounded-full mb-6 mx-auto" style={{ background: 'rgba(19, 136, 8, 0.1)', color: '#138808', width: 'fit-content' }}>
                <CheckCircle size={64} />
              </div>
              
              <h3 className="text-oxford hindi-text mb-2" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#138808' }}>{t('सत्यापित योजना')}</h3>
              <h4 className="text-oxford mb-6" style={{ fontSize: '1.5rem', opacity: 0.8 }}>{t('Verified Government Scheme')}</h4>
              
              <div className="bg-white p-6 rounded text-left mb-6 mx-auto" style={{ border: '1px solid rgba(0,0,0,0.05)', maxWidth: '600px' }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>{t('schemeName')}</span>
                    <p className="text-oxford font-bold" style={{ fontSize: '1.1rem' }}>PM-Kisan Samman Nidhi</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>Department</span>
                    <p className="text-oxford font-bold" style={{ fontSize: '1.1rem' }}>Dept of Agriculture</p>
                  </div>
                  <div className="col-span-2">
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>Official Website</span>
                    <a href="#" className="text-gold font-bold break-words" style={{ display: 'block', fontSize: '1.1rem' }}>https://pmkisan.gov.in</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm-flex-row gap-4 justify-center mt-8 px-4">
                <button className="btn text-oxford flex items-center justify-center gap-2 flex-1 w-full" style={{ background: 'rgba(0,0,0,0.05)' }}>
                  <Download size={18} /> Download Certificate
                </button>
                <button className="btn text-white flex items-center justify-center gap-2 flex-1 w-full" style={{ background: '#25D366' }}>
                  <Share2 size={18} /> Share Warning
                </button>
              </div>

              <div className="mt-8 text-sm" style={{ color: '#666', fontFamily: '"Courier New", Courier, monospace' }}>
                Verification ID: {Math.random().toString(36).substring(2, 12).toUpperCase()}
              </div>
            </motion.div>
          )}

          {resultStatus === 'fraud' && (
            <motion.div
              key="fraud"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="premium-card text-center relative overflow-hidden"
              style={{ borderTop: '4px solid #D32F2F', background: '#FFFDFD' }}
            >
              <div className="inline-block p-4 rounded-full mb-6 mx-auto" style={{ background: 'rgba(211, 47, 47, 0.1)', color: '#D32F2F', width: 'fit-content' }}>
                <XCircle size={64} />
              </div>
              
              <h3 className="hindi-text mb-2" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#D32F2F' }}>{t('फर्जी योजना अलर्ट')}</h3>
              <h4 className="text-oxford mb-6" style={{ fontSize: '1.5rem', opacity: 0.8 }}>{t('Fraudulent Scheme Alert')}</h4>
              
              <div className="bg-white p-6 rounded text-left mb-6 mx-auto" style={{ border: '1px solid rgba(211, 47, 47, 0.2)', maxWidth: '600px' }}>
                <h5 className="font-bold flex items-center gap-2 mb-4" style={{ color: '#D32F2F', fontSize: '1.1rem' }}>
                  <Info size={20} /> Fraud Indicators Detected:
                </h5>
                <ul className="pl-6 flex flex-col gap-2 text-oxford" style={{ listStyleType: 'disc' }}>
                  <li>URL does not belong to any official .gov.in domain</li>
                  <li>Asks for upfront payment for scheme registration</li>
                  <li>No matching records in the central scheme database</li>
                </ul>
              </div>

              <div className="flex flex-col sm-flex-row gap-4 justify-center mt-8 px-4">
                <button className="btn flex items-center justify-center gap-2 flex-1 text-white w-full" style={{ background: '#D32F2F', border: 'none' }}>
                  {t('call1930')}
                </button>
                <button className="btn text-oxford flex items-center justify-center gap-2 flex-1 w-full" style={{ border: '1px solid #D32F2F', color: '#D32F2F', background: 'transparent' }}>
                  Report Online
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-8 { margin-top: 2rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .pl-6 { padding-left: 1.5rem; }
        .grid-cols-2 { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .col-span-2 { grid-column: span 1 / span 1; }
        .rounded-full { border-radius: 9999px; }
        .rounded { border-radius: 4px; }
        .break-words { word-break: break-word; }
        .inline-block { display: inline-block; }
        @media (min-width: 640px) {
          .sm-flex-row { flex-direction: row; display: flex; }
          .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .col-span-2 { grid-column: span 2 / span 2; }
          .w-full { width: auto; }
        }
      `}</style>
    </section>
  );
};

export default VerificationResult;

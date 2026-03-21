import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { languages } from '../translations';
import { Globe2 } from 'lucide-react';

const LanguagePopup = () => {
  const { language, changeLanguage } = useLanguage();

  if (language !== null) return null; // Hide if language is already selected

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0, 33, 71, 0.85)', backdropFilter: 'blur(8px)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
          style={{ borderTop: '4px solid var(--imperial-gold)' }}
        >
          <div className="bg-oxford p-6 text-center relative overflow-hidden">
            <Globe2 size={48} className="text-gold mx-auto mb-4" style={{ opacity: 0.9 }} />
            <h2 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Select Your Language</h2>
            <p className="text-gold" style={{ fontSize: '1.2rem' }}>अपनी भाषा चुनें</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 sm-grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="lang-btn flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all hover:border-gold hover:bg-ivory"
                  style={{ borderColor: 'rgba(0,0,0,0.05)', background: '#FAFAFA' }}
                >
                  <span className="text-oxford font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-hindi)' }}>{lang.nativeName}</span>
                  <span className="text-sm" style={{ color: '#666' }}>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-ivory p-4 text-center text-sm" style={{ color: '#666', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            You can always change your language later from the navigation bar.
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .hover\\:border-gold:hover { border-color: var(--imperial-gold) !important; }
        .hover\\:bg-ivory:hover { background-color: var(--warm-ivory) !important; }
        @media (min-width: 640px) {
          .sm-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default LanguagePopup;

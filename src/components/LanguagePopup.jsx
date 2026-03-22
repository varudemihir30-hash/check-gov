import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { languages } from '../translations';
import { Globe2, Sparkles, Languages, Heart } from 'lucide-react';

const LanguagePopup = () => {
  const { language, changeLanguage } = useLanguage();
  const [hoveredLang, setHoveredLang] = useState(null);

  if (language !== null) return null; // Hide if language is already selected

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{ background: 'rgba(0, 33, 71, 0.4)', backdropFilter: 'blur(12px)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
      >
        <motion.div 
          initial={{ scale: 0.8, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden relative"
          style={{ border: '4px solid var(--imperial-gold)' }}
        >
          {/* Cute decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-oxford-blue to-[#003366] opacity-10" />
          
          <div className="bg-oxford p-8 text-center relative overflow-hidden flex flex-col items-center border-b-4" style={{ borderColor: 'var(--imperial-gold)' }}>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative mb-4"
            >
              <div className="bg-white p-4 rounded-full shadow-lg relative z-10">
                <Globe2 size={56} className="text-gold" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 z-0"
              >
                <Sparkles size={24} className="text-white absolute -top-2 -right-2 drop-shadow-md" style={{ color: '#FFD700' }} />
                <Sparkles size={16} className="text-white absolute bottom-0 -left-4 drop-shadow-md" style={{ color: '#FFD700' }} />
              </motion.div>
            </motion.div>
            
            <h2 className="text-white text-3xl font-bold mb-2 flex items-center gap-3 drop-shadow-md" style={{ fontFamily: 'var(--font-heading)' }}>
               Choose Your Language <Heart size={24} className="text-gold" fill="currentColor" />
            </h2>
            <p className="text-ivory font-medium" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              अपनी भाषा चुनें  •  તમારી ભાષા પસંદ કરો  •  আপনার ভাষা নির্বাচন করুন
            </p>
          </div>
          
          <div className="p-6 md:p-8 bg-gradient-to-b from-[#FAFAFA] to-[#F0EFEB]">
            <p className="text-center text-oxford font-bold mb-6 text-lg">Select to instantly translate the entire site!</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar p-2">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredLang(lang.code)}
                  onHoverEnd={() => setHoveredLang(null)}
                  onClick={() => changeLanguage(lang.code)}
                  className="lang-btn flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all shadow-sm"
                  style={{ 
                    borderColor: hoveredLang === lang.code ? 'var(--imperial-gold)' : 'rgba(0,0,0,0.08)',
                    background: hoveredLang === lang.code ? 'var(--white)' : 'var(--white)',
                    boxShadow: hoveredLang === lang.code ? '0 10px 25px -5px rgba(201,152,42,0.3)' : '0 4px 6px -1px rgba(0,0,0,0.05)'
                  }}
                >
                  <span className="text-oxford font-bold mb-2" style={{ fontFamily: 'var(--font-hindi)', fontSize: '1.4rem' }}>
                    {lang.nativeName}
                  </span>
                  <span className="text-sm font-medium" style={{ color: hoveredLang === lang.code ? 'var(--oxford-blue)' : '#666' }}>
                    {lang.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-5 text-center flex items-center justify-center gap-2" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <Languages size={18} className="text-gold" />
            <span style={{ color: '#555', fontSize: '0.95rem', fontWeight: 500 }}>
              You can always change your language later from the navigation bar.
            </span>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(201,152,42,0.5); }
      `}</style>
    </AnimatePresence>
  );
};

export default LanguagePopup;

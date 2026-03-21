import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null); // null means not selected yet (shows popup)

  useEffect(() => {
    const saved = localStorage.getItem('sachyojana_lang');
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem('sachyojana_lang', langCode);
  };

  const t = (key) => getTranslation(language || 'en', key);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

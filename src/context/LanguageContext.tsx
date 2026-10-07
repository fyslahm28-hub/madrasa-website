import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, MultiLangString } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  localize: (obj?: MultiLangString | null) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_LANG_KEY = 'madrasa_selected_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY);
      if (saved === 'bn' || saved === 'en' || saved === 'ar') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'bn';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // ignore
    }
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = isRTL ? 'rtl' : 'ltr';
    if (isRTL) {
      root.classList.add('font-arabic');
      root.classList.remove('font-bengali');
    } else if (language === 'bn') {
      root.classList.add('font-bengali');
      root.classList.remove('font-arabic');
    } else {
      root.classList.remove('font-arabic');
      root.classList.remove('font-bengali');
    }
  }, [language, isRTL]);

  const t = (key: string): string => {
    const dict = translations[language] || translations.bn;
    if (dict && dict[key]) {
      return dict[key];
    }
    // Fallback to Bengali if missing in current language
    if (translations.bn && translations.bn[key]) {
      return translations.bn[key];
    }
    // Fallback to English
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return key;
  };

  const localize = (obj?: MultiLangString | null): string => {
    if (!obj) return '';
    return obj[language] || obj.bn || obj.en || obj.ar || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localize, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

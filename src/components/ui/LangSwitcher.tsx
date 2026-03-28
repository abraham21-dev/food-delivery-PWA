import React from 'react';
import { useTranslation } from 'react-i18next';

// Make sure 'export' is right here!
export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md border border-orange-200 text-sm font-medium hover:bg-orange-50"
    >
      {i18n.language === 'en' ? 'አማርኛ' : 'English'}
    </button>
  );
};
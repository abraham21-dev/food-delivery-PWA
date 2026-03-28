import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "restaurants": "Restaurants",
        "search": "Search...",
        "basket": "Basket"
      }
    },
    am: {
      translation: {
        "restaurants": "ምግብ ቤቶች",
        "search": "ፈልግ...",
        "basket": "ቅርጫት"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
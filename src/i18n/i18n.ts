import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "restaurants": "Restaurants",
        "find_food": "Find Food",
        "basket": "Your Basket",
        "checkout": "Proceed to Payment"
      }
    },
    am: {
      translation: {
        "restaurants": "ምግብ ቤቶች",
        "find_food": "ምግብ ይፈልጉ",
        "basket": "የእርስዎ ቅርጫት",
        "checkout": "ለመክፈል ይቀጥሉ"
      }
    }
  },
  lng: "en", 
  fallbackLng: "en",
});

export default i18n;
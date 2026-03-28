import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    // Inside your i18n.init()
resources: {
  en: {
    translation: {
      "search_placeholder": "Enter location or restaurant...",
      "restaurants": "Restaurants",
      "customers": "Happy Customers",
      "offline_msg": "You are currently offline. Showing saved menu."
    }
  },
  am: {
    translation: {
      "search_placeholder": "አድራሻ ወይም ምግብ ቤት ያስገቡ...",
      "restaurants": "ምግብ ቤቶች",
      "customers": "ደስተኛ ደንበኞች",
      "offline_msg": "መስመር ላይ አይደሉም። የተቀመጠው ዝርዝር እየታየ ነው።"
    }
  }
}
  });

export default i18n;
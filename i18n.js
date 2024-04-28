import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';
import fr from './public/locales/fr/common.json';


function getLanguage() {
  if (typeof window !== 'undefined') {

    return localStorage.getItem('LANGUAGE') || 'en';
  }

  return 'en';
}

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    }
  });

export default i18n;

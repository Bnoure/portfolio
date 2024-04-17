// i18n.js
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)  // Charger les traductions via HTTP lorsqu'elles ne sont pas disponibles côté client
  .use(LanguageDetector)  // Détecter automatiquement la langue
  .use(initReactI18next)  // Passer l'instance i18n à react-i18next
  .init({
    fallbackLng: 'fr',
    debug: true,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Assurez-vous que vos fichiers de traduction sont accessibles via cette URL
    },
    interpolation: {
      escapeValue: false, // Non nécessaire pour React qui échappe déjà les valeurs
    },
  });

export default i18n;

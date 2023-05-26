import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend) // ./public/locales
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSupense: false,
    },
  });

export default i18n;

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import * as en from './translations/en.json';
import * as de from './translations/de.json';

export const defaultNS = 'translation';

export const resources = {
  en,
  de,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    defaultNS,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
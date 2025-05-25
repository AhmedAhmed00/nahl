import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import arLang from "./locales/ar/ar.json";

const savedLang = localStorage.getItem("lang") || "en";

const resources = {
  en: {
    translation: enLang,
  },
  ar: {
    translation: arLang,
  },
};

i18n.use(initReactI18next).init({
  resources,

  fallbackLng: "en",
  lng: savedLang,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

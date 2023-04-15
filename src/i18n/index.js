import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import en from "./en";
import ua from "./ua";

export const resources = {
    ua: {translation: ua},
    en: {translation: en}
}

export const appLocales = Object.keys(resources)

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: appLocales,
        detection: {
            order: ["localStorage"]
        },
        react: {
            useSuspense: true
        }
    });

export default i18n
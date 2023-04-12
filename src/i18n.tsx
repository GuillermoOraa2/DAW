import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nBackend from "i18next-http-backend";

//const getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:3000/' : 'Link de produccion'

i18n.use(i18nBackend)
    .use(initReactI18next)
    .init({
        lng: 'es',
        fallbackLng: 'es',
        interpolation:{
            escapeValue: false
        },
        backend: {
            loadPath: 'http://localhost:3000/i18n/{{lng}}.json',
            //loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        }
    });

export default i18n;
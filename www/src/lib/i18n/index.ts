import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import id from '../../locale/id.json';
import en from '../../locale/en.json';

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  id: {
    translation: {
      ...id,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'id',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

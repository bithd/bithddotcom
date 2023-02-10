import i18n from 'i18next';
import zh from './public/locales/zh.json';
import en from './public/locales/en.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  en: {
    translation: en
  },
  'zh-cn': {
    translation: zh
  },
  'zh-tw': {
    translation: zh
  },
  'zh-hk': {
    translation: zh
  }
} as const;

i18n
  .use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'zh-cn',
		debug: false,
		lowerCaseLng: true,
    preload: ['en', 'zh-cn'],
		interpolation: {
			escapeValue: false,
		},
	});

  

export default i18n;
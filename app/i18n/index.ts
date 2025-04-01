import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './lang-resource';

i18n
  .use(initReactI18next)  // 初始化設定
  .init({
    resources,            // 引入定義語系與對應文字的 json 檔
    lng: 'en',            // 預設語系為 en
    fallbackLng: 'en',    // 若找不到對應語系則回傳 en
    defaultNS: 'common',
    preload: ['en', 'zh'],
    ns: 'common',
    interpolation: {
      escapeValue: false,
    },
    parseMissingKeyHandler: () => {
      return '';
    } ,
    react: {
      useSuspense: false
    },
  });

export default i18n;
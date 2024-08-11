import { createI18n } from 'vue-i18n';

import { en } from './en';
import { ja } from './ja';

const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'en',
  messages:{
    en: { message: en },
    ja: { message: ja },
  } 
});

export default i18n;
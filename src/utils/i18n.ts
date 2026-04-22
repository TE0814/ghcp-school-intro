import ja from '../i18n/ja.json';
import en from '../i18n/en.json';

export type Locale = 'ja' | 'en';

const dictionaries = {
  ja,
  en
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
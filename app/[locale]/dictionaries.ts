import 'server-only';

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  ko: () => import('../../dictionaries/ko.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  const dictionaryLoader = dictionaries[locale];
  
  if (!dictionaryLoader) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }

  return dictionaryLoader();
};

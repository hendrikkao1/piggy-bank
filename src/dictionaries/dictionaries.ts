import "server-only";

const dictionaries = {
  en: () => import("./en-US.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();

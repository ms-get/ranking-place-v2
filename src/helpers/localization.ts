import { Lang } from "./lang";

const localizationObj = {
  "추천 아티클": {
    en: "recommend article",
  },
  "새로운 비교글들": { en: "new Post" },
} as const;

export const localCurry = (lang: Lang) => (key: keyof typeof localizationObj) => {
  if (lang === "ko") return key;

  return localizationObj[key][lang];
};

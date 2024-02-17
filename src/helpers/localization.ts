import { Lang } from "./lang";

const localizationObj = {
  "추천 아티클": {
    en: "recommend article",
    ko: "추천 아티클",
  },
} as const;

export const localCurry = (lang: Lang) => (key: keyof typeof localizationObj) => localizationObj[key][lang];

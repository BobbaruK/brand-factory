import type { FooterTranslations, TranslationsType } from "./translations";

export type FooterTranslation = FooterTranslations & {
  rfm: TranslationsType;
  outbrain: TranslationsType;
  atheneum: TranslationsType;
};

import type { LandingPageType } from "./lp-params-type";
import type { TranslationsType } from "./translations";

export type BasicFooterTranslations = {
  [key in LandingPageType]: TranslationsType;
};

export type FooterTranslations = BasicFooterTranslations & {
  rfm: TranslationsType;
  outbrain: TranslationsType;
  atheneum: TranslationsType;
};

export interface FooterMetaData {
  email?: string;
  phone?: string;
  logo?: string;
}

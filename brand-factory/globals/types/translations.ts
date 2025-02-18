import { type LandingPageType } from "./lp-params-type";

export type FooterTranslations = {
  [key in LandingPageType]: TranslationsType;
};

export type Languages =
  | "en"
  | "it"
  | "tr"
  | "ro"
  | "ar"
  | "de"
  | "es"
  | "sv"
  | "pt"
  | "fi"
  | "pl"
  | "hu"
  | "th"
  | "ms"
  | "vi";

export type TranslationsType = {
  [key in Languages]: string;
};

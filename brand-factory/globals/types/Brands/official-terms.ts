import type { TranslationsType } from "../translations";

export interface OfficialTermsLinks {
  privacyPolicy?: TranslationsType;
  riskWarning?: TranslationsType;
  termsAndConditions?: TranslationsType;
  orderExecutionPolicy?: TranslationsType;
  costAndCharges?: TranslationsType;
}

export interface OfficialTerms {
  links: OfficialTermsLinks;
}

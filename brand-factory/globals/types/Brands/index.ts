import type { OfficialTerms } from "../brands/official-terms";
import type { FooterMetaData } from "../footer";
import type { LicenseType } from "../lp-params-type";
import type { TranslationsType } from "../translations";
import type { BrandsNames } from "./names";

export interface BrandArrItem<TSVGLogoVariations> {
  nameToLower: BrandsNames;
  name: string;
  typage: TranslationsType;
  recaptchaKey: string;
  privacyLink: TranslationsType;
  images: BrandItemImages<TSVGLogoVariations>;
  whatsapp: boolean;
  whatsappNumber: TranslationsType;
  footerMetaData?: FooterMetaData;
  officialTerms?: OfficialTerms;
}

interface BrandItemImages<TSVGLogoVariations> {
  logoSVG: TSVGLogoVariations;
  faviconLink: string;
}

export interface BrandParamsObj {
  whatsapp: boolean;
  region: LicenseType;
}

import type { BrandArrItem } from "../../types/brands";
import type { TradeNavigatorSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradeNavigator = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<TradeNavigatorSVGVariation> => ({
  nameToLower: "trade-navigator",
  name: "Trade Navigator",
  typage: {
    en: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/en/`
      : `https://trade-navigator.com/thank-you/en/`,
    it: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/it/`
      : `https://trade-navigator.com/thank-you/it/`,
    tr: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/tr/`
      : `https://trade-navigator.com/thank-you/tr/`,
    ro: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/ro/`
      : `https://trade-navigator.com/thank-you/ro/`,
    ar: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/ar/`
      : `https://trade-navigator.com/thank-you/ar/`,
    de: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/de/`
      : `https://trade-navigator.com/thank-you/de/`,
    es: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/es/`
      : `https://trade-navigator.com/thank-you/es/`,
    sv: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/sv/`
      : `https://trade-navigator.com/thank-you/sv/`,
    pt: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/pt/`
      : `https://trade-navigator.com/thank-you/pt/`,
    fi: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/fi/`
      : `https://trade-navigator.com/thank-you/fi/`,
    pl: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/pl/`
      : `https://trade-navigator.com/thank-you/pl/`,
    hu: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/hu/`
      : `https://trade-navigator.com/thank-you/hu/`,
    th: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/th/`
      : `https://trade-navigator.com/thank-you/th/`,
    ms: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/ms/`
      : `https://trade-navigator.com/thank-you/ms/`,
    vi: drThankYou
      ? `https://trade-navigator.com/thank-you/dr/vi/`
      : `https://trade-navigator.com/thank-you/vi/`,
  },
  recaptchaKey: "",
  privacyLink: {
    en: "https://trade-navigator.com/privacy-policy/en/",
    it: "https://trade-navigator.com/privacy-policy/it/",
    tr: "https://trade-navigator.com/privacy-policy/tr/",
    ro: "https://trade-navigator.com/privacy-policy/ro/",
    ar: "https://trade-navigator.com/privacy-policy/ar/",
    de: "https://trade-navigator.com/privacy-policy/de/",
    es: "https://trade-navigator.com/privacy-policy/es/",
    sv: "https://trade-navigator.com/privacy-policy/sv/",
    pt: "https://trade-navigator.com/privacy-policy/pt/",
    fi: "https://trade-navigator.com/privacy-policy/fi/",
    pl: "https://trade-navigator.com/privacy-policy/pl/",
    hu: "https://trade-navigator.com/privacy-policy/hu/",
    th: "https://trade-navigator.com/privacy-policy/th/",
    ms: "https://trade-navigator.com/privacy-policy/ms/",
    vi: "https://trade-navigator.com/privacy-policy/vi/",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://tradersacademic.com/global_assets/imgs/favicon.svg",
  },
});

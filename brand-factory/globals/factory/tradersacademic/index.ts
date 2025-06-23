import type { BrandArrItem } from "../../types/brands";
import type { TradersAcademicSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradersacademic = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<TradersAcademicSVGVariation> => ({
  nameToLower: "tradersacademic",
  name: "Traders Academic",
  typage: {
    en: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/en/`
      : `https://tradersacademic.com/thank-you/en/`,
    it: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/it/`
      : `https://tradersacademic.com/thank-you/it/`,
    tr: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/tr/`
      : `https://tradersacademic.com/thank-you/tr/`,
    ro: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/ro/`
      : `https://tradersacademic.com/thank-you/ro/`,
    ar: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/ar/`
      : `https://tradersacademic.com/thank-you/ar/`,
    de: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/de/`
      : `https://tradersacademic.com/thank-you/de/`,
    es: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/es/`
      : `https://tradersacademic.com/thank-you/es/`,
    sv: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/sv/`
      : `https://tradersacademic.com/thank-you/sv/`,
    pt: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/pt/`
      : `https://tradersacademic.com/thank-you/pt/`,
    fi: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/fi/`
      : `https://tradersacademic.com/thank-you/fi/`,
    pl: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/pl/`
      : `https://tradersacademic.com/thank-you/pl/`,
    hu: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/hu/`
      : `https://tradersacademic.com/thank-you/hu/`,
    th: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/th/`
      : `https://tradersacademic.com/thank-you/th/`,
    ms: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/ms/`
      : `https://tradersacademic.com/thank-you/ms/`,
    vi: drThankYou
      ? `https://tradersacademic.com/thankyou/dr/vi/`
      : `https://tradersacademic.com/thank-you/vi/`,
  },
  recaptchaKey: "6LcF02QjAAAAADxEES9rYjPPlDNRwJiAOmDwSnUA",
  privacyLink: {
    en: "https://www.tradersacademic.com/privacypolicy.html",
    it: "https://www.tradersacademic.com/privacypolicy.html",
    tr: "https://www.tradersacademic.com/privacypolicy.html",
    ro: "https://www.tradersacademic.com/privacypolicy.html",
    ar: "https://www.tradersacademic.com/privacypolicy.html",
    de: "https://www.tradersacademic.com/privacypolicy.html",
    es: "https://www.tradersacademic.com/privacypolicy.html",
    sv: "https://www.tradersacademic.com/privacypolicy.html",
    pt: "https://www.tradersacademic.com/privacypolicy.html",
    fi: "https://www.tradersacademic.com/privacypolicy.html",
    pl: "https://www.tradersacademic.com/privacypolicy.html",
    hu: "https://www.tradersacademic.com/privacypolicy.html",
    th: "https://www.tradersacademic.com/privacypolicy.html",
    ms: "https://www.tradersacademic.com/privacypolicy.html",
    vi: "https://www.tradersacademic.com/privacypolicy.html",
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

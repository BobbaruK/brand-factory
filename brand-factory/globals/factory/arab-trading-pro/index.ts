import type { BrandArrItem } from "../../types/brands";
import type { ArabTradingProSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo, logoBlack, logoWhite } from "./logo";

export const arabTradingPro = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<ArabTradingProSVGVariation> => ({
  nameToLower: "arabtradingpro",
  name: "Arab Trading Pro",
  typage: {
    en: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/en/`
      : `https://arabtradingpro.com/thankyou/en/`,
    it: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/it/`
      : `https://arabtradingpro.com/thankyou/it/`,
    tr: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/tr/`
      : `https://arabtradingpro.com/thankyou/tr/`,
    ro: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/ro/`
      : `https://arabtradingpro.com/thankyou/ro/`,
    ar: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/ar/`
      : `https://arabtradingpro.com/thankyou/ar/`,
    de: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/de/`
      : `https://arabtradingpro.com/thankyou/de/`,
    es: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/es/`
      : `https://arabtradingpro.com/thankyou/es/`,
    sv: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/sv/`
      : `https://arabtradingpro.com/thankyou/sv/`,
    pt: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/pt/`
      : `https://arabtradingpro.com/thankyou/pt/`,
    fi: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/fi/`
      : `https://arabtradingpro.com/thankyou/fi/`,
    pl: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/pl/`
      : `https://arabtradingpro.com/thankyou/pl/`,
    hu: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/hu/`
      : `https://arabtradingpro.com/thankyou/hu/`,
    th: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/th/`
      : `https://arabtradingpro.com/thankyou/th/`,
    ms: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/ms/`
      : `https://arabtradingpro.com/thankyou/ms/`,
    vi: drThankYou
      ? `https://arabtradingpro.com/thankyou/dr/vi/`
      : `https://arabtradingpro.com/thankyou/vi/`,
  },
  recaptchaKey: "6LfpRygrAAAAAL3VTdXry9o9fklNSs7t74on_iBJ",
  privacyLink: {
    en: "https://arabtradingpro.com/privacypolicy/en/",
    it: "https://arabtradingpro.com/privacypolicy/it/",
    tr: "https://arabtradingpro.com/privacypolicy/tr/",
    ro: "https://arabtradingpro.com/privacypolicy/ro/",
    ar: "https://arabtradingpro.com/privacypolicy/ar/",
    de: "https://arabtradingpro.com/privacypolicy/de/",
    es: "https://arabtradingpro.com/privacypolicy/es/",
    sv: "https://arabtradingpro.com/privacypolicy/sv/",
    pt: "https://arabtradingpro.com/privacypolicy/pt/",
    fi: "https://arabtradingpro.com/privacypolicy/fi/",
    pl: "https://arabtradingpro.com/privacypolicy/pl/",
    hu: "https://arabtradingpro.com/privacypolicy/hu/",
    th: "https://arabtradingpro.com/privacypolicy/th/",
    ms: "https://arabtradingpro.com/privacypolicy/ms/",
    vi: "https://arabtradingpro.com/privacypolicy/vi/",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
      defaultWhite: logoWhite,
      defaultBlack: logoBlack,
    },
    faviconLink: "https://arabtradingpro.com/global_assets/imgs/favicon.png",
  },
});

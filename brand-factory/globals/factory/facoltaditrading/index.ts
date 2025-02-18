import type { BrandArrItem } from "../../types/brands";
import type { FacoltaDiTradingSVGVariation } from "../../types/brands/logo";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const facoltaditrading = (whatsapp: boolean, whatsappNumber: () => TranslationsType): BrandArrItem<FacoltaDiTradingSVGVariation> => ({
  id: 3,
  nameToLower: "facoltaditrading",
  name: "Facoltà Di Trading",
  typage: {
    en: `https://facoltaditrading.com/thank-you/en`,
    it: `https://facoltaditrading.com/thank-you/en`,
    tr: `https://facoltaditrading.com/thank-you/en`,
    ro: `https://facoltaditrading.com/thank-you/en`,
    ar: `https://facoltaditrading.com/thank-you/en`,
    de: `https://facoltaditrading.com/thank-you/en`,
    es: `https://facoltaditrading.com/thank-you/en`,
    sv: `https://facoltaditrading.com/thank-you/en`,
    pt: `https://facoltaditrading.com/thank-you/en`,
    fi: `https://facoltaditrading.com/thank-you/en`,
    pl: `https://facoltaditrading.com/thank-you/en`,
    hu: `https://facoltaditrading.com/thank-you/en`,
    th: `https://facoltaditrading.com/thank-you/en`,
    ms: `https://facoltaditrading.com/thank-you/en`,
    vi: `https://facoltaditrading.com/thank-you/en`,
  },
  recaptchaKey: "6LfWLIQjAAAAADF97_A4hqRnyD3EmZ-XLXDXgIVa",
  privacyLink: {
    en: "https://facoltaditrading.com/privacypolicy.html",
    it: "https://facoltaditrading.com/privacypolicy.html",
    tr: "https://facoltaditrading.com/privacypolicy.html",
    ro: "https://facoltaditrading.com/privacypolicy.html",
    ar: "https://facoltaditrading.com/privacypolicy.html",
    de: "https://facoltaditrading.com/privacypolicy.html",
    es: "https://facoltaditrading.com/privacypolicy.html",
    sv: "https://facoltaditrading.com/privacypolicy.html",
    pt: "https://facoltaditrading.com/privacypolicy.html",
    fi: "https://facoltaditrading.com/privacypolicy.html",
    pl: "https://facoltaditrading.com/privacypolicy.html",
    hu: "https://facoltaditrading.com/privacypolicy.html",
    th: "https://facoltaditrading.com/privacypolicy.html",
    ms: "https://facoltaditrading.com/privacypolicy.html",
    vi: "https://facoltaditrading.com/privacypolicy.html",
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

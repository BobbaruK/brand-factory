import type { BrandArrItem } from "../../types/brands";
import type { FacoltaDiTradingSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const facoltaditrading = ({
  license,
  whatsapp,
  whatsappNumber,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
}): BrandArrItem<FacoltaDiTradingSVGVariation> => ({
  id: 3,
  nameToLower: "facoltaditrading",
  name: "Facoltà Di Trading",
  typage: {
    en:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/en/`
        : `https://facoltaditrading.com/thank-you/en/`,
    it:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/it/`
        : `https://facoltaditrading.com/thank-you/it/`,
    tr:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/tr/`
        : `https://facoltaditrading.com/thank-you/tr/`,
    ro:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/ro/`
        : `https://facoltaditrading.com/thank-you/ro/`,
    ar:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/ar/`
        : `https://facoltaditrading.com/thank-you/ar/`,
    de:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/de/`
        : `https://facoltaditrading.com/thank-you/de/`,
    es:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/es/`
        : `https://facoltaditrading.com/thank-you/es/`,
    sv:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/sv/`
        : `https://facoltaditrading.com/thank-you/sv/`,
    pt:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/pt/`
        : `https://facoltaditrading.com/thank-you/pt/`,
    fi:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/fi/`
        : `https://facoltaditrading.com/thank-you/fi/`,
    pl:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/pl/`
        : `https://facoltaditrading.com/thank-you/pl/`,
    hu:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/hu/`
        : `https://facoltaditrading.com/thank-you/hu/`,
    th:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/th/`
        : `https://facoltaditrading.com/thank-you/th/`,
    ms:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/ms/`
        : `https://facoltaditrading.com/thank-you/ms/`,
    vi:
      license === "fsa"
        ? `https://facoltaditrading.com/thankyou/dr/vi/`
        : `https://facoltaditrading.com/thank-you/vi/`,
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

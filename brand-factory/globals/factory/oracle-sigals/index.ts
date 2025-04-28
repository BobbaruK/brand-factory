import type { BrandArrItem } from "../../types/brands";
import type { OracleSignalsSVGVariation } from "../../types/brands/logo";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const oracleSignals = (
  whatsapp: boolean,
  whatsappNumber: () => TranslationsType
): BrandArrItem<OracleSignalsSVGVariation> => ({
  id: 8,
  nameToLower: "oracle-signals",
  name: "Oracle Signals",
  typage: {
    en: `https://oracle-signals.com/thank-you/en/`,
    it: `https://oracle-signals.com/thank-you/it/`,
    tr: `https://oracle-signals.com/thank-you/tr/`,
    ro: `https://oracle-signals.com/thank-you/ro/`,
    ar: `https://oracle-signals.com/thank-you/ar/`,
    de: `https://oracle-signals.com/thank-you/de/`,
    es: `https://oracle-signals.com/thank-you/es/`,
    sv: `https://oracle-signals.com/thank-you/sv/`,
    pt: `https://oracle-signals.com/thank-you/pt/`,
    fi: `https://oracle-signals.com/thank-you/fi/`,
    pl: `https://oracle-signals.com/thank-you/pl/`,
    hu: `https://oracle-signals.com/thank-you/hu/`,
    th: `https://oracle-signals.com/thank-you/th/`,
    ms: `https://oracle-signals.com/thank-you/ms/`,
    vi: `https://oracle-signals.com/thank-you/vi/`,
  },
  recaptchaKey: "6LeSkf4qAAAAADlA-HG8iv1AsFvlSHEk5Za4d2NC",
  privacyLink: {
    en: `https://oracle-signals.com/privacy-policy/en/`,
    it: `https://oracle-signals.com/privacy-policy/it/`,
    tr: `https://oracle-signals.com/privacy-policy/tr/`,
    ro: `https://oracle-signals.com/privacy-policy/ro/`,
    ar: `https://oracle-signals.com/privacy-policy/ar/`,
    de: `https://oracle-signals.com/privacy-policy/de/`,
    es: `https://oracle-signals.com/privacy-policy/es/`,
    sv: `https://oracle-signals.com/privacy-policy/sv/`,
    pt: `https://oracle-signals.com/privacy-policy/pt/`,
    fi: `https://oracle-signals.com/privacy-policy/fi/`,
    pl: `https://oracle-signals.com/privacy-policy/pl/`,
    hu: `https://oracle-signals.com/privacy-policy/hu/`,
    th: `https://oracle-signals.com/privacy-policy/th/`,
    ms: `https://oracle-signals.com/privacy-policy/ms/`,
    vi: `https://oracle-signals.com/privacy-policy/vi/`,
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://oracle-signals.com/global_assets/imgs/favicon.png",
  },
});

import type { BrandArrItem } from "../../types/brands";
import type { OracleSignalsSVGVariation } from "../../types/brands/logo";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const oracleSignals = (
  whatsapp: boolean,
  whatsappNumber: () => TranslationsType
): BrandArrItem<OracleSignalsSVGVariation> => ({
  id: 4,
  nameToLower: "oracle-signals",
  name: "Oracle Signals",
  typage: {
    en: ``,
    it: ``,
    tr: ``,
    ro: ``,
    ar: ``,
    de: ``,
    es: ``,
    sv: ``,
    pt: ``,
    fi: ``,
    pl: ``,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
    showcase: "#",
  },
  recaptchaKey: "6LeSkf4qAAAAADlA-HG8iv1AsFvlSHEk5Za4d2NC",
  privacyLink: {
    en: ``,
    it: ``,
    tr: ``,
    ro: ``,
    ar: ``,
    de: ``,
    es: ``,
    sv: ``,
    pt: ``,
    fi: ``,
    pl: ``,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
    showcase: "#",
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

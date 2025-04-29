import type { BrandArrItem } from "../../types/brands";
import type { ArabTradingProSVGVariation } from "../../types/brands/logo";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo, logoBlack, logoWhite } from "./logo";

export const arabTradingPro = (
  whatsapp: boolean,
  whatsappNumber: () => TranslationsType
): BrandArrItem<ArabTradingProSVGVariation> => ({
  id: 1,
  nameToLower: "arabtradingpro",
  name: "Arab Trading Pro",
  typage: {
    en: "",
    it: "",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: "",
    sv: "",
    pt: "",
    fi: "",
    pl: "",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "",
  privacyLink: {
    en: "",
    it: "",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: "",
    sv: "",
    pt: "",
    fi: "",
    pl: "",
    hu: "",
    th: "",
    ms: "",
    vi: "",
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

import type { BrandArrItem } from "../../types/brands";
import type { TradingAtheneumSVGVariation } from "../../types/brands/logo";
import type { TranslationsType } from "../../types/translations";
import {
  defaultCustom,
  defaultDark,
  defaultLight,
  defaultLogo,
  squareCustom,
  squareDark,
  squareLight,
  squareLogo,
} from "./logos";

export const tradingatheneum = (
  whatsapp: boolean,
  whatsappNumber: () => TranslationsType
): BrandArrItem<TradingAtheneumSVGVariation> => ({
  id: 1,
  nameToLower: "tradingatheneum",
  name: "Trading Atheneum",
  typage: {
    en: "https://tradingatheneum.com/thankyou/en/",
    it: "https://tradingatheneum.com/thankyou/it/",
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
    showcase: "#",
  },
  recaptchaKey: "6LfLo8gqAAAAALIKXDJO36xlthQ-f0Zsyk_BwiON",
  privacyLink: {
    en: "https://tradingatheneum.com/privacypolicy/en/",
    it: "https://tradingatheneum.com/privacypolicy/it/",
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
    showcase: "#",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
      defaultLight: defaultLight,
      defaultDark: defaultDark,
      defaultCustom: defaultCustom,
      square: squareLogo,
      squareLight: squareLight,
      squareDark: squareDark,
      squareCustom: squareCustom,
    },
    faviconLink: "https://tradingatheneum.com/global_assets/imgs/favicon.png",
  },
  footerMetaData: {
    email: "info@tradingatheneum.com",
    phone: "+390688060055",
    logo: defaultCustom,
  },
});

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
  id: 13,
  nameToLower: "tradingatheneum",
  name: "Trading Atheneum",
  typage: {
    en: "https://tradingatheneum.com/thankyou/en/",
    it: "https://tradingatheneum.com/thankyou/it/",
    tr: "https://tradingatheneum.com/thankyou/tr/",
    ro: "https://tradingatheneum.com/thankyou/ro/",
    ar: "https://tradingatheneum.com/thankyou/ar/",
    de: "https://tradingatheneum.com/thankyou/de/",
    es: "https://tradingatheneum.com/thankyou/es/",
    sv: "https://tradingatheneum.com/thankyou/sv/",
    pt: "https://tradingatheneum.com/thankyou/pt/",
    fi: "https://tradingatheneum.com/thankyou/fi/",
    pl: "https://tradingatheneum.com/thankyou/pl/",
    hu: "https://tradingatheneum.com/thankyou/hu/",
    th: "https://tradingatheneum.com/thankyou/th/",
    ms: "https://tradingatheneum.com/thankyou/ms/",
    vi: "https://tradingatheneum.com/thankyou/vi/",
  },
  recaptchaKey: "6LfLo8gqAAAAALIKXDJO36xlthQ-f0Zsyk_BwiON",
  privacyLink: {
    en: "https://tradingatheneum.com/privacypolicy/en/",
    it: "https://tradingatheneum.com/privacypolicy/it/",
    tr: "https://tradingatheneum.com/privacypolicy/tr/",
    ro: "https://tradingatheneum.com/privacypolicy/ro/",
    ar: "https://tradingatheneum.com/privacypolicy/ar/",
    de: "https://tradingatheneum.com/privacypolicy/de/",
    es: "https://tradingatheneum.com/privacypolicy/es/",
    sv: "https://tradingatheneum.com/privacypolicy/sv/",
    pt: "https://tradingatheneum.com/privacypolicy/pt/",
    fi: "https://tradingatheneum.com/privacypolicy/fi/",
    pl: "https://tradingatheneum.com/privacypolicy/pl/",
    hu: "https://tradingatheneum.com/privacypolicy/hu/",
    th: "https://tradingatheneum.com/privacypolicy/th/",
    ms: "https://tradingatheneum.com/privacypolicy/ms/",
    vi: "https://tradingatheneum.com/privacypolicy/vi/",
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

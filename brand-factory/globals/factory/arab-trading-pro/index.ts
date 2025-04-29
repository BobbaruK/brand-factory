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
    en: "https://arabtradingpro.com/thankyou/en/",
    it: "https://arabtradingpro.com/thankyou/it/",
    tr: "https://arabtradingpro.com/thankyou/tr/",
    ro: "https://arabtradingpro.com/thankyou/ro/",
    ar: "https://arabtradingpro.com/thankyou/ar/",
    de: "https://arabtradingpro.com/thankyou/de/",
    es: "https://arabtradingpro.com/thankyou/es/",
    sv: "https://arabtradingpro.com/thankyou/sv/",
    pt: "https://arabtradingpro.com/thankyou/pt/",
    fi: "https://arabtradingpro.com/thankyou/fi/",
    pl: "https://arabtradingpro.com/thankyou/pl/",
    hu: "https://arabtradingpro.com/thankyou/hu/",
    th: "https://arabtradingpro.com/thankyou/th/",
    ms: "https://arabtradingpro.com/thankyou/ms/",
    vi: "https://arabtradingpro.com/thankyou/vi/",
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

import type { BrandArrItem } from "../../types/brands";
import type { TradersProfilerSVGVariation } from "../../types/brands/logo";
import { Features } from "../../types/enums";
import { type TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/default";
import { original } from "./logos/original";

export const tradersprofiler = (
  whatsapp: boolean,
  whatsappNumber: () => TranslationsType,
  features?: Features[]
): BrandArrItem<TradersProfilerSVGVariation> => {
  return {
    id: 12,
    nameToLower: "tradersprofiler",
    name: "Traders Profiler",
    typage: {
      en: "https://tradersprofiler.com/thankyou/en/",
      it: "https://tradersprofiler.com/thankyou/it/",
      tr: "https://tradersprofiler.com/thankyou/tr/",
      ro: "https://tradersprofiler.com/thankyou/ro/",
      ar: "https://tradersprofiler.com/thankyou/ar/",
      de: "https://tradersprofiler.com/thankyou/de/",
      es: "https://tradersprofiler.com/thankyou/es/",
      sv: "https://tradersprofiler.com/thankyou/sv/",
      pt: "https://tradersprofiler.com/thankyou/pt/",
      fi: "https://tradersprofiler.com/thankyou/fi/",
      pl: "https://tradersprofiler.com/thankyou/pl/",
      hu: "https://tradersprofiler.com/thankyou/hu/",
      th: "https://tradersprofiler.com/thankyou/th/",
      ms: "https://tradersprofiler.com/thankyou/ms/",
      vi: "https://tradersprofiler.com/thankyou/vi/",
    },
    recaptchaKey: "6LeNcU4rAAAAAF27YGiKuEBjnKWf9-zSFX7z5BPL",
    privacyLink: {
      en: "https://tradersprofiler.com/privacypolicy/en/",
      it: "https://tradersprofiler.com/privacypolicy/en/",
      tr: "https://tradersprofiler.com/privacypolicy/en/",
      ro: "https://tradersprofiler.com/privacypolicy/en/",
      ar: "https://tradersprofiler.com/privacypolicy/en/",
      de: "https://tradersprofiler.com/privacypolicy/en/",
      es: "https://tradersprofiler.com/privacypolicy/en/",
      sv: "https://tradersprofiler.com/privacypolicy/en/",
      pt: "https://tradersprofiler.com/privacypolicy/en/",
      fi: "https://tradersprofiler.com/privacypolicy/en/",
      pl: "https://tradersprofiler.com/privacypolicy/en/",
      hu: "https://tradersprofiler.com/privacypolicy/en/",
      th: "https://tradersprofiler.com/privacypolicy/en/",
      ms: "https://tradersprofiler.com/privacypolicy/en/",
      vi: "https://tradersprofiler.com/privacypolicy/en/",
    },
    whatsapp: whatsapp,
    whatsappNumber: whatsappNumber(),
    images: {
      logoSVG: {
        default: defaultLogo,
        original: original,
      },
      faviconLink: "https://tradersprofiler.com/global_assets/imgs/favicon.png",
    },
  };
};

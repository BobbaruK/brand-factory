import type { BrandArrItem } from "../../types/brands";
import type { TradersProfilerSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import { type TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/default";
import { original } from "./logos/original";

export const tradersprofiler = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<TradersProfilerSVGVariation> => {
  return {
    nameToLower: "tradersprofiler",
    name: "Traders Profiler",
    typage: {
    en: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/en/`
      : `https://tradersprofiler.com/thankyou/en/`,
    it: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/it/`
      : `https://tradersprofiler.com/thankyou/it/`,
    tr: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/tr/`
      : `https://tradersprofiler.com/thankyou/tr/`,
    ro: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/ro/`
      : `https://tradersprofiler.com/thankyou/ro/`,
    ar: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/ar/`
      : `https://tradersprofiler.com/thankyou/ar/`,
    de: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/de/`
      : `https://tradersprofiler.com/thankyou/de/`,
    es: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/es/`
      : `https://tradersprofiler.com/thankyou/es/`,
    sv: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/sv/`
      : `https://tradersprofiler.com/thankyou/sv/`,
    pt: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/pt/`
      : `https://tradersprofiler.com/thankyou/pt/`,
    fi: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/fi/`
      : `https://tradersprofiler.com/thankyou/fi/`,
    pl: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/pl/`
      : `https://tradersprofiler.com/thankyou/pl/`,
    hu: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/hu/`
      : `https://tradersprofiler.com/thankyou/hu/`,
    th: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/th/`
      : `https://tradersprofiler.com/thankyou/th/`,
    ms: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/ms/`
      : `https://tradersprofiler.com/thankyou/ms/`,
    vi: drThankYou
      ? `https://tradersprofiler.com/thankyou/dr/vi/`
      : `https://tradersprofiler.com/thankyou/vi/`,
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

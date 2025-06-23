import type { BrandArrItem } from "../../types/brands";
import type { TradingProfilerSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import {
  defaultColorBlack,
  defaultColorBlackStrokeBlack,
  defaultColorWhite,
  defaultLogo,
  squareColorBlack,
  squareColorWhite,
} from "./logos";
import { defaultColorBlackStrokeWhite } from "./logos/defaultColorBlackStrokeWhite";

export const tradingprofiler = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<TradingProfilerSVGVariation> => ({
  nameToLower: "tradingprofiler",
  name: "TradingProfiler",
  typage: {
    en: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/en/`
      : `https://tradingprofiler.com/thank-you/en/`,
    it: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/it/`
      : `https://tradingprofiler.com/thank-you/it/`,
    tr: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/tr/`
      : `https://tradingprofiler.com/thank-you/tr/`,
    ro: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/ro/`
      : `https://tradingprofiler.com/thank-you/ro/`,
    ar: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/ar/`
      : `https://tradingprofiler.com/thank-you/ar/`,
    de: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/de/`
      : `https://tradingprofiler.com/thank-you/de/`,
    es: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/es/`
      : `https://tradingprofiler.com/thank-you/es/`,
    sv: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/sv/`
      : `https://tradingprofiler.com/thank-you/sv/`,
    pt: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/pt/`
      : `https://tradingprofiler.com/thank-you/pt/`,
    fi: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/fi/`
      : `https://tradingprofiler.com/thank-you/fi/`,
    pl: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/pl/`
      : `https://tradingprofiler.com/thank-you/pl/`,
    hu: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/hu/`
      : `https://tradingprofiler.com/thank-you/hu/`,
    th: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/th/`
      : `https://tradingprofiler.com/thank-you/th/`,
    ms: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/ms/`
      : `https://tradingprofiler.com/thank-you/ms/`,
    vi: drThankYou
      ? `https://tradingprofiler.com/thankyou/dr/vi/`
      : `https://tradingprofiler.com/thank-you/vi/`,
  },
  recaptchaKey: "6LekLYQjAAAAAC8K5qL3_1vgESa_o0ms2fGzTGny",
  privacyLink: {
    en: "https://tradingprofiler.com/privacypolicy/en/",
    it: "https://tradingprofiler.com/privacypolicy/it/",
    tr: "https://tradingprofiler.com/privacypolicy/tr/",
    ro: "https://tradingprofiler.com/privacypolicy/ro/",
    ar: "https://tradingprofiler.com/privacypolicy/ar/",
    de: "https://tradingprofiler.com/privacypolicy/de/",
    es: "https://tradingprofiler.com/privacypolicy/es/",
    sv: "https://tradingprofiler.com/privacypolicy/sv/",
    pt: "https://tradingprofiler.com/privacypolicy/pt/",
    fi: "https://tradingprofiler.com/privacypolicy/fi/",
    pl: "https://tradingprofiler.com/privacypolicy/pl/",
    hu: "https://tradingprofiler.com/privacypolicy/hu/",
    th: "https://tradingprofiler.com/privacypolicy/th/",
    ms: "https://tradingprofiler.com/privacypolicy/ms/",
    vi: "https://tradingprofiler.com/privacypolicy/vi/",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
      defaultColorBlack: defaultColorBlack,
      defaultColorWhite: defaultColorWhite,
      defaultColorBlackStrokeBlack: defaultColorBlackStrokeBlack,
      defaultColorBlackStrokeWhite: defaultColorBlackStrokeWhite,
      squareColorBlack: squareColorBlack,
      squareColorWhite: squareColorWhite,
    },
    faviconLink: "https://tradingprofiler.com/global_assets/imgs/favicon.png",
  },
});

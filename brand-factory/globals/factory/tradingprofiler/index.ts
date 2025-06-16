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
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
}): BrandArrItem<TradingProfilerSVGVariation> => ({
  id: 14,
  nameToLower: "tradingprofiler",
  name: "TradingProfiler",
  typage: {
    en:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/en/`
        : `https://tradingprofiler.com/thank-you/en/`,
    it:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/it/`
        : `https://tradingprofiler.com/thank-you/it/`,
    tr:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/tr/`
        : `https://tradingprofiler.com/thank-you/tr/`,
    ro:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/ro/`
        : `https://tradingprofiler.com/thank-you/ro/`,
    ar:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/ar/`
        : `https://tradingprofiler.com/thank-you/ar/`,
    de:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/de/`
        : `https://tradingprofiler.com/thank-you/de/`,
    es:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/es/`
        : `https://tradingprofiler.com/thank-you/es/`,
    sv:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/sv/`
        : `https://tradingprofiler.com/thank-you/sv/`,
    pt:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/pt/`
        : `https://tradingprofiler.com/thank-you/pt/`,
    fi:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/fi/`
        : `https://tradingprofiler.com/thank-you/fi/`,
    pl:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/pl/`
        : `https://tradingprofiler.com/thank-you/pl/`,
    hu:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/hu/`
        : `https://tradingprofiler.com/thank-you/hu/`,
    th:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/th/`
        : `https://tradingprofiler.com/thank-you/th/`,
    ms:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/ms/`
        : `https://tradingprofiler.com/thank-you/ms/`,
    vi:
      license === "fsa"
        ? `https://tradingprofiler.com/thank-you/dr/vi/`
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

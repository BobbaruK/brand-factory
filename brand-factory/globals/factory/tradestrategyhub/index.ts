import type { BrandArrItem } from "../../types/brands";
import type { TradeStrategyHubSVGVariation } from "../../types/brands/logo";
import { Features } from "../../types/enums";
import type { LicenseType } from "../../types/lp-params-type";
import { type TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradestrategyhub = ({
  license,
  features,
  whatsapp,
  whatsappNumber,
}: {
  license: LicenseType;
  features?: Features[];
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
}): BrandArrItem<TradeStrategyHubSVGVariation> => {
  const privacyLinks = (): TranslationsType => {
    if (!features?.includes(Features.outbrain))
      return {
        en: "https://tradestrategyhub.com/privacypolicy/en/",
        it: "https://tradestrategyhub.com/privacypolicy/en/",
        tr: "https://tradestrategyhub.com/privacypolicy/en/",
        ro: "https://tradestrategyhub.com/privacypolicy/en/",
        ar: "https://tradestrategyhub.com/privacypolicy/en/",
        de: "https://tradestrategyhub.com/privacypolicy/en/",
        es: "https://tradestrategyhub.com/privacypolicy/en/",
        sv: "https://tradestrategyhub.com/privacypolicy/en/",
        pt: "https://tradestrategyhub.com/privacypolicy/en/",
        fi: "https://tradestrategyhub.com/privacypolicy/en/",
        pl: "https://tradestrategyhub.com/privacypolicy/en/",
        hu: "https://tradestrategyhub.com/privacypolicy/en/",
        th: "https://tradestrategyhub.com/privacypolicy/en/",
        ms: "https://tradestrategyhub.com/privacypolicy/en/",
        vi: "https://tradestrategyhub.com/privacypolicy/en/",
      };

    return {
      en: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      it: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      tr: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      ro: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      ar: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      de: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      es: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      sv: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      pt: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      fi: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      pl: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      hu: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      th: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      ms: "https://tradestrategyhub.com/privacypolicy/ob/en/",
      vi: "https://tradestrategyhub.com/privacypolicy/ob/en/",
    };
  };

  return {
    id: 12,
    nameToLower: "tradestrategyhub",
    name: "TradeStrategyHub",
    typage: {
      en:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/en/`
          : `https://tradestrategyhub.com/thank-you/en/`,
      it:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/it/`
          : `https://tradestrategyhub.com/thank-you/it/`,
      tr:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/tr/`
          : `https://tradestrategyhub.com/thank-you/tr/`,
      ro:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/ro/`
          : `https://tradestrategyhub.com/thank-you/ro/`,
      ar:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/ar/`
          : `https://tradestrategyhub.com/thank-you/ar/`,
      de:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/de/`
          : `https://tradestrategyhub.com/thank-you/de/`,
      es:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/es/`
          : `https://tradestrategyhub.com/thank-you/es/`,
      sv:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/sv/`
          : `https://tradestrategyhub.com/thank-you/sv/`,
      pt:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/pt/`
          : `https://tradestrategyhub.com/thank-you/pt/`,
      fi:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/fi/`
          : `https://tradestrategyhub.com/thank-you/fi/`,
      pl:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/pl/`
          : `https://tradestrategyhub.com/thank-you/pl/`,
      hu:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/hu/`
          : `https://tradestrategyhub.com/thank-you/hu/`,
      th:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/th/`
          : `https://tradestrategyhub.com/thank-you/th/`,
      ms:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/ms/`
          : `https://tradestrategyhub.com/thank-you/ms/`,
      vi:
        license === "fsa"
          ? `https://tradestrategyhub.com/thankyou/dr/vi/`
          : `https://tradestrategyhub.com/thank-you/vi/`,
    },
    recaptchaKey: "6LeapJgpAAAAABjc0UySawSAB6zKqRNwbqFiMbUk",
    privacyLink: privacyLinks(),
    whatsapp: whatsapp,
    whatsappNumber: whatsappNumber(),
    images: {
      logoSVG: {
        default: defaultLogo,
      },
      faviconLink:
        "https://tradestrategyhub.com/global_assets/imgs/favicon.png",
    },
  };
};

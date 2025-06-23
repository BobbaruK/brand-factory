import type { BrandArrItem } from "../../types/brands";
import type { TradeStrategyHubSVGVariation } from "../../types/brands/logo";
import { Features } from "../../types/enums";
import type { LicenseType } from "../../types/lp-params-type";
import { type TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradestrategyhub = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<TradeStrategyHubSVGVariation> => {
  return {
    nameToLower: "tradestrategyhub",
    name: "TradeStrategyHub",
    typage: {
      en: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/en/`
        : `https://tradestrategyhub.com/thank-you/en/`,
      it: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/it/`
        : `https://tradestrategyhub.com/thank-you/it/`,
      tr: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/tr/`
        : `https://tradestrategyhub.com/thank-you/tr/`,
      ro: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/ro/`
        : `https://tradestrategyhub.com/thank-you/ro/`,
      ar: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/ar/`
        : `https://tradestrategyhub.com/thank-you/ar/`,
      de: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/de/`
        : `https://tradestrategyhub.com/thank-you/de/`,
      es: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/es/`
        : `https://tradestrategyhub.com/thank-you/es/`,
      sv: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/sv/`
        : `https://tradestrategyhub.com/thank-you/sv/`,
      pt: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/pt/`
        : `https://tradestrategyhub.com/thank-you/pt/`,
      fi: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/fi/`
        : `https://tradestrategyhub.com/thank-you/fi/`,
      pl: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/pl/`
        : `https://tradestrategyhub.com/thank-you/pl/`,
      hu: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/hu/`
        : `https://tradestrategyhub.com/thank-you/hu/`,
      th: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/th/`
        : `https://tradestrategyhub.com/thank-you/th/`,
      ms: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/ms/`
        : `https://tradestrategyhub.com/thank-you/ms/`,
      vi: drThankYou
        ? `https://tradestrategyhub.com/thankyou/dr/vi/`
        : `https://tradestrategyhub.com/thank-you/vi/`,
    },
    recaptchaKey: "6LeapJgpAAAAABjc0UySawSAB6zKqRNwbqFiMbUk",
    privacyLink: {
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
    },
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

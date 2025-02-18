import type { BrandArrItem } from "../../types/brands";
import type { TradeStrategyHubSVGVariation } from "../../types/brands/logo";
import { Features } from "../../types/enums";
import { type TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const tradestrategyhub = (
  whatsapp: boolean,
  whatsappNumber: () => TranslationsType,
  features?: Features[]
): BrandArrItem<TradeStrategyHubSVGVariation> => ({
  id: 7,
  nameToLower: "tradestrategyhub",
  name: "TradeStrategyHub",
  typage: {
    en: "https://tradestrategyhub.com/thankyou/en/",
    it: "https://tradestrategyhub.com/thankyou/it/",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: "https://tradestrategyhub.com/thankyou/es/",
    sv: "https://tradestrategyhub.com/thankyou/sv/",
    pt: "",
    fi: "",
    pl: "https://tradestrategyhub.com/thankyou/pl/",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "6LeapJgpAAAAABjc0UySawSAB6zKqRNwbqFiMbUk",
  privacyLink: {
    en: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    it: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    tr: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    ro: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    ar: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    de: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    es: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    sv: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    pt: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    fi: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    pl: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    hu: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    th: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    ms: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
    vi: !features?.includes(Features.outbrain)
      ? "https://tradestrategyhub.com/privacypolicy/en/"
      : "https://tradestrategyhub.com/privacypolicy/ob/en/",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://tradestrategyhub.com/global_assets/imgs/favicon.png",
  },
});

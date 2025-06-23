import type { BrandArrItem } from "../../types/brands";
import type { DayTradingStarSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const daytradingstar = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<DayTradingStarSVGVariation> => ({
  nameToLower: "daytradingstar",
  name: "DayTradingStar",
  typage: {
    en: "",
    it: "",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: "",
    sv: "",
    pt: "",
    fi: "",
    pl: "https://daytradingstar.com/thanks-pl.html",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "6LcgMIQjAAAAAMWXsI2BwV71Zof51ic9igSBCXOK",
  privacyLink: {
    en: "https://daytradingstar.com/privacypolicy.html",
    it: "https://daytradingstar.com/privacypolicy.html",
    tr: "https://daytradingstar.com/privacypolicy.html",
    ro: "https://daytradingstar.com/privacypolicy.html",
    ar: "https://daytradingstar.com/privacypolicy.html",
    de: "https://daytradingstar.com/privacypolicy.html",
    es: "https://daytradingstar.com/privacypolicy.html",
    sv: "https://daytradingstar.com/privacypolicy.html",
    pt: "https://daytradingstar.com/privacypolicy.html",
    fi: "https://daytradingstar.com/privacypolicy.html",
    pl: "https://daytradingstar.com/privacypolicy.html",
    hu: "https://daytradingstar.com/privacypolicy.html",
    th: "https://daytradingstar.com/privacypolicy.html",
    ms: "https://daytradingstar.com/privacypolicy.html",
    vi: "https://daytradingstar.com/privacypolicy.html",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://daytradingstar.com/global_assets/imgs/favicon.png",
  },
});

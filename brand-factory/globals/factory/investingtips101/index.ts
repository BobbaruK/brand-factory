import type { BrandArrItem } from "../../types/brands";
import type { Investingtips101SVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos";

export const investingtips101 = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<Investingtips101SVGVariation> => ({
  nameToLower: "investingtips101",
  name: "Investing Tips 101",
  typage: {
    en: "https://investingtips101.com/thanks-en.html",
    it: "https://investingtips101.com/thanks-it.html",
    tr: "",
    ro: "https://investingtips101.com/thanks-ro.html",
    ar: "",
    de: "",
    es: "https://investingtips101.com/thanks-es.html",
    sv: "https://investingtips101.com/thanks-sv.html",
    pt: "",
    fi: "",
    pl: "https://investingtips101.com/thanks-pl.html",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  recaptchaKey: "6Lcie2QjAAAAABe6qk6JiC3wvPyhbiywPGijEKjm",
  privacyLink: {
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
    pl: "",
    hu: "",
    th: "",
    ms: "",
    vi: "",
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://investingtips101.com/global_assets/imgs/favicon.svg",
  },
});

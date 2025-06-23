import type { BrandArrItem } from "../../types/brands";
import type { PiuTradingSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { blackGreen, defaultLogo } from "./logos";

export const piutrading = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<PiuTradingSVGVariation> => ({
  nameToLower: "piutrading",
  name: "Più Trading",
  typage: {
    en: "https://piutrading.com/thanks-en.html",
    it: "https://piutrading.com/thanks-en.html",
    tr: "https://piutrading.com/thanks-tr.html",
    ro: "https://piutrading.com/thanks-ro.html",
    ar: "https://piutrading.com/thanks-en.html",
    de: "https://piutrading.com/thanks-en.html",
    es: "https://piutrading.com/thanks-es.html",
    sv: "https://piutrading.com/thanks-sv.html",
    pt: "https://piutrading.com/thanks-pt.html",
    fi: "https://piutrading.com/thanks-fi.html",
    pl: "https://piutrading.com/thanks-pl.html",
    hu: "https://piutrading.com/thanks-hu.html",
    th: "https://piutrading.com/thanks-en.html",
    ms: "https://piutrading.com/thanks-en.html",
    vi: "https://piutrading.com/thanks-en.html",
  },
  recaptchaKey: "6LdCa2EjAAAAAO0nn5jZLdYCGMdTfxlPuO29d1s-",
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
      blackGreen: blackGreen,
    },
    faviconLink: "https://piutrading.com/global_assets/imgs/favicon.png",
  },
});

import type { BrandArrItem } from "../../types/brands";
import type { FXOROPartnersSVGVariation } from "../../types/brands/logo";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo, whiteGold } from "./logos";

export const fxoro_partners = ({
  whatsapp,
  whatsappNumber,
}: {
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
}): BrandArrItem<FXOROPartnersSVGVariation> => ({
  nameToLower: "fxoro_partners",
  name: "FXORO",
  typage: {
    en: ``,
    it: ``,
    tr: ``,
    ro: ``,
    ar: ``,
    de: ``,
    es: ``,
    sv: ``,
    pt: ``,
    fi: ``,
    pl: ``,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
  },
  recaptchaKey: "6LeILoQjAAAAAN_Dsbeu4ncn9Adut_tO3uK4Blnk",
  privacyLink: {
    en: ``,
    it: ``,
    tr: ``,
    ro: ``,
    ar: ``,
    de: ``,
    es: ``,
    sv: ``,
    pt: ``,
    fi: ``,
    pl: ``,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
  },

  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
      whiteOrange: whiteGold,
    },
    faviconLink: "https://fxoro.com/global_assets/imgs/favicon.svg",
  },
});

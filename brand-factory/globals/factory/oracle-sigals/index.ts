import type { BrandArrItem } from "../../types/brands";
import type { OracleSignalsSVGVariation } from "../../types/brands/logo";
import type { LicenseType } from "../../types/lp-params-type";
import type { TranslationsType } from "../../types/translations";
import { defaultLogo } from "./logos/defaultLogo";

export const oracleSignals = ({
  license,
  whatsapp,
  whatsappNumber,
  drThankYou,
}: {
  license: LicenseType;
  whatsapp: boolean;
  whatsappNumber: () => TranslationsType;
  drThankYou: boolean;
}): BrandArrItem<OracleSignalsSVGVariation> => ({
  nameToLower: "oracle-signals",
  name: "Oracle Signals",
  typage: {
    en: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/en/`
      : `https://oracle-signals.com/thank-you/en/`,
    it: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/it/`
      : `https://oracle-signals.com/thank-you/it/`,
    tr: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/tr/`
      : `https://oracle-signals.com/thank-you/tr/`,
    ro: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/ro/`
      : `https://oracle-signals.com/thank-you/ro/`,
    ar: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/ar/`
      : `https://oracle-signals.com/thank-you/ar/`,
    de: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/de/`
      : `https://oracle-signals.com/thank-you/de/`,
    es: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/es/`
      : `https://oracle-signals.com/thank-you/es/`,
    sv: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/sv/`
      : `https://oracle-signals.com/thank-you/sv/`,
    pt: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/pt/`
      : `https://oracle-signals.com/thank-you/pt/`,
    fi: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/fi/`
      : `https://oracle-signals.com/thank-you/fi/`,
    pl: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/pl/`
      : `https://oracle-signals.com/thank-you/pl/`,
    hu: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/hu/`
      : `https://oracle-signals.com/thank-you/hu/`,
    th: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/th/`
      : `https://oracle-signals.com/thank-you/th/`,
    ms: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/ms/`
      : `https://oracle-signals.com/thank-you/ms/`,
    vi: drThankYou
      ? `https://oracle-signals.com/thankyou/dr/vi/`
      : `https://oracle-signals.com/thank-you/vi/`,
  },
  recaptchaKey: "6LeSkf4qAAAAADlA-HG8iv1AsFvlSHEk5Za4d2NC",
  privacyLink: {
    en: `https://oracle-signals.com/privacy-policy/en/`,
    it: `https://oracle-signals.com/privacy-policy/it/`,
    tr: `https://oracle-signals.com/privacy-policy/tr/`,
    ro: `https://oracle-signals.com/privacy-policy/ro/`,
    ar: `https://oracle-signals.com/privacy-policy/ar/`,
    de: `https://oracle-signals.com/privacy-policy/de/`,
    es: `https://oracle-signals.com/privacy-policy/es/`,
    sv: `https://oracle-signals.com/privacy-policy/sv/`,
    pt: `https://oracle-signals.com/privacy-policy/pt/`,
    fi: `https://oracle-signals.com/privacy-policy/fi/`,
    pl: `https://oracle-signals.com/privacy-policy/pl/`,
    hu: `https://oracle-signals.com/privacy-policy/hu/`,
    th: `https://oracle-signals.com/privacy-policy/th/`,
    ms: `https://oracle-signals.com/privacy-policy/ms/`,
    vi: `https://oracle-signals.com/privacy-policy/vi/`,
  },
  whatsapp: whatsapp,
  whatsappNumber: whatsappNumber(),
  images: {
    logoSVG: {
      default: defaultLogo,
    },
    faviconLink: "https://oracle-signals.com/global_assets/imgs/favicon.png",
  },
});

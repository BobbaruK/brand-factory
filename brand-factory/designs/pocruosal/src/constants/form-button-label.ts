import type { ComponentProps } from "../../../../globals/types/component-props";
import type { TranslationsType } from "../../../../globals/types/translations";
import { textBy } from "../../../../globals/utils/text-by";

export const FORM_BUTTON_LABEL = (
  componentProps: ComponentProps,
): TranslationsType => {
  return textBy(
    {
      default: {
        en: `Open Account`,
        it: ``,
        tr: "",
        ro: "",
        ar: `افتح حسابك`,
        de: "",
        es: `Abrir Cuenta`,
        sv: ``,
        pt: ``,
        fi: "",
        pl: ``,
        hu: "",
        th: "",
        ms: "",
        vi: "",
      },
      cysec: {
        en: "",
        it: ``,
        tr: "",
        ro: "",
        ar: "",
        de: "",
        es: ``,
        sv: ``,
        pt: ``,
        fi: "",
        pl: ``,
        hu: "",
        th: "",
        ms: "",
        vi: "",
      },
    },
    "license",
    componentProps,
  );
};

import type { ReactNode } from "react";
import type { Languages, TranslationsType } from "../../types/translations";
import "./index.scss";
import type { ComponentProps } from "../../types/component-props";
import formFieldsTranslations from "../../translations/formFields";

interface Props extends React.HTMLProps<HTMLDivElement> {
  componentProps: ComponentProps;
  children: ReactNode;
}

export const ButtonDisclaimer = ({
  componentProps,
  children,
  ...restProps
}: Props) => {
  const fields = formFieldsTranslations(componentProps.brandObj);

  const paraFN = () => {
    switch (componentProps.license) {
      case "cysec":
        return fields.riskESMA_CYSEC;

      case "fsa":
        return fields.riskESMA_FSA;

      default:
        return fields.riskESMA_CYSEC;
    }
  };

  const para = paraFN();
  return (
    <div {...restProps} className={`btn-disc-wrapper ${restProps.className}`}>
      {children}

      <p className="btn-disc-wrapper--disclaimer">
        {para[componentProps.lang]}
      </p>
    </div>
  );
};

import type { ReactNode } from "react";
import type { Languages, TranslationsType } from "../../types/translations";
import "./index.scss";
import type { ComponentProps } from "../../types/component-props";
import formFieldsTranslations from "../../translations/formFields";

interface Props extends React.HTMLProps<HTMLDivElement> {
  componentProps: ComponentProps;
  children: ReactNode;
  disclaimer?: {
    active: boolean;
    text?: string;
  };
}

export const ButtonDisclaimer = ({
  componentProps,
  children,
  disclaimer,
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
    <div
      {...restProps}
      className={`btn-disc-wrapper ${
        restProps.className ? restProps.className : ""
      }`}
    >
      {children}

      {disclaimer?.active !== false && (
        <p className="btn-disc-wrapper--disclaimer">
          {disclaimer?.text ? disclaimer.text : para[componentProps.lang]}
        </p>
      )}
    </div>
  );
};

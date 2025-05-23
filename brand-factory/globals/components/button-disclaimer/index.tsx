import type { ReactNode } from "react";
import formFieldsTranslations from "../../translations/formFields";
import type { ComponentProps } from "../../types/component-props";
import "./index.scss";

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
      }`}>
      {children}

      {disclaimer?.active !== false && (
        <p
          className="btn-disc-wrapper--disclaimer"
          dangerouslySetInnerHTML={{
            __html: disclaimer?.text || para[componentProps.lang],
          }}
        />
      )}
    </div>
  );
};

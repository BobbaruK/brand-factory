import type { ReactNode } from "react";
import type { Languages, TranslationsType } from "../../types/translations";
import "./index.scss";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  lang: Languages;
}

export const ButtonDisclaimer = ({ children, lang, ...restProps }: Props) => {
  const para: TranslationsType = {
    en: `Trading CFDs is risky. You may lose all your invested capital.`,
    it: `Il trading di CFD è rischioso. Potresti perdere tutto il capitale investito.`,
    tr: ``,
    ro: `Tranzacționarea CFD-urilor este riscantă. Este posibil să pierdeți tot capitalul investit.`,
    ar: `تداول العقود مقابل الفروقات أمر محفوف بالمخاطر. قد تفقد كل رأس المال المستثمر.`,
    de: ``,
    es: `Operar con CFDs es arriesgado. Puede perder todo el capital invertido.`,
    sv: `Trading med CFD:er är mycket riskfyllt. Du kan förlora allt investerat kapital.`,
    pt: ``,
    fi: ``,
    pl: `Handel kontraktami CFD jest ryzykowny. Możesz stracić cały zainwestowany kapitał.`,
    hu: ``,
    th: ``,
    ms: ``,
    vi: ``,
  };

  return (
    <div {...restProps} className={`btn-disc-wrapper ${restProps.className}`}>
      {children}

      <p className="btn-disc-wrapper--disclaimer">{para[lang]}</p>
    </div>
  );
};

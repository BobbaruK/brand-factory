import { type BrandArrItem } from "../types/brands";
import { type BrandsNames } from "../types/brands/names";
import type { Features } from "../types/enums";
import type { LicenseType } from "../types/lp-params-type";
import { arabTradingPro } from "./arab-trading-pro";
import { daytradingstar } from "./daytradingstar";
import { facoltaditrading } from "./facoltaditrading";
import { fxoro } from "./fxoro";
import { fxoro_global } from "./fxoro_global";
import { fxoro_partners } from "./fxoro_partners";
import { investingtips101 } from "./investingtips101";
import { oracleSignals } from "./oracle-sigals";
import { piutrading } from "./piutrading";
import { protraderzone } from "./protraderzone";
import { tradeNavigator } from "./trade-navigator";
import { tradersacademic } from "./tradersacademic";
import { tradersprofiler } from "./tradersprofiler";
import { tradestrategyhub } from "./tradestrategyhub";
import { tradingatheneum } from "./trading-atheneum";
import { tradingprofiler } from "./tradingprofiler";

interface BrandFactory {
  brand: BrandsNames;
  license: LicenseType;
  whatsapp: boolean;
  features?: Features[];
  drThankYou?: boolean; // Direct Registration Thank you
}

export const brandFactory = <T>({
  brand,
  license,
  whatsapp,
  features,
  drThankYou = false,
}: BrandFactory): BrandArrItem<T> => {
  const whatsappNumber = () => {
    switch (license) {
      case "cysec":
        return {
          en: "35725205563",
          it: "35725205563",
          tr: "35725205563",
          ro: "35725205563",
          ar: "35725205563",
          de: "35725205563",
          es: "35725205563",
          sv: "35725205563",
          pt: "35725205563",
          fi: "35725205563",
          pl: "35725205563",
          hu: "35725205563",
          th: "35725205563",
          ms: "35725205563",
          vi: "35725205563",
        };

      case "fsa":
        return {
          en: "35725205558",
          it: "",
          tr: "",
          ro: "",
          ar: "",
          de: "",
          es: "573204413884",
          sv: "46790083304",
          pt: "",
          fi: "",
          pl: "48884787595",
          hu: "",
          th: "",
          ms: "",
          vi: "",
        };
    }
  };

  switch (brand) {
    case "arabtradingpro":
      return arabTradingPro({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "daytradingstar":
      return daytradingstar({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "facoltaditrading":
      return facoltaditrading({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "fxoro":
      return fxoro({
        whatsapp,
        whatsappNumber,
      }) as BrandArrItem<T>;

    case "fxoro_global":
      return fxoro_global({
        whatsapp,
        whatsappNumber,
      }) as BrandArrItem<T>;

    case "fxoro_partners":
      return fxoro_partners({
        whatsapp,
        whatsappNumber,
      }) as BrandArrItem<T>;

    case "investingtips101":
      return investingtips101({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "oracle-signals":
      return oracleSignals({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "piutrading":
      return piutrading({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "protraderzone":
      return protraderzone({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "trade-navigator":
      return tradeNavigator({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "tradersacademic":
      return tradersacademic({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "tradersprofiler":
      return tradersprofiler({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "tradestrategyhub":
      return tradestrategyhub({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "tradingatheneum":
      return tradingatheneum({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    case "tradingprofiler":
      return tradingprofiler({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;

    default:
      return investingtips101({
        license,
        whatsapp,
        whatsappNumber,
        drThankYou,
      }) as BrandArrItem<T>;
  }
};

import { Features } from "../types/enums";
import type { BrandArrItem } from "./brands";
import type {
  RegistrationType,
  LandingPageType,
  LicenseType,
} from "./lp-params-type";
import { type Languages } from "./translations";

export interface ComponentProps<TSVGLogoVariations = any, TCustomOpts = any> {
  lang: Languages;
  // dir: NotificationDirection;
  license: LicenseType;
  lpName: string;
  brandObj: BrandArrItem<TSVGLogoVariations>;
  logo: () => string;
  lpType: LandingPageType;
  registrationType: RegistrationType;
  fxoroFooter?: boolean;
  customOptions?: TCustomOpts; // any
  features?: Features[];
}

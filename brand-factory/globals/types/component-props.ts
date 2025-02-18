import { Features } from "../types/enums";
import type { BrandArrItem } from "./Brands";
import type {
  FormValidation,
  LandingPageType,
  LicenseType,
} from "./lp-params-type";
import { type Languages } from "./translations";

export interface ComponentProps<TSVGLogoVariations = any, TCustomOpts = any> {
  lang: Languages;
  dir: "rtl" | "ltr";
  license: LicenseType;
  lpName: string;
  brandObj: BrandArrItem<TSVGLogoVariations>;
  logo: () => string;
  lpType: LandingPageType;
  formValidation: FormValidation;
  fxoroFooter?: boolean;
  customOptions?: TCustomOpts; // any
  features?: Features[];
}

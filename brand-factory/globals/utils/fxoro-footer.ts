import type { BrandsNames } from "../types/brands/names";

export const fxoroFooter = (
  brand: BrandsNames,
  desiredFxoroFooter: boolean
) => {
  switch (brand) {
    case "fxoro":
      return true;

    case "fxoro_global":
      return true;

    default:
      return desiredFxoroFooter;
  }
};

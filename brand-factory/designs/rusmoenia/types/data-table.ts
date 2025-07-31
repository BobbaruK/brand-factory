import type { TranslationsType } from "../../../globals/types/translations";

export interface DataTable {
  titles: TranslationsType[];
  data: {
    advantage: TranslationsType;
    fxoro_global: {
      label: TranslationsType;
      isAvailable?: boolean;
    };
    typical_broker_exp: {
      label: TranslationsType;
      isAvailable?: boolean;
    };
  }[];
}

export interface RowTable {
  thead: TranslationsType;
  isHead?: boolean;
}

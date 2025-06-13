import type { TranslationsType } from "../../../../globals/types/translations";

export interface InfoSection {
  title: TranslationsType;
  paras?: TranslationsType[];
  list?: TranslationsType[];
}

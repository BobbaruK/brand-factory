import type { TranslationsType } from "../../../../globals/types/translations";

export interface Slide {
  id: number;
  imageUrl?: string;
  title: TranslationsType;
  para: TranslationsType;
}

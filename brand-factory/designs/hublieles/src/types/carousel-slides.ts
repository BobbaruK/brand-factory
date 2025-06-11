import type { TranslationsType } from "../../../../globals/types/translations";

export interface CarouselSlide {
  bgFlip: ImageMetadata;
  title: TranslationsType;
  description: TranslationsType;
  icon: string;
}

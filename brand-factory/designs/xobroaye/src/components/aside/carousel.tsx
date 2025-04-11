import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CustomOptions } from "@/pages/index.astro";
import type { Slide } from "@/types/slides";
import type { ComponentProps } from "../../../../../globals/types/component-props";
import { cn } from "@/lib/utils";

interface Props {
  componentProps: ComponentProps<any, CustomOptions>;
  slides: Slide[];
}

export const CarouselComp = ({ componentProps, slides }: Props) => {
  return (
    <Carousel className="h-full">
      <CarouselContent className="h-full">
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            style={{ backgroundImage: `url('${slide.imageUrl}')` }}
          >
            <div
              className={cn(
                "flex h-full flex-col gap-16 text-white",
                componentProps.customOptions?.asideType === "carousel"
                  ? "p-4 pt-16"
                  : "",
              )}
            >
              <h2 className="text-heading2 text-center font-black text-balance uppercase">
                {slide.title[componentProps.lang]}
              </h2>
              <p className="text-heading2 text-center font-black text-balance uppercase">
                {slide.para[componentProps.lang]}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="controls absolute inset-auto bottom-20 flex w-full items-center justify-between gap-4 p-4 px-16">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
};

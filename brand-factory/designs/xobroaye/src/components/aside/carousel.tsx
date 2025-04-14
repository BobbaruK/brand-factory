import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { CustomOptions } from "@/pages/index.astro";
import type { Slide } from "@/types/slides";
import { useEffect, useState } from "react";
import { showcase } from "../../../../../globals/features/showcase/text";
import type { ComponentProps } from "../../../../../globals/types/component-props";
import { Features } from "../../../../../globals/types/enums/Features";
import { Button } from "../ui/button";

interface Props {
  componentProps: ComponentProps<any, CustomOptions>;
  slides: Slide[];
}

export const CarouselComp = ({ componentProps, slides }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="h-full"
      setApi={setApi}
      opts={{
        direction: componentProps.lang === "ar" ? "rtl" : "ltr",
        loop: true,
      }}
    >
      <CarouselContent className="h-full">
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            style={{
              backgroundImage: `url('${slide.imageUrl}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className={cn(
                "flex h-full flex-col gap-16 text-white",
                componentProps.customOptions?.asideType === "carousel"
                  ? "p-4 pt-16"
                  : "",
                componentProps.lang === "ar" && slide.id === 1
                  ? "text-black"
                  : "text-white",
              )}
            >
              <h2 className="text-heading2 text-center font-black text-balance uppercase">
                {componentProps.features?.includes(Features.showcase)
                  ? showcase({
                      words: 2,
                    })
                  : slide.title[componentProps.lang]}
              </h2>
              <p className="text-heading2 text-center font-black text-balance uppercase">
                {componentProps.features?.includes(Features.showcase)
                  ? showcase({
                      words: 5,
                    })
                  : slide.para[componentProps.lang]}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className={cn(
          "controls absolute inset-auto bottom-20 flex w-full items-center justify-between gap-4 p-4 px-16",
        )}
      >
        <CarouselPrevious
          className={cn(
            "static translate-none transform-none",
            componentProps.lang === "ar" ? "scale-x-[-1]" : "",
          )}
        />
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant={index + 1 === current ? "secondary" : "default"}
              size={"icon"}
              className="size-4 rounded-full"
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <span className="hidden">{index + 1}</span>
            </Button>
          ))}
        </div>
        <CarouselNext
          className={cn(
            "static translate-none transform-none",
            componentProps.lang === "ar" ? "scale-x-[-1]" : "",
          )}
        />
      </div>
    </Carousel>
  );
};

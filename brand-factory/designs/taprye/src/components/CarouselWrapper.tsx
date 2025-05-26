import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Slide } from "@/types/slide";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import type { Languages } from "../../../../globals/types/translations";

interface Props {
  slides: Slide[];
  lang: string;
}

const CarouselWrapper = ({ slides, lang }: Props) => {
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
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {slides.map((slide, index) => {
            function createMarkup() {
              return { __html: slide.para[lang as Languages] };
            }

            return (
              <CarouselItem
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                key={index}
              >
                <div className="flex h-full flex-col items-center justify-start gap-4 p-4 text-center">
                  <img
                    src={slide.image.src}
                    alt="Logo"
                    width={slide.image.width}
                    height={slide.image.height}
                    className="h-28 w-32 object-contain"
                  />
                  <p dangerouslySetInnerHTML={createMarkup()} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="text-secondary hover:bg-secondary/50 absolute top-0 bottom-0 -left-6 h-full w-10 translate-y-0 rounded-none border-transparent bg-transparent" />
        <CarouselNext className="text-secondary hover:bg-secondary/50 absolute top-0 -right-6 bottom-0 h-full w-10 translate-y-0 rounded-none border-transparent bg-transparent" />
      </Carousel>
      <div className="py-2 text-center">
        {current} of {count}
      </div>
    </>
  );
};

export default CarouselWrapper;

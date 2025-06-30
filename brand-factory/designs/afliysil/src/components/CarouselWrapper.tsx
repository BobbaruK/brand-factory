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
import type {
  Languages,
  TranslationsType,
} from "../../../../globals/types/translations";

interface Props {
  slides: Slide[];
  lang: Languages;
}

const CarouselWrapper = ({ slides, lang }: Props) => {
  // const [api, setApi] = useState<CarouselApi>();
  // const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1);
  //   });
  // }, [api]);

  // const carouselPages = (): TranslationsType => {
  //   return {
  //     en: `${current} of ${count}`,
  //     it: `${current} di ${count}`,
  //     tr: `${count} üzerinden ${current}`,
  //     ro: `${current} din ${count}`,
  //     ar: `${current} من ${count}`,
  //     de: `${current} von ${count}`,
  //     es: `${current} de ${count}`,
  //     sv: `${current} av ${count}`,
  //     pt: `${current} de ${count}`,
  //     fi: `${current} / ${count}`,
  //     pl: `${current} z ${count}`,
  //     hu: `${count}-ból/ből ${current}`,
  //     th: `${current} จาก ${count}`,
  //     ms: `${current} daripada ${count}`,
  //     vi: `${current} trên ${count}`,
  //   };
  // };

  return (
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        // setApi={setApi}
        className="relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {slides.map((slide, index) => {
            function createMarkup() {
              return { __html: slide[lang] };
            }

            return (
              <CarouselItem className="pl-2 md:pl-4 xl:basis-1/3" key={index}>
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <p
                    dangerouslySetInnerHTML={createMarkup()}
                    className="relative ps-8 text-lg text-balance before:absolute before:start-0 before:top-[50%] before:me-2 before:-translate-y-[6px] before:text-7xl before:leading-0 before:content-['\2022']"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="text-secondary hover:bg-secondary/50 absolute top-0 bottom-0 -left-6 h-full w-10 translate-y-0 rounded-none border-transparent bg-transparent" />
        <CarouselNext className="text-secondary hover:bg-secondary/50 absolute top-0 -right-6 bottom-0 h-full w-10 translate-y-0 rounded-none border-transparent bg-transparent" />
      </Carousel>
      {/* <div
        className="py-2 text-center"
        dangerouslySetInnerHTML={{ __html: carouselPages()[lang] }}
      /> */}
    </>
  );
};

export default CarouselWrapper;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselSlide } from "@/types/carousel-slides";
import { showcase } from "../../../../globals/features/showcase/text";
import type { ComponentProps } from "../../../../globals/types/component-props";
import { Features } from "../../../../globals/types/enums";

interface Props {
  slides: CarouselSlide[];
  componentProps: ComponentProps;
}

export function CarouselWrapper({ slides, componentProps }: Props) {
  return (
    <Carousel
      className="flex flex-row items-center gap-2"
      opts={{
        align: "start",
        loop: true,
        direction: componentProps.lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <CarouselPrevious className="static hidden sm:flex lg:hidden" />
      <div className="w-full">
        <CarouselContent className="-ml-2 py-14 md:-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem
              className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              key={index}
            >
              <div className="grid gap-12 space-y-10 sm:gap-16 md:space-y-0">
                <div className="group h-[420px] w-full [perspective:1000px] md:h-[480px]">
                  <div className="relative h-full w-full rounded-xl border-4 border-white shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front face with image */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-[#0a4c64] bg-[radial-gradient(#07394b_1px,_transparent_1px)] bg-[length:10px_10px] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-start gap-6 p-4 text-[18px] md:text-[24px]">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: slide.icon,
                          }}
                          className="size-[80px] [&>svg]:h-full [&>svg]:w-full"
                        />

                        <h3 className="text-accent text-center font-extrabold uppercase">
                          {componentProps.features?.includes(Features.showcase)
                            ? showcase({
                                words: 5,
                              })
                            : slide.title[componentProps.lang]}
                        </h3>
                        <p className="my-auto text-center text-pretty">
                          {componentProps.features?.includes(Features.showcase)
                            ? showcase({
                                words: 15,
                              })
                            : slide.description[componentProps.lang]}
                        </p>
                      </div>
                    </div>
                    {/* Back face with text */}
                    <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] rounded-xl bg-black/80 text-center text-slate-200 [backface-visibility:hidden]">
                      {slide.bgFlip && (
                        <img
                          className="inset-0 z-0 h-full w-full cursor-pointer rounded-xl object-cover"
                          src={slide.bgFlip.src}
                          alt={
                            componentProps.features?.includes(Features.showcase)
                              ? showcase({
                                  words: 3,
                                })
                              : slide.title[componentProps.lang]
                          }
                          width={320}
                          height={320}
                        />
                      )}
                      <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl p-4 [backface-visibility:hidden]">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: slide.icon,
                          }}
                          className="bg-accent text-accent-foreground block h-[80px] w-[80px] rounded-full p-3 [&>svg]:h-auto [&>svg]:w-full"
                        />

                        <h3 className="text-accent text-center text-[24px] font-extrabold uppercase [text-shadow:_2px_2px_0_rgb(0_0_0_/_90%)] md:text-[32px]">
                          {componentProps.features?.includes(Features.showcase)
                            ? showcase({
                                words: 3,
                              })
                            : slide.title[componentProps.lang]}
                        </h3>
                      </div>
                      <div className="absolute -right-[1px] bottom-0 z-20 size-20 text-red-500">
                        <div className="absolute -right-[1px] bottom-0 z-0 size-10 bg-white [clip-path:_polygon(100%_0,_0%_100%,_100%_100%)]"></div>{" "}
                        <div className="absolute -right-[1px] bottom-0 z-10 size-14 bg-white/50 [clip-path:_polygon(100%_0,_0%_100%,_100%_100%)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
          {/* <CarouselItem className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </>
          </CarouselItem>
          <CarouselItem className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </CarouselItem> */}
        </CarouselContent>
      </div>
      <CarouselNext className="static hidden sm:flex lg:hidden" />
    </Carousel>
  );
}

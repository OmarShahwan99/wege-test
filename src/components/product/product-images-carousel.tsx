"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductSlider({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className=" space-y-5">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-primary/10">
                <Image src={image} alt="" fill className="object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        className="w-full max-w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="px-4 gap-3">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "basis-1/5 cursor-pointer rounded-lg overflow-hidden relative w-full p-0",
                current === index + 1 ? "border-2 border-primary" : ""
              )}
              onClick={() => handleThumbClick(index)}
            >
              <div className="relative w-full h-24 bg-primary/10">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

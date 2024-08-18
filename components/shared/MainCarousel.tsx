import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function MainCarousel() {
  return (
    <Carousel className="w-full sm:max-w-lg max-w-64  max mt-5">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full flex gap-5">
              <Card className="p-0 relative w-[520px] h-[300px] rounded-lg">
                <Image
                  src="/assets/images/bg.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

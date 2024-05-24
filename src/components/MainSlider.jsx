import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function MainSlider() {
  return (
    <div className="flex lg:w-fit w-full justify-center">
    <Carousel
      className="w-[75%] max-w-[990px]"
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} >
              <img src="bannerimage.jpeg" alt="" className="w-full"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
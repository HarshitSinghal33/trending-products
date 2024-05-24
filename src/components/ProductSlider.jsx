import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import useFetchProducts from "@/hook/useFetchProducts"
import Loader from "./Loader"
import Error from "./Error"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

export function ProductSlider() {
    const { products, error, loading } = useFetchProducts()
    if (loading) return <Loader />
    if (error) return <Error error={error} />
    return (
        <div className="flex justify-center w-full mt-3">
        <Carousel className="w-[75%]">
        <h1 className="text-3xl font-semibold my-0.5">Trending Products</h1>
            <CarouselContent>
                {products.map(product => {
                    const { image, id, title } = product
                    return (
                        <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/3 mb-6">
                            <div className="p-1">
                                <Card className='shadow-xl'>
                                    <CardContent className="flex aspect-square items-center justify-center gap-x-3 p-6">
                                        <AspectRatio ratio={16 / 9}>
                                            <img src={image} alt="Image" className="rounded-md object-cover" />
                                        </AspectRatio>
                                        <span className="text-2xl font-semibold">{title}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
    )
}

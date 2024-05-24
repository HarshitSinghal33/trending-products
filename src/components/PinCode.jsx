import React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function PinCode() {
    return (
        <div className="lg:none lg:justify-normal flex justify-center ">
            <Card className="max-w-[360px] shadow-lg p-3 w-full my-6 lg:my-0">
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4 text-center">
                            <div className="flex justify-center "><img src="pincode.png" alt="" className="w-24" /></div>

                            <p className="text-slate-400 font-semibold">Your Delivery Pincode</p>

                            <p className="font-medium">Enter your pincode to check availability and faster delivery options.</p>
                            <div className="flex flex-col space-y-1.5">
                                <Input id="name" placeholder="Enter Pincode" className="focus-visible:ring-transparent" />
                            </div>
                        </div>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-between gap-3">
                    <Button className='grow bg-stone-600'>SUBMIT</Button>
                    <Button className='bg-zinc-400'>NEXT</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

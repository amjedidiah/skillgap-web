"use client"

import Image from "next/image";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialogcopy"

type Props = {
    item: string;
    icon: string;
}

function DataCardItem({item, icon} : Props) {
    return (
        <div className="flex-1 bg-white rounded-[8px] h-[173px] p-[24px]">
            <div className="flex">
                <div className="grow grid">
                    <div 
                        className="bg-[#F5F5F5] w-[44px] h-[44px] 
                        flex justify-center items-center rounded-[100%]">
                        <Image 
                            src={icon}
                            width={20}
                            height={19}
                            alt=""
                            className=""
                        />
                    </div>
                    <div className="flex grow">

                    </div>
                    <div className=" flex items-end space-x-[24px]">
                        <div>
                            <div className="text-[12px] text-[#8F8F8F]">
                                Total
                            </div>
                            <div className="text-[16px]">
                                {item}
                            </div>
                        </div>
                        <div 
                            className=" text-[#2A9D0D] bg-[#E2FEE6] 
                            py-[5px] px-[10px] text-[10px] rounded-[4px]">
                            23+ This week
                        </div>
                    </div>
                </div>
                <div 
                    className="space-y-[48px] 
                    flex flex-col items-center">
                    <div className="font-[500px] text-[24px]">
                        33,445
                    </div>
                    <div className="">
                        <Image
                            src="/images/elements24.svg"
                            width={67.871}
                            height={40.959}
                            // width={85}
                            // height={75}
                            alt=""
                            className="" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DataCard() {
    return (
        <div className="flex w-[100%] space-x-[24px]">
            <div className="w-[50%]">
                <DataCardItem item={"Dispute"} icon={"/images/elements23.svg"}/>
            </div>
            <div className="w-[50%]">
                <DataCardItem item={"Disputes"} icon={"/images/elements21.svg"}/>
            </div>
        </div>
    )
}
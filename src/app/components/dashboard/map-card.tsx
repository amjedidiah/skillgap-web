import Image from "next/image";

export default function MapCard() {
    return (
        <div className="h-[479px] rounded-[8px] w-[55%] bg-white py-[16px] px-[24px] space-y-[25px]">
            <div className="space-y-[24px]">
                <div className="flex items-end">
                    <div>
                        <div className="text-[14px] text-[#8F8F8F]">
                            Total
                        </div>
                        <div className="text-[20px]">
                            Regional Users
                        </div>
                    </div>
                    <div className="grow">

                    </div>
                    <div className="flex items-end space-x-[2px]">
                        <div className="text-[#8F8F8F] text-[14px] pb-[3px]">
                            Active Users
                        </div>
                        <div className="text-[20px]">
                            5,435,353
                        </div>
                    </div>
                    <div className="grow">

                    </div>
                    <div className="flex">
                        <div 
                            className="flex py-[4px] px-[4px] 
                            border-solid border-[#E6E6E6] border-[1px] rounded-[4px]">
                            <div className="text-[12px] text-[#8F8F8F]">
                                Weekly
                            </div>
                            <div className="px-[6px] flex">
                                <Image 
                                    src="/images/elements33.svg"
                                    alt=""
                                    width={14}
                                    height={14}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <Image
                            src="/images/worldColor.svg"
                            width={688.767}
                            height={393.26}
                            alt=""
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex space-x-[40px] justify-center">
                <div className="flex items-center space-x-[16px]">
                    <div className="w-[24px] h-[24px] bg-[#D2BD8A] rounded-full">

                    </div>
                    <div className="text-[14px]">
                        <div>
                            42%
                        </div>
                        <div className="text-[12px] text-[#8F8F8F] mt-[-4px]">
                            Nigeria
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-[16px]">
                    <div className="w-[24px] h-[24px] bg-[#7699BB] rounded-full">

                    </div>
                    <div className="text-[14px]">
                        <div>
                            42%
                        </div>
                        <div className="text-[12px] text-[#8F8F8F] mt-[-4px]">
                            Nigeria
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-[16px]">
                    <div className="w-[24px] h-[24px] bg-[#FFDC49] rounded-full">

                    </div>
                    <div className="text-[14px]">
                        <div>
                            42%
                        </div>
                        <div className="text-[12px] text-[#8F8F8F] mt-[-4px]">
                            Nigeria
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-[16px]">
                    <div className="w-[24px] h-[24px] bg-[#1D9BF0] rounded-full">

                    </div>
                    <div className="text-[14px]">
                        <div>
                            42%
                        </div>
                        <div className="text-[12px] text-[#8F8F8F] mt-[-4px]">
                            Nigeria
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-[16px]">
                    <div className="w-[24px] h-[24px] bg-[#9DED1A] rounded-full">

                    </div>
                    <div className="text-[14px]">
                        <div>
                            42%
                        </div>
                        <div className="text-[12px] text-[#8F8F8F] mt-[-4px]">
                            Nigeria
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
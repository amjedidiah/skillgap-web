import Image from "next/image";

export default function Datacard() {
    return (
        <div className="flex-1 bg-white rounded-[8px] h-[173px] p-[24px]">
            <div className="flex">
                <div className="grow grid">
                    <div 
                        className="bg-[#F5F5F5] w-[44px] h-[44px] 
                        flex justify-center items-center rounded-full">
                        <Image 
                            src="/images/elements23.svg"
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
                                Dispute
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
                    <div>
                        <Image
                            src="/images/elements24.svg"
                            width={67.871}
                            height={40.959}
                            alt=""
                            className="" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
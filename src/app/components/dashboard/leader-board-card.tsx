import { SGSKCoin } from "@/lib/icons"
import Image from "next/image"

function LeaderboardItem({styleI, key}) {
    // style = "green-300"
    return (
        <div className={`flex space-x-[24px] py-[10px] mr-[36px] bg-${styleI} items-center`}>
            <div className="flex space-x-[16px] items-center">
                <div 
                    style = {
                        {
                            backgroundImage : `url(${"/images/pngyellow.png"})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            width: "24px",
                            height: "24px"
                        }
                    }
                    className="flex justify-center items-center"
                    >
                        <div className="text-[#E7F4FD] text-[10px]">
                            {key}2
                        </div>
                </div>
                <div className="">
                    <Image 
                        src="/images/elements26.png"
                        width={40}
                        height={40}
                        alt=""
                        className=""
                    />
                </div>
            </div>
            <div className="flex w-[100%] text-[14px] items-center">
                <div className="flex justify-center items-center">
                    Agnes Fortune
                </div>
                <div className="flex grow">

                </div>
                <div className="flex space-x-[4.4px]">
                    <div>
                        <SGSKCoin />
                    </div>
                    <div className="text-[16px] text-[#8F8F8F]">
                        5000
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Leaderboard() {

    const items = [1,2,3,4,5,6,7,8,9,10,11]

    return (
        <div className="bg-white h-[479px] w-[45%] rounded-[8px] pl-[36px] pt-[20px]">
            <div className="flex space-x-[10px] justify-center items-center w-fit py-[10px]">
                <div className="text-[20px]">
                    Leader Board
                </div>
                <div className="text-[12px] text-[#8F8F8F]">
                    (This week)
                </div>
            </div>
            <div className=" cardScroll overflow-y-scroll h-[82%]">
                <div>
                    {items.map((item, key) => 
                        // <LeaderboardItem style={key % 2 === 0 ? '[#F7F7F7]' : 'white' }/>
                        <LeaderboardItem index={key}/>

                    )}
                </div>
            </div>
        </div>
    )
}
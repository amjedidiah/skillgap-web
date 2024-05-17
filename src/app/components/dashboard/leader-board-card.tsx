import Image from "next/image"

function LeaderboardItem() {
    return (
        <div className="flex space-x-[21px]">
            <div>
                <Image 
                    src="/images/elements26.png"
                    width={32}
                    height={32}
                    alt=""
                    className=""
                />
            </div>
            <div className="flex w-[100%]">
                <div>
                    Agnes Fortune
                </div>
                <div className="flex grow">

                </div>
                <div>
                    5000
                </div>
            </div>
        </div>
    )
}

export default function Leaderboard() {

    const items = [1,2,3,4,5,6,7,8,9,10,11]

    return (
        <div className="bg-white h-[463px] w-[593px] rounded-[8px] pl-[20px] pt-[20px]">
            <div className="flex space-x-[10px] justify-center items-center w-fit">
                <div className="text-[20px]">
                    Leader Board
                </div>
                <div className="text-[12px] text-[#8F8F8F]">
                    (This week)
                </div>
            </div>
            <div className="overflow-y-scroll h-[70%]">
                <div>
                    {items.map((item, key) => 
                        <LeaderboardItem />
                    )}
                </div>
            </div>
        </div>
    )
}
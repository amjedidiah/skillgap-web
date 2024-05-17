import Image from "next/image"

function LeaderboardItem({style}) {
    // style = "green-300"
    return (
        <div className={`flex space-x-[21px] py-[10px] mr-[36px] bg-${style} pr-[24px]`}>
            <div className="">
                <Image 
                    src="/images/elements26.png"
                    width={32}
                    height={32}
                    alt=""
                    className=""
                />
            </div>
            <div className="flex w-[100%] text-[14px] pl-[24px]">
                <div className="flex justify-center items-center">
                    Agnes Fortune
                </div>
                <div className="flex grow">

                </div>
                <div className="text-[16px] text-[#8F8F8F]">
                    5000
                </div>
            </div>
        </div>
    )
}

export default function Leaderboard() {

    const items = [1,2,3,4,5,6,7,8,9,10,11]

    return (
        <div className="bg-white h-[463px] w-[40%] rounded-[8px] pl-[36px] pt-[20px]">
            <div className="flex space-x-[10px] justify-center items-center w-fit py-[10px]">
                <div className="text-[20px]">
                    Leader Board
                </div>
                <div className="text-[12px] text-[#8F8F8F]">
                    (This week)
                </div>
            </div>
            <div className="overflow-y-scroll h-[86%]">
                <div>
                    {items.map((item, key) => 
                        <LeaderboardItem style={key % 2 === 0 ? '[#F7F7F7]' : 'white' }/>
                    )}
                </div>
            </div>
        </div>
    )
}
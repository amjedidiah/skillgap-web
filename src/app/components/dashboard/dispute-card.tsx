import Image from "next/image"

function DisputeCarditem() {
    // style = "green-300"
    return (
        <tr>
            <div className="flex w-[100%] text-[14px] pl-[24px] text-[#8F8F8F]">
                <td>
                    <div className="flex justify-center items-center pr-[136px]">
                        CODM
                    </div>
                </td>
                <td>
                    <div className="text-[16px] text-[#8F8F8F] pr-[76px]">
                        2454766356
                    </div>
                </td>
                <td>
                    <div className="pr-[36px]">
                        27 July, 2024 | 4:00PM
                    </div>
                </td>
                <td>
                    <div>
                        Emmanuel Rivers, Ben Ki..
                    </div>
                </td>
            </div>
        </tr>
    )
}

export default function DisputeCard() {

    const items = [1,2,3,4,5,6,7,8,9,10,11]

    return (
        <div className="bg-white h-[463px] w-[593px] rounded-[8px] pl-[36px] pt-[20px]">
            <div className="flex space-x-[10px] justify-center items-center w-fit py-[10px]">
                <div className="text-[20px]">
                    Dispute
                </div>
                <div className="text-[12px] text-[#8F8F8F]">
                    (This week)
                </div>
            </div>
            <div className="overflow-y-scroll overflow-x-scroll h-[70%]">
                <div className="w-[800px]">
                    <table>
                        {items.map((item, key) => 
                            <DisputeCarditem />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}
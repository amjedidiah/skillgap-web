// export default function DashboardBody() {
    
//     return (
//         <div className="bg-[#1D9BF0] rounded-[8px] h-[160px] flex flex-col justify-center pl-[24px]">
//             <div className="text-[#E7F4FD] text-[24px]">
//                 Welcome Back,
//             </div>
//             <div className="text-[#E7F4FD] text-[32px] font-[600px]">
//                 Wisdom Umanah
//             </div>
//         </div>
//     )
// }

export default function DashboardBody() {
    
    return (
        <div 
            style = {
                {
                    backgroundImage : `url(${"/images/bannerPNG.png"})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // width: "100vw",
                    height: "160px",
                    // borderRadius : '14px',
                    // paddingLeft : '24px',
                }
            }
            className="bg-[#1D9BF0] rounded-[8px] h-[160px] flex flex-col justify-center pl-[24px]"
            >
            <div className="text-[#E7F4FD] text-[24px]">
                Welcome Back,
            </div>
            <div className="text-[#E7F4FD] text-[32px] font-[1600px]">
                Wisdom Umanah
            </div>
        </div>
    )
}
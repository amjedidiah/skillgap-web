import Image from "next/image"

export default function NotificationCard() {

    return (
        <div className="h-[56px] w-[56px] bg-white rounded-[16px] flex justify-center items-center p-[16px]">
            <Image 
                src="/images/elements.svg" 
                width={24} 
                height={24} 
                alt="notification"
                className="rounded-[16px]"
            />
        </div>
    )
}
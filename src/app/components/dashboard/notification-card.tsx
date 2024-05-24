import Image from "next/image"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

export default function NotificationCard() {

    return (
        <div>
        <Dialog>
        <DialogTrigger>
            <div className="h-[56px] w-[56px] bg-white rounded-[16px] flex justify-center items-center p-[16px]">
                <Image 
                    src="/images/elements.svg" 
                    width={24} 
                    height={24} 
                    alt="notification"
                    className="rounded-[16px]"
                />
            </div></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[24px]">Notification</DialogTitle>
            <DialogDescription className="space-y-[24px]">
                <div>
                    Notification Items go in here ...
                </div>
                <div>
                    Notification Items go in here ...
                </div>
                <div>
                    Notification Items go in here ...
                </div>
                <div>
                    Notification Items go in here ...
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    )
}
"use client"

import DataCard from "@/components/disputes/data-card";
import DisputeCard from "@/components/disputes/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialogcopy"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



import { SGAttentionIcon } from "@/lib/icons";


export default function Dispute() {
  return (
      <div className="h-fit space-y-[24px]">
        <div>
          <DataCard />
        </div>
        <div className="space-y-[24px]">
          <div className="flex space-x-[24px]">
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <div> 

                    <div className="text-[24px] mb-[14px]">
                      Dispute Detials 
                    </div>

                    <div className="text-[#8F8F8F] text-[16px] text-nowrap font-[400] mb-[32px]">
                      Carefully go through the Insight into user disagreements and resolution Status
                    </div>
                    
                    <div 
                      className="flex space-x-[8px] bg-[#FFEEEB] rounded-[8px] mb-[24px]
                      py-[8px] pl-[17px] pr-[53px]">

                      <div>
                        <SGAttentionIcon />
                      </div>

                      <div className="text-[12px] space-y-[8px]">
                        <div> Attention </div>
                        <div className="text-[#313335] text-nowrap font-[500]">
                          Dispute Details contain sensitive information. Handle with confidentiality and ensure fair resolution practices are followed at all times
                        </div>
                      </div>

                    </div>

                  </div>
                  </DialogTitle>
                <DialogDescription>
                  <div>

                    <div>

                      <div className="flex">
                        <div className="w-[30%]">
                          Contest  Details
                        </div>
                        <div>
                          23 March, 2024 | 2:42pm
                        </div>
                      </div>

                      <div className="flex">
                        <div className="w-[30%]">Total Stake</div>
                        <div>$1000</div>
                      </div>

                      <div className="flex">
                        <div className="w-[30%]">Contest Mode</div>
                        <div>Online</div>
                      </div>

                      <div className="flex">
                        <div className="w-[30%]">Dispute status</div>
                        <div>Pending</div>
                      </div>

                      <div className="flex">
                        <div className="w-[30%]">Conest name</div>
                        <div>CODM</div>
                      </div>

                    </div> 

                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          </div>
          <div className="flex space-x-[16px]">

            <div 
              className="flex text-[#1D9BF0] text-[12px] rounded-[4px] 
              border-solid border-[#1D9BF0] border-[1px] p-[8px] bg-[#E7F4FD]
              space-x-[8px] justify-center items-center">
              <div>
                All
              </div>
              <div 
                className="text-[8px] bg-[#1D9BF0] rounded-[4px] text-[#E7F4FD] 
                flex justify-center items-center p-[4px]">
                645
              </div>
            </div>

            <div
              className="flex text-[#8F8F8F] text-[12px] rounded-[4px] 
              border-solid border-[#8F8F8F] border-[1px] p-[8px] bg-[#EAEAEB]
              space-x-[8px] justify-center items-center">
              <div>
                Ongoing
              </div>
              <div 
                className="text-[8px] bg-[#8F8F8F] rounded-[4px] text-[#EAEAEB] 
                flex justify-center items-center p-[4px]">
                645
              </div>
            </div>

            <div
              className="flex text-[#8F8F8F] text-[12px] rounded-[4px] 
              border-solid border-[#8F8F8F] border-[1px] p-[8px] bg-[#EAEAEB]
              space-x-[8px] justify-center items-center">
              <div>
                Resolved
              </div>
              <div 
                className="text-[8px] bg-[#8F8F8F] rounded-[4px] text-[#EAEAEB] 
                flex justify-center items-center p-[4px]">
                645
              </div>          
            </div>

          </div>
          <div className="flex space-x-[24px]">
            <DisputeCard />
          </div>
        </div>
      </div>
  );
}

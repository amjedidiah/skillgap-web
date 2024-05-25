"use client"
import React, { useEffect } from 'react';

import { MenubarDemo } from "./earnings-menu";
import ChartComponent from './chartComponent';


export default function EarningsCard() {
    return (
        <div className="bg-white h-[463px] w-[45%] rounded-[8px] p-[36px] space-y-[36px]">
            <div className="items-end flex">
                <div className="space-y-[13px]">
                    <div>
                        <div className="text-[#8F8F8F] text-[14px]">
                            Estimated
                        </div>
                        <div className="text-[20px]">
                            Earnings
                        </div>
                    </div>
                    <div 
                        className="flex items-center bg-[#F5F5F5] border-[#E6E6E6] border-solid border-[1px] 
                        w-fit text-[#8F8F8F] text-[12px] py-[4px] space-x-[10px] px-[4px] rounded-[4px]">
                        <div className="rounded-[4px] bg-white pt-[3.55px] pl-[4.25px] pr-[3.75px] pb-[4.45px] text-nowrap">
                            SK Coin
                        </div>
                        <svg width="5" height="18">  <line x1="5" y1="0" x2="5" y2="100" stroke="#8F8F8F" stroke-width="2" />
                        </svg>
                        <div>
                            Naira
                        </div>
                        <svg width="5" height="18">  <line x1="5" y1="0" x2="5" y2="100" stroke="#8F8F8F" stroke-width="2" />
                        </svg>
                        <div>
                            Dollars
                        </div>
                    </div>
                </div>
                <div className="bg-blue-600 grow">
                </div>
                <div className="space-y-[10px] grid justify-items-end">
                    <div className="flex items-end w-fit">
                        <div className="text-[12px] text-[#8F8F8F] pb-[3px]">
                            SK
                        </div>
                        <div className="text-[20px]">
                            5,435,353
                        </div>
                    </div>
                    <MenubarDemo />
                </div>
            </div>
            <div className="h-[70%]">
                <ChartComponent />
            </div>
        </div>
    )
}
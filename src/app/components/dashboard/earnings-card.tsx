"use client"

import Image from "next/image";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"],
    datasets: [
    {
        label: 'dataset',
        data: [30000, 12000, 21000, 30000, 8500, 10000, 26000],
        backgroundColor: '#1D9BF0',
        borderColor: '#1D9BF0',
        borderWidth: 1,
    },
    ],
};

const options = {
    borderRadius: 4,
    layout: {
        padding: {
            // bottom: 80,
        }
    }
};

function BarChart() {
    return (
        <Bar options={options} data={data} />
    )
}

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
                    <div 
                        className="flex text-[12px] text-[#8F8F8F] p-[8px] 
                        border-solid border-[1px] border-[#E6E6E6] rounded-[4px]">
                        <div className="flex">
                            <div>
                                2024
                            </div>
                            <div className="px-[6px] flex">
                                <Image 
                                    src="/images/elements33.svg"
                                    alt=""
                                    width={14}
                                    height={14}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                Jan
                            </div>
                            <div className="px-[6px] flex">
                                <Image 
                                    src="/images/elements33.svg"
                                    alt=""
                                    width={14}
                                    height={14}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-nowrap">
                                Week 1
                            </div>
                            <div className="px-[6px] flex">
                                <Image 
                                    src="/images/elements33.svg"
                                    alt=""
                                    width={14}
                                    height={14}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <BarChart />
            </div>
        </div>
    )
}
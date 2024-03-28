"use client";
import { SGArrowRight } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const tabs = [
  {
    name: "winner",
    title: "Keep Grinding and Stay Winning",
    description:
      "Achieve financial freedom leveraging your skills. Become the best in your region",
  },
  {
    name: "champ",
    title: "Be A Champ",
    description: "Find users willing to meet offline & compete",
  },
  {
    name: "we-got-you",
    title: "We Got You",
    description:
      "Your trusted digital boardman for all group or peer to Peer wagers",
  },
  {
    name: "ref",
    title: "Play Ref and earn",
    description:
      "Become a referee and supervise skilltests for massive rewards",
  },
  {
    name: "gain-sk",
    title: "Gain SK Coins",
    description:
      "Avoid disputes on wagers or competitive contests use skillgap today",
  },
];

const HowItWorks = () => {
  const [activeName, setActiveName] = useState("winner");

  const handleSetActiveName = useDebouncedCallback(
    (name: string) => setActiveName(name),
    5
  );

  return (
    <section id="howItWorks" className="py-10 lg:py-[88px] bg-twitter-blue">
      <div className="container grid lg:grid-cols-2 gap-11 items-center">
        <div className="flex flex-col pt-[18px] pr-9 pb-[13px] pl-6">
          {tabs.map(({ title, description, name }) => (
            <div
              key={title}
              className={cn(
                "flex gap-12 hover:bg-twitter-blue-100 p-4 hover:rounded-lg hover:border-2 hover:border-black hover:shadow-winner hover:pr-8 cursor-pointer group items-center justify-between",
                {
                  "bg-twitter-blue-100 rounded-lg border-black border-2 shadow-winner pr-8":
                    activeName === name,
                }
              )}
              onMouseOver={() => handleSetActiveName(name)}
            >
              <div className="flex flex-col gap-2">
                <p className="text-unknown-200 text-xl font-bold -leading-[0.2px]">
                  {title}
                </p>
                <p
                  className={cn(
                    "text-dm-l2 group-hover:text-unknown-100 -leading-[0.16px] max-w-[425px]",
                    {
                      "text-unknown-100": activeName === name,
                    }
                  )}
                >
                  {description}
                </p>
              </div>
              <span
                className={cn("hidden group-hover:inline-block", {
                  "inline-block": activeName === name,
                })}
              >
                <SGArrowRight />
              </span>
            </div>
          ))}
        </div>
        <div>
          <Image
            src={`/images/${activeName}.png`}
            alt={activeName}
            width={622}
            height={610}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(HowItWorks);

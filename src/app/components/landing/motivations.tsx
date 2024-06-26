"use client";
import { SGArrowRight } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo, useCallback, useMemo, useState } from "react";

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

const Motivations = () => {
  const [activeName, setActiveName] = useState("winner");

  const handleSetActiveName = useCallback(
    (name: string) => setActiveName(name),
    []
  );

  const activeImage = useMemo(
    () =>
      ({
        "we-got-you":
          "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622199/we-got-you_fnj5xk.png",
        "gain-sk":
          "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622198/gain-sk_hw2p60.png",
        champ:
          "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622195/champ_gdemwy.png",
        ref: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622194/ref_mniq6m.png",
        winner:
          "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622189/winner_lbczej.png",
      }[activeName] || ""),
    [activeName]
  );

  return (
    <section className="py-10 lg:py-[88px] bg-twitter-blue">
      <div className="container grid lg:grid-cols-2 gap-6 lg:gap-11 items-center">
        <div className="max-w-full overflow-scroll py-4">
          <div className="flex lg:flex-col pt-[18px] pr-9 pb-[13px] pl-6 max-sm:order-2 max-sm:gap-3">
            {tabs.map(({ title, description, name }) => (
              <div
                key={title}
                className={cn(
                  "flex max-lg:w-48 flex-shrink-0 gap-12 hover:bg-twitter-blue-100 p-4 hover:rounded-lg hover:border-2 hover:border-black hover:shadow-winner hover:pr-8 cursor-pointer group items-center justify-between",
                  {
                    "bg-twitter-blue-100 rounded-lg border-black border-2 shadow-winner pr-8":
                      activeName === name,
                  }
                )}
                onMouseOver={() => handleSetActiveName(name)}
                onClick={() => handleSetActiveName(name)}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-unknown-200 text-lg lg:text-xl font-bold -leading-[0.2px]">
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
                  className={cn("hidden lg:group-hover:inline-block", {
                    "lg:inline-block": activeName === name,
                  })}
                >
                  <SGArrowRight />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="max-lg:order-1 flex justify-center">
          <Image
            src={activeImage}
            alt={activeName}
            width={622}
            height={610}
            className="max-lg:w-4/5 max-lg:max-w-[450px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Motivations);

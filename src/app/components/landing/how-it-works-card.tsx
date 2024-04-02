import LandingDownloadButtons from "@/components/landing/landing-download-buttons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo } from "react";

type Props = {
  title: string;
  content: string;
  hasAction?: boolean;
  count: number;
};

export default function HowItWorksCard({
  title,
  content,
  hasAction,
  count,
}: Props) {
  const bgClassName = useMemo(
    () =>
      ({
        1: "bg-light-blue",
        2: "bg-green-3",
      }[count] || "bg-light-yellow"),
    [count]
  );
  const countClassName = useMemo(
    () =>
      ({
        1: "text-twitter-blue",
        2: "text-green",
      }[count] || "text-yellow"),
    [count]
  );
  const imageSrc = useMemo(
    () =>
      ({
        1: "/images/how-it-works/download-app.png",
        2: "/images/how-it-works/create-join-contest.png",
      }[count] || "/images/how-it-works/win-and-withdraw.png"),
    [count]
  );

  return (
    <div
      key={title}
      className="grid md:grid-cols-[auto,auto] gap-8 lg:gap-24 xl:gap-[210px] md:items-center"
    >
      <div
        className={cn("max-w-[410px]", {
          "md:order-2": count === 2,
        })}
      >
        <div className="md:mb-1 flex flex-col gap-4 md:gap-6">
          <span
            className={cn(
              "w-[50px] h-[50px] inline-flex justify-center items-center rounded-full text-xl lg:text-2xl font-semibold -tracking-[0.24px]",
              bgClassName,
              countClassName
            )}
          >
            {count}
          </span>
          <div className="flex flex-col gap-3 md:gap-4">
            <h5 className="text-black text-xl lg:text-2xl font-semibold -tracking-[0.24px]">
              {title}
            </h5>
            <p className="text-grey -tracking-[0.16px]">{content}</p>
          </div>
        </div>
        {hasAction && <LandingDownloadButtons />}
      </div>
      <div
        className={cn(
          "pt-6 px-6 md:pt-10 md:px-10 lg:pt-12 lg:px-20 xl:pt-[65.5px] xl:px-[117px]",
          bgClassName,
          {
            "md:order-1": count === 2,
          }
        )}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={1716}
          height={1886}
          className="max-md:max-w-[300px] mx-auto"
        />
      </div>
    </div>
  );
}

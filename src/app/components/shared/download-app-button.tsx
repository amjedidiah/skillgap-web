"use client";

import useAppDownloadLink from "@/hooks/use-app-download-link";
import { isAppLive } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HTMLAttributes, memo } from "react";

const DownloadAppButton = ({
  className,
  onClick,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
  const { handleDownloadApp } = useAppDownloadLink();

  return (
    <button
      className={cn(
        {
          hidden: !isAppLive,
        },
        "outline-none px-6 py-4 rounded-[2rem] border border-twitter-blue bg-twitter-blue text-white",
        className
      )}
      onClick={() => handleDownloadApp()}
      {...rest}
    >
      Download App
    </button>
  );
};
export default memo(DownloadAppButton);

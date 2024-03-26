"use client";
import useAppDownloadLink from "@/hooks/use-app-download-link";
import { isAppLive } from "@/lib/constants";
import { SGAndroid, SGIos } from "@/lib/icons";

export default function LandingDownloadButtons() {
  const { handleDownloadApp } = useAppDownloadLink();
  if (!isAppLive) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-6 items-center justify-center">
      <button
        className="flex items-center py-4 px-6 gap-[10px] rounded-[2rem] border border-lil-dark-blue text-lil-dark-blue -tracking-[0.16px]"
        onClick={() => handleDownloadApp("android")}
      >
        <span>
          <SGAndroid />
        </span>
        <span>Android</span>
      </button>
      <button
        className="flex items-center py-4 px-6 gap-[10px] rounded-[2rem] border border-lil-dark-blue text-lil-dark-blue -tracking-[0.16px]"
        onClick={() => handleDownloadApp("ios")}
      >
        <span>
          <SGIos />
        </span>
        <span>iOS</span>
      </button>
    </div>
  );
}

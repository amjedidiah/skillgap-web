"use client";
import Image from "next/image";
import LandingHeaderNav from "@/components/landing/landing-header-nav";
import { RiMenu3Line } from "react-icons/ri";
import { memo, useCallback, useState } from "react";
import ScrollLink from "@/components/shared/scroll-link";
import { cn } from "@/lib/utils";
import useAppDownloadLink from "@/hooks/use-app-download-link";
import { isAppLive } from "@/lib/constants";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const { handleDownloadApp } = useAppDownloadLink();

  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-white border-b border-grey-100">
      <div className="container">
        <div className="flex justify-between items-center py-6 gap-6 sm:gap-8 relative h-[103px]">
          <ScrollLink to="home">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={52}
              height={52}
              className="rounded-lg"
            />
          </ScrollLink>
          <LandingHeaderNav isOpen={isMenuOpen} />
          <button
            className={cn(
              {
                hidden: !isAppLive,
              },
              "outline-none px-6 py-4 rounded-[2rem] border border-twitter-blue bg-twitter-blue text-white"
            )}
            onClick={() => handleDownloadApp()}
          >
            Download App
          </button>
          <button
            className="sm:hidden text-2xl border border-grey py-3 px-4 rounded-md text-grey"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <RiMenu3Line />
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(LandingHeader);

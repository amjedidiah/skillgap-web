"use client";
import Image from "next/image";
import LandingHeaderNav from "@/components/landing/landing-header-nav";
import { RiMenu3Line } from "react-icons/ri";
import { memo, useCallback, useState } from "react";
import ScrollLink from "@/components/shared/scroll-link";
import DownloadAppButton from "@/components/shared/download-app-button";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-white border-b border-grey-100">
      <div className="container">
        <div className="flex justify-between items-center py-6 gap-6 sm:gap-8 relative h-[103px]">
          <ScrollLink to="home">
            <Image
              src="https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622187/logo_bnqezc.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </ScrollLink>
          <LandingHeaderNav isOpen={isMenuOpen} />
          <DownloadAppButton />
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

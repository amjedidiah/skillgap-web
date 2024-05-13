"use client";
import Image from "next/image";
import PolicyHeaderNav from "@/components/policy/policy-header-nav";
import { RiMenu3Line } from "react-icons/ri";
import { memo, useCallback, useState } from "react";
import ScrollLink from "@/components/shared/scroll-link";
import DownloadAppButton from "@/components/shared/download-app-button";

const PolicyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-white border-b border-grey-100">
      <div className="container">
        <div className="flex justify-between items-center py-6 gap-6 md:gap-8 relative h-[103px]">
          <ScrollLink
            to="home"
            className="inline-flex gap-1 md:flex-1 items-center"
          >
            <Image
              src="https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622187/logo_bnqezc.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="font-semibold text-2xl">Policy</span>
          </ScrollLink>
          <PolicyHeaderNav isOpen={isMenuOpen} />
          <DownloadAppButton className="max-md:hidden" />
          <button
            className="md:hidden text-2xl border border-grey py-3 px-4 rounded-md text-grey"
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

export default memo(PolicyHeader);

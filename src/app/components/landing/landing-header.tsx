"use client";
import { SGLogo } from "@/lib/icons";
import LandingHeaderNav from "@/components/landing/landing-header-nav";
import { RiMenu3Line } from "react-icons/ri";
import { useCallback, useState } from "react";

export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-white border-b border-grey-100">
      <div className="container">
        <div className="flex justify-between items-center py-6 gap-6 sm:gap-8">
          <SGLogo />
          <LandingHeaderNav isOpen={isMenuOpen} />
          <button className="outline-none px-6 py-4 rounded-[2rem] border border-twitter-blue bg-twitter-blue text-white">
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
}

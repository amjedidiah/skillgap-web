import { SGLogo } from "@/lib/icons";
import LandingHeaderNav from "@/components/landing/landing-header-nav";

export default function LandingHeader() {
  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-white border-b border-grey-100">
      <div className="container">
        <div className="grid grid-rows-2 grid-cols-2 sm:flex justify-between items-center pb-0 pt-4 sm:py-6 sm:gap-8">
          <SGLogo />
          <LandingHeaderNav />
          <button className="outline-none max-sm:p-2 py-4 px-6 rounded-[2rem] border border-twitter-blue bg-twitter-blue text-white">
            Download App
          </button>
        </div>
      </div>
    </header>
  );
}

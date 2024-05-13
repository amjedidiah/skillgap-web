import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const currentYear = new Date().getFullYear();

export default function FooterContainer({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={cn("py-10 max-lg:pb-4", className)}>
      <div className="container flex flex-col gap-8 lg:gap-[46px]">
        {children}
        <div className="bg-light-grey text-center py-4 lg:py-[22px] relative after:absolute after:left-0 after:right-0 after:-top-2 after:h-[1px] after:bg-black">
          <p className="text-black-100 text-lg lg:text-xl font-semibold">
            All rights reserved. ©{currentYear} Skillgap.co
          </p>
        </div>
      </div>
    </footer>
  );
}

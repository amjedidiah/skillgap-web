"use client";
import ScrollLink from "@/components/shared/scroll-link";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import { cn } from "@/lib/utils";
import { HTMLAttributes, memo } from "react";

const PolicyNavigator = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  useScrollToSection();

  return (
    <div
      className={cn("flex flex-col gap-2 sticky top-[144px] h-fit", className)}
      {...rest}
    >
      <ScrollLink to="appRules" className="text-lg">
        App Rules
      </ScrollLink>
      <ScrollLink to="codeOfConduct" className="text-lg">
        Code of Conduct
      </ScrollLink>
    </div>
  );
};

export default memo(PolicyNavigator);

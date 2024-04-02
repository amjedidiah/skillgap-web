"use client";
import { cn } from "@/lib/utils";
import { memo } from "react";
import { Link, LinkProps } from "react-scroll";

const ScrollLink = ({
  children,
  ref,
  className,
  ...rest
}: Readonly<LinkProps>) => {
  return (
    <Link
      smooth
      spy
      offset={-104}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default memo(ScrollLink);

import {
  SGDashboardDisputes,
  SGDashboardHome,
  SGDashboardPlayers,
  SGDashboardReferees,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { memo, useMemo } from "react";

type Props = {
  href: string;
  label: string;
  pathname: string;
};

function DashboardNavItem({ href, label, pathname }: Props) {
  const isActive = useMemo(() => pathname === href, [href, pathname]);

  const Icon = useMemo(() => {
    if (label === "Home") return SGDashboardHome;
    else if (label === "Disputes") return SGDashboardDisputes;
    else if (label === "Players") return SGDashboardPlayers;

    return SGDashboardReferees;
  }, [label]);

  return (
    <Link href={href} key={href}>
      <li
        className={cn("flex justify-center py-[14px] group relative", {
          "border-l-[6px] border-lil-dark-blue bg-unknown-400": isActive,
        })}
      >
        <span
          className={cn("relative", {
            "[&_*]:stroke-grey": !isActive,
            "[&_*]:stroke-lil-dark-blue after:absolute after:-bottom-[9px] after:w-[6px] after:h-[6px] after:bg-lil-dark-blue after:rounded-full after:transition-all after:duration-150 after:left-1/2 after:transform after:-translate-x-1/2 -top-1":
              isActive,
          })}
        >
          <Icon />
        </span>
        <span className="hidden group-hover:block absolute left-3/4 -bottom-4 py-[10px] px-6 rounded-lg bg-black-100 text-white text-xs leading-5 -tracking-[0.12px]">
          {label}
        </span>
      </li>
    </Link>
  );
}

export default memo(DashboardNavItem);

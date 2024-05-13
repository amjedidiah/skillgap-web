"use client";

import { dashboardRootPath } from "@/lib/constants";
import { memo } from "react";
import DashboardNavItem from "@/components/dashboard/dashboard-nav-item";
import { usePathname } from "next/navigation";

export const dashboardNavItems = [
  {
    label: "Home",
    href: `${dashboardRootPath}`,
  },
  {
    label: "Disputes",
    href: `${dashboardRootPath}/disputes`,
  },
  {
    label: "Players",
    href: `${dashboardRootPath}/players`,
  },
  {
    label: "Referees",
    href: `${dashboardRootPath}/referees`,
  },
];

function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-4">
        {dashboardNavItems.map(({ href, label }) => (
          <DashboardNavItem
            key={href}
            pathname={pathname}
            href={href}
            label={label}
          />
        ))}
      </ul>
    </nav>
  );
}

export default memo(DashboardNav);

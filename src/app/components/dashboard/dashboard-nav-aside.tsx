"use client";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import DashboardNav from "@/components/dashboard/dashboard-nav";
import AdminUserCard from "@/components/dashboard/admin-user-card";
import { SGDashboardLogout } from "@/lib/icons";
import { dashboardRootPath } from "@/lib/constants";
import { memo, useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

function DashboardNavAside() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleIsCollapsed = useCallback(
    () => setIsCollapsed((prev) => !prev),
    []
  );

  const Icon = useMemo(
    () => (isCollapsed ? RiArrowRightLine : RiArrowLeftLine),
    [isCollapsed]
  );

  return (
    <aside
      className={cn(
        "flex flex-col gap-[71px] items-center h-full w-28 md:w-[130px] bg-white border-r border-grey-100 max-md:fixed relative",
        {
          "max-md:-left-24": isCollapsed,
        }
      )}
    >
      <Link href={dashboardRootPath}>
        <Image
          src="https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622187/logo_bnqezc.png"
          alt="logo"
          width={56}
          height={56}
          className="rounded-lg max-md:w-12"
        />
      </Link>
      <span
        onClick={toggleIsCollapsed}
        className={cn(
          "rounded-full bg-white text-2xl absolute -right-4 top-[104px] md:hidden p-2",
          {
            "pl-[6px] pr-1": isCollapsed,
          }
        )}
      >
        <Icon />
      </span>
      <DashboardNav />

      <div className="flex flex-col gap-12">
        <AdminUserCard />
        <Link href={`${dashboardRootPath}/logout`} className="mx-auto text-lg">
          <SGDashboardLogout />
        </Link>
      </div>
    </aside>
  );
}

export default memo(DashboardNavAside);

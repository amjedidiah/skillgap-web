"use client";
import { dashboardRootPath } from "@/lib/constants";
import { SGCaretLeft } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";
import DashboardHeaderForm from "@/components/dashboard/dashboard-header-form";
import AdminUserCard from "@/components/dashboard/admin-user-card";
import { dashboardNavItems } from "@/components/dashboard/dashboard-nav";
import Image from "next/image";

function DashboardHeader() {
  const pathname = usePathname();
  const activePathname = useMemo(
    () => dashboardNavItems.find((item) => item.href === pathname),
    [pathname]
  );
  const isHome = useMemo(
    () => activePathname?.href === dashboardRootPath,
    [activePathname?.href]
  );

  return (
    <header className="flex items-center gap-4 sm:gap-6 justify-between h-14 w-full">
      <Link href={dashboardRootPath} className="md:hidden">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={48}
          height={48}
          className="rounded-lg"
        />
      </Link>
      {activePathname && (
        <div className="flex items-center gap-4">
          <Link
            href={dashboardRootPath}
            className={cn({
              hidden: isHome,
            })}
          >
            <SGCaretLeft />
          </Link>
          <span>{activePathname.label}</span>
        </div>
      )}
      <DashboardHeaderForm />
      <AdminUserCard showName />
    </header>
  );
}

export default memo(DashboardHeader);

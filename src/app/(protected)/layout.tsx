import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardNavAside from "@/components/dashboard/dashboard-nav-aside";

import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full h-full overflow-hidden bg-neutral-100 [&>*]:py-[42px]">
      <DashboardNavAside />
      <main className="cardScroll px-10 lg:px-12 flex flex-col gap-6 flex-1 h-screen overflow-y-scroll">
        <div className="space-y-[24px]">
          <DashboardHeader />
          {children}
        </div>
      </main>
    </div>
  );
}
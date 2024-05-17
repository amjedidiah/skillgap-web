import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardNavAside from "@/components/dashboard/dashboard-nav-aside";
import DashboardBody from "@/components/dashboard/dasshboard-body";
import Datacard from "@/components/dashboard/data-card";
import DisputeCard from "@/components/dashboard/dispute-card";
import Leaderboard from "@/components/dashboard/leader-board-card";
import MapCard from "@/components/dashboard/map-card";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full h-full overflow-hidden bg-neutral-100 [&>*]:py-[42px]">
      <DashboardNavAside />
      <main className="px-10 lg:px-12 flex flex-col gap-6 flex-1 h-screen overflow-y-scroll">
        <div className="h-fit space-y-[24px]">
          <DashboardHeader />
          <DashboardBody /> 
          <div className="flex w-[100%] space-x-[24px]">
            <Datacard />
            <Datacard />
            <Datacard />
          </div>
          <div className="space-y-[24px]">
            <div className="flex space-x-[24px]">
              <MapCard />
              <Leaderboard />
            </div>
            <div>
              <DisputeCard />
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}

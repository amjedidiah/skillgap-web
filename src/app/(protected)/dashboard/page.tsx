import DashboardBody from "@/components/dashboard/dashboard-body";
import DataCard from "@/components/dashboard/data-card";
import DisputeCard from "@/components/dashboard/dispute-card-scn";
import EarningsCard from "@/components/dashboard/earnings-card";
import Leaderboard from "@/components/dashboard/leader-board-card";
import MapCard from "@/components/dashboard/map-card";

export default function DashboardHome() {
  return (
        <div className="h-fit space-y-[24px]">
          <DashboardBody /> 
          <div>
            <DataCard />
          </div>
          <div className="space-y-[24px]">
            <div className="flex space-x-[24px]">
              <MapCard />
              <Leaderboard />
            </div>
            <div className="flex space-x-[24px]">
              <DisputeCard />
              <EarningsCard />
            </div>
          </div>
        </div>
  );
}

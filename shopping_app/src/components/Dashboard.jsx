import BuyerProfileChart from "./BuyerProfileChart";
import DashboardStateGrid from "./DashboardStateGrid";
import PopularProducts from "./popularproducts";
import RecentOrders from "./RecentOrders";
import TransactionChart from "./TransactionChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 h-screen overflow-x-auto">
      <DashboardStateGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart className="flex-1" />
        <BuyerProfileChart className="flex-1" />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders className="flex-1" />
        <PopularProducts className="flex-1" />
      </div>
    </div>
  );
}

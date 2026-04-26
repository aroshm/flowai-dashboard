import GenderChart from "../components/chart/GenderChart";
import LineChartCustom from "../components/chart/LineChartCustom";
import usePageTitle from "../hooks/usePageTitle";
import UserTable from "../components/table/UserTable";
import KpiCardSection from "../components/ui/KpiCardSection";

type DashboardProps = {
  header?: string;
};

const Dashboard = ({ header = "Dashboard" }: DashboardProps) => {
  usePageTitle(header);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-6">
        <KpiCardSection />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <LineChartCustom />

        <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
          <h3 className="font-semibold dark:text-gray-200">Users by Gender</h3>
          <GenderChart />
        </div>
      </div>

      <div className="py-5">
        <UserTable itemsPerPage={8} showPaginations={true} />
      </div>
    </div>
  );
};

export default Dashboard;

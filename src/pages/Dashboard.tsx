import GenderChart from "../components/chart/GenderChart";
import LineChartCustom from "../components/chart/LineChartCustom";
import useHeader from "../components/table/useHeader";
import UserTable from "../components/table/UserTable";
import KpiCard from "../components/ui/KpiCard";

type DashboardProps = {
  header?: string;
};

const Dashboard = ({ header = "Dashboard" }: DashboardProps) => {
  useHeader(header);
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <KpiCard title="Total Revenue" value="$24,500" change="+12%" />
        <KpiCard title="Active Users" value="1,240" change="+8%" />
        <KpiCard title="Conversion Rate" value="3.2%" change="+2%" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <LineChartCustom />

        <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
          <h3 className="font-semibold dark:text-gray-200">Recent Activity</h3>
          <GenderChart/>
        </div>
      </div>

      <div className="py-5">
        <UserTable itemsPerPage={8} showPaginations={true} />
      </div>
    </div>
  );
};

export default Dashboard;

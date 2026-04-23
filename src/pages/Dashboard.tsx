import LineChartCustom from "../components/chart/LineChartCustom";
import KpiCard from "../components/ui/KpiCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <KpiCard title="Total Revenue" value="$24,500" change="+12%" />
        <KpiCard title="Active Users" value="1,240" change="+8%" />
        <KpiCard title="Conversion Rate" value="3.2%" change="+2%" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <LineChartCustom />

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold">Recent Activity</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>User John signed up</li>
            <li>New payment received</li>
            <li>Server updated</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

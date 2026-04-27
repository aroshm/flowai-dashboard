import usePageTitle from "../hooks/usePageTitle";
import UserTable from "../components/table/UserTable";
import KpiCardSection from "../components/ui/KpiCardSection";
import GenderChart from "../components/ui/GenderChart";
import BloodGroupChart from "../components/ui/BloodGroupChart";
import DeviceUsageBarChart from "../components/ui/DeviceUsageBarChart";
import DepartmentChart from "../components/ui/DepartmentChart";
import GenericMap from "../components/map/GenericMap";

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
        <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
          <h3 className="font-semibold dark:text-gray-200 mb-2.5">
            Gender & Blood Group
          </h3>
          <div className="grid md:grid-cols-2 gap-2.5">
            <GenderChart />
            <BloodGroupChart />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
          <h3 className="font-semibold dark:text-gray-200 mb-2.5">
            Device Usage
          </h3>
          <DeviceUsageBarChart />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
          <h3 className="font-semibold dark:text-gray-200 mb-2.5">
            Department Distribution
          </h3>
          <div className="grid md:grid-cols-1">
            <DepartmentChart />
          </div>
        </div>
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
          <h3 className="font-semibold dark:text-gray-200 mb-2.5">
            Geographic Map
          </h3>
          <GenericMap />
        </div>
      </div>

      <div className="py-5">
        <UserTable itemsPerPage={8} showPaginations={true} showSearch={false} />
      </div>
    </div>
  );
};

export default Dashboard;

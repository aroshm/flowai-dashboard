import { useMemo } from "react";
import useUsers from "../../hooks/useUsers";
import { getCountChartData } from "../../utils/chartData";
import GenericPieChart from "../chart/GenericPieChart";

const BloodGroupChart = () => {
  const { users, loading, error } = useUsers();
  const data = useMemo(() => {
    return getCountChartData(users, (user) => user.bloodGroup);
  }, [users]);

  return (
    <>
      {loading && <p>Loading data...</p>}

      {!loading && error && <p className="text-sm text-red-500">{error}</p>}

      {!loading && !error && (
        <GenericPieChart
          data={data}
          nameKey="name"
          valueKey="value"
          innerRadius={60}
        />
      )}
    </>
  );
};

export default BloodGroupChart;

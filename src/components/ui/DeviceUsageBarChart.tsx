import { useMemo } from "react";
import useUsers from "../../hooks/useUsers";
import { getCountChartData } from "../../utils/chartData";
import GenericBarChart from "../chart/GenericBarChart";

const getBrowserName = (userAgent: string) => {
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Edg")) return "Edge";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
  return "Other";
};

const DeviceUsageBarChart = () => {
  const { users, loading, error } = useUsers();

  const data = useMemo(() => {
    return getCountChartData(
      users,
      (user) => getBrowserName(user.userAgent),
      true,
    );
  }, [users]);

  return (
    <>
      {loading && <p>Loading data...</p>}

      {!loading && error && <p className="text-sm text-red-500">{error}</p>}

      {!loading && !error && (
        <GenericBarChart
          data={data}
          layout="vertical"
          xAxisKey="value"
          yAxisKey="name"
          dataKey={[{ key: "value", color: "#147DF5" }]}
        />
      )}
    </>
  );
};

export default DeviceUsageBarChart;

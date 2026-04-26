import { useMemo } from "react";
import useUsers from "../../hooks/useUsers";
import GenericPieChart from "../chart/GenericPieChart";

const BloodGroupChart = () => {
  const { users, loading, error } = useUsers();
  const data = useMemo(() => {
    return Object.entries(
      users.reduce<Record<string, number>>((bloodGroupCount, user) => {
        bloodGroupCount[user.bloodGroup] =
          (bloodGroupCount[user.bloodGroup] ?? 0) + 1;
        return bloodGroupCount;
      }, {}),
    ).map(([bloodGroup, count]) => ({
      name: bloodGroup,
      value: count,
    }));
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

import { useMemo } from "react";
import useUsers from "../../hooks/useUsers";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const GenderChart = ({
  isAnimationActive,
}: {
  isAnimationActive?: boolean;
}) => {
  const { users, loading, error } = useUsers();

  const data = useMemo(() => {
    return Object.entries(
      users.reduce<Record<string, number>>((genderCounts, user) => {
        genderCounts[user.gender] = (genderCounts[user.gender] ?? 0) + 1;
        return genderCounts;
      }, {}),
    ).map(([gender, count]) => ({
      name: gender,
      value: count,
    }));
  }, [users]);

  const colors = ["#6366f1", "#14b8a6", "#f97316"];

  return (
    <div className="h-64">
      {loading && (
        <p>Loading data...</p>
      )}

      {!loading && error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {!loading && !error && (
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="80%"
              label={false}
              isAnimationActive={isAnimationActive}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GenderChart;

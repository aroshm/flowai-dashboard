import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { label: "Mon", users: 120 },
  { label: "Tue", users: 200 },
  { label: "Wed", users: 150 },
  { label: "Thu", users: 300 },
  { label: "Fri", users: 250 },
];

const LineChartCustom = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
      <h3 className="font-semibold mb-4 dark:text-gray-200">User Growth</h3>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#6366f1"
            strokeWidth={3}
          ></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCustom;

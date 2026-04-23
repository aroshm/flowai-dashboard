import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
    <div className="bg-white p-6 rounded-xl shadow-sm h-75">
      <h3 className="font-semibold mb-4">User Growth</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#6366f1"></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCustom;

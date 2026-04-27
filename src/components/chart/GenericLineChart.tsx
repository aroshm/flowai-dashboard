import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// 1. Define Props with Generics for flexibility
interface GenericChartProps<T> {
  data: T[];
  xAxisKey: keyof T;
  lineKeys: { key: keyof T; color: string }[];
  height?: number;
}

// 2. Create the Component
const GenericLineChart = <T extends Record<string, number>>({
  data,
  xAxisKey,
  lineKeys,
  height = 300,
}: GenericChartProps<T>) => {
  return (
    <div className="min-w-0" style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey as string} />
          <YAxis />
          <Tooltip />
          <Legend />
          {lineKeys.map((line) => (
            <Line
              key={line.key as string}
              type="monotone"
              dataKey={line.key as string}
              stroke={line.color}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenericLineChart;

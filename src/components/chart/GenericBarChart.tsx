import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// 1. Define Props with Generics for flexibility
interface GenericChartProps<T extends Record<string, string | number>> {
  data: T[];
  xAxisKey: keyof T & string;
  yAxisKey: keyof T & string;
  dataKey: { key: keyof T & string; color: string }[];
  layout?: "horizontal" | "vertical";
  height?: number;
  yAxisWidth?: number;
  colors?: string[];
}

const DEFAULT_COLORS = [
  "#BE0AFF",
  "#580AFF",
  "#147DF5",
  "#0AEFFF",
  "#0AFF99",
  "#A1FF0A",
  "#DEFF0A",
  "#FFD300",
  "#FF8700",
  "#FF0000",
];

// 2. Create the Component
const GenericBarChart = <T extends Record<string, string | number>>({
  data,
  xAxisKey,
  yAxisKey,
  dataKey,
  layout = "horizontal",
  height = 300,
  yAxisWidth = 90,
  colors = DEFAULT_COLORS,
}: GenericChartProps<T>) => {
  const isVerticalLayout = layout === "vertical";

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout={layout}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xAxisKey as string}
          type={isVerticalLayout ? "number" : "category"}
        />
        <YAxis
          dataKey={yAxisKey as string}
          type={isVerticalLayout ? "category" : "number"}
          width={isVerticalLayout ? yAxisWidth : undefined}
          tickLine={false}
        />
        <Tooltip />
        <Legend />
        {dataKey.map((bar, index) => (
          <Bar
            key={bar.key as string}
            dataKey={bar.key as string}
            stroke={bar.color}
            fill={colors[index % colors.length]}
          >
            {data.map((_, dataIndex) => (
              <Cell
                key={`cell-${String(bar.key)}-${dataIndex}`}
                fill={colors[dataIndex % colors.length]}
              />
            ))}
          </Bar>
        ))}
        <RechartsDevtools />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GenericBarChart;

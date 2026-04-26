import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface PieData {
  [key: string]: string | number;
}

interface CommonPieProps<T extends PieData> {
  data: T[];
  nameKey: keyof T & string;
  valueKey: keyof T & string;
  colors?: string[];
  height?: number;
  innerRadius?: number;
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
const GenericPieChart = <T extends PieData>({
  data,
  nameKey,
  valueKey,
  colors = DEFAULT_COLORS,
  height = 300,
  innerRadius = 0,
}: CommonPieProps<T>) => {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name }) => `${name}`}
            innerRadius={innerRadius}
            outerRadius="80%"
            fill="#8884d8"
            dataKey={valueKey}
            nameKey={nameKey}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" height={50} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GenericPieChart;

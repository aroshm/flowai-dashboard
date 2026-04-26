export type CountChartData = {
  name: string;
  value: number;
};

export const getCountChartData = <T>(
  items: T[],
  getKey: (item: T) => string,
  shouldSort = false,
): CountChartData[] => {
  const data = Object.entries(
    items.reduce<Record<string, number>>((counts, item) => {
      const key = getKey(item);
      counts[key] = (counts[key] ?? 0) + 1;
      return counts;
    }, {}),
  ).map(([name, value]) => ({
    name,
    value,
  }));

  return shouldSort ? data.sort((a, b) => b.value - a.value) : data;
};

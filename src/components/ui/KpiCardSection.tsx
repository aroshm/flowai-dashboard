import useUsers from "../../hooks/useUsers";
import KpiCard from "./KpiCard";

interface FrequencyTracker<T> {
  counts: Record<string, number>;
  maxCount: number;
  bestItem: T | null;
}

const KpiCardSection = () => {
  const { users } = useUsers();

  const getMostCommon = <T extends string | number>(items: T[]): T | null => {
    const result = items.reduce<FrequencyTracker<T>>(
      (acc, cur) => {
        const key = String(cur);

        acc.counts[key] = (acc.counts[key] || 0) + 1;

        if (acc.counts[key] > acc.maxCount) {
          acc.maxCount = acc.counts[key];
          acc.bestItem = cur;
        }

        return acc;
      },
      { counts: {}, maxCount: 0, bestItem: null },
    );

    return result.bestItem;
  };

  const totalUsers = users.length;
  const userAges = users.map((user) => user.age);
  const averageAge = userAges.reduce((a, b) => a + b, 0) / totalUsers;
  const currencyList: string[] = users.map((user) => user.bank.currency);
  const departmentList: string[] = users.map((user) => user.company.department);

  const primaryCurrency = getMostCommon(currencyList);
  const topDepartment = getMostCommon(departmentList);

  return (
    <>
      <KpiCard label="Total Users" value={totalUsers} />
      <KpiCard
        label="Average Age"
        value={isNaN(Math.round(averageAge)) ? "0" : Math.round(averageAge)}
      />
      <KpiCard label="Top Currency" value={primaryCurrency} />
      <KpiCard label="Top Department" value={topDepartment} />
    </>
  );
};

export default KpiCardSection;

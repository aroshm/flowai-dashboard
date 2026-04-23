interface KpiCardProps {
  title: string;
  value: string;
  change: string;
}
const KpiCard = ({ title, value, change }: KpiCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p className="text-sm text-green-500 mt-1">{change}</p>
    </div>
  );
};

export default KpiCard;

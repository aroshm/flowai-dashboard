type KpiCardProps = {
  label: string;
  value: string | number | null;
};

const KpiCard = ({ label, value }: KpiCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-800">
      <p className="text-sm text-gray-500 dark:text-gray-200">{label}</p>
      <h3 className="text-2xl font-bold mt-2 dark:text-white">{value}</h3>
    </div>
  );
};

export default KpiCard;

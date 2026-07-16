import { FiArchive, FiGlobe, FiLayers, FiTrendingUp } from "react-icons/fi";

const iconMap = {
  inquiries: FiArchive,
  today: FiTrendingUp,
  industries: FiLayers,
  countries: FiGlobe,
};

function StatsCard({ title, value, trend, type }) {
  const Icon = iconMap[type] || FiArchive;

  return (
    <div className="cursor-pointer rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-400">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-emerald-600">{trend}</p>
    </div>
  );
}

export default StatsCard;

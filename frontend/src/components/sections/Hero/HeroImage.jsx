import { FiArrowUpRight, FiBarChart2, FiMoreHorizontal, FiUsers } from "react-icons/fi";

const chartBars = ["h-16", "h-24", "h-20", "h-32", "h-28", "h-40", "h-36"];

const HeroImage = () => (
  <div className="relative mx-auto w-full max-w-2xl lg:mx-0" aria-label="CRM dashboard preview" role="img">
    <div className="absolute -left-6 top-16 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />
    <div className="absolute -right-5 bottom-8 h-48 w-48 rounded-full bg-gray-100 blur-3xl" />

    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-200/60 sm:p-5">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-black text-sm font-bold text-white">C</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">Overview</p>
            <p className="text-xs text-gray-500">Sales performance</p>
          </div>
        </div>
        <button aria-label="Dashboard options" className="rounded-md p-1 text-gray-500 outline-none hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-black" type="button">
          <FiMoreHorizontal aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-100 p-3">
          <p className="text-xs font-medium text-gray-500">Revenue</p>
          <p className="mt-2 text-lg font-bold tracking-tight text-gray-900">$48,240</p>
          <p className="mt-1 text-xs font-medium text-blue-600">+18.2% this month</p>
        </div>
        <div className="rounded-xl border border-gray-100 p-3">
          <p className="text-xs font-medium text-gray-500">Active leads</p>
          <p className="mt-2 text-lg font-bold tracking-tight text-gray-900">1,284</p>
          <p className="mt-1 text-xs font-medium text-blue-600">+8.4% this week</p>
        </div>
        <div className="col-span-2 rounded-xl border border-gray-100 p-3 sm:col-span-1">
          <p className="text-xs font-medium text-gray-500">Win rate</p>
          <p className="mt-2 text-lg font-bold tracking-tight text-gray-900">32.8%</p>
          <p className="mt-1 text-xs font-medium text-blue-600">+4.1% this month</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-[1.45fr_1fr]">
        <section className="rounded-xl border border-gray-100 p-4" aria-label="Revenue analytics">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">Revenue analytics</p>
              <p className="mt-1 text-xs text-gray-500">Last 7 months</p>
            </div>
            <FiBarChart2 aria-hidden="true" className="text-blue-600" />
          </div>
          <div aria-hidden="true" className="mt-6 flex h-40 items-end justify-between gap-2 border-b border-gray-100 px-1">
            {chartBars.map((height, index) => (
              <div className="flex flex-1 flex-col justify-end gap-2" key={height}>
                <span className={`block w-full rounded-t-md bg-blue-600/90 ${height}`} />
                <span className="text-center text-[10px] text-gray-400">{["J", "F", "M", "A", "M", "J", "J"][index]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-gray-100 p-4" aria-label="Sales pipeline">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-900">Sales pipeline</p>
            <FiUsers aria-hidden="true" className="text-blue-600" />
          </div>
          <div className="mt-5 space-y-4">
            {[['Qualified', '48', 'bg-blue-600'], ['Proposal', '24', 'bg-blue-400'], ['Closed', '16', 'bg-blue-200']].map(([label, count, color]) => (
              <div key={label}>
                <div className="flex justify-between text-xs"><span className="text-gray-600">{label}</span><span className="font-semibold text-gray-900">{count}</span></div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100"><div className={`h-full rounded-full ${color} ${label === 'Qualified' ? 'w-4/5' : label === 'Proposal' ? 'w-1/2' : 'w-1/3'}`} /></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

    <div className="absolute -bottom-5 -left-4 hidden w-48 rounded-xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-200/70 sm:block">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-blue-600"><FiArrowUpRight aria-hidden="true" size={15} /></span>
        <div><p className="text-xs text-gray-500">Team performance</p><p className="text-sm font-bold text-gray-900">+24.8%</p></div>
      </div>
    </div>
  </div>
);

export default HeroImage;

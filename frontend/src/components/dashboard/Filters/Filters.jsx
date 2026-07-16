function Filters({ industry, companySize, country, onIndustryChange, onCompanySizeChange, onCountryChange, onReset }) {
  const selectClass =
    "w-full cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-400";

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-3 md:flex-row md:items-center">
      <select value={industry} onChange={(event) => onIndustryChange(event.target.value)} className={selectClass} aria-label="Filter by industry">
        <option value="All">Industry</option>
        <option value="Technology">Technology</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Retail">Retail</option>
      </select>

      <select value={companySize} onChange={(event) => onCompanySizeChange(event.target.value)} className={selectClass} aria-label="Filter by company size">
        <option value="All">Company Size</option>
        <option value="51-200">51-200</option>
        <option value="201-500">201-500</option>
        <option value="501+">501+</option>
      </select>

      <select value={country} onChange={(event) => onCountryChange(event.target.value)} className={selectClass} aria-label="Filter by country">
        <option value="All">Country</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Spain">Spain</option>
      </select>

      <button
        onClick={onReset}
        className="cursor-pointer rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default Filters;

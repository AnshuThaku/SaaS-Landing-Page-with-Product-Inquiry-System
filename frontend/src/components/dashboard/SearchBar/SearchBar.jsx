import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 shadow-sm transition focus-within:border-slate-400 focus-within:bg-white">
      <FiSearch className="h-4 w-4" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name, company or email..."
        className="w-full bg-transparent outline-none placeholder:text-slate-400"
      />
    </label>
  );
}

export default SearchBar;

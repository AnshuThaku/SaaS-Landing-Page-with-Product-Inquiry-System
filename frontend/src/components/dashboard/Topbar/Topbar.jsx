import { useState } from "react";
import { FiBell, FiChevronDown, FiMaximize2, FiMoon, FiSearch } from "react-icons/fi";
import { LuPanelLeftOpen } from "react-icons/lu";

function Topbar({ title, onMenuClick, onToggleCollapse, collapsed }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 lg:hidden"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          >
            <LuPanelLeftOpen className="h-5 w-5" />
          </button>
          <button
            className="hidden cursor-pointer rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 lg:inline-flex"
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <LuPanelLeftOpen className={`h-5 w-5 transition ${collapsed ? "rotate-180" : ""}`} />
          </button>
          <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h1 className="text-lg font-semibold text-slate-900">Welcome back</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 transition focus-within:border-slate-400 focus-within:bg-white md:flex">
            <FiSearch className="h-4 w-4" />
            <input
              className="w-36 bg-transparent outline-none placeholder:text-slate-400 sm:w-48"
              placeholder="Search anything"
              aria-label="Search dashboard"
            />
          </label>
          <button className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" aria-label="Fullscreen">
            <FiMaximize2 className="h-4 w-4" />
          </button>
          <button className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" aria-label="Toggle dark mode">
            <FiMoon className="h-4 w-4" />
          </button>
          <button className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" aria-label="Notifications">
            <FiBell className="h-4 w-4" />
          </button>
          <div className="relative">
            <button
              className="flex cursor-pointer items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-label="Open user menu"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 font-semibold text-white">
                AL
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-slate-900">Alicia Lane</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
              <FiChevronDown className="mr-1 h-4 w-4 text-slate-500" />
            </button>
            {dropdownOpen ? (
              <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200">
                <button className="block w-full cursor-pointer rounded-xl px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100">Profile</button>
                <button className="block w-full cursor-pointer rounded-xl px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100">Settings</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;

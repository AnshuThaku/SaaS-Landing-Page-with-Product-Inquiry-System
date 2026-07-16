import { FiBarChart2, FiHome, FiSettings, FiUsers, FiZap } from "react-icons/fi";

const defaultItems = [
  { id: "Overview", label: "Overview", icon: FiHome },
  { id: "Customers", label: "Customers", icon: FiUsers },
  { id: "Automation", label: "Automation", icon: FiZap },
  { id: "Analytics", label: "Analytics", icon: FiBarChart2 },
  { id: "Settings", label: "Settings", icon: FiSettings },
];

function Sidebar({ items = defaultItems, activeItem, onSelectItem, mobileOpen, onClose, collapsed, onToggleCollapse }) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200/80 bg-white/90 px-5 py-6 backdrop-blur-xl transition-all duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "w-24" : "w-72"} lg:static lg:translate-x-0 lg:shadow-none ${mobileOpen ? "shadow-2xl shadow-slate-900/10" : ""}`}
      >
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white shadow-lg shadow-slate-300">
              C
            </div>
            {!collapsed ? (
              <div>
                <p className="text-base font-semibold text-slate-900">Northstar</p>
                <p className="text-sm text-slate-500">CRM Studio</p>
              </div>
            ) : null}
          </div>
          <button
            className="cursor-pointer rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 lg:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="mt-8 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectItem(item.id);
                  onClose();
                }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                  isActive
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-200"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                } ${collapsed ? "justify-center px-2" : ""}`}
                aria-label={item.label}
              >
                <Icon className="h-4 w-4" />
                {!collapsed ? <span>{item.label}</span> : null}
              </button>
            );
          })}
        </nav>

        <div className={`mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 ${collapsed ? "hidden" : "block"}`}>
          <p className="text-sm font-semibold text-slate-900">Pro tip</p>
          <p className="mt-1 text-sm text-slate-500">Keep your pipeline healthy with weekly automations.</p>
        </div>
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" onClick={onClose} />
      ) : null}
    </>
  );
}

export default Sidebar;

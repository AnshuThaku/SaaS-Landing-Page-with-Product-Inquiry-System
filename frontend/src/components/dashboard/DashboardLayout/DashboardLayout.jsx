import { useState } from "react";
import Sidebar from "../../dashboard/Sidebar/Sidebar";
import Topbar from "../../dashboard/Topbar/Topbar";

function DashboardLayout({ children, activeItem, onSelectItem, title = "Dashboard" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar
          activeItem={activeItem}
          onSelectItem={onSelectItem}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
        />

        <div className="flex-1 lg:min-w-0">
          <Topbar
            title={title}
            onMenuClick={() => setMobileOpen(true)}
            onToggleCollapse={() => setCollapsed((prev) => !prev)}
            collapsed={collapsed}
          />
          <main className="px-3 py-4 transition-all duration-300 sm:px-6 sm:py-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

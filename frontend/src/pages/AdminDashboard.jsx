import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout/DashboardLayout";
import InquiryTable from "../components/dashboard/InquiryTable/InquiryTable";
import StatsCard from "../components/dashboard/StatsCard/StatsCard";

const cards = [
  { title: "Total Inquiries", value: "1,284", trend: "+12.4% vs last month", type: "inquiries" },
  { title: "Today's Inquiries", value: "48", trend: "+6 since yesterday", type: "today" },
  { title: "Industries", value: "18", trend: "Across key verticals", type: "industries" },
  { title: "Countries", value: "24", trend: "Active global reach", type: "countries" },
];

function AdminDashboard() {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <DashboardLayout activeItem={activeItem} onSelectItem={setActiveItem} title="Admin Dashboard">
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-2xl shadow-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Operations center</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Keep your growth engine moving with calm clarity.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Track pipeline health, customer momentum, and team performance from one focused workspace.
              </p>
            </div>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              View reports
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <StatsCard
              key={card.title}
              title={card.title}
              value={card.value}
              trend={card.trend}
              type={card.type}
            />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Pipeline snapshot</p>
                <h3 className="text-xl font-semibold text-slate-900">Weekly momentum</h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Updated 10 min ago
              </span>
            </div>
            <div className="mt-8 flex h-48 items-end gap-3">
              {[42, 64, 54, 74, 82, 92].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-slate-900 to-slate-400" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/70">
            <p className="text-sm font-medium text-slate-500">Next actions</p>
            <ul className="mt-5 space-y-3">
              {[
                "Review 6 new high-intent leads",
                "Approve onboarding checklist",
                "Send follow-up to renewal queue",
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <InquiryTable />
        </section>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;

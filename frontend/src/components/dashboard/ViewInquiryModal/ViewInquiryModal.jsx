import { FiX } from "react-icons/fi";

function ViewInquiryModal({ inquiry, onClose }) {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/50 px-4 py-6">
      <div className="w-full max-w-2xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Inquiry details</p>
            <h3 className="text-2xl font-semibold text-slate-900">{inquiry.name}</h3>
          </div>
          <button onClick={onClose} className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" aria-label="Close inquiry details">
            <FiX className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Full Name", inquiry.name],
            ["Company", inquiry.company],
            ["Email", inquiry.email],
            ["Phone", inquiry.phone],
            ["Country", inquiry.country],
            ["Industry", inquiry.industry],
            ["Company Size", inquiry.companySize],
            ["Created At", inquiry.createdDate],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Message</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{inquiry.message}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewInquiryModal;

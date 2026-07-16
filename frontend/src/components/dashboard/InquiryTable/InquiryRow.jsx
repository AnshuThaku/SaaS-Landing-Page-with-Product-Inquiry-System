import { FiEye, FiTrash2 } from "react-icons/fi";

function InquiryRow({ inquiry, onView, onDelete }) {
  return (
    <tr className="border-b border-slate-200/80 text-sm text-slate-600 last:border-b-0">
      <td className="px-4 py-4 font-medium text-slate-900">{inquiry.name}</td>
      <td className="px-4 py-4">{inquiry.company}</td>
      <td className="px-4 py-4">{inquiry.email}</td>
      <td className="px-4 py-4">{inquiry.phone}</td>
      <td className="px-4 py-4">{inquiry.industry}</td>
      <td className="px-4 py-4">{inquiry.companySize}</td>
      <td className="px-4 py-4">{inquiry.createdDate}</td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onView(inquiry)}
            className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            aria-label={`View ${inquiry.name}`}
          >
            <FiEye className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(inquiry.id)}
            className="cursor-pointer rounded-full border border-rose-200 p-2 text-rose-600 transition hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            aria-label={`Delete ${inquiry.name}`}
          >
            <FiTrash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default InquiryRow;

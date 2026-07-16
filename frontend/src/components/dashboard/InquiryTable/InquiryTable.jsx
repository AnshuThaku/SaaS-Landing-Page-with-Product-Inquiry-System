import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiRefreshCw } from "react-icons/fi";
import { toast } from "react-hot-toast";
import InquiryRow from "./InquiryRow";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import ViewInquiryModal from "../ViewInquiryModal/ViewInquiryModal";
import Skeleton from "../Skeleton/Skeleton";
import { deleteInquiry, getAllInquiries, getInquiryById } from "../../../services/inquiry.service";

const PAGE_SIZE = 10;

const normalizeInquiry = (item) => ({
  id: item._id || item.id,
  name: item.fullName || item.name || "Unknown",
  company: item.companyName || item.company || "—",
  email: item.email || "—",
  phone: item.phone || "—",
  industry: item.industry || "—",
  companySize: item.companySize || "—",
  country: item.country || "—",
  message: item.message || "No message provided.",
  createdDate: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : item.createdDate || "—",
  raw: item,
});

const normalizeInquiries = (payload) => {
  if (Array.isArray(payload)) {
    return payload.map(normalizeInquiry);
  }

  if (payload?.inquiries) {
    return payload.inquiries.map(normalizeInquiry);
  }

  return [];
};

function InquiryTable() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("All");
  const [companySize, setCompanySize] = useState("All");
  const [country, setCountry] = useState("All");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const response = await getAllInquiries();
      const normalized = normalizeInquiries(response);
      setRows(normalized);
    } catch (error) {
      toast.error("Unable to load inquiries right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, industry, companySize, country]);

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return rows.filter((row) => {
      const searchText = `${row.name} ${row.company} ${row.email}`.toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || searchText.includes(normalizedQuery);
      const matchesIndustry = industry === "All" || row.industry === industry;
      const matchesSize = companySize === "All" || row.companySize === companySize;
      const matchesCountry = country === "All" || row.country === country;

      return matchesQuery && matchesIndustry && matchesSize && matchesCountry;
    });
  }, [rows, query, industry, companySize, country]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pagedRows = filteredRows.slice(startIndex, startIndex + PAGE_SIZE);

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting inquiry...");

    try {
      await deleteInquiry(id);
      setRows((prev) => prev.filter((row) => row.id !== id));
      setSelectedInquiry(null);
      toast.success("Inquiry deleted successfully.", { id: toastId });
    } catch (error) {
      toast.error("Unable to delete inquiry.", { id: toastId });
    }
  };

  const handleView = async (inquiry) => {
    const toastId = toast.loading("Loading inquiry...");

    try {
      const response = await getInquiryById(inquiry.id);
      const refreshedInquiry = normalizeInquiry(response?.inquiry || response);
      setSelectedInquiry(refreshedInquiry);
      toast.success("Inquiry loaded.", { id: toastId });
    } catch (error) {
      toast.error("Unable to load inquiry details.", { id: toastId });
    }
  };

  const showEmptyState = !loading && rows.length === 0;
  const showFilteredEmptyState = !loading && rows.length > 0 && filteredRows.length === 0;

  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-200/70 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Inquiry list</p>
          <h3 className="text-xl font-semibold text-slate-900">Manage incoming requests</h3>
        </div>
        <div className="w-full lg:w-auto">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </div>

      <div className="mt-4">
        <Filters
          industry={industry}
          companySize={companySize}
          country={country}
          onIndustryChange={setIndustry}
          onCompanySizeChange={setCompanySize}
          onCountryChange={setCountry}
          onReset={() => {
            setIndustry("All");
            setCompanySize("All");
            setCountry("All");
            setQuery("");
          }}
        />
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200/80">
        {loading ? (
          <div className="p-4">
            <Skeleton variant="row" />
          </div>
        ) : showEmptyState ? (
          <div className="flex min-h-48 flex-col items-center justify-center px-6 py-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <FiRefreshCw className="h-7 w-7" />
            </div>
            <p className="text-lg font-semibold text-slate-900">No inquiries yet</p>
            <p className="mt-2 text-sm text-slate-500">New submissions will appear here once they are received.</p>
            <button
              onClick={loadInquiries}
              className="mt-4 cursor-pointer rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Refresh
            </button>
          </div>
        ) : showFilteredEmptyState ? (
          <div className="flex min-h-48 flex-col items-center justify-center px-6 py-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <FiRefreshCw className="h-7 w-7" />
            </div>
            <p className="text-lg font-semibold text-slate-900">No results found</p>
            <p className="mt-2 text-sm text-slate-500">Try adjusting your search or filters to find the right inquiry.</p>
            <button
              onClick={() => {
                setQuery("");
                setIndustry("All");
                setCompanySize("All");
                setCountry("All");
              }}
              className="mt-4 cursor-pointer rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200/80">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Industry</th>
                  <th className="px-4 py-3">Company Size</th>
                  <th className="px-4 py-3">Created Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 bg-white">
                {pagedRows.map((inquiry) => (
                  <InquiryRow key={inquiry.id} inquiry={inquiry} onView={handleView} onDelete={handleDelete} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {!loading && rows.length > 0 && !showFilteredEmptyState ? (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing {Math.min(startIndex + 1, filteredRows.length)}-{Math.min(startIndex + PAGE_SIZE, filteredRows.length)} of {filteredRows.length} inquiries
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`cursor-pointer rounded-full px-3 py-2 text-sm font-medium transition ${
                  page === currentPage ? "bg-slate-950 text-white" : "border border-slate-200 text-slate-600"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-slate-200 p-2 text-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      {selectedInquiry ? (
        <ViewInquiryModal inquiry={selectedInquiry} onClose={() => setSelectedInquiry(null)} />
      ) : null}
    </div>
  );
}

export default InquiryTable;

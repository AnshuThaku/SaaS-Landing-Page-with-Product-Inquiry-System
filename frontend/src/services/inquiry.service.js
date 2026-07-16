import api from "../api/api";

// Create Inquiry
export const submitInquiry = async (data) => {
  const { data: response } = await api.post("/inquiry", data);
  return response;
};

// Get All Inquiries
export const getAllInquiries = async () => {
  const { data } = await api.get("/inquiry");
  return data;
};

// Get Single Inquiry
export const getInquiryById = async (id) => {
  const { data } = await api.get(`/inquiry/${id}`);
  return data;
};

// Delete Inquiry
export const deleteInquiry = async (id) => {
  const { data } = await api.delete(`/inquiry/${id}`);
  return data;
};
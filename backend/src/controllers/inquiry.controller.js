import Inquiry from "../models/inquiry.model.js";
import wrapAsync from "../utils/wrapAsync.js";

// Create Inquiry
export const createInquiry = wrapAsync(async (req, res) => {
  const {
    fullName,
    companyName,
    email,
    phone,
    country,
    industry,
    companySize,
    message,
  } = req.body;

  const inquiry = await Inquiry.create({
    fullName,
    companyName,
    email,
    phone,
    country,
    industry,
    companySize,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Inquiry created successfully.",
    inquiry,
  });
});

// Get All Inquiries
export const getAllInquiries = wrapAsync(async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: inquiries.length,
    inquiries,
  });
});

// Get Single Inquiry
export const getInquiryById = wrapAsync(async (req, res) => {
  const inquiry = await Inquiry.findById(req.params.id);

  if (!inquiry) {
    const error = new Error("Inquiry not found.");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    inquiry,
  });
});

// Delete Inquiry
export const deleteInquiry = wrapAsync(async (req, res) => {
  const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

  if (!inquiry) {
    const error = new Error("Inquiry not found.");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: "Inquiry deleted successfully.",
    inquiry,
  });
});
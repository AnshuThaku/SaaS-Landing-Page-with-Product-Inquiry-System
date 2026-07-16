import express from "express";
import {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  deleteInquiry,
} from "../controllers/inquiry.controller.js";

import {
  createInquiryValidator,
  validateRequest,
} from "../validators/inquiry.validator.js";

const router = express.Router();

// Create Inquiry
router.post(
  "/",
  createInquiryValidator,
  validateRequest,
  createInquiry
);

// Get All Inquiries
router.get("/", getAllInquiries);

// Get Single Inquiry
router.get("/:id", getInquiryById);

// Delete Inquiry
router.delete("/:id", deleteInquiry);

export default router;
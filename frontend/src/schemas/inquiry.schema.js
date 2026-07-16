import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters.")
    .regex(/^[A-Za-z ]+$/, "Only letters are allowed."),

  companyName: z
    .string()
    .trim()
    .min(2, "Company name is required."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number."),

  country: z
    .string()
    .trim()
    .min(2, "Country is required."),

  industry: z
    .string()
    .trim()
    .min(1, "Please select an industry."),

  companySize: z
    .string()
    .trim()
    .min(1, "Please select company size."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message cannot exceed 500 characters."),
});
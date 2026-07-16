import { body, validationResult } from "express-validator";

// Validation Rules
export const createInquiryValidator = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required."),

  body("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company name is required."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email address is required.")
    .isEmail()
    .withMessage("Please provide a valid email address."),

  body("phone")
  .trim()
  .notEmpty()
  .withMessage("Phone number is required.")
  .matches(/^[6-9]\d{9}$/)
  .withMessage("Please enter a valid 10-digit phone number."),

  body("country")
    .trim()
    .notEmpty()
    .withMessage("Country is required."),

  body("industry")
    .trim()
    .notEmpty()
    .withMessage("Industry is required."),

  body("companySize")
    .trim()
    .notEmpty()
    .withMessage("Company size is required."),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters long."),
];

// Validation Middleware
export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }

  next();
};
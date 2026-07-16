const errorHandler = (err, req, res, next) => {
  // Duplicate email
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "Email already exists.",
    });
  }

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid inquiry ID.",
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error.",
  });
};

export default errorHandler;
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Không có token", code: 401 });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    req.user = {
      id: decoded.id,
      email: decoded.email,
      role_id: decoded.role_id,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token không hợp lệ", code: 401 });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user?.role_id !== 2) {
    return res.status(403).json({ message: "Chỉ admin được phép truy cập", code: 403 });
  }
  next();
};

module.exports = {
  authenticate,
  authorizeAdmin,
};

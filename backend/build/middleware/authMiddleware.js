"use strict";

var jwt = require("jsonwebtoken");
var _require = require("../models/User"),
  User = _require.User;
var SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";
var authenticate = function authenticate(req, res, next) {
  var _req$headers$authoriz;
  var token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Không có token",
      code: 401
    });
  }
  try {
    var decoded = jwt.verify(token, SECRET_KEY);
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role_id: decoded.role_id
    };
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Token không hợp lệ",
      code: 401
    });
  }
};
var authorizeAdmin = function authorizeAdmin(req, res, next) {
  var _req$user;
  if (((_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.role_id) !== 2) {
    return res.status(403).json({
      message: "Chỉ admin được phép truy cập",
      code: 403
    });
  }
  next();
};
module.exports = {
  authenticate: authenticate,
  authorizeAdmin: authorizeAdmin
};
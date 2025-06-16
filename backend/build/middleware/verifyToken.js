"use strict";

var jwt = require("jsonwebtoken");
require("dotenv").config();
var verifyToken = function verifyToken(req, res, next) {
  try {
    var authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({
        code: 403,
        message: "Không có quyền truy cập!"
      });
    }
    var token = authHeader.split(" ")[1];
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      code: 401,
      message: "Token không hợp lệ hoặc đã hết hạn!"
    });
  }
};
module.exports = verifyToken;
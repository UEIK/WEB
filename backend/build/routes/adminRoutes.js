"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../middleware/authMiddleware"),
  authenticate = _require.authenticate,
  authorizeAdmin = _require.authorizeAdmin;
var _require2 = require("../controllers/adminController"),
  getUsers = _require2.getUsers,
  getUserById = _require2.getUserById,
  updateUser = _require2.updateUser,
  deleteUser = _require2.deleteUser;

// Chặn bằng middleware authenticate + authorizeAdmin
router.get("/users", authenticate, authorizeAdmin, getUsers);
router.get("/users/:id", authenticate, authorizeAdmin, getUserById);
router.put("/users/:id", authenticate, authorizeAdmin, updateUser);
router["delete"]("/users/:id", authenticate, authorizeAdmin, deleteUser);
module.exports = router;
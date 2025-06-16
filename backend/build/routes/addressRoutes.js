"use strict";

var express = require("express");
var router = express.Router();
var addressController = require("../controllers/addressController");
// const authMiddleware = require("../middleware/authMiddleware"); // <-- Thêm dòng này
var _require = require("../middleware/authMiddleware"),
  authenticate = _require.authenticate;
router.post("/", addressController.createAddress);
router.get("/:userId", addressController.getAddressesByUserId);
// router.delete("/:id", authMiddleware, addressController.deleteAddress);
router["delete"]("/:id", authenticate, addressController.deleteAddress);
module.exports = router;
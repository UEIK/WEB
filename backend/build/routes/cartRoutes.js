"use strict";

var express = require("express");
var router = express.Router();
var cartController = require("../controllers/cartController");
var _require = require("../middleware/authMiddleware"),
  authenticate = _require.authenticate;
router.post("/add", authenticate, cartController.addToCart);
router.get("/:userId", authenticate, cartController.getCart);
router.put("/item/:cartItemId", authenticate, cartController.updateCartItem);
router["delete"]("/item/:cartItemId", authenticate, cartController.removeCartItem);
module.exports = router;
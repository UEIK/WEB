"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Cart = require("../models/Cart");
var CartItem = require("../models/CartItem");
var Product = require("../models/Product");
var Gallery = require('../models/Gallery');
var ProductSize = require("../models/ProductSize");
var addToCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, userId, productId, quantity, color, size, product, productSize, cart, cartItem, existingCartQuantity, totalDesiredQuantity, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _req$body = req.body, userId = _req$body.userId, productId = _req$body.productId, quantity = _req$body.quantity, color = _req$body.color, size = _req$body.size;
          if (!(!userId || !productId || !quantity)) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: "userId, productId, and quantity are required"
          }));
        case 1:
          _context.n = 2;
          return Product.findByPk(productId);
        case 2:
          product = _context.v;
          if (product) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(404).json({
            error: "Product not found"
          }));
        case 3:
          _context.n = 4;
          return ProductSize.findOne({
            where: {
              product_id: productId,
              size: size
            }
          });
        case 4:
          productSize = _context.v;
          if (productSize) {
            _context.n = 5;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: "Size không tồn tại cho sản phẩm này"
          }));
        case 5:
          _context.n = 6;
          return Cart.findOne({
            where: {
              user_id: userId
            }
          });
        case 6:
          cart = _context.v;
          if (cart) {
            _context.n = 8;
            break;
          }
          _context.n = 7;
          return Cart.create({
            user_id: userId
          });
        case 7:
          cart = _context.v;
        case 8:
          _context.n = 9;
          return CartItem.findOne({
            where: {
              cart_id: cart.id,
              product_id: productId,
              color: color || null,
              size: size || null
            }
          });
        case 9:
          cartItem = _context.v;
          existingCartQuantity = cartItem ? cartItem.quantity : 0;
          totalDesiredQuantity = existingCartQuantity + quantity;
          if (!(totalDesiredQuantity > productSize.quantity)) {
            _context.n = 10;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: "S\u1ED1 l\u01B0\u1EE3ng trong kho kh\xF4ng \u0111\u1EE7. Hi\u1EC7n ch\u1EC9 c\xF2n ".concat(productSize.quantity, " s\u1EA3n ph\u1EA9m.")
          }));
        case 10:
          if (!cartItem) {
            _context.n = 12;
            break;
          }
          cartItem.quantity += quantity;
          _context.n = 11;
          return cartItem.save();
        case 11:
          _context.n = 14;
          break;
        case 12:
          _context.n = 13;
          return CartItem.create({
            cart_id: cart.id,
            product_id: productId,
            quantity: quantity,
            color: color || null,
            size: size || null
          });
        case 13:
          cartItem = _context.v;
        case 14:
          res.status(200).json({
            message: "Product added to cart successfully",
            cartItem: cartItem
          });
          _context.n = 16;
          break;
        case 15:
          _context.p = 15;
          _t = _context.v;
          console.error("Error adding to cart:", _t);
          res.status(500).json({
            error: "Failed to add product to cart"
          });
        case 16:
          return _context.a(2);
      }
    }, _callee, null, [[0, 15]]);
  }));
  return function addToCart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getCart = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var userId, cart, cartItemsWithStatus, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          userId = req.params.userId;
          _context2.n = 1;
          return Cart.findOne({
            where: {
              user_id: userId
            },
            include: [{
              model: CartItem,
              include: [{
                model: Product,
                attributes: ["id", "name", "price"],
                required: false,
                include: [{
                  model: Gallery,
                  attributes: ["thumbnail"]
                }, {
                  model: ProductSize,
                  as: "Sizes",
                  attributes: ["size"],
                  required: false
                }]
              }]
            }]
          });
        case 1:
          cart = _context2.v;
          if (cart) {
            _context2.n = 3;
            break;
          }
          _context2.n = 2;
          return Cart.create({
            user_id: userId
          });
        case 2:
          cart = _context2.v;
          cart.CartItems = [];
        case 3:
          cartItemsWithStatus = cart.CartItems.map(function (cartItem) {
            var productExists = !!cartItem.Product;
            return _objectSpread(_objectSpread({}, cartItem.toJSON()), {}, {
              productExists: productExists,
              error: productExists ? null : "Sản phẩm không tồn tại"
            });
          });
          res.status(200).json(_objectSpread(_objectSpread({}, cart.toJSON()), {}, {
            CartItems: cartItemsWithStatus
          }));
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          console.error("Error fetching cart:", _t2);
          res.status(500).json({
            error: "Failed to fetch cart"
          });
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 4]]);
  }));
  return function getCart(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateCartItem = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var cartItemId, _req$body2, quantity, size, cartItem, targetSize, productSize, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          cartItemId = req.params.cartItemId;
          _req$body2 = req.body, quantity = _req$body2.quantity, size = _req$body2.size;
          _context3.n = 1;
          return CartItem.findByPk(cartItemId);
        case 1:
          cartItem = _context3.v;
          if (cartItem) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            error: "Cart item not found"
          }));
        case 2:
          //Fallback nếu size từ request chưa có, thì lấy từ cartItem
          targetSize = size || cartItem.size;
          if (targetSize) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "Size không xác định được"
          }));
        case 3:
          if (!(quantity !== undefined)) {
            _context3.n = 8;
            break;
          }
          if (!(quantity < 1)) {
            _context3.n = 4;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "Quantity must be at least 1"
          }));
        case 4:
          _context3.n = 5;
          return ProductSize.findOne({
            where: {
              product_id: cartItem.product_id,
              size: targetSize
            }
          });
        case 5:
          productSize = _context3.v;
          if (productSize) {
            _context3.n = 6;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "Size không tồn tại trong kho"
          }));
        case 6:
          if (!(quantity > productSize.quantity)) {
            _context3.n = 7;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "S\u1ED1 l\u01B0\u1EE3ng trong kho kh\xF4ng \u0111\u1EE7. Hi\u1EC7n ch\u1EC9 c\xF2n ".concat(productSize.quantity, " s\u1EA3n ph\u1EA9m.")
          }));
        case 7:
          cartItem.quantity = quantity;
        case 8:
          if (size !== undefined && size !== cartItem.size) {
            cartItem.size = size;
          }
          _context3.n = 9;
          return cartItem.save();
        case 9:
          res.status(200).json({
            message: "Cart item updated successfully",
            cartItem: cartItem
          });
          _context3.n = 11;
          break;
        case 10:
          _context3.p = 10;
          _t3 = _context3.v;
          console.error("Error updating cart item:", _t3);
          res.status(500).json({
            error: "Failed to update cart item"
          });
        case 11:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function updateCartItem(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var removeCartItem = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var cartItemId, cartItem, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          cartItemId = req.params.cartItemId;
          _context4.n = 1;
          return CartItem.findByPk(cartItemId);
        case 1:
          cartItem = _context4.v;
          if (cartItem) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            error: "Cart item not found"
          }));
        case 2:
          _context4.n = 3;
          return cartItem.destroy();
        case 3:
          res.status(200).json({
            message: "Cart item removed successfully"
          });
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          console.error("Error removing cart item:", _t4);
          res.status(500).json({
            error: "Failed to remove cart item"
          });
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function removeCartItem(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
module.exports = {
  addToCart: addToCart,
  getCart: getCart,
  updateCartItem: updateCartItem,
  removeCartItem: removeCartItem
};
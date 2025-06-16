"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("../models/AssociationsRelationship"),
  Order = _require.Order,
  OrderDetail = _require.OrderDetail,
  Product = _require.Product,
  Gallery = _require.Gallery,
  Cart = _require.Cart,
  CartItem = _require.CartItem,
  ProductSize = _require.ProductSize;
var _require2 = require("sequelize"),
  Op = _require2.Op;
var moment = require("moment");
exports.placeOrder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var transaction, _req$body, user_id, name, email, phone_number, address, note, total_money, items, orderDate, _iterator, _step, item, productSize, order, orderDetails, _iterator2, _step2, _item, userCart, productIds, _t, _t2, _t3;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return Order.sequelize.transaction();
        case 1:
          transaction = _context.v;
          _context.p = 2;
          _req$body = req.body, user_id = _req$body.user_id, name = _req$body.name, email = _req$body.email, phone_number = _req$body.phone_number, address = _req$body.address, note = _req$body.note, total_money = _req$body.total_money, items = _req$body.items;
          orderDate = moment().utcOffset(0).format("YYYY-MM-DD HH:mm:ss");
          console.log("Ngày order format:", orderDate);
          _iterator = _createForOfIteratorHelper(items);
          _context.p = 3;
          _iterator.s();
        case 4:
          if ((_step = _iterator.n()).done) {
            _context.n = 8;
            break;
          }
          item = _step.value;
          _context.n = 5;
          return ProductSize.findOne({
            where: {
              product_id: item.product_id,
              size: item.size
            }
          });
        case 5:
          productSize = _context.v;
          if (!(!productSize || productSize.quantity < item.quantity)) {
            _context.n = 7;
            break;
          }
          _context.n = 6;
          return transaction.rollback();
        case 6:
          return _context.a(2, res.status(400).json({
            error: "S\u1EA3n ph\u1EA9m ".concat(item.product_id, " (size ").concat(item.size, ") ch\u1EC9 c\xF2n ").concat((productSize === null || productSize === void 0 ? void 0 : productSize.quantity) || 0, " s\u1EA3n ph\u1EA9m trong kho.")
          }));
        case 7:
          _context.n = 4;
          break;
        case 8:
          _context.n = 10;
          break;
        case 9:
          _context.p = 9;
          _t = _context.v;
          _iterator.e(_t);
        case 10:
          _context.p = 10;
          _iterator.f();
          return _context.f(10);
        case 11:
          _context.n = 12;
          return Order.create({
            user_id: user_id,
            name: name,
            email: email,
            phone_number: phone_number,
            address: address,
            note: note,
            order_date: orderDate,
            status: "Processing",
            total_money: total_money
          }, {
            transaction: transaction
          });
        case 12:
          order = _context.v;
          orderDetails = items.map(function (item) {
            return {
              order_id: order.id,
              product_id: item.product_id,
              price: item.price,
              quantity: item.quantity,
              size: item.size
            };
          });
          _context.n = 13;
          return OrderDetail.bulkCreate(orderDetails, {
            transaction: transaction
          });
        case 13:
          _iterator2 = _createForOfIteratorHelper(items);
          _context.p = 14;
          _iterator2.s();
        case 15:
          if ((_step2 = _iterator2.n()).done) {
            _context.n = 17;
            break;
          }
          _item = _step2.value;
          _context.n = 16;
          return ProductSize.decrement("quantity", {
            by: _item.quantity,
            where: {
              product_id: _item.product_id,
              size: _item.size
            },
            transaction: transaction
          });
        case 16:
          _context.n = 15;
          break;
        case 17:
          _context.n = 19;
          break;
        case 18:
          _context.p = 18;
          _t2 = _context.v;
          _iterator2.e(_t2);
        case 19:
          _context.p = 19;
          _iterator2.f();
          return _context.f(19);
        case 20:
          _context.n = 21;
          return Cart.findOne({
            where: {
              user_id: user_id
            },
            transaction: transaction
          });
        case 21:
          userCart = _context.v;
          if (!userCart) {
            _context.n = 22;
            break;
          }
          productIds = items.map(function (item) {
            return item.product_id;
          });
          _context.n = 22;
          return CartItem.destroy({
            where: {
              cart_id: userCart.id,
              product_id: _defineProperty({}, Op["in"], productIds)
            },
            transaction: transaction
          });
        case 22:
          _context.n = 23;
          return transaction.commit();
        case 23:
          return _context.a(2, res.status(201).json({
            message: "Đặt hàng thành công!"
          }));
        case 24:
          _context.p = 24;
          _t3 = _context.v;
          _context.n = 25;
          return transaction.rollback();
        case 25:
          console.error("Lỗi đặt hàng:", _t3);
          return _context.a(2, res.status(500).json({
            error: "Lỗi máy chủ",
            detail: _t3.message
          }));
      }
    }, _callee, null, [[14, 18, 19, 20], [3, 9, 10, 11], [2, 24]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllOrders = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var page, limit, offset, _yield$Order$findAndC, count, rows, totalPages, _t4;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 12;
          offset = (page - 1) * limit;
          _context2.n = 1;
          return Order.findAndCountAll({
            order: [["id", "DESC"]],
            limit: limit,
            offset: offset
          });
        case 1:
          _yield$Order$findAndC = _context2.v;
          count = _yield$Order$findAndC.count;
          rows = _yield$Order$findAndC.rows;
          totalPages = Math.ceil(count / limit);
          res.status(200).json({
            code: 200,
            message: "Lấy danh sách đơn hàng thành công",
            data: rows,
            totalPages: totalPages,
            currentPage: page
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t4 = _context2.v;
          console.error("Lỗi lấy danh sách đơn hàng:", _t4);
          return _context2.a(2, res.status(500).json({
            error: "Lỗi máy chủ",
            detail: _t4.message
          }));
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getOrderDetails = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var orderId, details, data, _t5;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          orderId = req.params.orderId;
          _context3.n = 1;
          return OrderDetail.findAll({
            where: {
              order_id: orderId
            },
            include: [{
              model: Product,
              as: "Product",
              attributes: ["name"],
              include: [{
                model: Gallery,
                as: "Galleries",
                attributes: ["thumbnail"],
                required: false
              }]
            }, {
              model: Order,
              as: "Order",
              attributes: ["address", "name", "phone_number"]
            }]
          });
        case 1:
          details = _context3.v;
          data = details.map(function (d) {
            var _d$Product, _d$Product2, _d$Order, _d$Order2, _d$Order3;
            return {
              id: d.id,
              productname: (_d$Product = d.Product) === null || _d$Product === void 0 ? void 0 : _d$Product.name,
              image: ((_d$Product2 = d.Product) === null || _d$Product2 === void 0 || (_d$Product2 = _d$Product2.Galleries) === null || _d$Product2 === void 0 || (_d$Product2 = _d$Product2[0]) === null || _d$Product2 === void 0 ? void 0 : _d$Product2.thumbnail) || "",
              quantity: d.quantity,
              price: d.price,
              size: d.size,
              address: (_d$Order = d.Order) === null || _d$Order === void 0 ? void 0 : _d$Order.address,
              name: (_d$Order2 = d.Order) === null || _d$Order2 === void 0 ? void 0 : _d$Order2.name,
              phone_number: (_d$Order3 = d.Order) === null || _d$Order3 === void 0 ? void 0 : _d$Order3.phone_number
            };
          });
          res.json({
            data: data
          });
          _context3.n = 3;
          break;
        case 2:
          _context3.p = 2;
          _t5 = _context3.v;
          console.error("Lỗi lấy chi tiết đơn hàng:", _t5);
          res.status(500).json({
            error: "Lỗi máy chủ",
            detail: _t5.message,
            stack: _t5.stack
          });
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateOrderStatus = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var id, status, order, _t6;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          id = req.params.id;
          status = req.body.status;
          _context4.n = 1;
          return Order.findByPk(id);
        case 1:
          order = _context4.v;
          if (order) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            message: 'Order not found'
          }));
        case 2:
          order.status = status;
          _context4.n = 3;
          return order.save();
        case 3:
          res.status(200).json({
            message: 'Order status updated',
            status: order.status
          });
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t6 = _context4.v;
          console.error('Error updating order status:', _t6);
          res.status(500).json({
            message: 'Server error'
          });
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getOrdersByUserId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var userId, page, limit, offset, _yield$Order$findAndC2, count, rows, totalPages, _t7;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.p = 0;
          userId = req.params.userId;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 5;
          offset = (page - 1) * limit;
          _context5.n = 1;
          return Order.findAndCountAll({
            where: {
              user_id: userId
            },
            order: [["order_date", "DESC"]],
            limit: limit,
            offset: offset,
            attributes: ["id", "order_date", "status", "total_money"]
          });
        case 1:
          _yield$Order$findAndC2 = _context5.v;
          count = _yield$Order$findAndC2.count;
          rows = _yield$Order$findAndC2.rows;
          totalPages = Math.ceil(count / limit);
          res.status(200).json({
            code: 200,
            message: "Lấy danh sách đơn hàng theo người dùng thành công",
            data: rows,
            totalPages: totalPages,
            currentPage: page
          });
          _context5.n = 3;
          break;
        case 2:
          _context5.p = 2;
          _t7 = _context5.v;
          console.error("Lỗi lấy đơn theo user:", _t7);
          res.status(500).json({
            error: "Lỗi máy chủ",
            detail: _t7.message
          });
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function (_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
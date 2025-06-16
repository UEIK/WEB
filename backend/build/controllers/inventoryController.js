"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Product = require('../models/Product');
var ProductSize = require('../models/ProductSize');
var Gallery = require('../models/Gallery');
var getInventory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$query, _req$query$page, page, _req$query$limit, limit, productId, offset, whereCondition, totalCount, sizes, inventoryData, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 12 : _req$query$limit, productId = _req$query.productId;
          page = parseInt(page);
          limit = parseInt(limit);
          offset = (page - 1) * limit;
          whereCondition = {};
          if (productId) {
            whereCondition.product_id = productId;
          }
          _context.n = 1;
          return ProductSize.count({
            where: whereCondition
          });
        case 1:
          totalCount = _context.v;
          _context.n = 2;
          return ProductSize.findAll({
            where: whereCondition,
            include: [{
              model: Product,
              attributes: ['name'],
              include: [{
                model: Gallery,
                attributes: ['thumbnail'],
                required: false
              }]
            }],
            offset: offset,
            limit: limit
          });
        case 2:
          sizes = _context.v;
          inventoryData = sizes.map(function (size) {
            var _size$Product, _size$Product2;
            return {
              size_id: size.id,
              product_id: size.product_id,
              product_name: ((_size$Product = size.Product) === null || _size$Product === void 0 ? void 0 : _size$Product.name) || "Unknown",
              product_image: ((_size$Product2 = size.Product) === null || _size$Product2 === void 0 || (_size$Product2 = _size$Product2.Galleries) === null || _size$Product2 === void 0 || (_size$Product2 = _size$Product2[0]) === null || _size$Product2 === void 0 ? void 0 : _size$Product2.thumbnail) || null,
              size: size.size,
              quantity: size.quantity
            };
          });
          res.json({
            data: inventoryData,
            totalPages: Math.ceil(totalCount / limit)
          });
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error('❌ Error fetching inventory:', _t);
          res.status(500).json({
            message: 'Server error',
            error: _t.message
          });
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 3]]);
  }));
  return function getInventory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateInventory = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body, size_id, quantity, productSize, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _req$body = req.body, size_id = _req$body.size_id, quantity = _req$body.quantity;
          if (!(!size_id || quantity === undefined)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            message: 'Missing size_id or quantity'
          }));
        case 1:
          _context2.n = 2;
          return ProductSize.findByPk(size_id);
        case 2:
          productSize = _context2.v;
          if (productSize) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(404).json({
            message: 'ProductSize not found'
          }));
        case 3:
          productSize.quantity = quantity;
          _context2.n = 4;
          return productSize.save();
        case 4:
          res.json({
            message: 'Inventory updated successfully'
          });
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.error('❌ Error updating inventory:', _t2);
          res.status(500).json({
            message: 'Server error',
            error: _t2.message
          });
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return function updateInventory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
module.exports = {
  getInventory: getInventory,
  updateInventory: updateInventory
};
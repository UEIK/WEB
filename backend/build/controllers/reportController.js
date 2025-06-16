"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("../config/dbConfig"),
  sequelize = _require.sequelize;
var _require2 = require("sequelize"),
  QueryTypes = _require2.QueryTypes;
var getRevenueReport = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _countResult$, _req$query, _req$query$groupBy, groupBy, productId, startDate, endDate, page, limit, offset, groupField, replacements, conditions, sql, data, countSql, countResult, total, totalPages, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _req$query = req.query, _req$query$groupBy = _req$query.groupBy, groupBy = _req$query$groupBy === void 0 ? "month" : _req$query$groupBy, productId = _req$query.productId, startDate = _req$query.startDate, endDate = _req$query.endDate;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 15;
          offset = (page - 1) * limit;
          _t = groupBy;
          _context.n = _t === "day" ? 1 : _t === "month" ? 2 : _t === "year" ? 3 : 4;
          break;
        case 1:
          groupField = "CONVERT(date, o.order_date)";
          return _context.a(3, 5);
        case 2:
          groupField = "FORMAT(o.order_date, 'yyyy-MM')";
          return _context.a(3, 5);
        case 3:
          groupField = "YEAR(o.order_date)";
          return _context.a(3, 5);
        case 4:
          groupField = "FORMAT(o.order_date, 'yyyy-MM')";
        case 5:
          replacements = {};
          conditions = "WHERE o.status = 'Delivered'";
          if (productId) {
            conditions += " AND od.product_id = :productId";
            replacements.productId = productId;
          }
          if (startDate) {
            conditions += " AND o.order_date >= :startDate";
            replacements.startDate = "".concat(startDate, " 00:00:00");
          }
          if (endDate) {
            conditions += " AND o.order_date <= :endDate";
            replacements.endDate = "".concat(endDate, " 23:59:59");
          }
          sql = "\n      SELECT\n        ".concat(groupField, " AS period,\n        p.id AS product_id,\n        p.name AS product_name,\n        SUM(od.quantity * od.price) AS total_revenue,\n        SUM(od.quantity) AS total_quantity_sold\n      FROM [ORDER] o\n      JOIN ORDER_DETAIL od ON o.id = od.order_id\n      JOIN Product p ON p.id = od.product_id\n      ").concat(conditions, "\n      GROUP BY ").concat(groupField, ", p.id, p.name\n      ORDER BY period DESC, total_revenue DESC\n      OFFSET ").concat(offset, " ROWS FETCH NEXT ").concat(limit, " ROWS ONLY\n    ");
          _context.n = 6;
          return sequelize.query(sql, {
            type: QueryTypes.SELECT,
            replacements: replacements
          });
        case 6:
          data = _context.v;
          countSql = "\n      SELECT COUNT(DISTINCT p.id) AS total\n      FROM [ORDER] o\n      JOIN ORDER_DETAIL od ON o.id = od.order_id\n      JOIN Product p ON p.id = od.product_id\n      ".concat(conditions, "\n    ");
          _context.n = 7;
          return sequelize.query(countSql, {
            type: QueryTypes.SELECT,
            replacements: replacements
          });
        case 7:
          countResult = _context.v;
          total = ((_countResult$ = countResult[0]) === null || _countResult$ === void 0 ? void 0 : _countResult$.total) || 0;
          totalPages = Math.ceil(total / limit);
          res.status(200).json({
            code: 200,
            message: "Lấy báo cáo doanh thu thành công",
            data: data,
            totalPages: totalPages,
            currentPage: page
          });
          _context.n = 9;
          break;
        case 8:
          _context.p = 8;
          _t2 = _context.v;
          console.error("Lỗi lấy báo cáo doanh thu:", _t2);
          res.status(500).json({
            code: 500,
            message: "Lỗi máy chủ",
            detail: _t2.message
          });
        case 9:
          return _context.a(2);
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getRevenueReport(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  getRevenueReport: getRevenueReport
};
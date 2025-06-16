"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var User = require("../models/User");

// ✅ Lấy danh sách tất cả tài khoản
var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var page, limit, offset, _yield$User$findAndCo, count, rows, totalPages, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          // Lấy page, limit từ query, mặc định page=1, limit=15
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 12;
          offset = (page - 1) * limit; // Truy vấn theo phân trang
          _context.n = 1;
          return User.findAndCountAll({
            attributes: {
              exclude: ['password']
            },
            order: [['id', 'ASC']],
            limit: limit,
            offset: offset
          });
        case 1:
          _yield$User$findAndCo = _context.v;
          count = _yield$User$findAndCo.count;
          rows = _yield$User$findAndCo.rows;
          totalPages = Math.ceil(count / limit);
          return _context.a(2, res.status(200).json({
            message: "Lấy danh sách tài khoản thành công",
            code: 200,
            data: rows,
            totalPages: totalPages,
            currentPage: page,
            totalUsers: count
          }));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error("🚀 ~ getUsers error:", _t);
          return _context.a(2, res.status(500).json({
            message: "Lỗi server",
            code: 500,
            data: null
          }));
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ✅ Lấy chi tiết một tài khoản
var getUserById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var user, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return User.findByPk(req.params.id, {
            attributes: {
              exclude: ['password']
            }
          });
        case 1:
          user = _context2.v;
          if (user) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            message: "Không tìm thấy người dùng",
            code: 404,
            data: null
          }));
        case 2:
          return _context2.a(2, res.status(200).json({
            message: "Lấy thông tin người dùng thành công",
            code: 200,
            data: user
          }));
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error("🚀 ~ getUserById error:", _t2);
          return _context2.a(2, res.status(500).json({
            message: "Lỗi server",
            code: 500,
            data: null
          }));
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function getUserById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// ✅ Cập nhật tài khoản (chỉ sửa name + role_id)
var updateUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _req$body, name, role_id, user, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          _req$body = req.body, name = _req$body.name, role_id = _req$body.role_id;
          _context3.n = 1;
          return User.findByPk(req.params.id);
        case 1:
          user = _context3.v;
          if (user) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            message: "Không tìm thấy người dùng",
            code: 404,
            data: null
          }));
        case 2:
          // Chỉ update name và role_id
          user.name = name || user.name;
          user.role_id = role_id !== undefined ? role_id : user.role_id;
          _context3.n = 3;
          return user.save();
        case 3:
          return _context3.a(2, res.status(200).json({
            message: "Cập nhật tài khoản thành công",
            code: 200,
            data: {
              id: user.id,
              name: user.name,
              role_id: user.role_id
            }
          }));
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          console.error("🚀 ~ updateUser error:", _t3);
          return _context3.a(2, res.status(500).json({
            message: "Lỗi server",
            code: 500,
            data: null
          }));
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return function updateUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ✅ Xoá tài khoản
var deleteUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var user, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return User.findByPk(req.params.id);
        case 1:
          user = _context4.v;
          if (user) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            message: "Không tìm thấy người dùng",
            code: 404,
            data: null
          }));
        case 2:
          _context4.n = 3;
          return user.destroy();
        case 3:
          return _context4.a(2, res.status(200).json({
            message: "Xóa tài khoản thành công",
            code: 200,
            data: {
              id: user.id
            }
          }));
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          console.error("🚀 ~ deleteUser error:", _t4);
          return _context4.a(2, res.status(500).json({
            message: "Lỗi server",
            code: 500,
            data: null
          }));
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  updateUser: updateUser,
  deleteUser: deleteUser
};
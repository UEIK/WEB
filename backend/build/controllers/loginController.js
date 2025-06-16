"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var User = require("../models/User");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var SECRET_KEY = "your_secret_key"; // 👉 Nên lưu trong .env

// Đăng ký tài khoản
var register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, username, email, password, existingUser, hashedPassword, newUser, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
          _context.p = 1;
          _context.n = 2;
          return User.findOne({
            where: {
              email: email
            }
          });
        case 2:
          existingUser = _context.v;
          console.log(existingUser);
          if (!existingUser) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(400).json({
            code: 400,
            message: "Tài khoản đã tồn tại"
          }));
        case 3:
          _context.n = 4;
          return bcrypt.hash(password, 10);
        case 4:
          hashedPassword = _context.v;
          _context.n = 5;
          return User.create({
            name: username,
            // ✅ map đúng với model
            email: email,
            password: hashedPassword,
            role_id: 1
          });
        case 5:
          newUser = _context.v;
          res.status(201).json({
            code: 201,
            message: "Đăng ký thành công",
            data: {
              id: newUser.id,
              username: newUser.name,
              // ✅ trả về đúng biến
              email: newUser.email,
              role_id: newUser.role_id
            }
          });
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          console.error("Lỗi khi đăng ký:", _t);
          res.status(500).json({
            code: 500,
            message: "Lỗi server khi đăng ký",
            data: null
          });
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[1, 6]]);
  }));
  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Đăng nhập
var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body2, email, password, user, isMatch, token, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.p = 1;
          _context2.n = 2;
          return User.findOne({
            where: {
              email: email
            }
          });
        case 2:
          user = _context2.v;
          if (user) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(404).json({
            code: 404,
            message: "Tài khoản không tồn tại"
          }));
        case 3:
          _context2.n = 4;
          return bcrypt.compare(password, user.password);
        case 4:
          isMatch = _context2.v;
          if (isMatch) {
            _context2.n = 5;
            break;
          }
          return _context2.a(2, res.status(401).json({
            code: 401,
            message: "Sai mật khẩu"
          }));
        case 5:
          token = jwt.sign({
            id: user.id,
            email: user.email,
            role_id: user.role_id // 👈 Thêm vào token
          }, SECRET_KEY, {
            expiresIn: "1d"
          });
          res.status(200).json({
            code: 200,
            message: "Đăng nhập thành công",
            token: token,
            data: {
              id: user.id,
              username: user.name,
              email: user.email,
              role_id: user.role_id // 👈 Thêm vào FE luôn
            }
          });
          _context2.n = 7;
          break;
        case 6:
          _context2.p = 6;
          _t2 = _context2.v;
          console.error("Lỗi khi đăng nhập:", _t2);
          res.status(500).json({
            code: 500,
            message: "Lỗi server khi đăng nhập",
            data: null
          });
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Lấy thông tin người dùng từ token
var getUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var authHeader, token, decoded, user, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          authHeader = req.headers.authorization;
          if (authHeader) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, res.status(401).json({
            code: 401,
            message: "Không có token"
          }));
        case 1:
          token = authHeader.split(" ")[1];
          _context3.p = 2;
          decoded = jwt.verify(token, SECRET_KEY);
          _context3.n = 3;
          return User.findByPk(decoded.userId);
        case 3:
          user = _context3.v;
          if (user) {
            _context3.n = 4;
            break;
          }
          return _context3.a(2, res.status(404).json({
            code: 404,
            message: "Không tìm thấy người dùng"
          }));
        case 4:
          res.status(200).json({
            code: 200,
            message: "Lấy thông tin người dùng thành công",
            data: {
              id: user.id,
              username: user.name,
              // ✅ đổi thành name
              email: user.email
            }
          });
          _context3.n = 6;
          break;
        case 5:
          _context3.p = 5;
          _t3 = _context3.v;
          res.status(401).json({
            code: 401,
            message: "Token không hợp lệ"
          });
        case 6:
          return _context3.a(2);
      }
    }, _callee3, null, [[2, 5]]);
  }));
  return function getUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
module.exports = {
  register: register,
  login: login,
  getUser: getUser
};
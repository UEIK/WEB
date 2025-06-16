"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var authService = require('../services/authService');

// ✅ ĐĂNG KÝ
var registerController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, name, email, password, emailRegex, data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          console.log("🔥 BODY:", req.body);
          if (!(!name || !email || !password)) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            message: "Thiếu thông tin bắt buộc!",
            code: 400
          }));
        case 1:
          emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(email)) {
            _context.n = 2;
            break;
          }
          return _context.a(2, res.status(400).json({
            message: "Email không hợp lệ!",
            code: 400
          }));
        case 2:
          if (!(password.length < 6)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(400).json({
            message: "Mật khẩu phải có ít nhất 6 ký tự!",
            code: 400
          }));
        case 3:
          _context.n = 4;
          return authService.registerService({
            name: name,
            email: email,
            password: password
          });
        case 4:
          data = _context.v;
          return _context.a(2, res.status(data.code).json({
            message: data.message,
            code: data.code,
            data: data.data
          }));
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error("🚀 ~ registerController ~ err:", _t);
          return _context.a(2, res.status(500).json({
            message: 'Lỗi từ hệ thống',
            code: 500,
            data: null
          }));
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function registerController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ✅ ĐĂNG NHẬP
var loginController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body2, email, password, data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          if (!(!email || !password)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            message: "Thiếu email hoặc mật khẩu!",
            code: 400
          }));
        case 1:
          _context2.n = 2;
          return authService.loginService({
            email: email,
            password: password
          });
        case 2:
          data = _context2.v;
          return _context2.a(2, res.status(data.code).json({
            message: data.message,
            code: data.code,
            data: data.data,
            token: data.token
          }));
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error("🚀 ~ loginController ~ err:", _t2);
          return _context2.a(2, res.status(500).json({
            message: 'Lỗi từ hệ thống',
            code: 500,
            data: null
          }));
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function loginController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
module.exports = {
  registerController: registerController,
  loginController: loginController
};
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Category = require('../models/Category');
var SubCategory = require('../models/SubCategory');
var Product = require('../models/Product');
var getCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var categories, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return Category.findAll({
            attributes: ['id', 'name']
          });
        case 1:
          categories = _context.v;
          res.status(200).json(categories);
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error('Error fetching categories:', _t);
          res.status(500).json({
            error: 'Failed to fetch categories',
            details: _t.message
          });
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getCategories(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getSubcategories = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var categoryId, subcategories, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          categoryId = req.query.categoryId;
          if (!(!categoryId || isNaN(categoryId))) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            error: 'categoryId is required and must be a number'
          }));
        case 1:
          _context2.n = 2;
          return SubCategory.findAll({
            where: {
              category_id: Number(categoryId)
            },
            attributes: ['id', 'name']
          });
        case 2:
          subcategories = _context2.v;
          res.status(200).json(subcategories);
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error('Error fetching subcategories:', _t2);
          res.status(500).json({
            error: 'Failed to fetch subcategories',
            details: _t2.message
          });
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function getSubcategories(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createCategory = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var name, existingCategory, category, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          name = req.body.name;
          if (name) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "Category name is required"
          }));
        case 1:
          _context3.n = 2;
          return Category.findOne({
            where: {
              name: name
            }
          });
        case 2:
          existingCategory = _context3.v;
          if (!existingCategory) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "Category already exists"
          }));
        case 3:
          _context3.n = 4;
          return Category.create({
            name: name
          });
        case 4:
          category = _context3.v;
          res.status(201).json({
            message: "Category created successfully",
            category: category
          });
          _context3.n = 6;
          break;
        case 5:
          _context3.p = 5;
          _t3 = _context3.v;
          console.error("Error creating category:", _t3);
          res.status(500).json({
            error: "Failed to create category"
          });
        case 6:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return function createCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteCategory = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var id, category, productCount, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          id = req.params.id;
          _context4.n = 1;
          return Category.findByPk(id);
        case 1:
          category = _context4.v;
          if (category) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            message: 'Category not found'
          }));
        case 2:
          _context4.n = 3;
          return Product.count({
            where: {
              category_id: id
            }
          });
        case 3:
          productCount = _context4.v;
          if (!(productCount > 0)) {
            _context4.n = 5;
            break;
          }
          _context4.n = 4;
          return Product.destroy({
            where: {
              category_id: id
            }
          });
        case 4:
          console.log("Deleted ".concat(productCount, " products associated with category ").concat(id));
        case 5:
          _context4.n = 6;
          return SubCategory.destroy({
            where: {
              category_id: id
            }
          });
        case 6:
          _context4.n = 7;
          return category.destroy();
        case 7:
          res.status(200).json({
            message: 'Category deleted successfully'
          });
          _context4.n = 9;
          break;
        case 8:
          _context4.p = 8;
          _t4 = _context4.v;
          console.error('Error deleting category:', _t4);
          res.status(500).json({
            message: 'Error deleting category'
          });
        case 9:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function deleteCategory(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var createSubcategory = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$body, name, categoryId, category, existingSubcategory, subcategory, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.p = 0;
          _req$body = req.body, name = _req$body.name, categoryId = _req$body.categoryId;
          if (!(!name || !categoryId)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            error: "Subcategory name and category ID are required"
          }));
        case 1:
          _context5.n = 2;
          return Category.findByPk(categoryId);
        case 2:
          category = _context5.v;
          if (category) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, res.status(400).json({
            error: "Parent category not found"
          }));
        case 3:
          _context5.n = 4;
          return SubCategory.findOne({
            where: {
              name: name,
              category_id: categoryId
            }
          });
        case 4:
          existingSubcategory = _context5.v;
          if (!existingSubcategory) {
            _context5.n = 5;
            break;
          }
          return _context5.a(2, res.status(400).json({
            error: "Subcategory already exists"
          }));
        case 5:
          _context5.n = 6;
          return SubCategory.create({
            name: name,
            category_id: categoryId
          });
        case 6:
          subcategory = _context5.v;
          res.status(201).json({
            message: "Subcategory created successfully",
            subcategory: subcategory
          });
          _context5.n = 8;
          break;
        case 7:
          _context5.p = 7;
          _t5 = _context5.v;
          console.error("Error creating subcategory:", _t5);
          res.status(500).json({
            error: "Failed to create subcategory"
          });
        case 8:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function createSubcategory(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteSubcategory = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var id, subcategory, productCount, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.p = 0;
          id = req.params.id;
          _context6.n = 1;
          return SubCategory.findByPk(id);
        case 1:
          subcategory = _context6.v;
          if (subcategory) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            message: 'Subcategory not found'
          }));
        case 2:
          _context6.n = 3;
          return Product.count({
            where: {
              subcategory_id: id
            }
          });
        case 3:
          productCount = _context6.v;
          if (!(productCount > 0)) {
            _context6.n = 5;
            break;
          }
          _context6.n = 4;
          return Product.destroy({
            where: {
              subcategory_id: id
            }
          });
        case 4:
          console.log("Deleted ".concat(productCount, " products associated with subcategory ").concat(id));
        case 5:
          _context6.n = 6;
          return subcategory.destroy();
        case 6:
          res.status(200).json({
            message: 'Subcategory deleted successfully'
          });
          _context6.n = 8;
          break;
        case 7:
          _context6.p = 7;
          _t6 = _context6.v;
          console.error('Error deleting subcategory:', _t6);
          res.status(500).json({
            message: 'Error deleting subcategory'
          });
        case 8:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function deleteSubcategory(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
module.exports = {
  getCategories: getCategories,
  getSubcategories: getSubcategories,
  createCategory: createCategory,
  deleteCategory: deleteCategory,
  createSubcategory: createSubcategory,
  deleteSubcategory: deleteSubcategory
};
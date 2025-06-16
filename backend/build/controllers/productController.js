"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  Op = _require.Op;
var Product = require('../models/Product');
var Category = require('../models/Category');
var Subcategory = require('../models/SubCategory');
var Gallery = require('../models/Gallery');
var ProductSize = require('../models/ProductSize');
var CartItem = require("../models/CartItem");
var searchProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$query, _req$query$query, query, category, subcategory, colors, sizes, _req$query$priceMin, priceMin, _req$query$priceMax, priceMax, sortBy, _req$query$page, page, _req$query$limit, limit, where, categoryRecord, subcategoryRecord, colorArray, order, offset, sizeFilter, sizeArray, include, _yield$Product$findAn, count, rows, totalPages, products, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _req$query = req.query, _req$query$query = _req$query.query, query = _req$query$query === void 0 ? '' : _req$query$query, category = _req$query.category, subcategory = _req$query.subcategory, colors = _req$query.colors, sizes = _req$query.sizes, _req$query$priceMin = _req$query.priceMin, priceMin = _req$query$priceMin === void 0 ? 0 : _req$query$priceMin, _req$query$priceMax = _req$query.priceMax, priceMax = _req$query$priceMax === void 0 ? 10000 : _req$query$priceMax, sortBy = _req$query.sortBy, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 16 : _req$query$limit;
          where = {};
          if (query) {
            where[Op.or] = [{
              name: _defineProperty({}, Op.like, "%".concat(query, "%"))
            }];
          }
          if (!category) {
            _context.n = 3;
            break;
          }
          _context.n = 1;
          return Category.findOne({
            where: {
              name: category
            }
          });
        case 1:
          categoryRecord = _context.v;
          if (!categoryRecord) {
            _context.n = 2;
            break;
          }
          where.category_id = categoryRecord.id;
          _context.n = 3;
          break;
        case 2:
          return _context.a(2, res.status(400).json({
            message: 'Category not found'
          }));
        case 3:
          if (!subcategory) {
            _context.n = 6;
            break;
          }
          _context.n = 4;
          return Subcategory.findOne({
            where: {
              name: subcategory
            }
          });
        case 4:
          subcategoryRecord = _context.v;
          if (!subcategoryRecord) {
            _context.n = 5;
            break;
          }
          where.subcategory_id = subcategoryRecord.id;
          _context.n = 6;
          break;
        case 5:
          return _context.a(2, res.status(400).json({
            message: 'Subcategory not found'
          }));
        case 6:
          if (colors) {
            colorArray = colors.split(',');
            where.color = _defineProperty({}, Op["in"], colorArray);
          }
          where.price = _defineProperty({}, Op.between, [Number(priceMin), Number(priceMax)]);
          order = [];
          if (sortBy === 'low-to-high') {
            order.push(['price', 'ASC']);
          } else if (sortBy === 'high-to-low') {
            order.push(['price', 'DESC']);
          }
          offset = (page - 1) * limit;
          sizeFilter = {};
          if (sizes) {
            sizeArray = sizes.split(',');
            sizeFilter = {
              size: _defineProperty({}, Op["in"], sizeArray)
            };
          }
          include = [{
            model: Gallery,
            attributes: ['thumbnail'],
            required: false // LEFT JOIN
          }, {
            model: ProductSize,
            as: 'Sizes',
            attributes: ['size'],
            where: sizes ? sizeFilter : undefined,
            required: sizes ? true : false
          }];
          _context.n = 7;
          return Product.findAndCountAll({
            where: where,
            include: include,
            order: order,
            offset: offset,
            limit: Number(limit),
            distinct: true
          });
        case 7:
          _yield$Product$findAn = _context.v;
          count = _yield$Product$findAn.count;
          rows = _yield$Product$findAn.rows;
          totalPages = Math.ceil(count / limit);
          products = rows.map(function (product) {
            var _product$Galleries;
            return _objectSpread(_objectSpread({}, product.toJSON()), {}, {
              thumbnail: ((_product$Galleries = product.Galleries) === null || _product$Galleries === void 0 || (_product$Galleries = _product$Galleries[0]) === null || _product$Galleries === void 0 ? void 0 : _product$Galleries.thumbnail) || null,
              sizes: product.Sizes.map(function (size) {
                return size.size;
              })
            });
          });
          res.status(200).json({
            products: products,
            totalPages: totalPages
          });
          _context.n = 9;
          break;
        case 8:
          _context.p = 8;
          _t = _context.v;
          console.error('Error searching products:', _t);
          res.status(500).json({
            message: 'Server error',
            error: _t.message
          });
        case 9:
          return _context.a(2);
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function searchProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getProductById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _product$Galleries2, _product$Category, _product$Subcategory, id, product, productData, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          id = req.params.id;
          _context2.n = 1;
          return Product.findByPk(id, {
            include: [{
              model: Gallery,
              attributes: ['thumbnail'],
              required: false
            }, {
              model: ProductSize,
              as: 'Sizes',
              attributes: ['size'],
              required: false
            }, {
              model: Category,
              attributes: ['name'],
              required: false
            }, {
              model: Subcategory,
              attributes: ['name'],
              required: false
            }]
          });
        case 1:
          product = _context2.v;
          if (product) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            message: 'Product not found'
          }));
        case 2:
          productData = _objectSpread(_objectSpread({}, product.toJSON()), {}, {
            thumbnail: ((_product$Galleries2 = product.Galleries) === null || _product$Galleries2 === void 0 || (_product$Galleries2 = _product$Galleries2[0]) === null || _product$Galleries2 === void 0 ? void 0 : _product$Galleries2.thumbnail) || null,
            sizes: product.Sizes.map(function (size) {
              return {
                size: size.size,
                quantity: size.quantity
              };
            }),
            category: ((_product$Category = product.Category) === null || _product$Category === void 0 ? void 0 : _product$Category.name) || null,
            subcategory: ((_product$Subcategory = product.Subcategory) === null || _product$Subcategory === void 0 ? void 0 : _product$Subcategory.name) || null,
            description: product.description
          });
          res.status(200).json(productData);
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error('Error fetching product:', _t2);
          res.status(500).json({
            message: 'Server error',
            error: _t2.message
          });
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function getProductById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, product, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          id = req.params.id;
          _context3.n = 1;
          return Product.findByPk(id);
        case 1:
          product = _context3.v;
          if (product) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            error: "Product not found"
          }));
        case 2:
          _context3.n = 3;
          return CartItem.destroy({
            where: {
              product_id: id
            }
          });
        case 3:
          _context3.n = 4;
          return product.destroy();
        case 4:
          res.status(200).json({
            message: "Product deleted successfully"
          });
          _context3.n = 6;
          break;
        case 5:
          _context3.p = 5;
          _t3 = _context3.v;
          console.error("Error deleting product:", _t3);
          res.status(500).json({
            error: "Failed to delete product"
          });
        case 6:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return function deleteProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var createProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _req$body, name, price, description, color, categoryId, subcategoryId, sizes, images, category, subcategory, product, sizeData, _iterator, _step, image, filePath, _t4, _t5;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          _req$body = req.body, name = _req$body.name, price = _req$body.price, description = _req$body.description, color = _req$body.color, categoryId = _req$body.categoryId, subcategoryId = _req$body.subcategoryId, sizes = _req$body.sizes;
          images = req.files;
          if (!(!name || !price || !categoryId)) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, res.status(400).json({
            error: "Missing required fields"
          }));
        case 1:
          _context4.n = 2;
          return Category.findByPk(categoryId);
        case 2:
          category = _context4.v;
          if (category) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, res.status(400).json({
            error: 'Invalid categoryId'
          }));
        case 3:
          if (!(subcategoryId && subcategoryId !== '')) {
            _context4.n = 5;
            break;
          }
          _context4.n = 4;
          return Subcategory.findOne({
            where: {
              id: subcategoryId,
              category_id: categoryId
            }
          });
        case 4:
          subcategory = _context4.v;
          if (subcategory) {
            _context4.n = 5;
            break;
          }
          return _context4.a(2, res.status(400).json({
            error: 'Invalid subcategoryId or subcategory does not belong to category'
          }));
        case 5:
          _context4.n = 6;
          return Product.create({
            name: name,
            price: Number(price),
            description: description,
            color: color || null,
            category_id: categoryId,
            subcategory_id: subcategoryId || null,
            title: name
          });
        case 6:
          product = _context4.v;
          if (!(sizes && sizes.length > 0)) {
            _context4.n = 7;
            break;
          }
          sizeData = sizes.map(function (size) {
            return {
              product_id: product.id,
              size: size,
              quantity: 100
            };
          });
          _context4.n = 7;
          return ProductSize.bulkCreate(sizeData);
        case 7:
          if (!(images && images.length > 0)) {
            _context4.n = 14;
            break;
          }
          _iterator = _createForOfIteratorHelper(images);
          _context4.p = 8;
          _iterator.s();
        case 9:
          if ((_step = _iterator.n()).done) {
            _context4.n = 11;
            break;
          }
          image = _step.value;
          filePath = "/Img_project/".concat(image.filename);
          _context4.n = 10;
          return Gallery.create({
            product_id: product.id,
            thumbnail: filePath
          });
        case 10:
          _context4.n = 9;
          break;
        case 11:
          _context4.n = 13;
          break;
        case 12:
          _context4.p = 12;
          _t4 = _context4.v;
          _iterator.e(_t4);
        case 13:
          _context4.p = 13;
          _iterator.f();
          return _context4.f(13);
        case 14:
          res.status(201).json({
            message: "Product created successfully",
            product: product
          });
          _context4.n = 16;
          break;
        case 15:
          _context4.p = 15;
          _t5 = _context4.v;
          console.error("Error creating product:", _t5);
          res.status(500).json({
            error: "Failed to create product"
          });
        case 16:
          return _context4.a(2);
      }
    }, _callee4, null, [[8, 12, 13, 14], [0, 15]]);
  }));
  return function createProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, _req$body2, name, price, description, color, categoryId, subcategoryId, sizes, images, product, sizeArray, existingSizes, existingSizeList, newSizes, newSizeData, _iterator2, _step2, image, filePath, _t6, _t7;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.p = 0;
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, price = _req$body2.price, description = _req$body2.description, color = _req$body2.color, categoryId = _req$body2.categoryId, subcategoryId = _req$body2.subcategoryId, sizes = _req$body2.sizes;
          images = req.files;
          _context5.n = 1;
          return Product.findByPk(id);
        case 1:
          product = _context5.v;
          if (product) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(404).json({
            error: 'Product not found'
          }));
        case 2:
          product.name = name;
          product.price = Number(price);
          product.description = description || null;
          product.color = color || null;
          product.category_id = categoryId || null;
          product.subcategory_id = subcategoryId || null;
          product.title = name;
          _context5.n = 3;
          return product.save();
        case 3:
          if (!(sizes && sizes.length > 0)) {
            _context5.n = 5;
            break;
          }
          sizeArray = Array.isArray(sizes) ? sizes : [sizes];
          _context5.n = 4;
          return ProductSize.findAll({
            where: {
              product_id: id
            },
            attributes: ['size']
          });
        case 4:
          existingSizes = _context5.v;
          existingSizeList = existingSizes.map(function (s) {
            return s.size;
          });
          newSizes = sizeArray.filter(function (size) {
            return !existingSizeList.includes(size);
          });
          if (!(newSizes.length > 0)) {
            _context5.n = 5;
            break;
          }
          newSizeData = newSizes.map(function (size) {
            return {
              product_id: id,
              size: size,
              quantity: 100
            };
          });
          _context5.n = 5;
          return ProductSize.bulkCreate(newSizeData);
        case 5:
          if (!(images && images.length > 0)) {
            _context5.n = 13;
            break;
          }
          _context5.n = 6;
          return Gallery.destroy({
            where: {
              product_id: id
            }
          });
        case 6:
          _iterator2 = _createForOfIteratorHelper(images);
          _context5.p = 7;
          _iterator2.s();
        case 8:
          if ((_step2 = _iterator2.n()).done) {
            _context5.n = 10;
            break;
          }
          image = _step2.value;
          filePath = "/Img_project/".concat(image.filename);
          _context5.n = 9;
          return Gallery.create({
            product_id: id,
            thumbnail: filePath
          });
        case 9:
          _context5.n = 8;
          break;
        case 10:
          _context5.n = 12;
          break;
        case 11:
          _context5.p = 11;
          _t6 = _context5.v;
          _iterator2.e(_t6);
        case 12:
          _context5.p = 12;
          _iterator2.f();
          return _context5.f(12);
        case 13:
          res.status(200).json({
            message: 'Product updated successfully'
          });
          _context5.n = 15;
          break;
        case 14:
          _context5.p = 14;
          _t7 = _context5.v;
          console.error("Error updating product:", _t7);
          res.status(500).json({
            error: 'Failed to update product'
          });
        case 15:
          return _context5.a(2);
      }
    }, _callee5, null, [[7, 11, 12, 13], [0, 14]]);
  }));
  return function updateProduct(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
module.exports = {
  searchProducts: searchProducts,
  getProductById: getProductById,
  deleteProduct: deleteProduct,
  createProduct: createProduct,
  updateProduct: updateProduct
};
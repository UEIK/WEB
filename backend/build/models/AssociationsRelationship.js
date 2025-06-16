"use strict";

var User = require("./User");
var Role = require("./Role");
var Category = require("./Category");
var Product = require("./Product");
var Order = require("./Order");
var OrderDetail = require("./OrderDetail");
var Gallery = require("./Gallery");
var SubCategory = require("./SubCategory");
var ProductSize = require("./ProductSize");
var Cart = require("./Cart");
var CartItem = require("./CartItem");
var Address = require("./Address");

// =======================
// Quan hệ User - Role (1:N)
Role.hasMany(User, {
  foreignKey: "role_id",
  sourceKey: "id"
});
User.belongsTo(Role, {
  foreignKey: "role_id",
  targetKey: "id"
});

// =======================
// Quan hệ User - Order (1:N)
User.hasMany(Order, {
  foreignKey: "user_id",
  sourceKey: "id",
  onDelete: "CASCADE"
});
Order.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
  onDelete: 'CASCADE'
});

// =======================
// Quan hệ Order - OrderDetail (1:N)
Order.hasMany(OrderDetail, {
  foreignKey: "order_id",
  sourceKey: "id"
});
OrderDetail.belongsTo(Order, {
  foreignKey: "order_id",
  targetKey: "id"
});

// =======================
// Quan hệ Product - OrderDetail (1:N)
Product.hasMany(OrderDetail, {
  foreignKey: "product_id",
  sourceKey: "id",
  onDelete: 'CASCADE'
});
OrderDetail.belongsTo(Product, {
  foreignKey: "product_id",
  targetKey: "id",
  onDelete: 'CASCADE'
});

// =======================
// Quan hệ Category - Product (1:N)
Category.hasMany(Product, {
  foreignKey: "category_id",
  sourceKey: "id",
  onDelete: 'CASCADE'
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "id",
  onDelete: 'CASCADE'
});

// =======================
// Quan hệ Product - Gallery (1:N)
Product.hasMany(Gallery, {
  foreignKey: "product_id",
  sourceKey: "id",
  onDelete: 'CASCADE'
});
Gallery.belongsTo(Product, {
  foreignKey: "product_id",
  targetKey: "id",
  onDelete: 'CASCADE'
});

// =======================
// Quan hệ SubCatgory - Product (1:N)
SubCategory.hasMany(Product, {
  foreignKey: 'subcategory_id',
  sourceKey: "id",
  onDelete: 'CASCADE'
});
Product.belongsTo(SubCategory, {
  foreignKey: 'subcategory_id',
  targetKey: "id",
  onDelete: 'CASCADE'
});

// =======================
// Quan hệ Category - SubCategory (1:N)
Category.hasMany(SubCategory, {
  foreignKey: 'category_id',
  sourceKey: "id",
  onDelete: 'CASCADE'
});
SubCategory.belongsTo(Category, {
  foreignKey: 'category_id',
  targetKey: "id",
  onDelete: 'CASCADE'
});

// =======================
// Quan hệ Product - ProductSize (1:N)
Product.hasMany(ProductSize, {
  foreignKey: 'product_id',
  sourceKey: "id",
  as: 'Sizes',
  onDelete: 'CASCADE'
});
ProductSize.belongsTo(Product, {
  foreignKey: 'product_id',
  targetKey: "id",
  onDelete: 'CASCADE'
});

// =======================
// Quan hệ giữa User và Cart (1 User có 1 Cart)
User.hasOne(Cart, {
  foreignKey: "user_id",
  sourceKey: "id"
});
Cart.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id"
});

// =======================
// Quan hệ giữa Cart và CartItem (1 Cart có nhiều CartItem)
Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
  sourceKey: "id",
  onDelete: "CASCADE"
});
CartItem.belongsTo(Cart, {
  foreignKey: "cart_id",
  targetKey: "id"
});

// =======================
// Quan hệ giữa CartItem và Product (1 CartItem liên kết với 1 Product)
CartItem.belongsTo(Product, {
  foreignKey: "product_id",
  sourceKey: "id"
});
Product.hasMany(CartItem, {
  foreignKey: "product_id",
  targetKey: "id"
});

// =======================
// Quan hệ giữa User và Address
User.hasMany(Address, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});
Address.belongsTo(User, {
  foreignKey: "user_id"
});
module.exports = {
  User: User,
  Role: Role,
  Category: Category,
  Product: Product,
  Order: Order,
  OrderDetail: OrderDetail,
  Gallery: Gallery,
  ProductSize: ProductSize,
  SubCategory: SubCategory,
  Cart: Cart,
  CartItem: CartItem,
  Address: Address
};
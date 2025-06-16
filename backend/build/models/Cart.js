"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
var _require2 = require("../config/dbConfig"),
  sequelize = _require2.sequelize;
var Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true // Đảm bảo mỗi user chỉ có một giỏ hàng
  }
}, {
  timestamps: false,
  tableName: "CART",
  freezeTableName: true
});
module.exports = Cart;
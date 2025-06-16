"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
var _require2 = require("../config/dbConfig"),
  sequelize = _require2.sequelize;
var ProductSize = sequelize.define("ProductSize", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  size: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: false,
  tableName: "PRODUCT_SIZE",
  freezeTableName: true
});
module.exports = ProductSize;
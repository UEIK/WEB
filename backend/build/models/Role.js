"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
var _require2 = require("../config/dbConfig"),
  sequelize = _require2.sequelize;
var Role = sequelize.define("Role", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  timestamps: false,
  // Không có createdAt, updatedAt
  tableName: "ROLE",
  // Giữ đúng tên bảng trong SQL Server
  freezeTableName: true // Không đổi tên bảng thành Roles
});
module.exports = Role;
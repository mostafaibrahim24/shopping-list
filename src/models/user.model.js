const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/db");

const User = sequelize.define("users", {
  id: {
    field: "id",
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    field: "username",
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    field: "email",
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Invalid Email",
      },
    },
  },
  password: {
    field: "password_hash",
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync();
module.exports = User;

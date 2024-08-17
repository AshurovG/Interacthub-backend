const { dbConf } = require("../db"); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require("sequelize");

module.exports = () => {
  const Chat = dbConf.define("Chat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.CHAR(200),
    },
  });

  return Chat;
};

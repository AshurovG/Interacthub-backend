const { dbConf } = require("../db"); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require("sequelize");

module.exports = () => {
  const Message = dbConf.define("Message", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    senderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    recipientID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    chatID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Chats",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    text: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.CHAR(500),
    },
    sendingTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Message;
};

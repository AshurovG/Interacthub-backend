const { dbConf } = require("../db"); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require("sequelize");

module.exports = () => {
  const UserChat = dbConf.define(
    "UserChat",
    {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["userID", "chatID"], // Установка уникальности для пары userID и chatID
        },
      ],
    }
  );

  return UserChat;
};

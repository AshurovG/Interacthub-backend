const { dbConf } = require("../db"); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require("sequelize");

module.exports = () => {
  const Comment = dbConf.define("Comment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    postID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      //   onDelete: "SET NULL",
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    publicationTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Comment;
};

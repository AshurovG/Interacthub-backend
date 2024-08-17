const { dbConf } = require("../db"); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require("sequelize");

module.exports = () => {
  const Like = dbConf.define("Like", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    postID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Posts",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    publicationTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Like;
};

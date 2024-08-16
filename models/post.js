const { dbConf } = require("../db"); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require("sequelize");

module.exports = () => {
  const Post = dbConf.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.CHAR(500),
      allowNull: true,
    },
    publicationDate: DataTypes.DATE,
  });

  return Post;
};

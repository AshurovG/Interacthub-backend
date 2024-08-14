const { dbConf } = require("../db"); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require("sequelize");

module.exports = () => {
  const Post = dbConf.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: DataTypes.STRING,
    image: DataTypes.CHAR(200),
    publicationDate: DataTypes.DATE,
  });

  return Post;
};

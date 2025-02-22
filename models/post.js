const { dbConf } = require('../db'); // Импорт экземпляра Sequelize из db.js
const { DataTypes } = require('sequelize');

module.exports = () => {
  const Post = dbConf.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    publicationDate: DataTypes.DATE,
  });

  return Post;
};

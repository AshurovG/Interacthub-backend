const { Sequelize } = require("sequelize");

const config = require("./config/config.json")[
  process.env.NODE_ENV || "development"
];

const dbConf = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    define: {
      timestamps: false,
    },
  }
);

module.exports = {
  dbConf,
};

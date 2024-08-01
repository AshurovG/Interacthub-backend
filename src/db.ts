import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";

const db = new Sequelize({
  dialect: PostgresDialect,
  database: "semp",
  user: "ashurovgeorgy",
  password: "13082003",
  host: "localhost",
  port: 5432,
  clientMinMessages: "notice",
  define: {
    timestamps: false,
  },
});

const openConnection = () => {
  return db.authenticate();
};

const closeConnection = () => {
  return db.close();
};

module.exports = db;
module.exports = {
  db,
  openConnection,
  closeConnection,
};

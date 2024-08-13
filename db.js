const { Sequelize } = require("sequelize");
const redis = require("redis");

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

const redisConf = redis.createClient({
  host: "localhost",
  port: 6379,
});

async function handleRedisOperation(operation) {
  await redisConf.connect();
  try {
    await operation();
  } finally {
    await redisConf.disconnect();
  }
}

// Пример использования
// await handleRedisOperation(async () => {
//   const fields = ["sessionID", "lastCode"];
//   const values = ["sessionID", "lastCode"];

//   // Используем цикл для добавления каждого поля и значения
//   for (let i = 0; i < fields.length; i++) {
//     await redisConf.set(`${telegram}:${fields[i]}`, values[i]);
//   }

//   const result = await redisConf.get(`${telegram}:lastCode`);
//   console.log(result);
// });

module.exports = {
  dbConf,
  redisConf,
  handleRedisOperation,
};

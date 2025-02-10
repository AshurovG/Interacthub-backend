const { Sequelize } = require('sequelize');
const redis = require('ioredis');

const config = require('./config/config.json')[
  process.env.NODE_ENV || 'development'
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
  host: 'localhost',
  port: 6379,
});

async function handleRedisOperation(operation) {
  await operation();
}

module.exports = {
  dbConf,
  redisConf,
  handleRedisOperation,
};

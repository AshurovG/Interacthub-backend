const { dbConf, redisConf, handleRedisOperation } = require("../../db");
const User = require("../../models/user");

class AuthRepository {
  static async codeGen(telegram: string, code: string) {
    await handleRedisOperation(async () => {
      await redisConf.set(`${telegram}:lastCode`, code);
    });
  }

  static async auth(telegram: string, sessionID: string) {
    let lastCode;
    await handleRedisOperation(async () => {
      await redisConf.set(`${telegram}:sessionID`, sessionID);
      lastCode = await redisConf.get(`${telegram}:lastCode`);
    });
    return lastCode;
  }

  static async checkUser(telegram: string) {
    const existingUser = await User().findOne({ where: { telegram } });

    if (existingUser) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  AuthRepository,
};
export {};

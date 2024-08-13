const { dbConf, redisConf, handleRedisOperation } = require("../../db");
const User = require("../../models/user");
const { Sequelize, DataTypes } = require("sequelize");

class UsersRepository {
  static async getUsers() {
    try {
      const users = await User().findAll();
      return users;
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
      throw error;
    }
  }

  static async postUser(
    firstname: string,
    lastname: string,
    department: string,
    position: string,
    telegram: string,
    phoneNumber: string,
    birthDate: string
  ) {
    const newUser = await User().build({
      firstname,
      lastname,
      department,
      position,
      telegram,
      phoneNumber,
      birthDate,
    });
    await newUser.save();
  }

  static async checkUser(telegram: string) {
    const existingUser = await User().findOne({ where: { telegram } });

    if (existingUser) {
      return true;
    } else {
      return false;
    }
  }

  static async codeGen(telegram: string, code: string) {
    await handleRedisOperation(async () => {
      await redisConf.set(`${telegram}:lastCode`, code);
    });
  }
}

module.exports = {
  UsersRepository,
};

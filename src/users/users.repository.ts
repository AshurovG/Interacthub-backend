const { dbConf } = require("../../db");
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
}

module.exports = {
  UsersRepository,
};

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

  static async postUser(
    firstname: string,
    lastname: string,
    position: string,
    telegram: string,
    phoneNumber: string,
    birthDate: string
  ) {
    const newUser = await User().build({
      firstname,
      lastname,
      position,
      telegram,
      phoneNumber,
      birthDate,
    });
    await newUser.save();
  }
}

module.exports = {
  UsersRepository,
};

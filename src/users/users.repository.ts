const { dbConf, redisConf, handleRedisOperation } = require("../../db");
const User = require("../../models/user");
const { Sequelize, DataTypes } = require("sequelize");
const { AuthRepository } = require("../auth/auth.repository");
import _ from "lodash";

class UsersRepository {
  static async getUsers() {
    try {
      const users = await User().findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id: number) {
    try {
      const userInstance = await User().findOne({ where: { id } });
      if (!userInstance) {
        return null;
      }
      const userData = userInstance.toJSON(); // Преобразование в JSON
      delete userData.lastCode; // Удаление поля lastCode
      return userData;
    } catch (error) {
      throw error;
    }
  }

  static async postUser(
    firstname: string,
    lastname: string,
    department: string,
    position: string,
    telegram: string,
    whatsapp: string,
    phoneNumber: string,
    birthDate: string,
    isAdmin: boolean
  ) {
    const newUser = await User().build({
      firstname,
      lastname,
      department,
      position,
      telegram,
      whatsapp,
      phoneNumber,
      birthDate,
      isAdmin,
    });
    await newUser.save();
  }
}

module.exports = {
  UsersRepository,
};

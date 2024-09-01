const { dbConf, redisConf, handleRedisOperation } = require("../../db");
const User = require("../../models/user");
const { AuthRepository } = require("../auth/auth.repository");
const { Sequelize, DataTypes } = require("sequelize");
import _ from "lodash";

class UsersRepository {
  static async getUsers() {
    try {
      const users = await User().findAll();
      return users;
    } catch (e) {
      throw e;
    }
  }

  static async getUser(id: number) {
    try {
      const userInstance = await User().findOne({ where: { id } });
      if (!userInstance) {
        return null;
      }
      const userData = userInstance.toJSON();
      delete userData.lastCode;
      return userData;
    } catch (e) {
      throw e;
    }
  }

  static async getUserBySessionID(sessionID: string) {
    try {
      const telegram = await AuthRepository.getTelegramBySessionID(sessionID);
      if (telegram) {
        const user = await User().findOne({ where: { telegram } });
        return user.toJSON();
      } else {
        return null;
      }
    } catch (e) {
      throw e;
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
    try {
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
    } catch (e) {
      throw e;
    }
  }

  static async updateUser(
    id: number,
    firstname: string,
    lastname: string,
    department: string,
    position: string,
    whatsapp: string,
    phoneNumber: string,
    birthDate: string,
    isAdmin: boolean
  ) {
    try {
      console.log("repository");
      console.log(id, typeof id);
      await User().update(
        {
          firstname,
          lastname,
          department,
          position,
          whatsapp,
          phoneNumber,
          birthDate,
          isAdmin,
        },
        { where: { id } }
      );
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  UsersRepository,
};

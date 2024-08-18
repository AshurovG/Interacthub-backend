const { UsersRepository } = require("./users.repository");
const { CustomError } = require("../consts");
import crypto from "crypto";

class UsersDAO {
  static async getUsers() {
    try {
      const query = await UsersRepository.getUsers();
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id: number) {
    try {
      const query = await UsersRepository.getUser(id);
      if (!query) {
        throw new CustomError(`There is no user with id=${id}`, 404);
      }
      return query;
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
    try {
      await UsersRepository.postUser(
        firstname,
        lastname,
        department,
        position,
        telegram,
        whatsapp,
        phoneNumber,
        birthDate,
        isAdmin
      );
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(
    firstname: string,
    lastname: string,
    department: string,
    position: string,
    telegram: string,
    whatsapp: string,
    phoneNumber: string,
    birthDate: string,
    isAdmin: boolean,
    sessionID: string
  ) {
    try {
      // const correctSessionID = await getSessionID();
      await UsersRepository.postUser(
        firstname,
        lastname,
        department,
        position,
        telegram,
        whatsapp,
        phoneNumber,
        birthDate,
        isAdmin
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  UsersDAO,
};
export {};

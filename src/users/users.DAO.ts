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

  static async postUser(
    firstname: string,
    lastname: string,
    department: string,
    position: string,
    telegram: string,
    phoneNumber: string,
    birthDate: string
  ) {
    try {
      await UsersRepository.postUser(
        firstname,
        lastname,
        department,
        position,
        telegram,
        phoneNumber,
        birthDate
      );
    } catch (error) {
      throw error;
    }
  }

  static async codeGen(telegram: string) {
    try {
      const isUserExists = await UsersRepository.checkUser(telegram);
      if (!isUserExists) {
        throw new CustomError("profile has not been found", 404);
      }

      const randomBytes = crypto.randomBytes(10);
      const randomString = randomBytes
        .toString("base64")
        .replace(/\+/g, "")
        .replace(/\//g, "");
      const finalRandomString = randomString.slice(0, -2);
      await UsersRepository.codeGen(telegram, finalRandomString);
      return { code: finalRandomString };
    } catch (error) {
      throw error;
    }
  }

  static async auth(telegram: string, code: string) {
    try {
      const isUserExists = await UsersRepository.checkUser(telegram);
      if (!isUserExists) {
        const error = new CustomError("profile has not been found", 404);
        throw error;
      }

      const randomBytes = crypto.randomBytes(50);
      const randomString = randomBytes
        .toString("base64")
        .replace(/\+/g, "")
        .replace(/\//g, "");

      const lastCode = await UsersRepository.auth(telegram, randomString);
      if (lastCode !== code) {
        throw new CustomError("invalid access code", 401);
      }
      return randomString;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  UsersDAO,
};
export {};

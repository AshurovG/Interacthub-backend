const { AuthRepository } = require("./auth.repository");
const { CustomError } = require("../consts");
import crypto from "crypto";

class AuthDAO {
  static async codeGen(telegram: string) {
    try {
      const isUserExists = await AuthRepository.checkUser(telegram);
      if (!isUserExists) {
        throw new CustomError("profile has not been found", 404);
      }

      const randomBytes = crypto.randomBytes(10);
      const randomString = randomBytes
        .toString("base64")
        .replace(/\+/g, "")
        .replace(/\//g, "");
      const finalRandomString = randomString.slice(0, -2);
      await AuthRepository.codeGen(telegram, finalRandomString);
      return { code: finalRandomString };
    } catch (error) {
      throw error;
    }
  }

  static async auth(telegram: string, code: string) {
    try {
      const isUserExists = await AuthRepository.checkUser(telegram);
      if (!isUserExists) {
        const error = new CustomError("profile has not been found", 404);
        throw error;
      }

      const randomBytes = crypto.randomBytes(50);
      const randomString = randomBytes
        .toString("base64")
        .replace(/\+/g, "")
        .replace(/\//g, "");

      const lastCode = await AuthRepository.auth(telegram, randomString);
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
  AuthDAO,
};
export {};

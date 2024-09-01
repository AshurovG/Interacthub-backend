const { UsersRepository } = require("./users.repository");
const { AuthRepository } = require("../auth/auth.repository");
const { CustomError } = require("../consts");
import crypto from "crypto";
import { User } from "./types";

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
    id: string,
    firstname: string,
    lastname: string,
    department: string,
    position: string,
    whatsapp: string,
    phoneNumber: string,
    birthDate: string,
    isAdmin: boolean,
    sessionID: string
  ) {
    try {
      const currentUser: User = await UsersRepository.getUserBySessionID(
        sessionID
      );
      if (!currentUser) {
        throw new CustomError(
          `you don't have permission to update user data`,
          403
        );
      }
      if (currentUser.isAdmin) {
        await UsersRepository.updateUser(
          Number(id),
          firstname,
          lastname,
          department,
          position,
          whatsapp,
          phoneNumber,
          birthDate,
          isAdmin
        );
      } else if (String(currentUser.id) === id && !currentUser.isAdmin) {
        await UsersRepository.updateUser(
          id,
          firstname,
          lastname,
          whatsapp,
          phoneNumber,
          birthDate
        );
      } else {
        throw new CustomError(
          `you don't have permission to update user data`,
          403
        );
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  UsersDAO,
};
export {};

const { UsersRepository } = require("./users.repository");

class UsersDAO {
  //   id: number;
  //   title: string;
  //   url: string;
  //   description: string;

  //   constructor(id: number, title: string, url: string, description: string) {
  //     this.id = id;
  //     this.title = title;
  //     this.url = url;
  //     this.description = description;
  //   }

  //   static _validateId(id: any) {
  //     if (isNaN(id) || id <= 0) {
  //       let error = new CustomError("invalid id", 400);
  //       throw error;
  //     }
  //   }

  //   static async isExistsId(id: number) {
  //     // Проверка на наличие этого индекса в таблице
  //     if ((await ProductsRepository.getProductById(id)) === undefined) {
  //       let error = new CustomError("no such id found", 404);
  //       throw error;
  //     }
  //   }

  //   static async _validate(product: ProductData) {
  //     // Проверка на определенность каждого параметра
  //     if (await (product.title === undefined || product.url === undefined)) {
  //       let error = new CustomError("invalidate product data", 400);
  //       throw error;
  //     }
  //   }

  //   static async _validateWithoutUrl(title: string) {
  //     // Проверка на определенность каждого параметра
  //     if (await (title === undefined)) {
  //       let error = new CustomError("invalidate product data", 400);
  //       throw error;
  //     }
  //   }

  static async getUsers() {
    try {
      const query = await UsersRepository.getUsers();
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  UsersDAO,
};
export {};

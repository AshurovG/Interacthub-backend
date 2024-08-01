const db = require("../db");

class UsersRepository {
  static async getUsers() {
    // return new Promise((resolve, reject) => {
    //   db.query("SELECT * FROM products", (error: any, results: any) => {
    //     if (error) {
    //       reject(error);
    //     } else {
    //       const data = results.rows;
    //       resolve(data);
    //     }
    //   });
    // });

    try {
      await db.authenticate();
      console.log("Соединение с БД было успешно установлено");
    } catch (e) {
      console.log("Невозможно выполнить подключение к БД: ", e);
    }
    return "repository";
  }
}

module.exports = {
  UsersRepository,
};

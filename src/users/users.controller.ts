const { UsersDAO } = require("./users.DAO");

class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

class UsersCotroller {
  async getUsers(req: any, res: any) {
    UsersDAO.getUsers()
      .then((data: any) => {
        res.json(data);
      })
      .catch((error: CustomError) => {
        if (error.status === 500) {
          res
            .status(500)
            .send({ status: "Problem", message: "Problem with database" });
        } else {
          res
            .status(400)
            .send({ status: "Bad Request", message: error.message });
        }
      });
  }

  async getUser(req: any, res: any) {}
}

module.exports = new UsersCotroller();

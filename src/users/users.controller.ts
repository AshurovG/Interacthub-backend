const { UsersDAO } = require("./users.DAO");
const { CustomError } = require("../consts");

class UsersCotroller {
  async getUsers(req: any, res: any) {
    UsersDAO.getUsers()
      .then((data: any) => {
        res.json(data);
      })
      .catch((error: typeof CustomError) => {
        if (error.status === 500) {
          res
            .status(500)
            .send({ status: "Problem", message: "Problem with database" });
        } else if (error.status) {
          res
            .status(error.status)
            .send({ status: "Bad Request", message: error.message });
        } else {
          res
            .status(400)
            .send({ status: "Bad Request", message: error.message });
        }
      });
  }

  async postUser(req: any, res: any) {
    const {
      firstname,
      lastname,
      department,
      position,
      telegram,
      phoneNumber,
      birthDate,
    } = req.body;
    UsersDAO.postUser(
      firstname,
      lastname,
      department,
      position,
      telegram,
      phoneNumber,
      birthDate
    )
      .then((data: any) => {
        res.json(data);
      })
      .catch((error: typeof CustomError) => {
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

  async codeGen(req: any, res: any) {
    const { telegram } = req.body;
    await UsersDAO.codeGen(telegram)
      .then((data: any) => {
        res.json(data);
      })
      .catch((error: typeof CustomError) => {
        if (error.status === 500) {
          res
            .status(500)
            .send({ status: "Problem", message: "Problem with database" });
        } else if (error.status) {
          res
            .status(error.status)
            .send({ status: "Bad Request", message: error.message });
        } else {
          res
            .status(400)
            .send({ status: "Bad Request", message: error.message });
        }
      });
  }

  async auth(req: any, res: any) {
    const { telegram, code } = req.body;
    await UsersDAO.auth(telegram, code)
      .then((data: any) => {
        console.log(data);
        res.cookie("sessionID", data, {
          httpOnly: true, // Защищает от доступа через клиентский скрипт
          sameSite: "strict", // TODO поверить безопасность
          maxAge: 86400000, // 1 день
          path: "/",
        });
        res.status(200).end();
      })
      .catch((error: typeof CustomError) => {
        if (error.status === 500) {
          res
            .status(500)
            .send({ status: "Problem", message: "Problem with database" });
        } else if (error.status) {
          res
            .status(error.status)
            .send({ status: "Bad Request", message: error.message });
        } else {
          res
            .status(400)
            .send({ status: "Bad Request", message: error.message });
        }
      });
  }
}

module.exports = new UsersCotroller();
export {};

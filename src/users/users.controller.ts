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

  async getUser(req: any, res: any) {
    const { id } = req.params;
    UsersDAO.getUser(id)
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
      whatsapp,
      phoneNumber,
      birthDate,
      isAdmin,
    } = req.body;
    UsersDAO.postUser(
      firstname,
      lastname,
      department,
      position,
      telegram,
      whatsapp,
      phoneNumber,
      birthDate,
      isAdmin
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

  async updateUser(req: any, res: any) {
    const {
      firstname,
      lastname,
      department,
      position,
      whatsapp,
      phoneNumber,
      birthDate,
      isAdmin,
    } = req.body;
    const sessionID = (req.cookies["sessionID"] = req.cookies["sessionID"]);
    const { id } = req.params;
    UsersDAO.updateUser(
      id,
      firstname,
      lastname,
      department,
      position,
      whatsapp,
      phoneNumber,
      birthDate,
      isAdmin,
      sessionID
    )
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
}

module.exports = new UsersCotroller();
export {};

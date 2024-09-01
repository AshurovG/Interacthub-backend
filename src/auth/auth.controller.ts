const { AuthDAO } = require("./auth.DAO");
const { CustomError } = require("../consts");
const { ErrorHandler } = require("../consts");
import { Response, Request } from "express";

class AuthCotroller {
  async codeGen(req: Request, res: Response): Promise<void> {
    const { telegram } = req.body;

    try {
      const data = await AuthDAO.codeGen(telegram);
      res.json(data);
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }

  async auth(req: Request, res: Response): Promise<void> {
    const { telegram, code } = req.body;

    try {
      const data = await AuthDAO.auth(telegram, code);
      res.cookie("sessionID", data, {
        httpOnly: true,
        sameSite: "strict", // TODO поверить безопасность
        maxAge: 86400000, // 1 день
        path: "/",
      });
      res.status(200).end();
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }
}

module.exports = new AuthCotroller();
export {};

const { AuthDAO } = require('./auth.DAO');
const { CustomError } = require('../consts');
const { ErrorHandler } = require('../consts');
import { Response, Request } from 'express';

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
      res.cookie('sessionID', data, {
        domain: 'localhost',
        httpOnly: true,
        sameSite: 'lax', // TODO поверить безопасность
        maxAge: 86400000, // 1 день
        secure: false,
        path: '/',
      });
      res.status(200).end();
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }

  async getUserBySession(req: Request, res: Response): Promise<void> {
    const { sessionID } = req.cookies;

    try {
      const data = await AuthDAO.getUserBySession(sessionID);
      res.json(data);
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    const { sessionID } = req.cookies;

    try {
      await AuthDAO.logout(sessionID);
      res.clearCookie('sessionID');
      res.status(200).end();
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }
}

module.exports = new AuthCotroller();
export {};

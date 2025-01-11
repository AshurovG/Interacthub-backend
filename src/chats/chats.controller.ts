const { ChatsDAO } = require('./chats.DAO');
const { ErrorHandler } = require('../consts');
import { Response, Request } from 'express';

class ChatsController {
  async getChats(_: Request, res: Response): Promise<void> {
    try {
      const data = await ChatsDAO.getChats();
      res.json(data);
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }

  async postChat(req: Request, res: Response): Promise<void> {
    const { title, description } = req.body;

    try {
      await ChatsDAO.postChat(title, description);
      res.sendStatus(200);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  }

  async updateChat(req: Request, res: Response): Promise<void> {
    const { title, description } = req.body;
    const { id } = req.params;

    try {
      await ChatsDAO.updateChat(Number(id), title, description);
      res.sendStatus(200);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  }

  async deleteChat(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await ChatsDAO.deleteChat(Number(id));
      res.sendStatus(200);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  }
}

module.exports = new ChatsController();
export {};

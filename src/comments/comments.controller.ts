const { CommentsDAO } = require('./comments.DAO');
const { ErrorHandler } = require('../consts');
import { Response, Request } from 'express';

class CommentsCotroller {
  async getComments(req: Request, res: Response): Promise<void> {
    const postID = req.params.post_id;

    try {
      const data = await CommentsDAO.getComments(postID);
      res.json(data);
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }

  async postComment(req: Request, res: Response): Promise<void> {
    const { userID, text } = req.body;
    const postID = req.params.post_id;

    try {
      await CommentsDAO.postComment(userID, Number(postID), text);
      res.sendStatus(200);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  }
}

module.exports = new CommentsCotroller();
export {};

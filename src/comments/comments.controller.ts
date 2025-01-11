const { CommentsDAO } = require('./comments.DAO');
const { ErrorHandler } = require('../consts');
import { Response, Request } from 'express';

class CommentsCotroller {
  async getComments(req: Request, res: Response): Promise<void> {
    const postID = req.params.post_id;
    console.log('postID', postID);
    try {
      const data = await CommentsDAO.getComments(postID);
      console.log('controller', data);
      res.json(data);
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }
}

module.exports = new CommentsCotroller();
export {};

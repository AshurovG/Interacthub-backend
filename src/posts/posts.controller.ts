const { PostsDAO } = require("./posts.DAO");
const { ErrorHandler } = require("../consts");
import { Response, Request } from "express";

class PostsCotroller {
  async getPosts(_: Request, res: Response): Promise<void> {
    try {
      const data = await PostsDAO.getPosts();
      res.json(data);
    } catch (e) {
      ErrorHandler.handle(res, e);
    }
  }

  async postPost(req: Request, res: Response): Promise<void> {
    const { text, image } = req.body;

    try {
      await PostsDAO.postPost(text, image);
      res.sendStatus(200);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  }

  async updatePost(req: Request, res: Response): Promise<void> {
    const { text, image } = req.body;
    const { id } = req.params;
    try {
      await PostsDAO.updatePost(text, image, id);
      res.sendStatus(200);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  }

  async deletePost(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await PostsDAO.deletePost(id);
      res.sendStatus(200);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  }
}

module.exports = new PostsCotroller();
export {};

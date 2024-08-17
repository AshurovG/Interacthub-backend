const { PostsRepository } = require("./posts.repository");
import { Post } from "./types";
const { CustomError } = require("../consts");

class PostsDAO {
  static async getPosts() {
    try {
      const query = await PostsRepository.getPosts();
      return query;
    } catch (error) {
      throw error;
    }
  }

  static _isImageOrTextEmpty(text: string, image: string) {
    if (!image && !text) {
      throw new CustomError("image and text are empty", 400);
    }
  }

  static async postPost(text: string, image: string) {
    try {
      this._isImageOrTextEmpty(text, image);
      const currentDate = new Date();
      await PostsRepository.postPost(text, image, currentDate);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  PostsDAO,
};
export {};

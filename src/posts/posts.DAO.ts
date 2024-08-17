const { PostsRepository } = require("./posts.repository");
import { Post } from "./types";
const { CustomError } = require("../consts");

class PostsDAO {
  static _isImageOrTextEmpty(text: string, image: string) {
    if (!image && !text) {
      throw new CustomError("image and text are empty", 400);
    }
  }

  static async _isPostExist(id: number) {
    const post = await this.getPost(id);
    if (!post) {
      throw new CustomError(`There is no post with id=${id}`, 404);
    }
  }

  static async getPosts() {
    try {
      const query = await PostsRepository.getPosts();
      return query;
    } catch (e) {
      throw e;
    }
  }

  static async getPost(id: number) {
    try {
      const query = await PostsRepository.getPost(id);
      return query;
    } catch (e) {
      throw e;
    }
  }

  static async postPost(text: string, image: string) {
    try {
      this._isImageOrTextEmpty(text, image);
      const currentDate = new Date();
      await PostsRepository.postPost(text, image, currentDate);
    } catch (e) {
      throw e;
    }
  }

  static async updatePost(text: string, image: string, id: number) {
    try {
      this._isImageOrTextEmpty(text, image);
      await this._isPostExist(id);
      await PostsRepository.updatePost(text, image, id);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  PostsDAO,
};
export {};

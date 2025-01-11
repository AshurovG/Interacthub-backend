const { CommentsRepository } = require('./comments.repository');
const { PostsDAO } = require('../posts/posts.DAO');
const { CustomError } = require('../consts');

class CommentsDAO {
  static _ifOneFromFieldsEmpty(userID: number, text: string) {
    if (!userID || !text) {
      throw new CustomError('userID, postID, text - required fields', 400);
    }
  }

  static async getComments(postID: number) {
    try {
      await PostsDAO._isPostExist(postID);
      const comments = await CommentsRepository.getComments(postID);
      return comments;
    } catch (e) {
      throw e;
    }
  }

  static async postComment(userID: number, postID: number, text: string) {
    try {
      this._ifOneFromFieldsEmpty(userID, text);
      const currentTime = new Date();
      await CommentsRepository.postComment(userID, postID, text, currentTime);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  CommentsDAO,
};
export {};

const { CommentsRepository } = require('./comments.repository');
const { CustomError } = require('../consts');

class CommentsDAO {
  static async getComments(postID: number) {
    try {
      const query = await CommentsRepository.getComments(postID);
      return query;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  CommentsDAO,
};
export {};

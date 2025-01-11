const Comment = require('../../models/comment');

class CommentsRepository {
  static async getComments(postID: number) {
    try {
      const comments = await Comment().findAll({
        where: {
          id: postID,
        },
      });
      return comments;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  CommentsRepository,
};
export {};

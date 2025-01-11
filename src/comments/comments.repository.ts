const Comment = require('../../models/comment');

class CommentsRepository {
  static async getComments(postID: number) {
    try {
      const comments = await Comment().findAll({
        where: {
          postID,
        },
      });
      return comments;
    } catch (e) {
      throw e;
    }
  }

  static async postComment(
    userID: number,
    postID: number,
    text: string,
    publicationTime: Date
  ) {
    try {
      const newComment = await Comment().build({
        userID,
        postID,
        text,
        publicationTime,
      });

      await newComment.save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  CommentsRepository,
};
export {};

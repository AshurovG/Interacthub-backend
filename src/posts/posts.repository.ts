const Post = require("../../models/post");

class PostsRepository {
  static async getPosts() {
    try {
      const posts = await Post().findAll();
      return posts;
    } catch (e) {
      throw e;
    }
  }

  static async getPost(id: number) {
    try {
      const post = await Post().findByPk(id);
      return post;
    } catch (e) {
      throw e;
    }
  }

  static async postPost(text: string, image: string, publicationDate: Date) {
    try {
      const newPost = await Post().build({
        text,
        image,
        publicationDate,
      });
      await newPost.save();
    } catch (e) {
      throw e;
    }
  }

  static async updatePost(text: string, image: string, id: number) {
    try {
      const postToUpdate = await Post().findByPk(id);
      if (!postToUpdate) {
        throw new Error("Post not found");
      }
      postToUpdate.text = text;
      postToUpdate.image = image;
      await postToUpdate.save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  PostsRepository,
};
export {};

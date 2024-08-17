const Post = require("../../models/post");

class PostsRepository {
  static async getPosts() {
    try {
      const posts = await Post().findAll();
      return posts;
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
      throw error;
    }
  }

  static async postPost(text: string, image: string, publicationDate: Date) {
    console.log("date from repository", publicationDate);
    const newPost = await Post().build({
      text,
      image,
      publicationDate,
    });
    await newPost.save();
  }
}

module.exports = {
  PostsRepository,
};
export {};

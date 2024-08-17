const { PostsRepository } = require("./posts.repository");

class PostsDAO {
  static async getPosts() {
    try {
      const query = await PostsRepository.getPosts();
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async postPost(text: string, image: string) {
    try {
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

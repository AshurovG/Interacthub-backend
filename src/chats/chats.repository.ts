const Chat = require('../../models/chat');

class ChatsRepository {
  static async getChats() {
    try {
      const chats = await Chat().findAll();
      return chats;
    } catch (e) {
      throw e;
    }
  }

  static async postChat(title: string, description: string) {
    try {
      const newChat = await Chat().build({
        title,
        description,
      });

      await newChat.save();
    } catch (e) {
      throw e;
    }
  }

  static async updateChat(id: number, title: string, description: string) {
    try {
      const chatToUpdate = await Chat().findByPk(id);
      chatToUpdate.title = title;
      chatToUpdate.description = description;

      await chatToUpdate.save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = {
  ChatsRepository,
};
export {};

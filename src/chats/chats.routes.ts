const Router = require('express');
const router = new Router();
const chatsController = require('./chats.controller');

router.get('/chats', chatsController.getChats);
router.post('/chats', chatsController.postChat);
router.put('/chats/:id', chatsController.updateChat); // TODO: Сделать частичное изменение полей
router.delete('/chats/:id', chatsController.deleteChat);

module.exports = router;
export {};

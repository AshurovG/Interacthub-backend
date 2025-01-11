const Router = require('express');
const router = new Router();
const commentsController = require('./comments.controller');

router.get('/comments/:post_id', commentsController.getComments);
router.post('/comments/:post_id', commentsController.postComment);

module.exports = router;
export {};

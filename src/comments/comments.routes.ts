const Router = require("express");
const router = new Router();
const commentsController = require("./comments.controller");

router.get("/comments/:post_id", commentsController.getComments);

module.exports = router;
export {};

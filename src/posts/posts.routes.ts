const Router = require("express");
const router = new Router();
const postsController = require("./posts.controller");

router.get("/posts", postsController.getPosts);
router.post("/posts", postsController.postPost);

module.exports = router;
export {};

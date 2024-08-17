const Router = require("express");
const router = new Router();
const postsController = require("./posts.controller");

router.get("/posts", postsController.getPosts);
router.post("/posts", postsController.postPost);
router.put("/posts/:id", postsController.updatePost);

module.exports = router;
export {};

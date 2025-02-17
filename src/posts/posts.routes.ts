const Router = require("express");
const router = new Router();
const postsController = require("./posts.controller");
import multer from 'multer';

const upload = multer();

router.get("/posts", postsController.getPosts);
// router.post("/posts", postsController.postPost);
router.post("/posts", upload.single('image'), postsController.postPost);
router.put("/posts/:id", postsController.updatePost);
router.delete("/posts/:id", postsController.deletePost);

module.exports = router;
export {};

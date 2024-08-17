const Router = require("express");
const router = new Router();
const usersController = require("./users.controller");

router.get("/users", usersController.getUsers);
router.post("/users", usersController.postUser);
router.post("/users/code_gen", usersController.codeGen);
router.post("/users/auth", usersController.auth);

module.exports = router;
export {};

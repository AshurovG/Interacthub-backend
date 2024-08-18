const Router = require("express");
const router = new Router();
const usersController = require("./users.controller");

router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUser);
router.post("/users", usersController.postUser);
router.put("/users/", usersController.updateUser);

module.exports = router;
export {};

const Router = require("express");
const router = new Router();
const usersController = require("./users.controller");

router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUser);
router.post("/users", usersController.postUser);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
export {};

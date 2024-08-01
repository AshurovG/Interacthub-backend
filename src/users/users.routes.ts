const Router = require("express");
const router = new Router();
const usersController = require("./users.controller");

router.get("/users", usersController.getUsers);

module.exports = router;
export {};

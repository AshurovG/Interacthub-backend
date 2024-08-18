const Router = require("express");
const router = new Router();
const authController = require("./auth.controller");

router.post("/code_gen", authController.codeGen);
router.post("/auth", authController.auth);

module.exports = router;
export {};

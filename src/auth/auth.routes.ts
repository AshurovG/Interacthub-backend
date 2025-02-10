const Router = require('express');
const router = new Router();
const authController = require('./auth.controller');

router.get('/session', authController.getUserBySession);
router.post('/code_gen', authController.codeGen);
router.post('/auth', authController.auth);
router.post('/logout', authController.logout);

module.exports = router;
export {};

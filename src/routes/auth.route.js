const { Router } = require("express");

const { login } = require("../contollers/auth.contoller");

const router = Router();
router.post("/login", login);

module.exports = {
  authRouter: router,
};

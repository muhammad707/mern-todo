const { Router } = require("express");

const { createUser } = require("../contollers/user.controller");

const router = Router();

router.post('/create', createUser)

module.exports = {
  userRouter: router
}

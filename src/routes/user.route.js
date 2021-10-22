const { Router } = require("express");
const { upload } = require('../middlewares/multer.middleware')

const { createUser, getUsers } = require("../contollers/user.controller");

const router = Router();
router.get('/', getUsers)
router.post('/create', upload.any(), createUser)

module.exports = {
  userRouter: router
}

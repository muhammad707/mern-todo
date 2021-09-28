const { UserModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function createUser(req, res) {
  const { email, password, fullName } = req.body;

  const emailExists = await UserModel.findOne({ email });
  if (emailExists) {
    res.status(400).send({
      message: "Email is already exists",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));
    const newUser = new UserModel({
      email,
      fullName,
      password: hashedPassword
    })
    try {
      await newUser.save();
      res.status(200).send({
        message: 'User has been created'
      })
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  createUser
}

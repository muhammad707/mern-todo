const { UserModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function createUser(req, res) {
  console.log(req.body)
  console.log(req.files[0].path)
  
  const { email, password, fullName } = req.body;


  // const emailExists = await UserModel.findOne({ email });
  // if (emailExists) {
  //   throw new Error('EXISTS')
  // } else {
    
  //   const newUser = new UserModel({
  //     email,
  //     fullName,
  //     password: hashedPassword,
  //   })
  //   try {
  //     await newUser.save();
  //     res.status(200).send({
  //       message: 'User has been created'
  //     })
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

async function getUsers(req, res) {
  try {
    const users = await UserModel.find()
    res.send(users);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUsers
}

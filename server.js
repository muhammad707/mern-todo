const express = require("express");

const { connectDb } = require("./services/db/db");
const { todoRouter } = require("./src/routes/todo.route");
const { userRouter } = require("./src/routes/user.route");
const { authRouter } = require("./src/routes/auth.route");
const {checkUser} = require('./src/middlewares/checkUser.middleware')

const app = express();
app.use(express.json());
require("dotenv").config();

app.use('/auth', authRouter);
app.use("/api/todo", checkUser, todoRouter);
app.use('/api/user', checkUser, userRouter);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, connectDb);
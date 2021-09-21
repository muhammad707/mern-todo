const express = require('express')
const {todoRouter} = require('./src/routes/todo.route')

const {connectDb} = require('./services/db/db')
const app = express()
app.use(express.json())
require('dotenv').config()


app.use('/api/todo', todoRouter);
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, connectDb);
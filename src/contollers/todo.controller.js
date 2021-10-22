const {TodoModel} = require('../models/todo.model')

async function createTodo(req, res) {
  const {title, description, status, userId} = req.body;

  try {
    const newTodo = new TodoModel({
      title, // title: title
      description,
      status,
      assignedTo: userId
    })
    await newTodo.save();
    res.send({
      message: 'Todo has been created'
    })
  } catch (error) {
    throw error;
  }
}

async function getTodos(req, res) {
  console.log(req.query);
  console.log(req.user);
  try {
    const todos = await TodoModel.find({ status: req.query.status, assignedTo: req.user.userId }).populate('assignedTo', 'email')
    res.send(todos)
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

async function getTodo(req, res) {
  const {id} = req.params;
  try {
    const todo = await TodoModel.findOne({ _id: id })
    if (!todo) {
      return res.send({
        message: 'Todo not found'
      })
    }
    res.send(todo)
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

async function updateStatus(req, res) {
  const {id} = req.params;
  const {status} = req.body;

  try {
    await TodoModel.findOneAndUpdate({_id: id}, { status })
    // todo.status = status;
    // await todo.save();
    res.send({
      message: 'Status has been updated'
    })
  } catch (error) {
    res.status(500).send({
      error: error.message
    })
  }
}

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateStatus
}
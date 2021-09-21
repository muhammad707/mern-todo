const {Router} = require('express')

const {createTodo, getTodos, getTodo, updateStatus} = require('../contollers/todo.controller')

const router = Router()

router.post('/create', createTodo)
router.get('/', getTodos)
router.get('/:id', getTodo)
router.patch('/:id/status', updateStatus)

module.exports = {
  todoRouter: router
}
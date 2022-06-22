const express = require('express');
const Todo = require('./models/Todo');
const router = express.Router();

//get all todos
router.get('/todos', async (req, res) => {
	const todos = await Todo.find();
	return res.json(todos);
});

//add a new todo
router.post('/todos', async (req, res) => {
	const todo = new Todo(req.body);
	await todo.save();
	return res.json(todo);
});

//delete todo
router.delete('/todos', async (req, res) => {
	await Todo.findByIdAndDelete(req.body.id);

	return res.json({
		message: 'Todo deleted successfully',
		success: true,
	});
});

module.exports = router;

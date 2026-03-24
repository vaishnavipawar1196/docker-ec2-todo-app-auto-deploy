const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readData, writeData } = require('../utils/fileHandler');

const filePath = path.join(__dirname, '../data/todos.json');

// ➕ Create Todo
exports.createTodo = (req, res) => {
    const todos = readData(filePath);

    const newTodo = {
        id: uuidv4(),
        title: req.body.title,
        completed: false,
        createdAt: new Date()
    };

    todos.push(newTodo);
    writeData(filePath, todos);

    res.json(newTodo);
};

// 📋 Get All Todos
exports.getTodos = (req, res) => {
    const todos = readData(filePath);
    res.json(todos);
};

// ✏️ Update Todo
exports.updateTodo = (req, res) => {
    let todos = readData(filePath);

    todos = todos.map(todo =>
        todo.id === req.params.id
            ? { ...todo, ...req.body }
            : todo
    );

    writeData(filePath, todos);
    res.json({ message: "Updated" });
};

// ❌ Delete Todo
exports.deleteTodo = (req, res) => {
    let todos = readData(filePath);

    todos = todos.filter(todo => todo.id !== req.params.id);
    writeData(filePath, todos);

    res.json({ message: "Deleted" });
};
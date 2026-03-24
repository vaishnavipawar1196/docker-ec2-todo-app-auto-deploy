const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// API routes
app.use('/api/todos', todoRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, '../public')));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Health
app.get('/health', (req, res) => {
    res.json({ status: "Running 🚀" });
});

module.exports = app;
// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());

// Remove deprecated options
mongoose.connect('mongodb://127.0.0.1:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

// backend/models/Todo.js

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  imageUrl: String,
  price: Number,
  productName: String,
  description: String
});


module.exports = mongoose.model('Todo', TodoSchema);

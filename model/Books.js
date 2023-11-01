const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String,
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;

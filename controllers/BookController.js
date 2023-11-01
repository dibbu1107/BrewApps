const Book = require('../model/Books');

async function addBook(req, res) {
  try {
    const { title, author, summary } = req.body;
    const newBook = new Book({ title, author, summary });
    await newBook.save();

    return res.status(201).json({
      data: newBook,
      msg: "Book added successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      error: `Error adding book: ${error.message}`,
      success: false,
    });
  }
}

async function getAllBooks(req, res) {
  try {
    const allBooks = await Book.find();

    return res.status(200).json({
      data: allBooks,
      msg: "All books fetched successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      error: `Error fetching all books: ${error.message}`,
      success: false,
    });
  }
}

async function getBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        msg: "Book not found",
        success: false,
      });
    }

    return res.status(200).json({
      data: book,
      msg: "Book details fetched successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      error: `Error fetching book by ID: ${error.message}`,
      success: false,
    });
  }
}

async function updateBook(req, res) {
  try {
    const { title, author, summary } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, summary },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        msg: "Book not found",
        success: false,
      });
    }

    return res.status(200).json({
      data: updatedBook,
      msg: "Book updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      error: `Error updating book: ${error.message}`,
      success: false,
    });
  }
}

async function deleteBook(req, res) {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({
        msg: "Book not found",
        success: false,
      });
    }

    return res.status(200).json({
      data: deletedBook,
      msg: "Book deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      error: `Error deleting book: ${error.message}`,
      success: false,
    });
  }
}

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};

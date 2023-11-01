const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");

// Add a new book
router.post("/addBook", bookController.addBook);

// View a list of all books
router.get("/bookList", bookController.getAllBooks);

// View details of a specific book by its ID
router.get("/bookDetail/:id", bookController.getBookById);

// Update a book's details
router.put("/:id", bookController.updateBook);

// Delete a book
router.delete("/:id", bookController.deleteBook);

module.exports = router;

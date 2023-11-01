# BrewApps

Book Management API
Welcome to the Book Management API, a simple Express.js application for managing books. This API allows you to perform CRUD operations on books, including adding a new book, viewing a list of all books, viewing details of a specific book by its ID, updating a book's details, and deleting a book.

Getting Started

1. Clone the repository:
   git clone <repository-url>

2. Install dependencies:
   npm install
   
3. Set up your MongoDB database. Update the connection string in server.js with your MongoDB URI.

4. Run the application:
   npm start

API Endpoints

1. Add a new book
Endpoint: POST /book/addBook
Request:{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A story of the American Dream"
}
Response:{
  "data": {
    "_id": "5fbd5e26b3e2a4392842e6fb",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A story of the American Dream",
    "__v": 0
  },
  "msg": "Book added successfully",
  "success": true
}

2. View a list of all books
Endpoint: GET /book/bookList
Response:{
  "data": [
    {
      "_id": "5fbd5e26b3e2a4392842e6fb",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "summary": "A story of the American Dream",
      "__v": 0
    }
   
  ],
  "msg": "All books fetched successfully",
  "success": true
}


3. View details of a specific book by its ID
Endpoint: GET /book/bookDetail/:id
Response:{
  "data": {
    "_id": "5fbd5e26b3e2a4392842e6fb",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A story of the American Dream",
    "__v": 0
  },
  "msg": "Book details fetched successfully",
  "success": true
}


4. Update a book's details
Endpoint: PUT /book/:id
Request:{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A story of the American Dream, updated edition"
}
Response:{
  "data": {
    "_id": "5fbd5e26b3e2a4392842e6fb",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A story of the American Dream, updated edition",
    "__v": 0
  },
  "msg": "Book updated successfully",
  "success": true
}


5. Delete a book
Endpoint: DELETE /book/:id
Response:{
  "data": {
    "_id": "5fbd5e26b3e2a4392842e6fb",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A story of the American Dream, updated edition",
    "__v": 0
  },
  "msg": "Book deleted successfully",
  "success": true
}


Error Handling
In case of an error, the API will return a JSON response with details about the error:
{
  "error": "Error message",
  "success": false
}


Feel free to explore and enhance this API for your needs!




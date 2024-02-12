const router = require("express").Router();
const {
  getBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/books", createBook);
router.patch("/books/:book_id", editBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;

const BookModel = require("../models/book");

// Получим всех пользователей из БД
const getBooks = (_req, res) => {
  BookModel.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  BookModel.findById(book_id)
    .then((book) => {
      if (!book) {
        return res.status(404).send("Book not found");
      }
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Создаем пользователя
const createBook = (req, res) => {
  const data = req.body;
  BookModel.create(data)
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Редактируем пользователя
const editBook = (req, res) => {
  const { book_id } = req.params;
  const data = req.body;
  BookModel.findByIdAndUpdate(book_id, data, { new: true, runValidators: true })
    .then((book) => {
      if (!book) {
        return res.status(404).send("Book not found");
      }
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем пользователя
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  BookModel.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        return res.status(404).send("Book not found");
      }
      res.status(200).send("Done");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
};

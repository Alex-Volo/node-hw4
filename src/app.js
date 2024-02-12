const express = require("express");
const dotenv = require("dotenv");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/backend",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connection to MongoDB successfully established");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(loggerOne);

app.use(usersRouter);
app.use(booksRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});

const UserModel = require("../models/user");

// Получим всех пользователей из БД
const getUsers = (_req, res) => {
  UserModel.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getUser = (req, res) => {
  const { user_id } = req.params;
  UserModel.findById(user_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Создаем пользователя
const createUser = (req, res) => {
  const data = req.body;
  UserModel.create(data)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Редактируем пользователя
const editUser = (req, res) => {
  const { user_id } = req.params;
  const data = req.body;
  UserModel.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем пользователя
const deleteUser = (req, res) => {
  const { user_id } = req.params;
  UserModel.findByIdAndDelete(user_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send("Done");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser,
};

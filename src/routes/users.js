const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/users");

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.patch("/users/:user_id", editUser);
router.delete("/users/:user_id", deleteUser);

module.exports = router;

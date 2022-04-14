const router = require("express").Router();

// The following are the functions from the userController to get the information of all users, get a single user's information, create a new user, update an existing user, and delete an existing user.
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/users to retrieve all users in the database or add new user information to the database
router.route("/").get(getAllUsers).post(createUser);

// /api/users:id to get an individual user's information, update the respective user's information, or delete the respective user from the database
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;

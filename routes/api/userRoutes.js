const router = require("express").Router();

// The following are the functions from the userController to get the information of all users, create a new user, get a single user's information, update an existing user, and delete an existing user.
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/user to retrieve all users in the database or add new user information to the database
router.route("/").get(getAllUsers).post(createUser);

// /api/user/:userId to get an individual user's information, update the respective user's information, or delete the respective user from the database
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// Exporting this file so other files may access this file's information
module.exports = router;

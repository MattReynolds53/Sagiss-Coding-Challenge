// Requiring the necessary model(s)
// const { notEqual } = require("assert");
const { User } = require("../models");

const userController = {
  // This function is a simple GET request that retrieves all user;s in the database.
  getAllUsers(req, res) {
    User.find()
      .select("-__v")
      .then((users) => res.json(users))
      .catch((err) => {
        {
          res.status(500).json(err);
          console.log(err);
        }
      });
  },

  // This function allows the user to create a user in the database through a POST request. The user must simply enter the required input fields (see User.js for required fields) in order to successfully create a new user.
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // This function retrieves a single user from the database based on the ID entered in the URL following /api/user/ (the ID entered in the URL should matc the _id value in the database).
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: `No user found with id:${req.params.userId}`,
          });
        }
        res.send(user);
      })
      .catch((err) => res.json(err));
  },

  // This is the updateUser function that allows the user to update one, many, or all areas of a user's document (fullName, dateOfBirth, address, and/or description). If no user is found with the userId that was entered, a 404 error message will inform the user that no user was found in the database.
  updateUser(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      {
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        description: req.body.description,
      },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: `There is no user listed under id:${req.params.userId}`,
          });
        }
        res.send(user);
      })
      .catch((err) => res.json(err));
  },

  // This function serves to delete an instance of a user in the database. Simply enter the userId you wish to delete in the url following /api/user/
  deleteUser(req, res) {
    User.findByIdAndRemove(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: `There is no user under ID:${req.params.userId}.`,
          });
        }
        res.send({ message: "User successfully deleted." });
      })
      .catch((err) => res.json(err));
  },
};

// Exporting this file so other files may access this file's information
module.exports = userController;

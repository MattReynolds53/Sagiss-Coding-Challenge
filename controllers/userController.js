// Requiring the necessary model(s)
const { User } = require("../models");

const userController = {
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

  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Uh oh, there seems to be no User with that ID.",
            })
          : res.json(user)
      )
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbUserData) => {
        if (dbUserData) {
          res
            .status(404)
            .json({ message: "Sorry, here is no User with that ID." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => {
        if (dbUserData) {
          res
            .status(404)
            .json({ message: "Sorry, there is no User wit that ID." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

// Exporting this file so other files may access this file's information
module.exports = userController;

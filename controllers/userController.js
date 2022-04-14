// Requiring the necessary model(s)
const { notEqual } = require("assert");
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

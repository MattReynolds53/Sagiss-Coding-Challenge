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
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: `No user found with id:${req.params.userId}`,
          });
        }
        return res.status(500).send({
          message: `There was an error when returning the user under id:${req.params.userId}`,
        });
      });
  },

  //   getUserById(req, res) {
  //     User.findOne({ _id: req.params.userId })
  //       .select("-__v")
  //       .then((user) =>
  //         !user
  //           ? res.status(404).json({
  //               message: "Uh oh, there seems to be no User with that ID.",
  //             })
  //           : res.json(user)
  //       )
  //       .catch((err) => {
  //           console.log(err);
  //           res.status(500).json(err);
  //       });
  //   },


  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId, {
         fullName: req.body.fullName,
         dateOfBirth: req.body.dateOfBirth,
         address: req.body.address,
         description: req.body.description
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: `There is no user listed under id:${req.params.userId}`
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `There is no user listed under id:${req.params.userId}`
            });
        }
        return res.status(500).send({
            message: `There seems to be an error when updating the user under id:${req.params.userId}`
        });
    });
  },

//   updateUser(req, res) {
//     User.findOneAndUpdate(
//       { _id: req.params.id },
//       { $set: req.body },
//       { runValidators: true, new: true }
//     )
//       .then((dbUserData) => {
//         if (dbUserData) {
//           res
//             .status(404)
//             .json({ message: "Sorry, here is no User with that ID." });
//           return;
//         }
//         res.json(dbUserData);
//       })
//       .catch((err) => res.json(err));
//   },

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

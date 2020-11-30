const User = require("../models/User");

module.exports = {
  findOne: function (req, res) {
    console.log("response: ", req.body)
    User.findOne(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("body: ", req.body)
    User
      .create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  }
};
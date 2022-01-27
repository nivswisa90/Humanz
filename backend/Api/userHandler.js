const User = require("../db/userSchema");

exports.userHandler = {
  // Get all users
  async getAllUsers(req, res) {
    User.find({})
      .then((docs) => res.json(docs))
      .catch((err) =>
        console.log(`Error getting the all users from DB: ${err}`)
      );
  },
  async getUserByName(req, res) {
    const userName = req.params.name;
    console.log(userName);
    User.find({ name: { $regex: userName } })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) =>
        console.log(
          `[+] Error getting the user by first name or last name from the DB: ${err}`
        )
      );
  },
  // Delete exist user
  deleteUser(req, res) {
    let userName = req.params.name;

    User.findOneAndDelete({ name: userName })
      .then((docs) => {
        console.log(docs);
        res.json(docs);
      })
      .catch((err) => console.log(`Error deleting user from the DB: ${err}`));
  },
  // Add new user
  async addUser(req, res) {
    User.countDocuments(
      {
        name: req.body.name,
      },
      function (err, count) {
        if (err) {
          res.status(404).send(`Error: ${err}`);
        } else if (count == 1) {
          res.status(404).send(`[+] ${req.body.name} is already exist`);
        } else {
          const newUser = new User({
            name: req.body.name,
            id: req.body.id,
            ip: req.body.ip,
            phone: req.body.phone,
          });
          newUser
            .save()
            .then((docs) => {
              res.json(`[+] The user ${newUser.name} Successfully added user!`);
            })
            .catch((err) =>
              console.log(`Error adding the user to the  DB: ${err}`)
            );
        }
      }
    );
  },
};

const User = require("../db/userSchema");

exports.userHandler = {
  // Get all users or get by first name or last name
  async getUsers(req, res) {
    if (req.query.name) {
      const userName = req.query.name;

      //find user by name or family name
      User.findOne({ name: { $regex: userName } })
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) =>
          console.log(
            `[+] Error getting the user by first name or last name from the DB: ${err}`
          )
        );
    } else {
      User.find({})
        .then((docs) => res.json(docs))
        .catch((err) =>
          console.log(`Error getting the all users from DB: ${err}`)
        );
    }
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
  // Delete exist user
  deleteUser(req, res) {
    let userName = req.params.name;
    // let nameReg = /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/;
    // if (userName.match(nameReg)) {
    //   console.log(userName);
    // } else {
    //   console.log("name not match");
    // }
    User.findOneAndDelete({ name: userName })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error deleting user from the DB: ${err}`));
  },
};

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
  // Get all users or get by first name or last name
  // async getUsers(req, res) {
  //   if (req.query.name) {
  //     const userName = req.query.name;
  //     const whiteSpaceRegex = /^[a-zA-Z_ ]*$/;
  //     // Check if the value is first name or first name and last name
  //     if (whiteSpaceRegex.test(userName)) {
  //       console.log("just jhon?");
  //       User.find({ name: { $regex: userName } })
  //         .then((docs) => {
  //           if (docs.length > 1) {
  //             const result = docs.filter((item) => item.name === userName);
  //             console.log(result[0]);
  //             res.json(result[0]);
  //           }
  //         })
  //         .catch((err) =>
  //           console.log(
  //             `[+] Error getting the user by first name and last name from the DB: ${err}`
  //           )
  //         );
  //     } else {
  //       User.find({ name: { $regex: userName } })
  //         .then((docs) => {
  //           res.json(docs);
  //         })
  //         .catch((err) =>
  //           console.log(
  //             `[+] Error getting the user by first name or last name from the DB: ${err}`
  //           )
  //         );
  //     }
  //     //find user by name or family name
  //   } else {
  //     User.find({})
  //       .then((docs) => res.json(docs))
  //       .catch((err) =>
  //         console.log(`Error getting the all users from DB: ${err}`)
  //       );
  //   }
  // },
  // // Add new user
  // async addUser(req, res) {
  //   User.countDocuments(
  //     {
  //       name: req.body.name,
  //     },
  //     function (err, count) {
  //       if (err) {
  //         res.status(404).send(`Error: ${err}`);
  //       } else if (count == 1) {
  //         res.status(404).send(`[+] ${req.body.name} is already exist`);
  //       } else {
  //         const newUser = new User({
  //           name: req.body.name,
  //           id: req.body.id,
  //           ip: req.body.ip,
  //           phone: req.body.phone,
  //         });
  //         newUser
  //           .save()
  //           .then((docs) => {
  //             res.json(`[+] The user ${newUser.name} Successfully added user!`);
  //           })
  //           .catch((err) =>
  //             console.log(`Error adding the user to the  DB: ${err}`)
  //           );
  //       }
  //     }
  //   );
  // },
  // // Delete exist user
  // deleteUser(req, res) {
  //   let userName = req.params.name;
  //   // let nameReg = /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/;
  //   // if (userName.match(nameReg)) {
  //   //   console.log(userName);
  //   // } else {
  //   //   console.log("name not match");
  //   // }
  //   User.findOneAndDelete({ name: userName })
  //     .then((docs) => {
  //       res.json(docs);
  //     })
  //     .catch((err) => console.log(`Error deleting user from the DB: ${err}`));
  // },
};

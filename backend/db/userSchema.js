const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (validate) {
        return /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/.test(validate);
      },
      message: (props) => `${props.value} is not valid full name`,
    }
  },
  id: {
    type: String,
    required: true,
    validate: {
      validator: function (validate) {
        return /^[0-9]{9}$/.test(validate);
      },
      message: (props) => `${props.value} is not valid full ID`,
    }
  },
  ip: {
    type: String,
    required: true,
    validate: {
      validator: function (validate) {
        return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi.test(validate);
      },
      message: (props) => `${props.value} is not valid IP address`,
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /[\+]\d{3}-\d{7}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
});

const User = model("User", userSchema);

module.exports = User;

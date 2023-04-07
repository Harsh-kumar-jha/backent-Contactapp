const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please add user name "],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: [true, "This email address already registered"],
    },
    password: {
      type: String,
      required: [true, "Please enter user password"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

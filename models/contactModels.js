const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter your name first"],
    },
    email: {
      type: String,
      required: [true, "Please enter contact email address "],
    },
    phone: {
      type: String,
      required: [true, "Please enter your contact phone number"],
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);

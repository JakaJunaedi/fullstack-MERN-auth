const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    resetPasswordLink: {
      data: String,
      default: ""
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  },
  {timestamps:true}// date field
  )
);

module.exports = User;

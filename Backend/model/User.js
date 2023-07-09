const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    default: "xxx",
    required: true,
  },
  patientDetails: {
    type: Boolean,
    default: false,
  },
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);

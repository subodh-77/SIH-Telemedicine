const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  dob:       { type: Date, required: true },
  gender:    { type: String, enum: ["Male", "Female", "Other"], required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;


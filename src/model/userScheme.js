const mongoose = require("mongoose");
const LearningDB = new mongoose.Schema({
  username: String,

  f_name: String,
  l_name: String,
  address: String,
  contact: String,
  age: Number,
});

module.exports = mongoose.model("userData", LearningDB);

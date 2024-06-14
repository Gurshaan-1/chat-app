const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type:String,
    required: true,
  },

  username: {
    type:String,
    required: true,
    unique: true,
  },
  password: {
    type:String,
    required: true,
    minlen: 6,
  },
  gender: {
    type:String,
    required: true,
    enum: ["male", "female"],
  },
  Profilepic: {
    type:String,
    default: "",
  },
//createdAt , UpdatedAt
} , {timestamps:true});

const User = mongoose.model("User" , userSchema);
module.exports = User;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  userName: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 8
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  profilePicture: {
    type: String,
    default: ""
  }
});

const User = mongoose.model("User", userSchema);

export default User;

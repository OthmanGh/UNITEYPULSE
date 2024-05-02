import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { name, username, password, confirmPassword, email } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({
        error: "Password don't match"
      });

    const user = await user.findOne({ username });
    const existingEmail = await user.findOne({ email });

    if (user)
      return res.status(400).json({
        error: "username already exist"
      });

    if (existingEmail)
      return res.status(400).json({
        error: "Email already exist"
      });

    const profilePic =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTs4XdD00sHtFKBYeyzKvz1CUHr598N0yrUA&s";

    const newUser = new User({
      name,
      username,
      password,
      email,
      profilePic
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  console.log("Login User");
};

export const logout = (req, res) => {
  console.log("logout");
};

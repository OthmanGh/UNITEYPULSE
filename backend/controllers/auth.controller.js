import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRESIN
    });

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser
      }
    });
  } catch (error) {
    console.error("Error in signup", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  console.log("Login User");
};

export const logout = (req, res) => {
  console.log("logout");
};

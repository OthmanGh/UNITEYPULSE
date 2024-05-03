import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN
  });
};

export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });

    const token = signToken(newUser._id);

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

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      status: "fail",
      message: "invalid credentials"
    });
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password"
      });
    }

    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      token
    });
  } catch (error) {
    console.error("Error in login", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  console.log("logout");
};

export const forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).send({
      status: "fail",
      message: "User not found"
    });
  }

  const resetToken = user.generatePasswordResetToken();

  await user.save({ validateBeforeSave: false });
};
export const resetPassword = (req, res, next) => {};

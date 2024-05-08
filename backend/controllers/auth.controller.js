import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN
  });
};

export const signup = async (req, res, next) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    });

    if (!newUser) {
      return res.status(500).json({
        status: "fail",
        error: "User creation failed"
      });
    }

    const token = generateToken(newUser._id);

    return res.status(201).json({
      status: "success",
      data: {
        user: newUser,
        token: token
      }
    });
  } catch (error) {
    console.error("Error in signup", error.message);
    if (error.code === 11000) {
      return res.status(400).json({
        status: "fail",
        error: "Email or username already exists"
      });
    }
    return res
      .status(500)
      .json({ status: "fail", error: "Internal Server Error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid credentials"
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password"
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      status: "success",
      data: {
        _id: user._id,
        name: user.name,
        profilePicture: user.profilePicture,
        username: user.username,
        token: token
      }
    });
  } catch (error) {
    console.error("Error in login", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found"
    });
  }

  const resetToken = user.generatePasswordResetToken();

  await user.save({ validateBeforeSave: false });
};

export const resetPassword = (req, res, next) => {};

import User from "../models/user.model.js";
import generateTokenandSetCookie from "../utils/generateTokenandSetCookie.js";

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

    generateTokenandSetCookie(newUser._id, res);

    return res.status(201).json({
      status: "success",
      data: {
        user: newUser
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
    const { email, password } = {
      email: req.body.email,
      password: req.body.password
    };

    if (!email || !password) {
      return res.status(400).send({
        status: "fail",
        message: "invalid credentials"
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password"
      });
    }

    generateTokenandSetCookie(user._id, res);

    res.status(200).json({
      status: "success",
      data: {
        _id: user._id,
        name: user.name,
        profilePicture: user.profilePicture,
        username: user.username
      }
    });
  } catch (error) {
    console.error("Error in login", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).send({
      status: "fail",
      message: "User not found 23543"
    });
  }

  const resetToken = user.generatePasswordResetToken();

  await user.save({ validateBeforeSave: false });
};

export const resetPassword = (req, res, next) => {};

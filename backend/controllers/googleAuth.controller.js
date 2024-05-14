import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import axios from "axios";

const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN
  });
};

export const googleSignup = async (req, res, next) => {
  try {
    const { email, name, profilePicture } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        profilePicture
      });
    }

    const token = generateToken(user._id);

    return res.status(201).json({
      status: "success",
      data: {
        user,
        token
      }
    });
  } catch (error) {
    console.error("Error in Google signup", error.message);
    return res
      .status(500)
      .json({ status: "fail", error: "Internal Server Error" });
  }
};

export const googleLogin = async (req, res, next) => {
  try {
    const { access_token } = req.body;

    const googleUserInfo = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`
    );

    const { email, name, picture } = googleUserInfo.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        profilePicture: picture
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      status: "success",
      data: {
        user,
        token
      }
    });
  } catch (error) {
    console.error("Error in Google login", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

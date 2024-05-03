import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "success",
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

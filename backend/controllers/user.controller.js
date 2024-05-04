import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const currentUserId = req.user._id;

    const filteredUsers = await User({
      _id: {
        $ne: {
          currentUserId
        }
      }
    });

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUserForSidebar ", error.message);

    res.status(500).json({ error: "Internal server error" });
  }
};

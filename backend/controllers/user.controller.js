import User from "../models/user.module.js";

export const getUsersForSitbar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (err) {
    console.log("Error in getUsersForSitbar ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

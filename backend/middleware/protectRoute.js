import jwt from "jsonwebtoken";
import User from "../models/user.module.js";

const protectRouter = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauhtorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauhtorized - No Token Provided" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log("Error in protectRouter middleware: ", err.message);
    res.this.status(500).json({ error: "Internal server error" });
  }
};

export default protectRouter;

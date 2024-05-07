import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./soket/socket.js";

const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});

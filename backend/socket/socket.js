import http from "http";
import { Server } from "socket.io";
import e from "express";
import dotenv from "dotenv";
dotenv.config();

const app = e();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});

export const getReceiverSocketId = receiverId => {
  return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on("connection", socket => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };

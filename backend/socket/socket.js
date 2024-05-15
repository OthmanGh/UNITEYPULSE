import http from "http";
import { Server } from "socket.io";
import e from "express";
import dotenv from "dotenv";
dotenv.config();

const app = e();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});

io.on("connection", socket => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

export { app, io, server };

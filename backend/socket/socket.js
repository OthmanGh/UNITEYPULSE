import http from "http";
import { Server } from "socket.io";
import app from "../app.js";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://127.0.0.1:8000"],
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

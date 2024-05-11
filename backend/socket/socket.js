// import http from "http";
// import { Server } from "socket.io";
// import app from "../app.js";

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ["*"],
//     methods: ["GET", "POST", "PATCH", "DELETE"]
//   }
// });

// export const getReceiverSocketId = receiverId => {
//   return userSocketMap[receiverId];
// };

// export const userSocketMap = {};

// io.on("connection", socket => {
//   console.log("a user connected", socket.id);

//   const userId = socket.handshake.query.userId;
//   console.log(userId);

//   if (userId != "undefined") userSocketMap[userId] = socket.id;

//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     console.log("user disconnected", socket.id);
//     delete userSocketMap[userId];
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

// export { app, io, server };

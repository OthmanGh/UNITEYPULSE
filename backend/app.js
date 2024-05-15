import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import connect from "./config/db.js";
import chatRoutes from "./routes/chat.routes.js";
import messageRoutes from "./routes/message.routes.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 8000;

// const server = http.createServer(app);

// export const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST", "PATCH", "DELETE"]
//   }
// });

// const userSocketMap = {};

// export const getReceiverSocketId = receiverId => {
//   return userSocketMap[receiverId];
// };

// io.on("connection", socket => {
//   console.log("a user connected", socket.id);

//   const userId = socket.handshake.query.userId;

//   if (userId !== "undefined") userSocketMap[userId] = socket.id;

//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     console.log("user disconnected", socket.id);
//     delete userSocketMap[userId];
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

app.listen(PORT, err => {
  if (err) throw new Error(err);
  console.log(`Server is running on port ${PORT}`);
  connect();
});

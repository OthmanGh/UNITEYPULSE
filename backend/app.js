import e from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import http from "http";
import { Server } from "socket.io";
import connect from "./config/db.js";

// import companyRoutes from "./routes/company.routes.js";

const app = e();
// const server = http.createServer(app);

app.use(e.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/customers", customerRoutes);

// app.use("/api/company", companyRoutes);

const PORT = process.env.PORT || 3001;

app.on("error", e => {
  if (e.code === "EADDRINUSE") {
    console.error("Address already in use, retrying in a few seconds...");
    setTimeout(() => {
      app.listen(PORT);
    }, 1000);
  }
});

const server = app.listen(PORT, err => {
  if (err) throw new Error(err);
  console.log(`Server is runing on port ${PORT}`);
  connect();
});

const io = new Server(server, {
  cors: {
    origin: ["*"],
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});

const userSocketMap = {};

export const getReceiverSocketId = receiverId => {
  return userSocketMap[receiverId];
};

io.on("connection", socket => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  console.log(userId);

  if (userId != "undefined") userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

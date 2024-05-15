import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import { app, server } from "./socket/socket.js";
import connect from "./config/db.js";
import OpenAI from "openai";
import { model } from "mongoose";

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/customers", customerRoutes);

/* AI */

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

const main = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "What is the capital of lebanon" }],
    model: "gpt-3.5-turbo"
  });

  console.log(completion.choices[0].message.content);
};

main();

const PORT = process.env.PORT || 8000;
server.listen(PORT, err => {
  if (err) throw new Error(err);
  console.log(`Server is runing on port ${PORT}`);
  connect();
});

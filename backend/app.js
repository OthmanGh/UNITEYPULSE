import e from "express";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = e();

app.use(e.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

export default app;

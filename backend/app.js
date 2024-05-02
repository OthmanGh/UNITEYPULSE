import e from "express";
import authRoutes from "./routes/auth.routes.js";

const app = e();

app.get("/", (req, res) => {
  console.log("hello world");
});

app.use("/api/auth", authRoutes);

export default app;

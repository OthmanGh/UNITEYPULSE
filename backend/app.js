import e from "express";
import authRoutes from "./routes/auth.routes.js";

const app = e();

app.use(e.json());
app.use("/api/auth", authRoutes);

export default app;

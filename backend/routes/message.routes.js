import e from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protect.route.js";

const router = e.Router();

router.post("/send/:id", protectRoute, sendMessage);

export default router;

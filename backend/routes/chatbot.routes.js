import e from "express";
import { sendMessage } from "./../controllers/chatbotController.js";

const router = e.Router();

router.post("/sendMessage", sendMessage);

export default router;

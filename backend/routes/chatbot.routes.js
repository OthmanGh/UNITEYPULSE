import e from "express";
import { sendMessage } from "./../controllers/chatbot.controller.js";

const router = e.Router();

router.post("/", sendMessage);

export default router;

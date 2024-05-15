import e from "express";
import {
  createChat,
  findChat,
  userChats
} from "../controllers/chat.controller.js";

const router = e.Router();

router.post("/", createChat);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);

export default router;

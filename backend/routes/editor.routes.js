import e from "express";

import protectRoute from "../middleware/protect.route.js";

import {
  createTextContent,
  getTextContent,
  updateTextContent,
  deleteTextContent
} from "../controllers/editor.controller.js";

const router = e.Router();

router.post("/", protectRoute, createTextContent);

router.get("/", protectRoute, getTextContent);

router.patch("/:id", protectRoute, updateTextContent);

router.delete("/:id", protectRoute, deleteTextContent);

export default router;

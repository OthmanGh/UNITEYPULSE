import express from "express";
import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from "../controllers/event.controller.js";

import protectRoute from "../middleware/protect.route.js";

const router = express.Router();

router.get("/", protectRoute, getAllEvents);
router.post("/", protectRoute, createEvent);
router.patch("/:id", protectRoute, updateEvent);
router.delete("/:id", protectRoute, deleteEvent);

export default router;

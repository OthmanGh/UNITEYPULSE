import express from "express";
import protectRoute from "../middleware/protect.route.js";

import {
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  createEmployee
} from "../controllers/empolyee.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllEmployees);
router.get("/:id", protectRoute, getEmployeeById);
router.patch("/:id", protectRoute, updateEmployee);
router.post("/", protectRoute, createEmployee);
router.delete("/:id", protectRoute, deleteEmployee);

export default router;

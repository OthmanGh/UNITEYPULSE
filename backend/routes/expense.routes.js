import e from "express";
import protectRoute from "../middleware/protect.route.js";
import {
  getAllExpenses,
  createExpense,
  deleteExpense
} from "../controllers/expense.controller.js";

const router = e.Router();

router.get("/", protectRoute, getAllExpenses);
router.post("/", protectRoute, createExpense);
router.delete("/:id", protectRoute, deleteExpense);

export default router;

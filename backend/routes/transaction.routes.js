import express from "express";
import protectRoute from "../middleware/protect.route.js";
import {
  getAllTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllTransactions);
router.post("/", protectRoute, createTransaction);
router.patch("/:id", protectRoute, updateTransaction);
router.delete("/:id", protectRoute, deleteTransaction);

export default router;

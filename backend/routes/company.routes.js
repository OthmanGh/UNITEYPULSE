import express from "express";
import {
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany
} from "../controllers/company.controller.js";

import protectRoute from "../middleware/protect.route.js";

const router = express.Router();

router.post("/", protectRoute, createCompany);
router.get("/:id", protectRoute, getCompanyById);
router.patch("/:id", protectRoute, updateCompany);
router.delete("/:id", protectRoute, deleteCompany);

export default router;

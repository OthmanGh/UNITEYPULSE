import e from "express";
import { createCompany } from "../controllers/company.controller.js";
import protectRoute from "../middleware/protect.route.js";

const router = e.Router();

router.post("/", protectRoute, createCompany);

export default router;

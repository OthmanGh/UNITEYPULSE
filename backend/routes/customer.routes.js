import e from "express";
import {
  getAllCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer
} from "../controllers/customer.controller.js";

import protectRoute from "../middleware/protect.route.js";

const router = e.Router();

router.get("/", protectRoute, getAllCustomers);
router.get("/:id", protectRoute, getCustomer);
router.patch("/:id", protectRoute, updateCustomer);
router.post("/", protectRoute, createCustomer);
router.delete("/:id", protectRoute, deleteCustomer);

export default router;

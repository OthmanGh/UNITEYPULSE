import { signup, login, logout } from "../controllers/auth.controller.js";
import e from "express";

const router = e.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;

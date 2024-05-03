import e from "express";

import {
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword
} from "../controllers/auth.controller.js";

const router = e.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);

export default router;

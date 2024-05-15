// import e from "express";
// import { sendMessage, getMessages } from "../controllers/message.controller.js";
// import protectRoute from "../middleware/protect.route.js";

// const router = e.Router();

// router.get("/:id", protectRoute, getMessages);
// router.post("/send/:id", protectRoute, sendMessage);

// export default router;

import e from "express";
import { addMessage, getMessages } from "../controllers/message.controller.js";

const router = e.Router();

router.post("/", addMessage);
router.get("/:chatId", getMessages);

export default router;

import express from "express";
import morgan from "morgan";
const router = express.Router();
import { login, verify } from "../controller/authController.js";
import { hasTokenExpired } from "../middlewares/authMiddleware.js";
import { logger } from "../middlewares/logger.js";

router.post("/", login);
router.get("/verify", verify);
export default router;

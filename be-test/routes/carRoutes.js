import express from "express";
import multer from "multer";
// const upload = multer({ dest: "../uploads" });
import {
  createCarsData,
  getCarsData,
  getCarData,
  deleteCarData,
  updateCarsData,
} from "../controller/carsControler.js";
import upload from "../config/multerConfig.js";
import { logger } from "../middlewares/logger.js";
import { hasTokenExpired } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.post("/", upload.array("images"), createCarsData);
router.get("/", getCarsData);
router.get("/:id", getCarData);
router.delete("/:id", deleteCarData);
router.put("/:id", upload.array("images"), updateCarsData);
export default router;

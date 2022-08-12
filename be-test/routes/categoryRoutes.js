import express from "express";
import {
  createCategory,
  getCategories,
  getCategory,
} from "../controller/categoryController.js";
const route = express.Router();
route.post("/", createCategory);
route.get("/", getCategories);
route.get("/:id", getCategory);
export default route;

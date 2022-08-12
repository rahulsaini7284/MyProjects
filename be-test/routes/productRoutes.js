import express from "express";
// import upload from "../config/multerConfig.js";
import upload from "../config/multerConfig.js";
import {
  createProductData,
  deleteProductData,
  getProductData,
  getProductsData,
  updateProductData,
} from "../controller/productController.js";

const route = express.Router();
route.post("/", upload.array("images"), createProductData);
route.get("/", getProductsData);
route.get("/:id", getProductData);
route.delete("/:id", deleteProductData);
route.put("/:id", upload.array("images"), updateProductData);
export default route;

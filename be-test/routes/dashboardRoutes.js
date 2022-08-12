import express from "express";
import dashboardController from "../controller/dashboardController.js";
const route = express.Router();
route.get("/", dashboardController);
export default route;

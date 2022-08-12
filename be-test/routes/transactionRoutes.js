import express from "express";
import {
  createTransaction,
  getTransaction,
  getTransactions,
} from "../controller/transactionController.js";

let route = express.Router();
route.post("/", createTransaction);
route.get("/", getTransactions);
route.get("/:id", getTransaction);
export default route;

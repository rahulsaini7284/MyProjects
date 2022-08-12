import { createUser, getUsers } from "../controller/usersController.js";
import express from "express";
const userRouter = express.Router();
userRouter.post("/", createUser);
userRouter.get("/", getUsers);
export default userRouter;

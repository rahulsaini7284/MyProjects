import express from "express";
import connectDB from "./dbconn.js";
import dotenv from "dotenv";
import carsRouter from "./routes/carRoutes.js";
import createFakeCarsData from "./seeder/seeder.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import categoryRoute from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import cors from "cors";
import { hasTokenExpired } from "./middlewares/authMiddleware.js";
// import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();
// createFakeCarsData(100);
// app.use(morgan("tiny"));
app.use("/cars", carsRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/products", productRoutes);
app.use("/categories", categoryRoute);
app.use("/transactions", transactionRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

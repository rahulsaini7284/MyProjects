import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: true,
      unique: true,
    },
    role: { type: String, enum: ["Admin", "Cashier", "User"], default: "User" },
    password: { type: String, minlength: 3, maxlength: 100, required: true },
    name: { type: String, minlength: 3, maxlength: 50 },
    isVarified: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export default new mongoose.model("user", userSchema);

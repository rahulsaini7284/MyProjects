import mongoose from "mongoose";
const Category = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
export default new mongoose.model("categories", Category);

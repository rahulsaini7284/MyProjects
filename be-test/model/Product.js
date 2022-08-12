import mongoose from "mongoose";
const ProducSchema = new mongoose.Schema(
  {
    name: { type: String, minlength: 3, maxlength: 50, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    material: { type: String, minlength: 3, maxlength: 50 },
    color: { type: String, minlength: 3, maxlength: 50 },
    price: { type: String, minlength: 3, maxlength: 50, required: true },
    inStock: { type: Boolean },
    images: { type: Array },
  },
  { timestamps: true }
);
export default new mongoose.model("products", ProducSchema);

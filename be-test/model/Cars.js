import mongoose from "mongoose";
const CarsDataSchema = new mongoose.Schema(
  {
    company: { type: String, minlength: 3, maxlength: 30, required: true },
    type: { type: String, minlength: 3, maxlength: 30, required: true },
    fuel: { type: String, minlength: 3, maxlength: 30 },
    color: { type: String, minlength: 3, maxlength: 30 },
    images: { type: Array },
    airbags: { type: Boolean },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    price: { type: Number },
  },
  { timestamps: true }
);
export default new mongoose.model("cars", CarsDataSchema);

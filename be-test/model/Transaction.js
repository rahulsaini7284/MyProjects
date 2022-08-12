import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    products: { type: Array },
    subTotal: { type: Number },
    discount: { type: Number },
    grandTotal: { type: Number },
  },
  { timestamps: true }
);
export default new mongoose.model("transaction", schema);

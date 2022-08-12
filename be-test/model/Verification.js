import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: String,
  token: String,
});

export default new mongoose.model("verifications", schema);

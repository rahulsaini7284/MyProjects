import mongoose from "mongoose";
const connectDB = async () => {
  try {
    let result = await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDB;

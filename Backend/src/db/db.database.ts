import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongodbUrl = process.env.mongoUrl ?? "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.log(`db connected`);
    return "successfully";
  } catch (error) {
    return Promise.reject("failed");
  }
};

export default connectDB;

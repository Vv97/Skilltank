import mongoose from "mongoose";

export interface User {
  _id?: mongoose.Types.ObjectId;
  name: String;
  email: String;
  role: string;
  password: String;
  createdAt: Date;
  updateAt: Date;
}

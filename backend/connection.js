import mongoose from "mongoose";

const connectMongoDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Mongo Error:", error);
  }
};

export default connectMongoDb;

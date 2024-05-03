import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

const connect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);

    console.log("MONGODB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connect;

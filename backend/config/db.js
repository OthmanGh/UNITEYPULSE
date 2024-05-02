import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

console.log(process.env.MONGODB_URI);

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI);

  mongoose.connection.once("connected", () => {
    console.log("MONGODB connected");
  });

  mongoose.connection.on("error", error => {
    console.log(`MONGODB ERROR ${error}`);
  });
};

export default connect;

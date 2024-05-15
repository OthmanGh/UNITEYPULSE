import mongoose from "mongoose";

console.log(process.env.MONGODB_URI);

const connect = async () => {
  mongoose.connect(process.env.MONGODB_URI);

  mongoose.connection.once("connected", () => {
    console.log("MONGODB connected");
  });

  mongoose.connection.on("error", error => {
    console.log("MONGODB ERROR:", error);
  });
};

export default connect;

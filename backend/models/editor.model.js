import mongoose from "mongoose";

const textContentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  images: [
    {
      type: String
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const TextContent = mongoose.model("TextContent", textContentSchema);

export default TextContent;

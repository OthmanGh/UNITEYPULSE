import mongoose from "mongoose";

const chatBotMessagesSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["user", "assistant"],
      required: true
    }
  },
  { timestamps: true }
);

const ChatBotMessage = mongoose.model("ChatBotMessage", chatBotMessagesSchema);

export default ChatBotMessage;

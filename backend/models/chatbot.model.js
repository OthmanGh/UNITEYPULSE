import mongoose from "mongoose";

const chatBotMessagesSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true
    },

    message: {
      type: String,
      require: true
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

import OpenAI from "openai";
import ChatBotMessage from "../models/chatbot.model.js";

class OpenAIChatbot {
  constructor(apiKey) {
    this.openAI = new OpenAI({ apiKey: apiKey });
  }

  async sendMessage(userId, message) {
    try {
      await ChatBotMessage.create({
        userId,
        message,
        role: "user"
      });

      const chatHistory = await ChatBotMessage.find({ userId }).exec();

      const messages = [];

      messages.push({
        role: "system",
        content: "You're a company management assistant"
      });

      messages.push(
        ...chatHistory.map(msg => ({
          role: msg.role,
          content: msg.message
        }))
      );

      messages.push({
        role: "user",
        content: message
      });

      const openAI = new OpenAI({ apiKey: this.openAI.apiKey });

      const openAIResponse = await openAI.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo"
      });

      const botResponse = openAIResponse.choices[0].message.content;

      await ChatBotMessage.create({
        userId,
        message: botResponse,
        role: "assistant"
      });

      return botResponse;
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      throw new Error("Could not send message to OpenAI");
    }
  }
}

export default OpenAIChatbot;

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

      const isManagementRelated = await this.isManagementRelated(message);

      if (!isManagementRelated) {
        const offTopicResponse =
          "Sorry, I can only answer questions related to company management.";
        await ChatBotMessage.create({
          userId,
          message: offTopicResponse,
          role: "assistant"
        });
        return offTopicResponse;
      }

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

      const openAIResponse = await this.openAI.chat.completions.create({
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

  async isManagementRelated(message) {
    try {
      const openAIResponse = await this.openAI.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Check if the following question is related to company management: " +
              message
          },
          {
            role: "user",
            content: "Please respond with 'yes' or 'no'."
          }
        ],
        model: "gpt-3.5-turbo"
      });

      const response = openAIResponse.choices[0].message.content
        .trim()
        .toLowerCase();

      return response === "yes";
    } catch (error) {
      console.error("Error checking if message is management related:", error);
      return false;
    }
  }
}

export default OpenAIChatbot;

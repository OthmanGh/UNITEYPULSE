import OpenAIChatbot from "../openai/ai.model";

const chatbot = new OpenAIChatbot(process.env.OPENAI_KEY);

exports.sendMessage = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const response = await chatbot.sendMessage(userId, message);
    res.json({ message: response });
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

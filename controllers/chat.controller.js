import { getOllamaInstance } from "../engine/model.js";
export const chatRequest = async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages) {
      return res.status(400).json({
        error: "messages are required in the request body",
      });
    }

    const userMessage = messages.pop();
    const ollama = getOllamaInstance();
    const result = await ollama.chat({
      model: process.env.MODEL,
      messages: [userMessage],
    });

    return res.status(200).json({
      result: result.message.content,
    });
  } catch (error) {
    console.error("[Ollama]", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

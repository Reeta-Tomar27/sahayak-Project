import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import knowledge from "./knowledge.json" assert { type: "json" };

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { message, language } = req.body;

    const userMessage = message.toLowerCase();

    let context = knowledge.about;

    if (userMessage.includes("travel"))
      context = knowledge.travel;
    else if (userMessage.includes("accessible"))
      context = knowledge.accessible_places;
    else if (userMessage.includes("scheme"))
      context = knowledge.government_schemes;
    else if (userMessage.includes("caretaker"))
      context = knowledge.caretaker;
    else if (userMessage.includes("register"))
      context = knowledge.registration;

    const languageInstruction =
      language === "hi-IN"
        ? "Respond strictly in Hindi language."
        : "Respond strictly in English language.";

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "phi",
        prompt: `
You are Sahayak Assistant.

Rules:
- Only answer using the provided platform information.
- Do NOT invent anything.
- Do NOT add unrelated content.
- Keep answer under 4 lines.
- Be precise and platform-specific.
- ${languageInstruction}

Platform Information:
${context}

User Question:
${message}
`,
        stream: false,
        options: {
          temperature: 0.2
        }
      })
    });

    const data = await response.json();
    res.json({ reply: data.response.trim() });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(PORT, () => {
  console.log(`AI Server running on http://localhost:${PORT}`);
});

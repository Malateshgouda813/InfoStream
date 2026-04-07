import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// 🔍 Debug: check API key loaded
console.log("🔑 GEMINI API KEY:", process.env.GEMINI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// 🤖 Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 📌 Summarize API
app.post("/summarize", async (req, res) => {
  try {
    const { text } = req.body;

    // ❗ Validate input
    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    console.log("🔥 Request received:", text);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(
      `Summarize this news in 3-4 lines:\n${text}`
    );

    // 🔥 IMPORTANT FIX (Gemini response parsing)
    const summary =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No summary generated";

    console.log("✅ SUMMARY:", summary);

    res.json({ summary });
  } catch (error) {
    console.error("❌ FULL ERROR:", error);
    res.status(500).json({ error: "Failed to summarize" });
  }
});

// 🚀 Start server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
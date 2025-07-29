import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const response = await client.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hi, Who is Salman Khan?",
  });
  console.log(response.text);
}

main();

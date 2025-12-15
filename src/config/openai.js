import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("OPENAI KEY IN CONFIG:", process.env.OPENAI_API_KEY ? "FOUND" : "NOT FOUND");

export default openai;
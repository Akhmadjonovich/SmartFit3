import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./src/app.js";

const PORT = process.env.PORT || 5000;

if (!process.env.OPENAI_API_KEY) {
  console.warn("⚠️ OPENAI_API_KEY not found!");
} else {
  console.log("✅ OPENAI KEY: FOUND");
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

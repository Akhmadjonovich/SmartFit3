  // server.js
  import dotenv from "dotenv";
  dotenv.config({ path: "./.env" });

  import app from "./src/app.js";

  // Render avtomatik port beradi, bo‘lmasa 5000 ishlatamiz
  const PORT = process.env.PORT || 5000;

  // OpenAI API kaliti mavjudligini tekshirish
  if (!process.env.OPENAI_API_KEY) {
    console.warn("⚠️ OPENAI_API_KEY not found in .env file!");
  } else {
    console.log("✅ OPENAI KEY: FOUND");
  }

  // Faqat bitta app.listen chaqiriladi
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

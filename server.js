import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./src/app.js";

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


console.log("OPENAI KEY:", process.env.OPENAI_API_KEY ? "FOUND" : "NOT FOUND");

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

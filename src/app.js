// src/app.js
import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.js";

const app = express();

// ------------------------------
// CORS middleware
// FRONTEND DOMENIGA RUXSAT BERISH
app.use(cors({
  origin: "https://smart-fit-frontend-delta.vercel.app/" // o‘zingizning Vercel frontend URL
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRoutes);

export default app;

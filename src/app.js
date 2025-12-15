import express from "express";
import cors from "cors";
import tryOnRoutes from "./routes/api.js";
import 'dotenv/config';

const app = express();

// CORS: hamma domenlarga ruxsat (Vercel frontend ishlashi uchun)
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", tryOnRoutes);

export default app;

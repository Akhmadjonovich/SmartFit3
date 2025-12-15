import express from "express";
import cors from "cors";
import tryOnRoutes from "./routes/tryOn.routes.js";
import 'dotenv/config';
// yoki agar require ishlatayotgan bo‘lsang
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
}));

app.use(express.json());
app.use("/api/try-on", tryOnRoutes);

export default app;

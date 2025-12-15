// src/routes/api.js
import express from "express";
import { tryOnController } from "../controllers/tryOnController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/try-on", upload.fields([
  { name: "person", maxCount: 1 },
  { name: "cloth", maxCount: 1 },
]), tryOnController);

export default router;

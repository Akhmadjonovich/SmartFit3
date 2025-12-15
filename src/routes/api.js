import express from "express";
import { tryOnController } from "../controllers/tryOnController.js";
import upload from "../config/upload.js";

const router = express.Router();

router.post("/try-on", upload.fields([
  { name: "person", maxCount: 1 },
  { name: "cloth", maxCount: 1 },
]), tryOnController);

export default router;

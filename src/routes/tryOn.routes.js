import express from "express";
import upload from "../middlewares/upload.js";
import { tryOnController } from "../controllers/tryOn.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "person", maxCount: 1 },
    { name: "cloth", maxCount: 1 },
  ]),
  tryOnController
);

export default router;

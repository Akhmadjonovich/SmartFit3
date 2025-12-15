import fs from "fs";
import openai from "../config/openai.js";
import 'dotenv/config';
// yoki agar require ishlatayotgan bo‘lsang
// import dotenv from 'dotenv';
// dotenv.config();

export const tryOnController = async (req, res) => {
  try {
    const personImage = req.files.person[0];
    const clothImage = req.files.cloth[0];

    const result = await openai.images.edit({
      model: "gpt-image-1",
      image: fs.createReadStream(personImage.path),
      mask: fs.createReadStream(clothImage.path),
      prompt:
        "Dress the person in the provided clothing realistically. Photorealistic, natural lighting, high quality.",
      size: "1024x1024",
    });

    // temp fayllarni o‘chiramiz
    fs.unlinkSync(personImage.path);
    fs.unlinkSync(clothImage.path);

    res.json({
      success: true,
      image: result.data[0].url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "AI try-on failed",
    });
  }
};

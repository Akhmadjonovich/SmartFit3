import fs from "fs";
import openai from "../config/openai.js";

export const tryOnController = async (req, res) => {
  try {
    if (!req.files?.person || !req.files?.cloth) {
      return res.status(400).json({
        success: false,
        message: "Images not provided",
      });
    }

    const personImage = req.files.person[0];
    const clothImage = req.files.cloth[0];

    const prompt = `
A photorealistic image of the same person from the uploaded photo,
wearing the clothing shown in the second image.
Preserve face, body shape, skin tone.
Natural lighting, realistic fabric folds, high quality fashion photo.
    `;

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
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
    console.error("TRY ON BACKEND ERROR:", error);
    res.status(500).json({
      success: false,
      message: "AI try-on failed",
    });
  }
};

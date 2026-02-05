// Test ImageKit connection and upload
import fs from "fs";
import imagekit from "../configs/imageKit.js";

export const testImageKit = async (req, res) => {
  try {
    // Use a small local image for testing
    const filePath = "./test-imagekit.png"; // Place a small image in your server root
    if (!fs.existsSync(filePath)) {
      return res.status(400).json({ message: "Test image not found. Please add test-imagekit.png in server root." });
    }
    const fileStream = fs.createReadStream(filePath);
    const response = await imagekit.files.upload({
      file: fileStream,
      fileName: "test-imagekit.png",
      folder: "test-uploads"
    });
    return res.status(200).json({ message: "ImageKit upload successful!", url: response.url });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

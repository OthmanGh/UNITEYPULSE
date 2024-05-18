import TextContent from "../models/Editor";
import fs from "fs";
import path from "path";

// Controller function to get text content by ID
export const getTextContentById = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await TextContent.findById(id);
    if (!content) {
      return res.status(404).json({ error: "Text content not found" });
    }
    res.json(content);
  } catch (error) {
    console.error("Error fetching text content:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createTextContent = async (req, res) => {
  try {
    const { content, images } = req.body;
    const userId = req.user._id;

    const imageUrls = [];
    if (images && images.length > 0) {
      for (const image of images) {
        const imageName = `${Date.now()}-${image.originalname}`;
        const imagePath = path.join("public", "images", imageName);
        await fs.promises.writeFile(imagePath, image.buffer);
        imageUrls.push(`/images/${imageName}`);
      }
    }

    const newContent = await TextContent.create({
      content,
      images: imageUrls,
      user: userId
    });

    res.status(201).json(newContent);
  } catch (error) {
    console.error("Error creating text content:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTextContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, images } = req.body;
    const userId = req.user._id;

    const imageUrls = [];
    if (images && images.length > 0) {
      for (const image of images) {
        const imageName = `${Date.now()}-${image.originalname}`;
        const imagePath = path.join("public", "images", imageName);
        await fs.promises.writeFile(imagePath, image.buffer);
        imageUrls.push(`/images/${imageName}`);
      }
    }

    const updatedContent = await TextContent.findByIdAndUpdate(
      id,
      { content, images: imageUrls, user: userId },
      { new: true }
    );
    if (!updatedContent) {
      return res.status(404).json({ error: "Text content not found" });
    }
    res.json(updatedContent);
  } catch (error) {
    console.error("Error updating text content:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTextContent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContent = await TextContent.findByIdAndDelete(id);
    if (!deletedContent) {
      return res.status(404).json({ error: "Text content not found" });
    }
    res.json({ message: "Text content deleted successfully" });
  } catch (error) {
    console.error("Error deleting text content:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

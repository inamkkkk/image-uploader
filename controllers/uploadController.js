const path = require('path');
const fs = require('fs').promises;

const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads';

exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image uploaded' });
  }

  try {
    res.status(201).json({ message: 'Image uploaded successfully', filename: req.file.filename });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload image' });
  }
};

exports.getImage = async (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, '..', UPLOAD_DIR, filename);

  try {
    await fs.access(imagePath);
    res.sendFile(imagePath);
  } catch (error) {
    res.status(404).json({ message: 'Image not found' });
  }
};
const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const upload = require('../middlewares/uploadMiddleware');

router.post('/upload', upload.single('image'), uploadController.uploadImage);
router.get('/images/:filename', uploadController.getImage);

module.exports = router;
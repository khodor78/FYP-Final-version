const multer = require('multer');
const express = require('express');
const uploadprojectRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'frontend/public/projectImage');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

uploadprojectRouter.post('/', upload.single('image'), (req, res) => {
  res.send(`${req.file.path.slice(29)}`);
});
module.exports = uploadprojectRouter;

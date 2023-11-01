const multer = require("multer");
const multers3 = require("multer-s3");
const AWS = require("../../config/aws");
const path = require("path");

const storage = multers3({
  s3: AWS.s3,
  bucket: process.env.AWS_BUCKET_NAME,
  key: function (req, file, cb) {
    const originalname = file.originalname.split(".")[0];
    let filename =
      originalname + "_" + Date.now() + path.extname(file.originalname);
    if (req.filename == undefined) {
      req.filename = [filename];
    } else if (req.filename.length > 0) {
      req.filename.push(filename);
    }
    cb(null, filename);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 40000000,
  },
});

module.exports = upload;

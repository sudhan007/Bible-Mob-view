const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads"),
  filename: function (req, file, cb) {
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

const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const {
  config: { s3secretkey , s3Accesskey ,bucketRegion , bucketname},
} = require("../configs/dev.config");

const DIR = path.join(__dirname, "../uploads");

console.log(DIR , 'DIRDIRDIRDIR')


AWS.config.update({
  accessKeyId: s3Accesskey,
  secretAccessKey: s3secretkey,
  region: bucketRegion,
});

// Create an S3 service object
const s3 = new AWS.S3();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const originalname = file.originalname.split(".")[0];
//     let filename =
//     originalname.replace(/\s/g, '') + "_" + Date.now() + path.extname(file.originalname);
//     cb(null, filename);
//   },
// });

// const Uploadss = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "audio/mpeg" ||
//       file.mimetype == "audio/mp3" 
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .mp3 format allowed!"));
//     }
//   },
// });

const Uploadss = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'clientdemoproject',
    acl: 'public-read', // Set access permissions for the uploaded file, e.g., public-read
    key: function (req, file, cb) {
      console.log(file , 'filefile')
      // Set the file key (path in the bucket)
      cb(null, Date.now() + "_" + file.originalname.split(".")[0]+file.originalname );
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  
});

exports.Multer = {
  Uploadss,
};

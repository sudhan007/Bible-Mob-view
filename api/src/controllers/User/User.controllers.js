const { UserModel: User } = require("../../models");
const { BookModel: Book } = require("../../models");
const { SearchModel: Search } = require("../../models");
const Jwttoken = require("../../middlewares/jwt");
var random_name = require("node-random-name");
const { SubcategoryModel: Subcat } = require("../../models");
const mammoth = require("mammoth");
const puppeteer = require("puppeteer");
const path = require("path");
const bcrypt = require("bcrypt");

const PDFGenerator = require("pdfkit");
const fs = require("fs");

const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const {
  config: { s3Accesskey, s3secretkey, bucketRegion, bucketUrl, bucketname },
} = require("../../configs/dev.config");

const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

AWS.config.update({
  accessKeyId: s3Accesskey,
  secretAccessKey: s3secretkey,
  region: bucketRegion,
});

// Create an S3 service object
const s3 = new AWS.S3();

const LoginUser = async (req, res) => {
  let { name, password } = req.body;

  try {
    const user = await User.findOne({ username: name });

    if (!user)
      return res
        .status(400)
        .json({ message: "Invalid Credentials", status: false });

    const pass = bcrypt.compare(password, user.password);

    if (!pass) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials", status: false });
    }

    let Jwttokens = await Jwttoken(JSON.stringify(user._id));
    return res.status(200).json({
      message: "Success",
      status: true,
      token: Jwttokens,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const Check = async (req, res) => {
  let decode = req.user || true;

  console.log("decode");

  return res.status(200).json({
    message: "Success",
    status: decode,
  });

  if (decode === true) {
    return res.status(200).json({
      message: "Success",
      status: true,
    });
  } else {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const OtpCheck = async (req, res) => {
  const data = JSON.parse(req.user);

  let phones = data.phone;

  let phone = phones.replace(/"/g, "");

  const user = await User.findOne({ mobile: phone })
    .then(async (ress) => {
      let id = JSON.stringify(ress._id);
      let Jwttokens = await Jwttoken(id);
      return res.status(200).json({ message: Jwttokens, ok: true });
    })
    .catch((err) => {
      console.log(err, "err");
      return res
        .status(200)
        .json({ message: "Something went wrong", ok: false });
    });
};

const RegisterUser = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    if (!email || !password || !username)
      // check if email or password or userName is empty or not
      return res.status(400).json({
        message: "Please provide email, password and username",
        ok: false,
      });

    const _user = await User.findOne({ email }); // find user by email
    if (_user)
      return res
        .status(400)
        .json({ message: "User already exists", ok: false });

    const user = new User({
      email,
      password,
      username,
      role: "user",
      active: true,
    });

    console.log(user);

    const savedUser = await user.save();
    return res.status(201).json({
      message: "User created successfully",
      user: savedUser,
      ok: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, ok: false });
  }
};

const getUser = async (req, res) => {
  const { phone } = req.query;

  try {
    if (!phone)
      return res
        .status(400)
        .json({ message: "Please provide phone", ok: false });

    const user = await User.findOne({ mobile: phone });

    if (!user) {
      const newUser = new User({
        mobile: "91" + phone,
      });

      const savedUser = await newUser.save();

      return res.status(200).json({
        message: "User created successfully",
        user: savedUser,
        ok: true,
      });
    }

    return res.status(200).json({
      user,
      ok: true,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message, ok: false });
  }
};

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      users,
      message: "Users fetched successfully",
      ok: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      ok: false,
    });
  }
};

async function convertHTMLToTXT(html) {
  const browser = await puppeteer.launch(
    {
      executablePath: "/usr/bin/chromium-browser",
    },
    { headless: "new" }
  );
  const page = await browser.newPage();

  // Set the HTML content directly in the page
  await page.setContent(html);

  // Extract text content using JavaScript in the context of the page
  const textContent = await page.evaluate(() => document.body.textContent);

  await browser.close();

  return textContent;
}

async function convertHTMLToPDF(html, outputPath) {
  const browser = await puppeteer.launch(
    {
      executablePath: "/usr/bin/chromium-browser",
    },
    { headless: "new" }
  );
  const page = await browser.newPage();

  // Set the HTML content directly in the page
  await page.setContent(html);

  // Generate the PDF
  await page.pdf({ path: outputPath });

  await browser.close();
}

async function serverFilesFromS3(req, res) {
  let { key } = req.query;

  console.log(key);

  if (!key) {
    return res.status(400).json({
      message: "Please provide a valid key!",
      ok: false,
    });
  }

  try {
    const params = {
      Bucket: "clientdemoproject",
      Key: key,
    };

    const data = await s3.getObject(params).promise();

    return res.status(200).send(data.Body);
  } catch (e) {
    return res.status(400).json({
      message: "Something went wrong",
      ok: false,
    });
  }
}

const Books = async (req, res) => {
  let pdfFileName = "";
  let textFileName = "";

  let { text, fileName, mainCatnameid, pro } = req.body;

  let fileNames = fileName.replace(/ /g, "");

  let bookk = await Book.find({ bookTitle: fileName });
  if (bookk.length === 0) {
    let _verses = text ? text.split("\n") : [];

    _verses = _verses.map((item, index) => {
      if (!item) {
        return;
      }

      return {
        verseid: index + 1,
        verse: item,
      };
    });

    let uniqeName = Date.now() + "_" + fileName.split(".")[0];

    try {
      const textContent = text;
      const textOutputPath = path.join(__dirname, "../../../uploads", fileName);

      // Write the text content to a .txt file
      fs.writeFileSync(textOutputPath, textContent, "utf8");

      // Upload the text file to S3
      const textParams = {
        Bucket: "clientdemoproject", // Replace with your bucket name
        Key: uniqeName + ".txt",
        Body: fs.createReadStream(textOutputPath),
        ACL: "public-read", // Set access permissions for the uploaded file, e.g., public-read
      };

      await s3.upload(textParams).promise();

      const _textContent = fs.readFileSync(textOutputPath, "utf-8");

      let generatedPdf = new PDFGenerator();

      let pdffilename = uniqeName + ".pdf";

      let targetPdfPath = path.join(__dirname, "../../../uploads", pdffilename);

      generatedPdf.pipe(fs.createWriteStream(targetPdfPath));

      generatedPdf
        .font(path.join(__dirname, "../../../fonts", "NotosansTamil.ttf"))
        .text(_textContent);

      generatedPdf.end();

      const pdfParams = {
        Bucket: "clientdemoproject", // Replace with your bucket name
        Key: pdffilename,
        Body: fs.createReadStream(targetPdfPath),
        ACL: "public-read", // Set access permissions for the uploaded file, e.g., public-read
      };

      await s3.upload(pdfParams).promise();

      fs.unlinkSync(textOutputPath);

      // Delete the PDF file from your server after uploading
      fs.unlinkSync(targetPdfPath);

      console.log("PDF file uploaded successfully!");
    } catch (err) {
      //  return res.status(500).json({
      //   error : err,
      //   message: "Something went wrong",
      //   ok: false,
      // });
      console.log(err, "upload error");
    }

    let newbook = new Book({
      bookTitle: fileNames,
      bookDescription: text,
      mainCatnameid: mainCatnameid,
      mainCategory: pro,
      txt: uniqeName + ".txt",
      pdf: uniqeName + ".pdf",
      realbook: fileName,
      verses: _verses,
    });
    await newbook
      .save()
      .then(async (resss) => {
        let addSSS = await Subcat.findOne({ _id: mainCatnameid });

        console.log(resss);
        if (addSSS) {
          // Book already exists, increment the count
          addSSS.count = addSSS.count + 1;
          await addSSS
            .save()
            .then(async (s) => {
              console.log("workedd");
              return res.status(200).json({
                message: "All data",
                status: true,
              });
            })
            .catch((err) => {
              console.log("nott   workedd");
              return res.status(400).json({
                message: "Count Added Error",
                status: false,
              });
            });
        } else {
          return res.status(200).json({
            message: "All data",
            status: true,
          });
        }

        // let one  =await Subcat.find({$and: [{ active : true } , {mainCatnameid : mainCatnameid}]}).sort({ align : 1})
        //       .then(async(r)=>{

        //           if(r.length !=0){
        //               return res.status(200).json({
        //                   message: "All data",
        //                   status: true,
        //                   data : r,
        //                   book : false,
        //                   subcat : true
        //               });
        //           }else{
        //               let two  = await Book.find({$and: [{ active : true } , { mainCatnameid : mainCatnameid}]}).sort({ align : 1})
        //               .then((rt)=>{
        //                   if(rt.length != 0){
        //                       return res.status(200).json({
        //                           message: "All data",
        //                           status: true,
        //                           data : rt,
        //                           book : true,
        //                           subcat : false
        //                       });
        //                   }else{
        //                       return res.status(200).json({
        //                           message: "All data",
        //                           status: true,
        //                           book : false,
        //                           subcat : false
        //                       });
        //                   }
        //               })
        //               .catch((er)=>{
        //                   console.log(er);
        //                   return res.status(400).json({ message: er.message, status: false });
        //               })
        //           }

        //       })
        //       .catch((err) => {
        //           console.log(err);
        //           return res.status(400).json({ message: err.message, status: false });
        //       })
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          error: err,
          message: "Something went wrong",
          ok: false,
        });
      });
  } else {
    return res.status(200).json({
      message: "Book Already Inserted",
      ok: false,
    });
  }

  // try {
  //   const users = await User.find();

  //   return res.status(200).json({
  //     users,
  //     message: "Users fetched successfully",
  //     ok: true,
  //   });
  // } catch (error) {
  //   return res.status(500).json({
  //     message: "Something went wrong",
  //     ok: false,
  //   });
  // }
};

// function findWordPositions(data) {
//   const positions = {};

//   // Iterate through each object in the array
//   for (const obj of data) {
//     const id = obj.bookTitle;
//     let textWithoutNewlines = obj.bookDescription.replace(/[@$()\-\;:\\"'\n]/g, '');
//     const words = textWithoutNewlines.split(' ');

//     // Store positions of each word for the current object ID
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];

//       if (!positions[word]) {
//         positions[word] = [[id, [i]]];
//       } else {
//         positions[word].push([id, [i]]);
//       }
//     }
//   }

//   return positions;
// }

const SearchResult = async (req, res) => {
  let { search } = req.body;

  // Book.find({ bookDescription: { $regex: search, $options: 'i' } } )
  // .then((data)=>{
  //   return res.status(200).json({
  //     data : data,
  //     message: "Something went wrong",
  //     status: true,
  //   });
  // })
  // .catch((err)=>{
  //   return res.status(500).json({
  //     error : err,
  //     message: "Something went wrong",
  //     status: false,
  //   });
  // })

  // return

  console.log(search, "davsdv");

  let jj = await Search.find({ word: search })
    .then((data) => {
      console.log(data, "davsdv");
    })
    .catch((err) => {
      console.log(err, "errr");
    });

  return;

  let spli = search.split(" ");
  let filteredArray = spli.filter((element) => element !== "");
  // ignore letter uppercase or smallcase
  // const regexArray = search.map((term) => new RegExp(term, 'i'));

  let fin = await Search.find({ word: { $in: filteredArray } })
    .then(async (re) => {
      let newarr = [];
      if (re.length === 1) {
        for (let i = 0; i < re[0].data.length; i++) {
          newarr.push(re[0].data[i].ids);
        }
        console.log(newarr, "davsdv");

        let fin = await Book.find({ bookTitle: { $in: newarr } })
          .then((reee) => {
            console.log(reee, "avsvz");
          })
          .catch((err) => {
            console.log(err, "errr");
          });
      } else {
        let sortedDocuments = re.sort((a, b) => {
          return filteredArray.indexOf(a.word) - filteredArray.indexOf(b.word);
        });

        console.log(sortedDocuments, "spli");

        // for(let j = 0 ; j < sortedDocuments.length ; j++){
        //   for( let k = 0 ; k < sortedDocuments[j].data.length ; k++ ){
        //     console.log( sortedDocuments[j].data , 'spli' ,filteredArray)
        //   }

        // }
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(search, "searchsearch");
};

exports.UserController = {
  LoginUser,
  OtpCheck,
  RegisterUser,
  getUser,
  GetAllUsers,
  Books,
  Check,
  SearchResult,
  serverFilesFromS3,
};

// const SearchModel = require('./SearchModel'); // Assuming the model is defined in a separate file

// // Assuming you have the following new value to push
// const newValue = {
//   id: '6',
//   place: [1, 2, 3]
// };

// // Find the document you want to update
// SearchModel.findOne({ /* Your query to find the document */ })
//   .then((doc) => {
//     if (doc) {
//       // Push the new value into the data array
//       doc.data.push(newValue);
//       // Save the updated document
//       return doc.save();
//     } else {
//       // Document not found
//       throw new Error('Document not found');
//     }
//   })
//   .then((updatedDoc) => {
//     console.log('Updated document:', updatedDoc);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

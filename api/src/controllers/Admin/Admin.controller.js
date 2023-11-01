const { json, response } = require("express");
const { PostModel: Post } = require("../../models");
const { UserModel: User } = require("../../models");
const { SubcategoryModel: Subcat } = require("../../models");
const { BookModel: Book } = require("../../models");
const { CategoryModel: Category } = require("../../models");
const { NewBook: NBook } = require("../../models");
const { NewBookone: NBookone } = require("../../models");
const { NewBookonetwo: NBookonetwo } = require("../../models");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const MySchema = new mongoose.Schema({
  count: Number,
  data: [
    {
      ids: String,
      place: [Number],
    },
  ],
  word: String,
  date: { type: Date, default: Date.now() },
});

const Table = mongoose.model("Sear", MySchema);

const TestModel = new mongoose.Schema(
  {
    book: { type: String, required: true },
    id: { type: String },
    verse: [
      {
        index: { type: Number },
        content: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Tables = mongoose.model("TestModel", TestModel);

const AddPostAdmin = async (req, res) => {
  let data = await Post.find({ active: true })
    .then((data) => {
      return res.status(200).json({
        message: "Users All Post",
        user: data,
        status: true,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ message: err.message, status: false });
    });
};

const AddPostinAdmin = async (req, res) => {
  let data = req.body;
  let file = req.files;

  let allImagename = [];

  file.forEach((image, index) => {
    allImagename.push(image.filename);
  });

  fs.readFile("story.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

const AdminDeactivepost = async (req, res) => {
  let { id } = req.body;

  let responce = await Post.updateOne({ _id: id }, { $set: { active: false } })
    .then((data) => {
      return res.status(200).json({
        message: "Updated",
        status: true,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ message: err.message, status: false });
    });
};

const AdminUser = async (req, res) => {
  let data = await User.find({ active: true })
    .then((data) => {
      return res.status(200).json({
        message: "All Users",
        user: data,
        status: true,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ message: err.message, status: false });
    });
};

const UserDeactive = async (req, res) => {
  let { id } = req.body;

  let responce = await User.updateOne({ _id: id }, { $set: { active: false } })
    .then((data) => {
      return res.status(200).json({
        message: "Updated",
        status: true,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ message: err.message, status: false });
    });
};

const PostPopular = async (req, res) => {
  let { id, type } = req.body;

  if (type === true) {
    let responce = await Post.updateOne(
      { _id: id },
      { $set: { popular: false } }
    )
      .then((data) => {
        return res.status(200).json({
          message: "Updated",
          status: true,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  } else {
    let responce = await Post.updateOne(
      { _id: id },
      { $set: { popular: true } }
    )
      .then((data) => {
        return res.status(200).json({
          message: "Updated",
          status: true,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let AddCategory = async (req, res) => {
  let decode = req.user;

  let { catname, align } = req.body;

  if (catname === undefined || catname === "") {
    return res.status(200).json({
      message: "Please provide catname",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(200).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let ones = await Category.find({ catname: catname });
    if (ones.length != 0) {
      return res.status(400).json({
        message: "Already Category Name Exist",
        status: false,
      });
    }

    const withoutSpaces = catname.replace(/\s/g, "");
    const DynamicTable = mongoose.model(withoutSpaces, TestModel);

    // Save the dynamic table to the database
    await DynamicTable.init();

    let newcat = new Category({
      align: align,
      catname: catname,
    });
    await newcat
      .save()
      .then(async (s) => {
        let one = await Category.find({ active: true })
          .sort({ align: 1 })
          .then((r) => {
            return res.status(200).json({
              message: "Updated",
              status: true,
              data: r,
            });
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(400)
              .json({ message: err.message, status: false });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let EditCategory = async (req, res) => {
  let decode = req.user;

  let { catname, align, id } = req.body;

  console.log(id, "zvsvsd");

  if (
    catname === "" ||
    align === "" ||
    catname === undefined ||
    align === undefined
  ) {
    return res.status(400).json({
      message: "Please provide catname and align",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let oness = await Category.findOneAndUpdate(
      { _id: id },
      { $set: { catname: catname, align: align } },
      { returnOriginal: false }
    )
      .then(async (s) => {
        let one = await Category.find({ active: true })
          .sort({ align: 1 })
          .then((r) => {
            return res.status(200).json({
              message: "Updated",
              status: true,
              data: r,
            });
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(400)
              .json({ message: err.message, status: false });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let Editsubcategory = async (req, res) => {
  let decode = req.user;

  let { catname, align, id, maincatid } = req.body;

  console.log(id, "zvsvsd");

  if (
    catname === "" ||
    align === "" ||
    catname === undefined ||
    align === undefined
  ) {
    return res.status(400).json({
      message: "Please provide catname and align",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let oness = await Subcat.findOneAndUpdate(
      { _id: id },
      { $set: { subcatname: catname, align: align } },
      { returnOriginal: false }
    )
      .then(async (s) => {
        let one = await Subcat.find({
          $and: [{ active: true }, { mainCatnameid: maincatid }],
        })
          .sort({ align: 1 })
          .then(async (r) => {
            console.log(r, "rrrrr");
            if (r.length != 0) {
              return res.status(200).json({
                message: "All data",
                status: true,
                data: r,
                book: false,
                subcat: true,
              });
            } else {
              let two = await Book.find(
                { $and: [{ active: true }, { mainCatnameid: maincatid }] },
                { bookDescription: 0 }
              )
                .sort({ align: 1 })
                .then((rt) => {
                  if (rt.length != 0) {
                    return res.status(200).json({
                      message: "All data",
                      status: true,
                      data: rt,
                      book: true,
                      subcat: false,
                    });
                  } else {
                    return res.status(200).json({
                      message: "All data",
                      status: true,
                      book: false,
                      subcat: false,
                    });
                  }
                })
                .catch((er) => {
                  console.log(er);
                  return res
                    .status(400)
                    .json({ message: "er.message", status: false });
                });
            }
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(400)
              .json({ message: "err.message", status: false });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let Deletesubcategory = async (req, res) => {
  let decode = req.user;

  let { id, maincatid } = req.body;

  console.log(id, "zvsvsd");

  if (id === "" || id === undefined) {
    return res.status(400).json({
      message: "Please provide catname and align",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let oness = await Subcat.findOneAndUpdate(
      { _id: id },
      { $set: { active: false } },
      { returnOriginal: false }
    )
      .then(async (s) => {
        let one = await Subcat.find({
          $and: [{ active: true }, { mainCatnameid: maincatid }],
        })
          .sort({ align: 1 })
          .then(async (r) => {
            console.log(r, "rrrrr");
            if (r.length != 0) {
              return res.status(200).json({
                message: "All data",
                status: true,
                data: r,
                book: false,
                subcat: true,
              });
            } else {
              let two = await Book.find(
                { $and: [{ active: true }, { mainCatnameid: maincatid }] },
                { bookDescription: 0 }
              )
                .sort({ align: 1 })
                .then((rt) => {
                  if (rt.length != 0) {
                    return res.status(200).json({
                      message: "All data",
                      status: true,
                      data: rt,
                      book: true,
                      subcat: false,
                    });
                  } else {
                    return res.status(200).json({
                      message: "All data",
                      status: true,
                      book: false,
                      subcat: false,
                    });
                  }
                })
                .catch((er) => {
                  console.log(er);
                  return res
                    .status(400)
                    .json({ message: "er.message", status: false });
                });
            }
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(400)
              .json({ message: "err.message", status: false });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let Deletecategorydetail = async (req, res) => {
  let decode = req.user;

  let { id } = req.body;

  console.log(id, "zvsvsd");

  if (id === "" || id === undefined) {
    return res.status(400).json({
      message: "Please provide catname and align",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let oness = await Category.findOneAndUpdate(
      { _id: id },
      { $set: { active: false } },
      { returnOriginal: false }
    )
      .then(async (s) => {
        let one = await Category.find({ active: true })
          .sort({ align: 1 })
          .then((r) => {
            return res.status(200).json({
              message: "Updated",
              status: true,
              data: r,
            });
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(400)
              .json({ message: err.message, status: false });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let CategoryDetail = async (req, res) => {
  let decode = req.user;

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let ones = await Category.find({ active: true })
      .sort({ align: 1 })
      .then((r) => {
        return res.status(200).json({
          message: "Success",
          status: true,
          data: r,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let AddsubCategory = async (req, res) => {
  let decode = req.user;

  let { maincatid, subcatname, align, pro } = req.body;

  if (
    maincatid === "" ||
    subcatname === "" ||
    maincatid === undefined ||
    subcatname === undefined
  ) {
    return res.status(200).json({
      message: "Please provide All the field",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(200).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let ones = await Subcat.find({ subcatname: subcatname });
    if (ones.length != 0) {
      return res.status(200).json({
        message: "Already Category Name Exist",
        status: false,
      });
    }

    let newcat = new Subcat({
      subcatname: subcatname,
      mainCatnameid: maincatid,
      align: align,
      mainCategory: pro,
    });
    await newcat
      .save()
      .then(async (s) => {
        let addSSS = await Subcat.findOne({ _id: maincatid });
        if (addSSS) {
          // Book already exists, increment the count
          addSSS.count = addSSS.count + 1;
          await addSSS
            .save()
            .then(async (s) => {
              console.log("added");
            })
            .catch((err) => {
              return res.status(400).json({
                message: "Count Added Error",
                status: false,
              });
            });
        }

        let one = await Subcat.find({
          $and: [{ active: true }, { mainCatnameid: maincatid }],
        })
          .sort({ align: 1 })
          .then(async (r) => {
            console.log(r, "rrrrr");
            if (r.length != 0) {
              return res.status(200).json({
                message: "All data",
                status: true,
                data: r,
                book: false,
                subcat: true,
              });
            } else {
              let two = await Book.find(
                { $and: [{ active: true }, { mainCatnameid: maincatid }] },
                { bookDescription: 0 }
              )
                .sort({ align: 1 })
                .then((rt) => {
                  if (rt.length != 0) {
                    return res.status(200).json({
                      message: "All data",
                      status: true,
                      data: rt,
                      book: true,
                      subcat: false,
                    });
                  } else {
                    return res.status(200).json({
                      message: "All data",
                      status: true,
                      book: false,
                      subcat: false,
                    });
                  }
                })
                .catch((er) => {
                  console.log(er);
                  return res
                    .status(400)
                    .json({ message: "er.message", status: false });
                });
            }
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(400)
              .json({ message: "err.message", status: false });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let AddsubCategorydetail = async (req, res) => {
  let decode = req.user;
  let { mainid, page } = req.body;
  let subcat = false;
  let book = false;

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let one = await Subcat.find({
      $and: [{ active: true }, { mainCatnameid: mainid }],
    })
      .sort({ align: 1 })
      .allowDiskUse(true)
      .then(async (r) => {
        if (r.length != 0) {
          return res.status(200).json({
            message: "All data",
            status: true,
            data: r,
            book: false,
            subcat: true,
          });
        } else {
          let two = await Book.find(
            {
              $and: [{ active: true }, { mainCatnameid: mainid }],
            },
            { bookDescription: 0 }
          )
            .sort({ align: 1 })
            .allowDiskUse(true)
            .then(async (rt) => {
              if (rt.length != 0) {
                let oon = await Book.aggregate(
                  [
                    { $match: { mainCatnameid: mainid, active: true } },
                    { $group: { _id: null, count: { $sum: 1 } } },
                  ],
                  { allowDiskUse: true }
                );

                rt.splice(0, (page - 1) * 10);

                const remainingDatas = rt.slice(0, 10);

                return res.status(200).json({
                  message: "All data",
                  status: true,
                  data: remainingDatas,
                  book: true,
                  subcat: false,
                  count: rt.length,
                });
              } else {
                return res.status(200).json({
                  message: "All data",
                  status: true,
                  book: false,
                  subcat: false,
                });
              }
            })
            .catch((er) => {
              return res
                .status(400)
                .json({ message: er.message, status: false });
            });
        }
      })
      .catch((err) => {
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let AddAudio = async (req, res) => {
  let file = req.file.location;

  let { id } = req.body;

  console.log(file, "filefilefile");

  let boo = await Book.findOneAndUpdate(
    { _id: id },
    { $set: { audio: file } },
    { returnOriginal: false }
  )
    .then(async (s) => {
      return res.status(200).json({
        message: "All data",
        status: true,
        data: s,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ message: err.message, status: false });
    });

  console.log(file, "file", id);
};

let DeleteAudio = async (req, res) => {
  let decode = req.user;

  let { id } = req.body;

  console.log(id, "zvsvsd");

  if (id === "" || id === undefined) {
    return res.status(400).json({
      message: "Please provide id",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let oness = await Book.updateOne({ _id: id }, { $set: { audio: "" } })
      .then(async (s) => {
        return res.status(200).json({
          message: "All data",
          status: true,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message, status: false });
      });
  }
};

let Deletebooks = async (req, res) => {
  let decode = req.user;

  let { id, mainid, catid } = req.body;

  console.log(id, "zvsvsd");

  if (id === "" || id === undefined) {
    return res.status(400).json({
      message: "Please provide id",
      status: false,
    });
  }

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let catt = await Category.findOne({ _id: catid }).then(async (resse) => {
      const englishWordRegex = /^[A-Za-z\s]+$/;
      let tt = englishWordRegex.test(resse?.catname);

      if (!tt) {
        let ggg = await resse.catname.split(" ").join("");
        let dataaaa = ggg;

        try {
          // Check if the table exists
          const collectionExists = await mongoose.connection.db
            .listCollections({ name: dataaaa })
            .hasNext();

          const Tables = mongoose.model(dataaaa, TestModel);
          console.log(Tables, "worked");
          let dataaaas = await Tables.deleteOne({ id: id })
            .then(async (resf) => {
              let oness = await Book.deleteOne({ _id: id })
                .then(async (vdfdv) => {
                  let two = await Book.find(
                    { $and: [{ active: true }, { mainCatnameid: mainid }] },
                    { bookDescription: 0 }
                  )
                    .sort({ align: 1 })
                    .then((rt) => {
                      if (rt.length != 0) {
                        return res.status(200).json({
                          message: "All data",
                          status: true,
                          data: rt,
                          book: true,
                          subcat: false,
                        });
                      } else {
                        return res.status(200).json({
                          message: "All data",
                          status: true,
                          book: false,
                          subcat: false,
                        });
                      }
                    })
                    .catch((er) => {
                      console.log(er);
                      return res
                        .status(400)
                        .json({ message: "er.message", status: false });
                    });
                })
                .catch((err) => {
                  console.log(err);
                  return res
                    .status(400)
                    .json({ message: err.message, status: false });
                });
            })
            .catch((err) => {
              console.log(err);
              return res
                .status(400)
                .json({ message: err.message, status: false });
            });
        } catch (error) {
          return res.status(500).json({
            status: false,
            message: error,
          });
        }

        console.log(dataaaa, "dataaaa");
      } else {
        let ggg = await resse.catname.split(" ").join("").toLowerCase();
        let dataaaa = ggg;

        try {
          // Check if the table exists
          const collectionExists = await mongoose.connection.db
            .listCollections({ name: dataaaa + "s" })
            .hasNext();

          const Tables = mongoose.model(dataaaa, TestModel);
          console.log(Tables, "worked");
          let dataaaas = await Tables.deleteOne({ id: id })
            .then(async (resssfbvd) => {
              let oness = await Book.deleteOne({ _id: id })
                .then(async (vdfdv) => {
                  let two = await Book.find(
                    { $and: [{ active: true }, { mainCatnameid: mainid }] },
                    { bookDescription: 0 }
                  )
                    .sort({ align: 1 })
                    .then((rt) => {
                      if (rt.length != 0) {
                        return res.status(200).json({
                          message: "All data",
                          status: true,
                          data: rt,
                          book: true,
                          subcat: false,
                        });
                      } else {
                        return res.status(200).json({
                          message: "All data",
                          status: true,
                          book: false,
                          subcat: false,
                        });
                      }
                    })
                    .catch((er) => {
                      console.log(er);
                      return res
                        .status(400)
                        .json({ message: "er.message", status: false });
                    });
                })
                .catch((err) => {
                  console.log(err);
                  return res
                    .status(400)
                    .json({ message: err.message, status: false });
                });
            })
            .catch((err) => {
              console.log(err);
              return res
                .status(400)
                .json({ message: err.message, status: false });
            });
        } catch (error) {
          return res.status(500).json({
            status: false,
            message: error,
          });
        }

        console.log(dataaaa, "dataaaa");
      }
    });
  }
};

// const ServerImage = async (req, res) => {
//     const targetFolder = path.join(__dirname, "../../uploads");
//     const key = req.params.key;

//     if (!key) {
//       return res.status(400).json({
//         message: "Please provide a valid key!",
//         ok: false,
//       });
//     }

//     // check folder for that file and send it
//     const file = path.join(targetFolder, key);
//     return res.sendFile(file);
// };

const Viewbookss = async (req, res) => {
  let decode = req.user;
  let { id } = req.body;

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let three = await Book.findOne({ $and: [{ active: true }, { _id: id }] })
      .then((r) => {
        return res.status(200).json({
          message: "All data",
          status: true,
          data: r,
        });
      })
      .catch((err) => {
        return res.status(400).json({ message: "er.message", status: false });
      });
  }
};

const UpdateBook = async (req, res) => {
  let decode = req.user;
  let { id, text, catid } = req.body;

  let catt = await Category.findOne({ _id: catid }).then(async (resse) => {
    const englishWordRegex = /^[A-Za-z\s]+$/;
    let tt = englishWordRegex.test(resse.catname);

    if (!tt) {
      let ggg = await resse.catname.split(" ").join("");
      let dataaaa = ggg;

      try {
        // Check if the table exists
        const collectionExists = await mongoose.connection.db
          .listCollections({ name: dataaaa })
          .hasNext();

        const outputString = text.replace(/<br>/g, "\n");
        const Tables = mongoose.model(dataaaa, TestModel);
        console.log(Tables, "worked");
        let dataaaas = await Tables.deleteOne({ id: id })
          .then(async (resf) => {
            let three = await Book.findOneAndUpdate(
              { _id: id },
              { $set: { bookDescription: outputString } },
              { returnOriginal: false }
            )
              .then(async (r) => {
                // console.log(r,'svsd d xdfx dfvv dfx dzx df')
                // return
                let dataaaas = await dvsfvsvs(r, Tables);
                return res.status(200).json({
                  message: "data",
                  status: true,
                  data: r,
                });

                console.log(r, "svsd d xdfx dfvv dfx dzx df");
              })
              .catch((err) => {
                return res
                  .status(400)
                  .json({ message: "er.message", status: false });
              });
          })
          .catch((err) => {
            console.log(err, "good");
            console.log(err);
            return res
              .status(400)
              .json({ message: err.message, status: false });
          });
      } catch (error) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      console.log(dataaaa, "dataaaa");
    } else {
      let ggg = await resse.catname.split(" ").join("").toLowerCase();
      let dataaaa = ggg;

      try {
        // Check if the table exists
        const collectionExists = await mongoose.connection.db
          .listCollections({ name: dataaaa + "s" })
          .hasNext();

        const outputString = text.replace(/<br>/g, "\n");
        const Tables = mongoose.model(dataaaa, TestModel);
        console.log(Tables, "worked");
        let dataaaas = await Tables.deleteOne({ id: id })
          .then(async (resf) => {
            let three = await Book.findOneAndUpdate(
              { _id: id },
              { $set: { bookDescription: outputString } },
              { returnOriginal: false }
            )
              .then(async (r) => {
                let dataaaas = await dvsfvsvs(r, Tables);

                return res.status(200).json({
                  message: "data",
                  status: true,
                  data: r,
                });
              })
              .catch((err) => {
                return res
                  .status(400)
                  .json({ message: "er.message", status: false });
              });
          })
          .catch((err) => {
            console.log(err, "good");
            console.log(err);
            return res
              .status(400)
              .json({ message: err.message, status: false });
          });
      } catch (error) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      console.log(dataaaa, "dataaaa");
    }
  });

  // if(decode === false){
  //     return res.status(400).json({
  //         message: "User Verify Error",
  //         status: false,
  //     });
  // }else{
  //     let three = await Book.findOneAndUpdate({ _id : id }, { $set: { bookDescription: text } }, { returnOriginal: false })
  //     .then((r)=>{
  //         return res.status(200).json({
  //             message: "data",
  //             status: true,
  //             data : r
  //         });
  //     })
  //     .catch((err)=>{
  //         return res.status(400).json({ message: 'er.message', status: false });
  //     })
  // }
};

const Updatebookalign = async (req, res) => {
  let decode = req.user;
  let { id, align } = req.body;

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let three = await Book.findOneAndUpdate(
      { _id: id },
      { $set: { align: align } },
      { returnOriginal: false }
    )
      .then((r) => {
        return res.status(200).json({
          message: "data",
          status: true,
          data: r,
        });
      })
      .catch((err) => {
        return res.status(400).json({ message: "er.message", status: false });
      });
  }
};

const Searchone = async (req, res) => {
  let decode = req.user;
  // let { id , align }  = req.body

  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    let three = await Book.find(
      { $and: [{ active: true }, { searchAdd: 0 }] },
      { bookDescription: 0 }
    )
      .then((r) => {
        return res.status(200).json({
          message: "data",
          status: true,
          data: r,
        });
      })
      .catch((err) => {
        return res.status(400).json({ message: "er.message", status: false });
      });
  }
};

const Addsearch = async (req, res) => {
  let { text, pro, id } = req.body;

  let catt = await Category.findOne({ _id: pro }).then(async (resse) => {
    let ggg = await resse.catname.split(" ").join("").toLowerCase();
    let dataaaa = ggg;

    console.log(dataaaa, "dataaaadataaaadataaaadataaaa");

    try {
      // Check if the table exists
      const collectionExists = await mongoose.connection.db
        .listCollections({ name: dataaaa + "s" })
        .hasNext();

      if (collectionExists) {
        console.log("one");
        let bookk = await Book.find({
          $and: [{ searchAdd: 0 }, { active: true }, { _id: id }],
        }).then(async (ress) => {
          const Tables = mongoose.model(dataaaa, TestModel);
          let dataaaas = await findWordPositions(ress, Tables);

          console.log(dataaaas, "worked");

          let ll = Book.find(
            { $and: [{ searchAdd: 0 }, { active: true }] },
            { bookDescription: 0 }
          ).then((akk) => {
            return res.status(200).json({
              message: "data",
              status: true,
              data: akk,
            });
          });

          // let newdata = new Search({

          // })

          // for (let item = 0; item < ress.length; item++) {
          //   let datass = ress[item];

          //   let spl = datass.bookDescription.split(' ');

          //   for (let key = 0; key < spl.length; key++) {
          //     let textWithoutNewlines = spl[key].replace(/[@$()\-\;:\\"'\n]/g, '');
          //     await search(textWithoutNewlines, key , datass?.bookTitle);
          //   }
          // }
        });
      } else {
        const collectionExists = await mongoose.connection.db
          .listCollections({ name: dataaaa })
          .hasNext();

        if (collectionExists) {
          console.log("one");
          let bookk = await Book.find({
            $and: [{ searchAdd: 0 }, { active: true }, { _id: id }],
          }).then(async (ress) => {
            const Tables = mongoose.model(dataaaa, TestModel);
            let dataaaas = await findWordPositions(ress, Tables);

            console.log(dataaaas, "worked");

            let ll = Book.find(
              { $and: [{ searchAdd: 0 }, { active: true }] },
              { bookDescription: 0 }
            ).then((akk) => {
              return res.status(200).json({
                message: "data",
                status: true,
                data: akk,
              });
            });

            // let newdata = new Search({

            // })

            // for (let item = 0; item < ress.length; item++) {
            //   let datass = ress[item];

            //   let spl = datass.bookDescription.split(' ');

            //   for (let key = 0; key < spl.length; key++) {
            //     let textWithoutNewlines = spl[key].replace(/[@$()\-\;:\\"'\n]/g, '');
            //     await search(textWithoutNewlines, key , datass?.bookTitle);
            //   }
            // }
          });
        } else {
          return res.status(400).json({
            status: false,
            message: "No Collection found",
          });
        }
      }
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error,
      });
    }

    console.log(dataaaa, "dataaaa");
  });
};

const AllAddsearch = async (req, res) => {
  // let { text , pro , id } = req.body;

  let neeee = "";

  let catt = await Book.find({ searchAdd: 0 }, { bookDescription: 0 })
    .then(async (ressehaha) => {
      for (let k = 0; k < ressehaha.length; k++) {
        let catt = await Category.findOne({
          _id: ressehaha[k].mainCategory,
        }).then(async (resse) => {
          let ggg = await resse.catname.split(" ").join("").toLowerCase();
          let dataaaa = ggg;

          console.log(dataaaa, "dataaaadataaaadataaaadataaaa");

          try {
            // Check if the table exists
            const collectionExists = await mongoose.connection.db
              .listCollections({ name: dataaaa + "s" })
              .hasNext();

            if (collectionExists) {
              console.log("one");
              let bookk = await Book.find({
                $and: [
                  { searchAdd: 0 },
                  { active: true },
                  { _id: ressehaha[k]._id },
                ],
              }).then(async (ress) => {
                const Tables = mongoose.model(dataaaa, TestModel);
                let dataaaas = await findWordPositionss(ress, Tables);

                console.log(dataaaas, "worked");

                //   let ll = Book.find({$and: [{ searchAdd : 0 } , { active : true } ]}, { bookDescription : 0 })
                //   .then((akk)=>{
                //       return res.status(200).json({
                //           message: "data",
                //           status: true,
                //           data : akk
                //       })
                //   })

                // let newdata = new Search({

                // })

                // for (let item = 0; item < ress.length; item++) {
                //   let datass = ress[item];

                //   let spl = datass.bookDescription.split(' ');

                //   for (let key = 0; key < spl.length; key++) {
                //     let textWithoutNewlines = spl[key].replace(/[@$()\-\;:\\"'\n]/g, '');
                //     await search(textWithoutNewlines, key , datass?.bookTitle);
                //   }
                // }
              });
            } else {
              const collectionExists = await mongoose.connection.db
                .listCollections({ name: dataaaa })
                .hasNext();

              if (collectionExists) {
                console.log("one");
                let bookk = await Book.find({
                  $and: [
                    { searchAdd: 0 },
                    { active: true },
                    { _id: ressehaha[k]._id },
                  ],
                }).then(async (ress) => {
                  const Tables = mongoose.model(dataaaa, TestModel);
                  let dataaaas = await findWordPositionss(ress, Tables);

                  console.log(dataaaas, "worked");

                  //   let ll = Book.find({$and: [{ searchAdd : 0 } , { active : true } ]}, { bookDescription : 0 })
                  //   .then((akk)=>{
                  //       return res.status(200).json({
                  //           message: "data",
                  //           status: true,
                  //           data : akk
                  //       })
                  //   })

                  // let newdata = new Search({

                  // })

                  // for (let item = 0; item < ress.length; item++) {
                  //   let datass = ress[item];

                  //   let spl = datass.bookDescription.split(' ');

                  //   for (let key = 0; key < spl.length; key++) {
                  //     let textWithoutNewlines = spl[key].replace(/[@$()\-\;:\\"'\n]/g, '');
                  //     await search(textWithoutNewlines, key , datass?.bookTitle);
                  //   }
                  // }
                });
              } else {
                let ll = Book.findOneAndUpdate(
                  { _id: obj._id },
                  { $set: { searchAdd: 1 } },
                  { returnOriginal: false }
                );
                //   return res.status(400).json({
                //       status: false,
                //       message : 'No Collection'
                //   })
              }
            }
          } catch (error) {
            return res.status(400).json({
              status: false,
              message: error,
            });
          }

          console.log(dataaaa, "dataaaa");

          // const englishWordRegex = /^[A-Za-z\s]+$/;
          // neeee = resse[k]._id
          // let  tt =  englishWordRegex.test(resse.catname);

          //     if ( !tt){

          //     let ggg  = await resse.catname.split(" ").join("")
          //   let dataaaa =ggg

          //   try {
          //     const collectionExists = await mongoose.connection.db
          //       .listCollections({ name: dataaaa  })
          //       .hasNext();

          //         console.log('one vbnvn ')
          //         let bookk = await Book.find({$and: [{ searchAdd : 0 } , { active : true } , { _id : ressehaha[k]._id }]})
          //         .then(async (ress) => {

          //             const Tables = mongoose.model( dataaaa , TestModel);
          //             console.log(Tables ,  'worked')
          //             let dataaaas =await findWordPositionss(ress , Tables)

          //             console.log(dataaaas ,  'worked')

          //             let ll = Book.find({$and: [{ searchAdd : 0 } , { active : true } ]}, { bookDescription : 0 })
          //             .then((akk)=>{
          //                 // return res.status(200).json({
          //                 //     message: "data",
          //                 //     status: true,
          //                 //     data : akk
          //                 // })
          //             })

          //             // let newdata = new Search({

          //             // })

          //             // for (let item = 0; item < ress.length; item++) {
          //             //   let datass = ress[item];

          //             //   let spl = datass.bookDescription.split(' ');

          //             //   for (let key = 0; key < spl.length; key++) {
          //             //     let textWithoutNewlines = spl[key].replace(/[@$()\-\;:\\"'\n]/g, '');
          //             //     await search(textWithoutNewlines, key , datass?.bookTitle);
          //             //   }
          //             // }
          //         });
          //   } catch (error) {
          //     return res.status(500).json({
          //         status: false,
          //         message : error
          //     })
          //   }

          //   console.log(dataaaa , 'dataaaa')

          // }else{
          //     let ggg  = await resse.catname.split(" ").join("")
          //   let dataaaa =ggg

          //   console.log(dataaaa , 'dataaaadataaaadataaaadataaaa')

          //   try {
          //     // Check if the table exists
          //     const collectionExists = await mongoose.connection.db
          //       .listCollections({ name: dataaaa })
          //       .hasNext();

          //         console.log('one')
          //         let bookk = await Book.find({$and: [{ searchAdd : 0 } , { active : true } , { _id : neeee }]})
          //         .then(async (ress) => {
          //             console.log(ress ,  'worke  dbdfb  dsvgsbvd')
          //             const Tables = mongoose.model( dataaaa , TestModel);
          //             console.log(Tables ,  'workedsvgsbvd')
          //             let dataaaas =await findWordPositionss(ress , Tables)

          //             console.log(dataaaas ,  'worked')

          //             // let newdata = new Search({

          //             // })

          //             // for (let item = 0; item < ress.length; item++) {
          //             //   let datass = ress[item];

          //             //   let spl = datass.bookDescription.split(' ');

          //             //   for (let key = 0; key < spl.length; key++) {
          //             //     let textWithoutNewlines = spl[key].replace(/[@$()\-\;:\\"'\n]/g, '');
          //             //     await search(textWithoutNewlines, key , datass?.bookTitle);
          //             //   }
          //             // }
          //         })
          //         .catch((err)=>{
          //             console.log(err , 'err')
          //         })
          //   } catch (error) {
          //     return res.status(500).json({
          //         status: false,
          //         message : error
          //     })
          //   }

          //   console.log(dataaaa , 'dataaaa')
          // }
        });

        console.log(ressehaha.length, "worked", k);
      }

      return res.status(200).json({
        message: "data",
        status: true,
      });
    })
    .catch((err) => {
      console.log(err, "errrrrrrrrrrrr");
      return res.status(500).json({
        status: false,
        message: err,
      });
    });
};

let dvsfvsvs = async (data, existingTable) => {
  console.log(existingTable, "ffff");
  const positions = {};
  // console.log(data , 'data[word]')
  // Iterate through each object in the array
  try {
    const id = data.bookTitle;
    let arr = data.bookDescription.split("\n");

    arr = arr.filter((e) => e !== "");
    arr = arr.map((e, i) => {
      return { index: i, content: e };
    });

    let _model = new existingTable({
      id: data._id,
      book: id,
      verse: arr,
    });

    await _model
      .save()
      .then((r) => {
        let ll = Book.findOneAndUpdate(
          { _id: data._id },
          { $set: { searchAdd: 1 } },
          { returnOriginal: false }
        ).then((rr) => {});

        console.log(r);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err, "errr");
  }

  return positions;
};

let findWordPositions = async (data, existingTable) => {
  console.log(existingTable, "ffff");
  const positions = {};
  // console.log(data , 'data[word]')
  // Iterate through each object in the array
  try {
    for (const obj of data) {
      const id = obj.bookTitle;
      let arr = obj.bookDescription.split("\n");

      arr = arr.filter((e) => e !== "");
      arr = arr.map((e, i) => {
        return { index: i, content: e };
      });

      let _model = new existingTable({
        id: obj._id,
        book: id,
        verse: arr,
      });

      await _model
        .save()
        .then((r) => {
          let ll = Book.findOneAndUpdate(
            { _id: obj._id },
            { $set: { searchAdd: 1 } },
            { returnOriginal: false }
          ).then((rr) => {
            return;
          });

          console.log(r);
        })
        .catch((err) => {
          console.log(err);
        });

      //   let textWithoutNewlines = obj.bookDescription.replace(/[@$()\-\;:\\"'\n]/g, '');
      //   const words = textWithoutNewlines.split(' ');

      //   for (let i = 0; i < words.length; i++) {
      //     const word = words[i];

      //     let bookks = await existingTable.findOne({ word: word })

      //     if( bookks){

      //     }else{
      //       let newword = new existingTable({
      //         word: word,
      //       })
      //       await newword.save()
      //     }

      //     let newwordss = await existingTable.findOne({$and: [{ word : word } , { 'data.ids' : id }]})
      //     const newValue = {
      //       ids: id
      //     };

      //     console.log(newwordss, 'one')

      //     if( newwordss ) {

      //     }else{
      //       console.log(id, 'two')
      //       let neww =await existingTable.updateOne(
      //         { word: word }, // Specify the query to find the document
      //         { $push: { data: newValue } }, // Use $push to add the new value to the datadd array
      //         { new: true } // Set new to true to return the updated document
      //       )

      //     }

      //   }
    }
  } catch (err) {
    console.log(err, "errr");
  }

  return positions;
};

let findWordPositionss = async (data, existingTable) => {
  console.log(existingTable, data, "ffff");
  const positions = {};
  // console.log(data , 'data[word]')
  // Iterate through each object in the array
  try {
    for (const obj of data) {
      const id = obj.bookTitle;
      let arr = obj.bookDescription.split("\n");

      arr = arr.filter((e) => e !== "");
      arr = arr.map((e, i) => {
        return { index: i, content: e };
      });

      let _model = new existingTable({
        id: obj._id,
        book: id,
        verse: arr,
      });

      await _model
        .save()
        .then((r) => {
          let ll = Book.findOneAndUpdate(
            { _id: obj._id },
            { $set: { searchAdd: 1 } },
            { returnOriginal: false }
          ).then((rr) => {});

          console.log(r);
        })
        .catch((err) => {
          console.log(err);
        });

      //   let textWithoutNewlines = obj.bookDescription.replace(/[@$()\-\;:\\"'\n]/g, '');
      //   const words = textWithoutNewlines.split(' ');

      //   for (let i = 0; i < words.length; i++) {
      //     const word = words[i];

      //     let bookks = await existingTable.findOne({ word: word })

      //     if( bookks){

      //     }else{
      //       let newword = new existingTable({
      //         word: word,
      //       })
      //       await newword.save()
      //     }

      //     let newwordss = await existingTable.findOne({$and: [{ word : word } , { 'data.ids' : id }]})
      //     const newValue = {
      //       ids: id
      //     };

      //     console.log(newwordss, 'one')

      //     if( newwordss ) {

      //     }else{
      //       console.log(id, 'two')
      //       let neww =await existingTable.updateOne(
      //         { word: word }, // Specify the query to find the document
      //         { $push: { data: newValue } }, // Use $push to add the new value to the datadd array
      //         { new: true } // Set new to true to return the updated document
      //       )

      //     }

      //   }
    }
  } catch (err) {
    console.log(err, "errr");
  }
};

let Srrch = async (req, res) => {
  const { keyword, id } = req.params;
  const { page, limit } = req.query; // Assuming the page number and limit are provided as query parameters

  try {
    let catt = await Category.findOne({ _id: id }).then(async (ress) => {
      let hhh = ress.catname.replace(/\s/g, "").toLowerCase();
      let dataaaa = hhh;

      console.log(keyword, dataaaa, "sfcadfad");

      try {
        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 10;

        const skip = (pageNumber - 1) * limitNumber;
        // const collection = mongoose.connection.db.collection(dataaaa);
        const Tablesss = mongoose.model(dataaaa, TestModel);
        // if(!Tablesss){
        //     Tablesss = mongoose.model( ress.catname , TestModel);
        // }
        const pipeline = [
          {
            $match: {
              verse: {
                $elemMatch: {
                  content: { $regex: keyword, $options: "i" },
                },
              },
            },
          },
          {
            $addFields: {
              matchedVerse: {
                $filter: {
                  input: "$verse",
                  as: "v",
                  cond: {
                    $regexMatch: {
                      input: "$$v.content",
                      regex: keyword,
                      options: "i",
                    },
                  },
                },
              },
              book: "$book",
            },
          },
          {
            $unwind: "$matchedVerse",
          },
          {
            $project: {
              _id: 0,
              book: 1,
              index: "$matchedVerse.index",
              content: "$matchedVerse.content",
            },
          },
          {
            $facet: {
              res: [{ $skip: skip }, { $limit: limitNumber }],
              totalCount: [{ $count: "total" }],
            },
          },
          { $unwind: "$totalCount" },
          {
            $project: {
              _id: 0,
              res: 1,
              totalCount: "$totalCount.total",
            },
          },
        ];

        const _result = await Tablesss.aggregate(pipeline);

        return res.json(_result);
      } catch (error) {
        console.log(error, "three");
      }

      console.log(dataaaa, "dataaaa");
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message: err,
    });
  }
};

let Inputsearch = async (req, res) => {
  let decode = req.user;
  let { search } = req.body;

  const regex = new RegExp(search);
  if (decode === false) {
    return res.status(400).json({
      message: "User Verify Error",
      status: false,
    });
  } else {
    const matchingProducts = await Book.find(
      { realbook: { $regex: regex } },
      { bookDescription: 0 }
    )
      .then((re) => {
        return res.status(200).json({
          status: true,
          data: re,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: false,
          message: err,
        });
      });
  }
};

const addBook = async (req, res) => {
  let file = req.file.location;

  let { id } = req.body;

  console.log(id, "filefilefile", file);

  let nn = new NBook({
    bookTitle: id,
    image: file,
  });

  await nn
    .save()
    .then(async (rr) => {
      console.log(rr, "rr");
      let fin = await NBook.find({ active: true })
        .then((rt) => {
          console.log(rt, "rt");
          return res.status(200).json({
            status: true,
            data: rt,
          });
        })
        .catch((er) => {
          console.log(er, "er1");
          return res.status(200).json({
            status: false,
            message: er,
          });
        });
    })
    .catch((err) => {
      console.log(err, "er2");
      return res.status(200).json({
        status: false,
        message: err,
      });
    });
};

const getBook = async (req, res) => {
  let fin = await NBook.find({ active: true })
    .then((rt) => {
      console.log(rt, "rt");
      return res.status(200).json({
        status: true,
        data: rt,
      });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

const removeBook = async (req, res) => {
  let { id } = req.body;

  let fin = await NBook.findOneAndUpdate(
    { _id: id },
    { $set: { active: false } }
  )
    .then(async (rt) => {
      let ki = await NBook.find({ active: true })
        .then((er) => {
          return res.status(200).json({
            status: true,
            data: er,
          });
        })
        .catch((ert) => {
          return res.status(200).json({
            status: false,
            message: ert,
          });
        });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

const Editbookname = async (req, res) => {
  let { id, name } = req.body;

  let fin = await NBook.findOneAndUpdate(
    { _id: id },
    { $set: { bookTitle: name } }
  )
    .then(async (rt) => {
      let ki = await NBook.find({ active: true })
        .then((er) => {
          return res.status(200).json({
            status: true,
            data: er,
          });
        })
        .catch((ert) => {
          return res.status(200).json({
            status: false,
            message: ert,
          });
        });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

let Editbooknamewithimage = async (req, res) => {
  let { id, name } = req.body;
  let file = req.file.location;

  let fin = await NBook.findOneAndUpdate(
    { _id: id },
    { $set: { bookTitle: name, image: file } }
  )
    .then(async (rt) => {
      let ki = await NBook.find({ active: true })
        .then((er) => {
          return res.status(200).json({
            status: true,
            data: er,
          });
        })
        .catch((ert) => {
          return res.status(200).json({
            status: false,
            message: ert,
          });
        });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

const addBookone = async (req, res) => {
  let file = req.file.location;

  let { id, title, subtitle } = req.body;

  console.log(id, "filefilefile", file);

  let nn = new NBookone({
    bookTitle: title,
    image: file,
    subtit: subtitle,
    parentid: id,
  });

  await nn
    .save()
    .then(async (rr) => {
      console.log(rr, "rr");
      let fin = await NBookone.find({ active: true, parentid: id })
        .then((rt) => {
          console.log(rt, "rt");
          return res.status(200).json({
            status: true,
            data: rt,
          });
        })
        .catch((er) => {
          console.log(er, "er1");
          return res.status(200).json({
            status: false,
            message: er,
          });
        });
    })
    .catch((err) => {
      console.log(err, "er2");
      return res.status(200).json({
        status: false,
        message: err,
      });
    });
};

const getBookone = async (req, res) => {
  let { id } = req.body;
  let fin = await NBookone.find({ active: true, parentid: id })
    .then((rt) => {
      console.log(rt, "rt");
      return res.status(200).json({
        status: true,
        data: rt,
      });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

const removeBookone = async (req, res) => {
  let { id, delid } = req.body;

  let fin = await NBookone.findOneAndUpdate(
    { _id: id },
    { $set: { active: false } }
  )
    .then(async (rt) => {
      let ki = await NBookone.find({ active: true, parentid: delid })
        .then((er) => {
          return res.status(200).json({
            status: true,
            data: er,
          });
        })
        .catch((ert) => {
          return res.status(200).json({
            status: false,
            message: ert,
          });
        });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

const addBooktwo = async (req, res) => {
  let { title, pin, address, mobile, city } = req.body;

  console.log(
    title,
    pin,
    address,
    mobile,
    city,
    "title , pin , address , mobile , city"
  );

  let nn = new NBookonetwo({
    title: title,
    pin: pin,
    address: address,
    mobile: mobile,
    city: city,
  });

  await nn
    .save()
    .then(async (rr) => {
      let fin = await NBookonetwo.find({ active: true })
        .then((rt) => {
          return res.status(200).json({
            status: true,
            data: rt,
          });
        })
        .catch((er) => {
          console.log(er, "er1");
          return res.status(200).json({
            status: false,
            message: er,
          });
        });
    })
    .catch((err) => {
      console.log(err, "er2");
      return res.status(200).json({
        status: false,
        message: err,
      });
    });
};

const getBooktwo = async (req, res) => {
  let fin = await NBookonetwo.find({ active: true })
    .then((rt) => {
      console.log(rt, "rt");
      return res.status(200).json({
        status: true,
        data: rt,
      });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

const removeBooktwo = async (req, res) => {
  let { id } = req.body;

  let fin = await NBookonetwo.findOneAndUpdate(
    { _id: id },
    { $set: { active: false } }
  )
    .then(async (rt) => {
      let ki = await NBookonetwo.find({ active: true })
        .then((er) => {
          return res.status(200).json({
            status: true,
            data: er,
          });
        })
        .catch((ert) => {
          return res.status(200).json({
            status: false,
            message: ert,
          });
        });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

const Editbooknametwo = async (req, res) => {
  let { title, pin, address, mobile, city } = req.body;

  let fin = await NBookonetwo.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        title: title,
        pin: pin,
        address: address,
        mobile: mobile,
        city: city,
      },
    }
  )
    .then(async (rt) => {
      let ki = await NBookonetwo.find({ active: true })
        .then((er) => {
          return res.status(200).json({
            status: true,
            data: er,
          });
        })
        .catch((ert) => {
          return res.status(200).json({
            status: false,
            message: ert,
          });
        });
    })
    .catch((er) => {
      console.log(er, "er1");
      return res.status(200).json({
        status: false,
        message: er,
      });
    });
};

let Grtallnew = async (req, res) => {
  let { id } = req.body;
  let hh = await NBookone.find({ active: true, parentid: id })
    .then((ee) => {
      return res.status(200).json({
        status: true,
        data: ee,
      });
    })
    .catch((err) => {
      return res.status(200).json({
        status: false,
        message: ere,
      });
    });
};

exports.AdminController = {
  Grtallnew,
  AddPostAdmin,
  AddPostinAdmin,
  AdminDeactivepost,
  AdminUser,
  UserDeactive,
  PostPopular,
  AddCategory,
  CategoryDetail,
  AddsubCategory,
  AddsubCategorydetail,
  EditCategory,
  Deletecategorydetail,
  Editsubcategory,
  Deletesubcategory,
  AddAudio,
  Deletebooks,
  Viewbookss,
  UpdateBook,
  Updatebookalign,
  Searchone,
  Addsearch,
  Srrch,
  AllAddsearch,
  DeleteAudio,
  Inputsearch,
  addBook,
  getBook,
  removeBook,
  Editbookname,
  Editbooknamewithimage,
  addBookone,
  getBookone,
  removeBookone,
  Editbooknametwo,
  removeBooktwo,
  getBooktwo,
  addBooktwo,
};

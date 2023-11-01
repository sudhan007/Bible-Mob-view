const { json } = require("express");
const { PostModel: Post } = require("../../models");
const { BookModel: Book } = require("../../models");
const { CategoryModel: Category } = require("../../models");
const { SubcategoryModel: Subcat } = require("../../models");
const { NewBook: Nbook } = require("../../models");
const path = require("path");
const fs = require("fs");

const AddPost = async (req, res) => {
  const {
    id,
    postitle,
    posttype,
    start_locationn,
    end_location,
    description,
    starttime,
    endtime,
    ip,
    maxauctionamount,
    category,
  } = req.body;
  try {
    if (!postitle)
      return res.status(400).json({
        message: "Enter Post Title",
        ok: false,
      });

    if (!id)
      return res.status(400).json({
        message: "Insert Vechile No",
        ok: false,
      });
    if (!posttype)
      return res.status(400).json({
        message: "Enter Post Type",
        ok: false,
      });

    if (!description)
      return res.status(400).json({
        message: "Enter Description",
        ok: false,
      });

    if (!starttime)
      return res.status(400).json({
        message: "Enter Start Time",
        ok: false,
      });

    if (!endtime)
      return res.status(400).json({
        message: "Enter End Time",
        ok: false,
      });

    if (!maxauctionamount)
      return res.status(400).json({
        message: "Enter MAx Auction Amount",
        ok: false,
      });

    const vechile = new Vechile({
      id: id,
      postitle: postitle,
      start_locationn: start_locationn,
      end_location: end_location,
      description: description,
      starttime: starttime,
      endtime: endtime,
      ip: ip,
      maxauctionamount: maxauctionamount,
      category: category,
    });

    const savedPost = await Post.save();
    return res.status(201).json({
      message: "post Created successfully",
      ok: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, ok: false });
  }
};

const AllPost = async (req, res) => {
  const { id } = req.body;
  try {
    if (!id)
      return res.status(400).json({
        message: "Something Went Wrong",
        ok: false,
      });

    const _post = await Post.find({ id: id }, { active: true }); // find user by email
    if (_post)
      return res.status(201).json({
        message: "Users All Post",
        user: _post,
        ok: true,
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, ok: false });
  }
};

const SinglePost = async (req, res) => {
  const { id } = req.body;
  try {
    if (!id)
      return res.status(400).json({
        message: "Something Went Wrong",
        ok: false,
      });

    const _post = await Post.findOne({ _id: id }, { active: true }); // find user by email
    if (_post)
      return res.status(201).json({
        message: "Users All Post",
        user: _post,
        ok: true,
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, ok: false });
  }
};

const EditPost = async (req, res) => {
  const {
    id,
    postitle,
    posttype,
    start_locationn,
    end_location,
    description,
    starttime,
    endtime,
    ip,
    maxauctionamount,
    category,
  } = req.body;
  try {
    if (!postitle)
      return res.status(400).json({
        message: "Enter Post Title",
        ok: false,
      });

    if (!id)
      return res.status(400).json({
        message: "Insert Vechile No",
        ok: false,
      });
    if (!posttype)
      return res.status(400).json({
        message: "Enter Post Type",
        ok: false,
      });

    if (!description)
      return res.status(400).json({
        message: "Enter Description",
        ok: false,
      });

    if (!starttime)
      return res.status(400).json({
        message: "Enter Start Time",
        ok: false,
      });

    if (!endtime)
      return res.status(400).json({
        message: "Enter End Time",
        ok: false,
      });

    if (!maxauctionamount)
      return res.status(400).json({
        message: "Enter MAx Auction Amount",
        ok: false,
      });

    const post = await Post.findOne({ _id: id });

    post.id = id;
    post.postitle = postitle;
    post.start_locationn = start_locationn;
    post.end_location = end_location;
    post.description = description;
    post.starttime = starttime;
    (post.endtime = endtime), (post.maxauctionamount = maxauctionamount);

    await post.save();
    return res.status(201).json({
      message: "Post Edit successfully",
      ok: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, ok: false });
  }
};

const DelectPost = async (req, res) => {
  const { id } = req.body;

  try {
    if (!id)
      return res.status(400).json({
        message: "Something Went Wrong",
        ok: false,
      });

    const users = await Post.findOne({ id: id });

    if (!users) {
      return res.status(400).json({
        message: "Vechile not found",
        ok: false,
      });
    }

    users.active = false;

    await users.save();
    return res.status(200).json({
      users,
      message: "Post Delected successfully",
      ok: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      ok: false,
    });
  }
};

const Allbookcat = async (req, res) => {
  const book = await Category.find({ active: true })
    .then(async (ress) => {
      let ndata = await Nbook.find({ active: true })
        .then((sdf) => {
          return res.status(200).json({
            data: ress,
            message: "All data",
            cat: sdf,
            status: true,
          });
        })
        .catch((err) => {
          return res.status(500).json({
            message: "Something went wrong",
            status: false,
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Something went wrong",
        status: false,
      });
    });
};

const Booksubonlycatt = async (req, res) => {
  const { id } = req.body;
  if (!id)
    return res.status(400).json({
      message: "Something Went Wrong",
      ok: false,
    });

  const book = await Subcat.find({
    $and: [{ active: true }, { mainCatnameid: id }],
  })
    .sort({ align: 1 })
    .limit(20)
    .then((ress) => {
      return res.status(200).json({
        data: ress,
        message: "All data",
        status: true,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Something went wrong",
        status: false,
      });
    });
};

const Booksubonlydata = async (req, res) => {
  const { id, nu } = req.body;
  if (!id)
    return res.status(400).json({
      message: "Something Went Wrong",
      ok: false,
    });

  console.log(nu, "nu", id, "id");

  if (nu === "0") {
    const book = await Book.findOne(
      {
        $and: [{ active: true }, { bookTitle: id }],
      },
      { verses: 0 }
    )
      .then((ress) => {
        return res.status(200).json({
          data: ress,
          message: "All data",
          status: true,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Something went wrong",
          status: false,
        });
      });
  } else {
    const book = await Book.findOne(
      { $and: [{ active: true }, { _id: id }] },
      { verses: 0 }
    )
      .then((ress) => {
        return res.status(200).json({
          data: ress,
          message: "All data",
          status: true,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Something went wrong",
          status: false,
        });
      });
  }
};

const Booksubcatt = async (req, res) => {
  let parid = "";

  const { id, count } = req.body;
  if (!id)
    return res.status(400).json({
      message: "Something Went Wrong",
      ok: false,
    });

  const book = await Subcat.find({
    $and: [{ active: true }, { mainCatnameid: id }],
  })
    .sort({ align: 1 })
    .skip(0)
    // .limit(15*count)
    .then(async (ress) => {
      if (ress.length != 0) {
        parid = ress[0]?._id;
        const books = await Subcat.find({
          $and: [{ active: true }, { mainCatnameid: parid }],
        })
          .sort({ align: 1 })
          .limit(1)
          .then(async (resss) => {
            if (resss.length != 0) {
              parid = resss[0]?._id;
              const books2 = await Subcat.find({
                $and: [{ active: true }, { mainCatnameid: parid }],
              })
                .sort({ align: 1 })
                .limit(1)

                .then(async (resss2) => {
                  if (resss2.length != 0) {
                    parid = resss2[0]?._id;
                    const books22 = await Subcat.find({
                      $and: [{ active: true }, { mainCatnameid: parid }],
                    })
                      .sort({ align: 1 })
                      .limit(1)

                      .then(async (resss23) => {
                        console.log(resss23, "book");

                        if (resss23.length != 0) {
                          parid = resss23[0]?._id;
                          const books22 = await Subcat.find({
                            $and: [{ active: true }, { mainCatnameid: parid }],
                          })
                            .sort({ align: 1 })
                            .limit(1)

                            .then(async (resss231) => {
                              console.log(resss231, "book");

                              if (resss231.length != 0) {
                                const books15 = await Subcat.find(
                                  { $and: [{ active: true }, { _id: parid }] },
                                  { subcatname: 1 }
                                )
                                  .sort({ align: 1 })
                                  .limit(1);

                                const books1 = await Book.find(
                                  {
                                    $and: [
                                      { active: true },
                                      { mainCatnameid: parid },
                                    ],
                                  },
                                  { verses: 0 }
                                )
                                  .sort({ align: 1 })
                                  .limit(1);

                                const booksPromise = Book.find(
                                  {
                                    $and: [
                                      { active: true },
                                      { mainCatnameid: parid },
                                    ],
                                  },
                                  { bookDescription: 0, verses: 0 }
                                )
                                  .sort({ align: 1 })
                                  .exec();

                                const countPromises = ress.map((book) =>
                                  Book.countDocuments({
                                    $and: [
                                      { active: true },
                                      { mainCatnameid: book._id },
                                    ],
                                  }).exec()
                                );

                                const [books, counts] = await Promise.all([
                                  booksPromise,
                                  Promise.all(countPromises),
                                ]);

                                const newBooks = ress.map((book, index) => ({
                                  ...book._doc,
                                  count: counts[index],
                                  modified: true,
                                }));

                                return res.status(200).json({
                                  subcat: newBooks,
                                  book: books1,
                                  booksub: books,
                                  newname: books15,
                                  message: "All data4",
                                  status: true,
                                  gg: 1,
                                });
                              } else {
                                const books15 = await Subcat.find(
                                  { $and: [{ active: true }, { _id: parid }] },
                                  { subcatname: 1 }
                                )
                                  .sort({ align: 1 })
                                  .limit(1);

                                const books1 = await Book.find(
                                  {
                                    $and: [
                                      { active: true },
                                      { mainCatnameid: parid },
                                    ],
                                  },
                                  { verses: 0 }
                                )
                                  .sort({ align: 1 })
                                  .limit(1);

                                const booksPromise = Book.find(
                                  {
                                    $and: [
                                      { active: true },
                                      { mainCatnameid: parid },
                                    ],
                                  },
                                  { bookDescription: 0, verses: 0 }
                                )
                                  .sort({ align: 1 })
                                  .exec();

                                const countPromises = ress.map((book) =>
                                  Book.countDocuments({
                                    $and: [
                                      { active: true },
                                      { mainCatnameid: book._id },
                                    ],
                                  }).exec()
                                );

                                const [books, counts] = await Promise.all([
                                  booksPromise,
                                  Promise.all(countPromises),
                                ]);

                                const newBooks = ress.map((book, index) => ({
                                  ...book._doc,
                                  count: counts[index],
                                  modified: true,
                                }));

                                return res.status(200).json({
                                  subcat: newBooks,
                                  book: books1,
                                  booksub: books,
                                  newname: books15,
                                  message: "All data4",
                                  status: true,
                                  gg: 2,
                                });
                              }
                            })
                            .catch((err) => {
                              console.log(err, "rrr");
                            });
                        } else {
                          const books15 = await Subcat.find(
                            { $and: [{ active: true }, { _id: parid }] },
                            { subcatname: 1 }
                          )
                            .sort({ align: 1 })
                            .limit(1);

                          const books1 = await Book.find(
                            {
                              $and: [
                                { active: true },
                                { mainCatnameid: parid },
                              ],
                            },
                            { verses: 0 }
                          )
                            .sort({ align: 1 })
                            .limit(1);

                          const booksPromise = Book.find(
                            {
                              $and: [
                                { active: true },
                                { mainCatnameid: parid },
                              ],
                            },
                            { bookDescription: 0, verses: 0 }
                          )
                            .sort({ align: 1 })
                            .exec();

                          const countPromises = ress.map((book) =>
                            Book.countDocuments({
                              $and: [
                                { active: true },
                                { mainCatnameid: book._id },
                              ],
                            }).exec()
                          );

                          const [books, counts] = await Promise.all([
                            booksPromise,
                            Promise.all(countPromises),
                          ]);

                          const newBooks = ress.map((book, index) => ({
                            ...book._doc,
                            count: counts[index],
                            modified: true,
                          }));

                          return res.status(200).json({
                            subcat: newBooks,
                            book: books1,
                            booksub: books,
                            newname: books15,
                            message: "All data4",
                            status: true,
                            gg: 3,
                          });
                        }
                      })
                      .catch((err) => {
                        console.log(err, "rrr");
                      });
                  } else {
                    const books15 = await Subcat.find({
                      $and: [{ active: true }, { _id: parid }],
                    })
                      .sort({ align: 1 })
                      .limit(1);
                    const books1 = await Book.find({
                      $and: [{ active: true }, { mainCatnameid: parid }],
                    })
                      .sort({ align: 1 })
                      .limit(1);

                    const booksPromise = Book.find(
                      { $and: [{ active: true }, { mainCatnameid: parid }] },
                      { bookDescription: 0, verses: 0 }
                    )
                      .sort({ align: 1 })
                      .exec();

                    const countPromises = ress.map((book) =>
                      Subcat.countDocuments({
                        $and: [{ active: true }, { mainCatnameid: book._id }],
                      })
                    );

                    const books = await Promise.all([booksPromise]);
                    const counts = await Promise.all(countPromises);

                    const newBooks = ress.map((book, index) => ({
                      ...book._doc,
                      count: counts[index],
                      modified: true,
                    }));

                    return res.status(200).json({
                      subcat: newBooks,
                      book: books1,
                      booksub: books,
                      newname: books15,
                      message: "All data4",
                      status: true,
                      gg: 4,
                    });
                  }
                });
            } else {
              const books15 = await Subcat.find(
                { $and: [{ active: true }, { _id: parid }] },
                { subcatname: 1 }
              )
                .sort({ align: 1 })
                .limit(1);

              const books1 = await Book.find(
                { $and: [{ active: true }, { mainCatnameid: parid }] },
                { verses: 0 }
              )
                .sort({ align: 1 })
                .limit(1);

              const booksPromise = Book.find(
                { $and: [{ active: true }, { mainCatnameid: parid }] },
                { bookDescription: 0, verses: 0 }
              )
                .sort({ align: 1 })
                .exec();

              const countPromises = ress.map((book) =>
                Book.countDocuments({
                  $and: [{ active: true }, { mainCatnameid: book._id }],
                }).exec()
              );

              const [books, counts] = await Promise.all([
                booksPromise,
                Promise.all(countPromises),
              ]);

              const newBooks = ress.map((book, index) => ({
                ...book._doc,
                count: counts[index],
                modified: true,
              }));

              // it will help to find books like genesis

              return res.status(200).json({
                subcat: newBooks,
                book: books1,
                booksub: books,
                newname: books15,
                message: "All data4",
                gg: true,

                status: true,
              });
            }
          });
      } else {
        const books15 = await Subcat.find(
          { $and: [{ active: true }, { _id: id }] },
          { subcatname: 1 }
        )
          .sort({ align: 1 })
          .limit(1);

        const books155 = await Book.find(
          { $and: [{ active: true }, { mainCatnameid: id }] },
          { verses: 0 }
        )
          .sort({ align: 1 })
          .limit(1)
          .then(async (rrr) => {
            let two = await Book.find(
              { $and: [{ active: true }, { mainCatnameid: id }] },
              { bookDescription: 0, verses: 0 }
            )
              .sort({ align: 1 })
              .then((allsub) => {
                return res.status(200).json({
                  subcat: ress,
                  book: rrr,
                  booksub: allsub,
                  newname: books15,
                  message: "All data5",
                  status: true,
                });
              })
              .catch((err) => {
                console.log(err, "rrr");
              });
          })
          .catch((err) => {
            return res.status(500).json({
              message: "empty",
              status: false,
            });
          });
      }

      // return res.status(200).json({
      //   data : ress,
      //   message: "All data",
      //   status: true,
      // });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        message: "Something went wrong",
        status: false,
      });
    });
};

const serverImage = async (req, res) => {
  console.log("sfgdgdgdf");
  const targetFolder = path.join(__dirname, "../../uploads");
  const key = req.params.key;

  if (!key) {
    return res.status(400).json({
      message: "Please provide a valid key!",
      ok: false,
    });
  }

  // Check if the file exists in the target folder
  const files = path.join(targetFolder, key);
  if (!fs.existsSync(files)) {
    return res.status(404).json({
      message: "File not found!",
      ok: false,
    });
  }

  // Get file stats to set the Content-Length header
  const stat = fs.statSync(files);
  const fileSize = stat.size;

  // Set the appropriate headers for serving the audio file
  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
    "Content-Length": fileSize,
  });

  // Create a read stream from the file and pipe it to the response
  const stream = fs.createReadStream(files);
  stream.on("error", (err) => {
    console.error("Error reading the file:", err);
    res.status(500).json({
      message: "Error reading the file!",
      ok: false,
    });
  });

  stream.pipe(res);

  // const targetFolder = path.join(__dirname, "../../uploads");
  // const key = req.params.key;

  // if (!key) {
  //   return res.status(400).json({
  //     message: "Please provide a valid key!",
  //     ok: false,
  //   });
  // }
  // // check folder for that file and send it
  // const file = path.join(targetFolder, key);
  // return res.sendFile(file);
};

const Pdftext = async (req, res) => {
  const targetFolder = path.join(__dirname, "./uploads");
  const key = req.params.key;

  if (!key) {
    return res.status(400).json({
      message: "Please provide a valid key!",
      ok: false,
    });
  }
  // check folder for that file and send it
  const file = path.join(targetFolder, key);
  return res.sendFile(file);
};

exports.PostController = {
  AddPost,
  AllPost,
  EditPost,
  DelectPost,
  SinglePost,
  Allbookcat,
  Booksubcatt,
  Booksubonlycatt,
  Booksubonlydata,
  serverImage,
  Pdftext,
};

const { PostModel: Post } = require("../../models");
const { BookModel: Book } = require("../../models");
const { CategoryModel: Category } = require("../../models");
const { SubcategoryModel } = require("../../models");

const getBooksAndChapters = async (req, res) => {
  try {
    const category = await Category.findOne({ catname: "Bible" });
    const messages = await Category.findOne({ catname: "Messages" });

    if (!category)
      return res
        .status(400)
        .json({ message: "Bible not found", status: false });

    const subCategories = await SubcategoryModel.find(
      {
        mainCatnameid: category._id,
      },
      "mainCatnameid active subcatname"
    );

    const messageSubCategories = await Book.find(
      {
        mainCatnameid: messages._id,
      },
      "mainCatnameid active verses bookTitle"
    );

    let final = [];

    for (let i of subCategories) {
      let temp = {};
      const books = await Book.find({
        mainCatnameid: i._id,
      });

      temp = { ...i._doc, books };
      final.push(temp);
    }

    return res.status(200).json({
      message: "Success",
      status: true,
      data: final,
      messages: messageSubCategories,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const getBooksandverses = async (req, res) => {
  try {
    const category = await Category.findOne({ catname: "Bible" });

    if (!category)
      return res
        .status(400)
        .json({ message: "Bible not found", status: false });

    const subCategories = await SubcategoryModel.find(
      {
        mainCatnameid: category._id,
      },
      "mainCatnameid active subcatname"
    );

    let final = [];

    for (let i of subCategories) {
      let temp = {};
      const books = await Book.find({
        mainCatnameid: i._id,
      });

      temp = { ...i._doc, books };
      final.push(temp);
    }

    return res.status(200).json({
      message: "Success",
      status: true,
      data: final,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const getMessagesandVerses = async (req, res) => {
  try {
    const messages = await Category.findOne({ catname: "Messages" });

    if (!messages)
      return res
        .status(400)
        .json({ message: "Bible not found", status: false });

    const messageSubCategories = await Book.find(
      {
        mainCatnameid: messages._id,
      },
      "mainCatnameid active verses bookTitle"
    );

    return res.status(200).json({
      message: "Success",
      status: true,
      data: messageSubCategories,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

module.exports = {
  getBooksAndChapters,
  getBooksandverses,
  getMessagesandVerses,
};

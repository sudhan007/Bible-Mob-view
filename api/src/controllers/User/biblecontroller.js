const { PostModel: Post } = require("../../models");
const { BookModel: Book } = require("../../models");
const { CategoryModel: Category } = require("../../models");
const { SubcategoryModel } = require("../../models");
const path = require("path");
const fs = require("fs");

// its job is to get top level categories from id
const getBooksfromBibleCategory = async (req, res) => {
  const { id } = req.query;
  try {
    if (!id) {
      return res
        .status(400)
        .json({ message: "Category not found", status: false });
    }

    const category = await Category.findById(id);

    if (!category)
      return res
        .status(400)
        .json({ message: "Category not found", status: false });

    // find sub categories based on this main category

    const subCategories = await SubcategoryModel.find(
      {
        mainCatnameid: category._id,
      },
      "mainCatnameid active subcatname"
    );

    return res.status(200).json({
      message: "Success",
      status: true,
      data: subCategories,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const getChaptersfromBooks = async (req, res) => {
  const { id } = req.query;
  try {
    if (!id) {
      return res
        .status(400)
        .json({ message: "Category not found", status: false });
    }

    const _book = await SubcategoryModel.findById(id);

    if (!_book) {
      return res
        .status(400)
        .json({ message: "Category not found", status: false });
    }

    // find sub categories based on this main category - chapters from books
    const books = await Book.find({
      mainCategory: _book.mainCatnameid,
    });

    return res.status(200).json({
      message: "Success",
      status: true,
      data: books,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const searchEntireBible = async (req, res) => {
  const { id: category_id, searchquery: keyword } = req.query;
  try {
    if (!category_id) {
      return res
        .status(400)
        .json({ message: "Category not found", status: false });
    }

    const bible_category = await Category.findById(category_id);
    const message_category = await Category.findOne({
      catname: "Messages",
    });

    if (!bible_category || !message_category)
      return res
        .status(400)
        .json({ message: "Bible Category not found", status: false });

    // find sub categories based on this main category

    const subCategories = await SubcategoryModel.find(
      {
        mainCatnameid: bible_category._id,
      },
      "mainCatnameid active subcatname verses"
    );

    const messageSubCategories = await Book.aggregate([
      {
        $match: {
          mainCatnameid: message_category._id,
        },
      },
      {
        $unwind: "$verses",
      },
      {
        $match: {
          "verses.verse": { $regex: keyword.trim(), $options: "i" },
        },
      },
      {
        $group: {
          _id: "$_id",
          bookTitle: { $first: "$bookTitle" },
          verses: { $push: "$verses" },
          mainCatnameid: { $first: "$mainCatnameid" },
        },
      },
      {
        $addFields: {
          count: {
            $size: "$verses",
          },
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ]);

    console.log(messageSubCategories);

    const subCategoryIds = subCategories.map((subCategory) => subCategory._id);

    let books = await Book.aggregate([
      {
        $match: {
          mainCatnameid: { $in: subCategoryIds },
        },
      },
      {
        $unwind: "$verses",
      },
      {
        $match: {
          "verses.verse": { $regex: keyword.trim(), $options: "i" },
        },
      },
      {
        $group: {
          _id: "$_id",
          bookTitle: { $first: "$bookTitle" },
          verses: { $push: "$verses" },
          mainCatnameid: { $first: "$mainCatnameid" },
        },
      },
      {
        $addFields: {
          count: {
            $size: "$verses",
          },
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ]);

    books = await Book.populate(books, "mainCatnameid");

    let sumofTotalResults = 0;
    let updatedBooks = [...books];

    for (let book of updatedBooks) {
      sumofTotalResults += book.count;
      book.bookName = book.mainCatnameid.subcatname;
      book.verses = [
        {
          bookName: book.mainCatnameid.subcatname,
          chapterName: book.bookTitle,
          verses: book.verses,
        },
      ];
    }

    // find common books and with same
    let groupedBooks = [];
    for (let book of books) {
      let same = updatedBooks.filter(
        (item) => String(item.bookName) == String(book.bookName)
      );

      if (same.length > 0) {
        let _verses = [];
        groupedBooks = [...updatedBooks];

        for (let _book of same) {
          _verses = _verses.concat(_book.verses);
        }

        let newBookField = {
          id: same[0]._id,
          bookName: same[0].bookName,
          verses: _verses,
        };

        updatedBooks = updatedBooks.filter(
          (item) => String(item.bookName) != String(book.bookName)
        );
        updatedBooks = [...updatedBooks, newBookField];
      }
    }

    // finaly find count for each books

    for (let book of updatedBooks) {
      let count = 0;
      for (let subbook of book.verses) {
        count += subbook.verses.length;
      }

      book.total_verses = count;
    }

    return res.status(200).json({
      message: "Success",
      status: true,
      data: updatedBooks,
      messages: messageSubCategories,
      total_count: sumofTotalResults,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Failed", status: false });
  }
};

// now for messages
const getMessagesSubCategories = async (req, res) => {
  const message_model_name = "Messages";

  try {
    const category = await Category.findOne({
      catname: message_model_name,
    });

    if (!category)
      return res
        .status(400)
        .json({ message: "Category not found", status: false });

    // find sub categories based on this main category

    const subCategories = await SubcategoryModel.find(
      {
        mainCatnameid: category._id,
      },
      "mainCatnameid active subcatname"
    );

    return res.status(200).json({
      message: "Success",
      status: true,
      data: subCategories,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

module.exports = {
  getBooksfromBibleCategory,
  getChaptersfromBooks,
  searchEntireBible,
  getMessagesSubCategories,
};

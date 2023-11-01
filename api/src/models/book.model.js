const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const Book = new Schema( // model for storing Vechile
  {
    searchAdd: { type: Number, default: 0 },
    active: Number,
    letter: String,
    date: { type: Date, default: Date.now() },
    bookTitle: String,
    verses: [
      {
        verse: String,
        verseid: Number,
      },
    ],
    bookDescription: String,
    mainCatnameid: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
    active: { type: Boolean, default: true },
    audio: String,
    align: Number,
    count: { type: Number, default: 0 },
    mainCategory: String,
    txt: String,
    pdf: String,
    realbook: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Book", Book); // exporting the model

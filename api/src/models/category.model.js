const { Schema, model } = require("mongoose");

const Category = new Schema( // model for storing Vechile
  {
    align: Number,
    active: { type: Boolean, default: true },
    catname: String,
    date: { type: Date, default: Date.now() },
    catdescription: String,
    mainCatnameid: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", Category); // exporting the model

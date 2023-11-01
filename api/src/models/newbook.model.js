const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const NewBook = new Schema( // model for storing Vechile
  { 
    bookTitle: String,
    date: { type: Date, default: Date.now() },  
    active: { type: Boolean, default: true }, 
    id: String,
    txt: String, 
    image : String
  },
  {
    timestamps: true,
  }
);

module.exports = model("NewBook", NewBook); // exporting the model

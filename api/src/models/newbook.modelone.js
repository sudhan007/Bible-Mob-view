const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const NewBookone = new Schema( // model for storing Vechile
  { 
    bookTitle: String,
    date: { type: Date, default: Date.now() },  
    active: { type: Boolean, default: true }, 
    id: String,
    txt: String, 
    image : String,
    parentid: String,
    subtit : String
  },
  {
    timestamps: true,
  }
);

module.exports = model("NewBookone", NewBookone); // exporting the model

const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')

const Search = new Schema( // model for storing Vechile
  {
    count : Number,
    data: [
      {
        ids : String,
        place : [Number]
      }
    ],
    word : String,
    date : {  type:Date, default:Date.now() },
  }
);

module.exports = model("Search", Search); 
const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')

const Subcategory = new Schema( // model for storing Vechile
  {
    align : Number,
    mainCatname: String,
    mainCatnameid: String,
    active : { type: Boolean, default: true },
    subcatname : String,
    date : {  type:Date, default:Date.now() },
    catdescription : String,
    count : {  type:Number, default:0 },
    mainCategory : String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Subcategory", Subcategory); // exporting the model

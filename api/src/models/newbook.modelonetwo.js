const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const NewBookonetwo = new Schema( // model for storing Vechile
  { 
    title: String,
    pin : String,
    address : String ,
    mobile : String ,
    city : String,
    date: { type: Date, default: Date.now() },  
    active: { type: Boolean, default: true }, 
    id: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("NewBookonetwo", NewBookonetwo); // exporting the model

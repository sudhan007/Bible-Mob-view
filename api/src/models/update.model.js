const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')

const Update = new Schema( // model for storing Vechile
{
    searchAdd :  {  type:Number, default:0 },
    date : String,
    fi1 : String,
    fi2 : String,
    active : { type: Boolean, default: true },
    count : { type: Number, default: 0 },
  },
  {
    timestamps: true, 
  }
);

module.exports = model("Update", Update ); // exporting the model

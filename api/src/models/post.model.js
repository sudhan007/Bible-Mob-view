const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const Post = new Schema( // model for storing posts
  {
    audio: String, 
    posttype: String,
    text: String,
    description : String,
    starttime : Date,
    endtime : Date,
    id : String,
    ip : String ,
    category : String,
    postedBy:{ type:String },
    date : {  type:Date, default:Date.now() },
    active: { type: Boolean, default: true }, // this reprsents activness of the post
  },
  {
    timestamps: true,
  }
);
module.exports = model("Post", Post); // exporting the model

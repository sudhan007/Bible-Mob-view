const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const UserModel = new Schema( // model for storing users
  {
    username: String, // first name of the user
    email: String,
    role: { type: String, enum: ["driver", "user"] }, // role of the user
    password: String,
    mobile: String,
    profileImage: String,
    otp: String,
    token: String,
    description: String,
    dob: String,
    id: String,
    emailToken: String,
    isVerified: String,
    resetToken: String,
    expireToken: String,
    date: { type: Date, default: Date.now() },
    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }],

    kyc: { type: Boolean, default: false },
    account_active: { type: Boolean, default: true },
    active: { type: Boolean, default: true }, // this reprsents activness of the user
  },
  {
    timestamps: true,
  }
);

//  this function is used to hash the password before saving it to the database
UserModel.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10); // 10 is the number of rounds
  user.password = await bcrypt.hash(user.password, salt);

  next();
});

UserModel.methods.comparePassword = async function (givenPassword) {
  // this function is used to compare the given password with the password in the database
  return await bcrypt.compare(givenPassword, this.password); // returns true or false
};
module.exports = model("User", UserModel); // exporting the model

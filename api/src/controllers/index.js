const { UserController } = require("./User/User.controllers");
const { PostController } = require("./User/Post.controller");
const { HomeController } = require("./Home/Home.controller");
const { AdminController } = require("./Admin/Admin.controller");
const biblecontroller = require("./User/biblecontroller");

module.exports = {
  UserController,
  PostController,
  HomeController,
  AdminController,
  biblecontroller,
};

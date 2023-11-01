const express = require("express");
var compression = require("compression");
const baseRouter = require("./routes");
const bodyParser = require("body-parser");
let ejs = require("ejs");

// local initialization
const app = express();
app.use(compression());

// third party middlewares
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { authenticateToken } = require("./middlewares/tokenVerify");
const userModel = require("./models/user.model");

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: "500mb",
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

// local middlewares

// db connection
require("../src/configs/db.config");

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("uploads"));
require("dotenv").config();

// routes
app.use("/api/v1", baseRouter);

app.get("/", authenticateToken, (req, res) => {
  res.render("index");
});

// (async () => {
//   // crearte an temp admin
//   const user = new userModel({
//     username: "admin",
//     password: "admin",
//   });

//   await user.save();

//   console.log("User created");
// })();

module.exports = app;

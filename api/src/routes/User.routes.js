const { UserController } = require("../controllers");
const { ProfileController } = require("../controllers");
const { PostController } = require("../controllers");
const { HomeController } = require("../controllers");
const { AdminController } = require("../controllers");
const { Multer } = require("../configs/multer.config");

const router = require("express").Router();

const decrypts = require("../middlewares/decrypt");
const jwt_de = require("../middlewares/jwt_de");

// auth users
router.post("/register", [decrypts], UserController.RegisterUser);
router.post("/login", UserController.LoginUser);
router.post("/check", UserController.Check);
router.post("/otp", [decrypts], UserController.OtpCheck);
router.get("/servefiles", UserController.serverFilesFromS3);

// get users
router.post("/book", UserController.Books);
router.post("/addsearch", AdminController.Addsearch);
router.post("/alladdsearch", AdminController.AllAddsearch);
router.get("/getall", UserController.GetAllUsers);
router.post("/searchresult", UserController.SearchResult);

// post routes
router.get("/post", PostController.AllPost);
router.put("/post", PostController.EditPost);
router.delete("/post", PostController.DelectPost);
router.post("/post", PostController.AddPost);
router.get("/singlepost", PostController.SinglePost);
router.get("/allbookcat", PostController.Allbookcat);
router.post("/booksubcatt", PostController.Booksubcatt);
router.post("/booksubonlycatt", PostController.Booksubonlycatt);
router.post("/booksubonlydata", PostController.Booksubonlydata);
router.get("/audio/:key", PostController.serverImage);
router.get("/imsgeserve/:key", PostController.serverImage);
router.get("/pdstext/:key", PostController.Pdftext);

//home route
router.get("/home", HomeController.Home);

module.exports = router;

const router = require("express").Router();
const multer = require("multer");
const jwt_de = require("../middlewares/jwt_de");
const { Multer } = require("./multer.config");

const { AdminController } = require("../controllers");

const decrypts = require("../middlewares/decrypt");

const uploads = multer({ dest: __dirname + "/uploads" });

router.get("/adminprofile", AdminController.AddPostAdmin);
router.post(
  "/addadminpost",
  uploads.array("files"),
  AdminController.AddPostinAdmin
);
router.post("/admindeactivepost", AdminController.AdminDeactivepost);
router.get("/adminuser", AdminController.AdminUser);
router.post("/userdeactive", AdminController.UserDeactive);
router.post("/addcategory", [jwt_de], AdminController.AddCategory);
router.post("/categorydetail", [jwt_de], AdminController.CategoryDetail);
router.post("/addsubcategory", [jwt_de], AdminController.AddsubCategory);
router.post(
  "/allsubcategorydata",
  [jwt_de],
  AdminController.AddsubCategorydetail
);
router.post("/editcategorydetail", [jwt_de], AdminController.EditCategory);
router.post("/deletesubcategory", [jwt_de], AdminController.Deletesubcategory);
router.post("/editsubcategory", [jwt_de], AdminController.Editsubcategory);
router.post(
  "/deletecategorydetail",
  [jwt_de],
  AdminController.Deletecategorydetail
);
router.post(
  "/addaudio",
  Multer.Uploadss.single("file"),
  AdminController.AddAudio
);
router.post("/deletebooks", [jwt_de], AdminController.Deletebooks);
router.post("/inputsearch", [jwt_de], AdminController.Inputsearch);
router.post("/admindeactivepopularpost", AdminController.PostPopular);

router.post("/viewbookss", [jwt_de], AdminController.Viewbookss);
router.post("/updatebook", [jwt_de], AdminController.UpdateBook);
router.post("/updatebookalign", [jwt_de], AdminController.Updatebookalign);
router.post("/searchone", [jwt_de], AdminController.Searchone);
router.post("/deleteaudio", [jwt_de], AdminController.DeleteAudio);
router.get("/:keyword/:id", AdminController.Srrch);
router.post(
  "/addbook", 
  Multer.Uploadss.single("file"),
  AdminController.addBook
);
router.get("/getbook", AdminController.getBook);
router.post("/removebook", AdminController.removeBook);
router.post("/editbookname", AdminController.Editbookname);
router.post("/editbooknamewithimage",Multer.Uploadss.single("file"), AdminController.Editbooknamewithimage);


router.post(
  "/addbookone", 
  Multer.Uploadss.single("file"),
  AdminController.addBookone
);
router.post("/getbookone", AdminController.getBookone);
router.post("/removebookone", AdminController.removeBookone);

router.post(
  "/addbooktwo",  
  AdminController.addBooktwo
);
router.get("/getbooktwo", AdminController.getBooktwo);
router.post("/removebooktwo", AdminController.removeBooktwo);
router.post("/editbooknametwo", AdminController.Editbooknametwo);
router.post("/gryyy", AdminController.Grtallnew);



module.exports = router;
   
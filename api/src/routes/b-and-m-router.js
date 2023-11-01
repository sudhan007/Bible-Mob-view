const router = require("express").Router();

const {
  getBooksAndChapters,
  getBooksandverses,
  getMessagesandVerses,
} = require("../controllers/User/b-and-m-controller");

router.get("/getbooksandchapters", getBooksAndChapters);
router.get("/getbooksandverses", getBooksandverses);
router.get("/getmessagesandverses", getMessagesandVerses);

module.exports = router;

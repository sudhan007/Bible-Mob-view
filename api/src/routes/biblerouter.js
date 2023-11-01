const router = require("express").Router();

const {
  getBooksfromBibleCategory,
  getChaptersfromBooks,
  searchEntireBible,
} = require("../controllers/User/biblecontroller");

router.get("/getbooksfrombiblecategory", getBooksfromBibleCategory);
router.get("/getchaptersfrombooks", getChaptersfromBooks);
router.get("/searchentirebible", searchEntireBible);

module.exports = router;

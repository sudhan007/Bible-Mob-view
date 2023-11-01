const { Router } = require("express");
const { Multer } = require("./multer.config");

const CodRouter = Router();

const {
  addQuestion,
  addQuestionType,
  deleteQuestion,
  deleteQuestionType,
  editQuestionType,
  getAllQuestionType,
  getAllQuestions,
  getSingleQuetionandAnswer,
  editQuestion,
} = require("../controllers/User/cod.controller");

CodRouter.post("/addquestion", addQuestion);
CodRouter.post("/addquestiontype", addQuestionType);
CodRouter.delete("/deletequestion", deleteQuestion);
CodRouter.delete("/deletequestiontype", deleteQuestionType);
CodRouter.get("/getallquestiontype", getAllQuestionType);
CodRouter.get("/getallquestions", getAllQuestions);
CodRouter.put("/editquestiontype", editQuestionType);
CodRouter.put("/editquestion", editQuestion);
CodRouter.get("/getsinglequetionandanswer", getSingleQuetionandAnswer);

module.exports = CodRouter;

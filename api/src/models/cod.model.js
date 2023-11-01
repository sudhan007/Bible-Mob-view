const { Schema, model } = require("mongoose");

const QuestionTypeModel = new Schema({
  type: { type: String },
  questions: {
    type: [Schema.Types.ObjectId],
    ref: "Questions",
  },
});

const QuestionsModel = new Schema({
  questionType: {
    type: Schema.Types.ObjectId,
    ref: "QuestionType",
  },
  question: String,
  answer: {
    type: String,
    required: true,
  },
});

let _QuestionTypeModel = model("QuestionType", QuestionTypeModel);
let _QuestionsModel = model("Questions", QuestionsModel);

module.exports = { _QuestionTypeModel, _QuestionsModel };

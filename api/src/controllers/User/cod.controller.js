const {
  _QuestionTypeModel,
  _QuestionsModel,
} = require("../../models/cod.model");

const addQuestionType = async (req, res) => {
  const { type } = req.query;

  try {
    if (!type) {
      return res.status(400).json({
        message: "Type is required",
        status: false,
      });
    }

    const exitsting = await _QuestionTypeModel.findOne({
      type,
    });

    if (exitsting) {
      return res.status(400).json({
        message: "Type already exist",
        status: false,
      });
    }

    const newQuestionType = await _QuestionTypeModel.create({
      type,
    });

    return res.status(200).json({
      message: "Success",
      status: true,
      data: newQuestionType,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const addQuestion = async (req, res) => {
  const { questionType, question, answer } = req.body;

  try {
    if (!questionType || !question || !answer) {
      return res.status(400).json({
        message: "All fields are required",
        status: false,
      });
    }
    // check for type exist

    const exitingType = await _QuestionTypeModel.findById(questionType);

    if (!exitingType) {
      return res.status(400).json({
        message: "Type not found",
        status: false,
      });
    }

    const exitsting = await _QuestionsModel.findOne({
      questionType,
      question,
    });

    if (exitsting) {
      return res.status(400).json({
        message: "Question already exist",
        status: false,
      });
    }

    const newQuestion = await _QuestionsModel.create({
      questionType,
      question,
      answer,
    });

    return res.status(200).json({
      message: "Success",
      status: true,
      data: newQuestion,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const editQuestion = async (req, res) => {
  const { id, question, answer, questionType } = req.body;

  try {
    if (!id) {
      return res.status(400).json({
        message: "Id is required",
        status: false,
      });
    }

    const exitingQuestion = await _QuestionsModel.findById(id);

    if (!exitingQuestion) {
      return res.status(400).json({
        message: "Question not found",
        status: false,
      });
    }

    const newQuestion = await _QuestionsModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          question,
          answer,
          questionType,
        },
      }
    );

    return res.status(200).json({
      message: "Success",
      status: true,
      data: newQuestion,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const getAllQuestionType = async (req, res) => {
  try {
    const questionTypes = await _QuestionTypeModel.find({}, "_id type");

    return res.status(200).json({
      message: "Success",
      status: true,
      data: questionTypes,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const { type, limit, page, searchText } = req.query;
    let query = {};

    if (type !== "all" && type !== undefined) {
      query = { questionType: type };
    }

    if (searchText) {
      query.$or = [
        { question: { $regex: searchText, $options: "i" } },
        { answer: { $regex: searchText, $options: "i" } },
      ];
    }

    const questions = await _QuestionsModel
      .find(query)
      .populate("questionType")
      .skip(limit * (page - 1))
      .limit(limit);

    const count = await _QuestionsModel.countDocuments(query);

    return res.status(200).json({
      message: "Success",
      status: true,
      data: questions,
      count,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const editQuestionType = async (req, res) => {
  const { id, type } = req.body;

  try {
    if (!id || !type) {
      return res.status(400).json({
        message: "Id is required",
        status: false,
      });
    }

    const exitingType = await _QuestionTypeModel.findById(id);

    if (!exitingType) {
      return res.status(400).json({
        message: "Type not found",
        status: false,
      });
    }

    const newQuestionType = await _QuestionTypeModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          type,
        },
      }
    );

    return res.status(200).json({
      message: "Success",
      status: true,
      data: newQuestionType,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const deleteQuestionType = async (req, res) => {
  const { id } = req.query;

  try {
    if (!id) {
      return res.status(400).json({
        message: "Id is required",
        status: false,
      });
    }

    const exitingType = await _QuestionTypeModel.findById(id);

    if (!exitingType) {
      return res.status(400).json({
        message: "Type not found",
        status: false,
      });
    }

    const newQuestionType = await _QuestionTypeModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Success",
      status: true,
      data: newQuestionType,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};

const deleteQuestion = async (req, res) => {
  const { id } = req.query;

  try {
    if (!id) {
      return res.status(400).json({
        message: "Id is required",
        status: false,
      });
    }

    const exitingType = await _QuestionsModel.findById(id);

    if (!exitingType) {
      return res.status(400).json({
        message: "Question not found",
        status: false,
      });
    }

    const newQuestionType = await _QuestionsModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Success",
      status: true,
      data: newQuestionType,
    });
  } catch (e) {
    return res.status(500).json({ message: "Failed", status: false });
  }
};
const addBook = async (req, res) => {
  let { id } = req.body;

  console.log(id, "filee");
};

const getSingleQuetionandAnswer = async (req, res) => {
  //question id
  const { id } = req.query;

  try {
    if (!id) {
      return res.status(400).json({
        message: "Id is required",
        status: false,
      });
    }

    const question = await _QuestionsModel.findById(id);

    if (!question) {
      return res.status(400).json({
        message: "Question not found",
        status: false,
      });
    }

    return res.status(200).json({
      message: "Success",
      status: true,
      data: question,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: false });
  }
};

module.exports = {
  addQuestionType,
  addQuestion,
  getAllQuestionType,
  getAllQuestions,
  editQuestionType,
  deleteQuestionType,
  deleteQuestion,
  getSingleQuetionandAnswer,
  editQuestion,
  addBook,
};

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import Sidebar from "../globaladmin/Sidebar";
import Topbar from "../globaladmin/Topbar";
import Dropzone from "react-dropzone";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  Box,
  Button,
  TextareaAutosize,
  InputLabel,
  IconButton,
} from "@mui/material";
import { _axios } from "../../../../lib/axios";
import { Close, Edit, DeleteForever } from "@mui/icons-material";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
  ],
};
const formats = ["header", "bold"];

export function Questions() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [data, setData] = useState({
    questions: [],
  });
  const [questiontypes, setQuestionTypes] = useState([]);

  const [modelsState, setModalsState] = useState({
    questionModel: false,
  });

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const refetchData = () => setRefetch((prev) => !prev);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      valueGetter: (params) => `${params.row.id}`,
    },
    {
      field: "Question Type",
      headerName: "Question Type",
      flex: 1,
      valueGetter: (params) => `${params.row.questionType?.type}`,
    },
    {
      field: "Question",
      headerName: "Question",
      flex: 1,
      valueGetter: (params) => `${params.row?.question}`,
    },
    {
      field: "Answer",
      headerName: "Answer",
      flex: 1,
      valueGetter: (params) => {
        if (!params.row?.answer.startsWith("<p")) {
          return `${params.row?.answer}`;
        } else {
          const parser = new DOMParser();
          const doc = parser.parseFromString(params.row?.answer, "text/html");

          const content = doc.querySelector("p").innerHTML;

          return `${content}`;
        }
      },
    },
    {
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div className="flex gap-2">
          <IconButton
            onClick={() => {
              setSelectedQuestion({ ...params.row });
              setModalsState({
                questionModel: true,
              });
            }}
          >
            <Edit className="text-blue-400" />
          </IconButton>
          <IconButton>
            <DeleteForever className="text-red-500" />
          </IconButton>
        </div>
      ),
    },
  ];

  useEffect(() => {
    async function getAllQuestions() {
      try {
        const res = await _axios.get("/cod/getallquestions");

        if (res.data && res.data.message == "Success") {
          let dataWithindex = res.data?.data.map((item, index) => {
            return {
              ...item,
              id: index + 1,
            };
          });

          console.log(dataWithindex, "dataWithindex");
          setData({ ...data, questions: dataWithindex });
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllQuestions();
  }, [refetch]);

  useEffect(() => {
    async function getAllQuestionTypes() {
      try {
        const res = await _axios.get("/cod/getallquestiontype");

        if (res.data && res.data.message == "Success") {
          setQuestionTypes(res.data?.data || []);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllQuestionTypes();
  }, []);

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Box m="20px">
          {/* HEADER */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header title="Manage Q&A" subtitle="Add and Manage Questions" />
            <div className="flex items-center gap-2">
              <Button
                className="font-bold"
                variant="outlined"
                size="small"
                onClick={() =>
                  setModalsState({ ...modelsState, questionModel: true })
                }
              >
                Add Questions
              </Button>
            </div>
          </Box>
        </Box>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data.questions}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            getRowId={(row) => row._id}
            pageSizeOptions={[5]}
            checkboxSelection={true}
            disableRowSelectionOnClick={true}
            disableSelectionOnClick={true}
          />
        </Box>

        {modelsState.questionModel && (
          <AddQuestionsModel
            modelsState={modelsState}
            setModalsState={setModalsState}
            refetchData={refetchData}
            questionTypes={questiontypes}
            questionToEdit={selectedQuestion}
            setQuestiontoEdit={setSelectedQuestion}
          />
        )}
      </main>
    </div>
  );
}

function AddQuestionsModel({
  questionTypes,
  modelsState,
  setModalsState,
  refetchData,
  questionToEdit,
  setQuestiontoEdit,
}) {
  const [formState, setFormState] = useState({
    questionType: questionToEdit ? questionToEdit.questionType._id : "",
    question: questionToEdit ? questionToEdit.question : "",
    answer: questionToEdit ? questionToEdit.answer : "",
    txtfile: null,
    uploadType: "text",
  });

  const handleClose = () => {
    setModalsState({ ...modelsState, questionModel: false });
    setQuestiontoEdit(null);
  };

  const addQuestion = async () => {
    try {
      if (!formState.questionType || !formState.question) {
        return;
      }

      const res = !questionToEdit
        ? await _axios.post("/cod/addquestion", {
            questionType: formState.questionType,
            question: formState.question,
            answer: formState.answer,
          })
        : await _axios.put("/cod/editquestion", {
            questionType: formState.questionType,
            question: formState.question,
            answer: formState.answer,
            id: questionToEdit._id,
          });

      if (res.data && res.data.message == "Success") {
        refetchData();
        setFormState({
          questionType: "",
          question: "",
          answer: "",
          uploadType: "text",
        });
      }
    } catch (e) {
      console.log(e);
    }

    handleClose();
  };

  return (
    <>
      <Dialog open={modelsState.questionModel} onClose={handleClose}>
        <DialogTitle>Add Questions</DialogTitle>
        <DialogContent>
          <div className="min-w-[400px] mb-7">
            {/* <InputLabel>Question Type</InputLabel> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Question"
              type="text"
              fullWidth
              variant="standard"
              className="mb-4"
              onChange={(e) =>
                setFormState({ ...formState, question: e.target.value })
              }
              value={formState.question}
            />

            <FormControl fullWidth className="mb-4">
              <label htmlFor="age" className="text-gray-600">
                Answer Upload Type
              </label>
              <select
                disabled={questionToEdit ? true : false}
                onChange={(e) => {
                  if (e.target.value === "file") {
                    setFormState({
                      ...formState,
                      uploadType: e.target.value,
                      answer: "",
                    });
                  } else {
                    setFormState({
                      ...formState,
                      uploadType: e.target.value,
                      txtfile: null,
                    });
                  }
                }}
                value={formState.uploadType}
                className="rounded p-1 bg-white"
              >
                <option value={""}>Select Upload Type</option>
                <option value={"file"}>File</option>
                <option value={"text"}>Text</option>
              </select>
            </FormControl>

            {/* accept txt files only */}
            {formState.uploadType === "file" && (
              <>
                <InputLabel>Upload Text File</InputLabel>
                <Dropzone
                  accept={{
                    "text/plain": [".txt"],
                  }}
                  onDrop={(_e) => {
                    const file = _e[0];

                    if (file) {
                      const filereader = new FileReader();
                      filereader.onload = (e) => {
                        const contents = e.target.result;
                        setFormState({
                          ...formState,
                          txtfile: _e,
                          answer: contents,
                        });
                      };
                      filereader.readAsText(file);
                    }
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      className="w-full border-[2px] border-slate-50 bg-white rounded-md py-[20px] text-center mb-2"
                      {...getRootProps()}
                      style={{
                        border: "1px solid",
                      }}
                    >
                      <input {...getInputProps()} />
                      <p className="text-slate-500">
                        Click to select file Contains the answer
                      </p>
                    </div>
                  )}
                </Dropzone>

                {formState.txtfile &&
                  formState.txtfile?.map((data, key) => {
                    return (
                      <div
                        key={key}
                        className="flex items-center justify-center capitalize"
                      >
                        <div className="bg-slate-200 px-2 my-2 py-2 w-full text-center flex justify-between items-center">
                          {data.name}
                          <Close
                            className="cursor-pointer text-gray-600"
                            onClick={() =>
                              setFormState({ ...formState, txtfile: [] })
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
              </>
            )}

            {formState.uploadType === "text" && (
              <ReactQuill
                value={formState.answer}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    answer: e,
                  });
                }}
                formats={formats}
                modules={modules}
                theme="snow"
                className="mb-4"
              />
            )}

            <FormControl fullWidth>
              <label htmlFor="age" className="text-gray-600">
                Question Type
              </label>
              <select
                onChange={(e) =>
                  setFormState({ ...formState, questionType: e.target.value })
                }
                value={formState.questionType}
                className="rounded p-1 bg-white"
              >
                <option value={""}>Select Question Type</option>
                {questionTypes &&
                  questionTypes?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.type}
                    </option>
                  ))}
              </select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addQuestion}>
            {questionToEdit ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

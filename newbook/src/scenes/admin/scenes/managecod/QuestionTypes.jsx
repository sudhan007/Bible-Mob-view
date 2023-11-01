import React, { useEffect, useState } from "react";
import { Alert, Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Sidebar from "../globaladmin/Sidebar";
import Topbar from "../globaladmin/Topbar";
import { Add } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { _axios } from "../../../../lib/axios";
import ClockLoader from "react-spinners/ClockLoader";

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    valueGetter: (params) => 1,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    valueGetter: (params) => `${params.row.type}`,
  },
];
export function QuestionTypes() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [data, setData] = useState({
    questionTypes: [],
  });

  const [modelsState, setModalsState] = useState({
    questionTypeModel: false,
  });

  const refetchData = () => setRefetch((prev) => !prev);

  useEffect(() => {
    async function getAllQuestionTypes() {
      try {
        const res = await _axios.get("/cod/getallquestiontype");

        if (res.data && res.data.message == "Success") {
          setData({ ...data, questionTypes: res.data?.data || [] });
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllQuestionTypes();
  }, [refetch]);

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
            <Header
              title="Manage Q&A"
              subtitle="Add and Manage Questions and Answers"
            />
            <div className="flex items-center gap-2">
              <Button
                className="font-bold"
                variant="outlined"
                size="small"
                startIcon={<Add />}
                onClick={() =>
                  setModalsState({ ...modelsState, questionTypeModel: true })
                }
              >
                Add Question Types
              </Button>
            </div>
          </Box>
        </Box>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data.questionTypes}
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
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>

        {modelsState.questionTypeModel && (
          <AddQuestionTypeModel
            modelsState={modelsState}
            setModalsState={setModalsState}
            refetchData={refetchData}
          />
        )}
      </main>
    </div>
  );
}

function AddQuestionTypeModel({ modelsState, setModalsState, refetchData }) {
  const [formState, setFormState] = useState({
    questionType: "",
  });

  const handleClose = () => {
    setModalsState({ ...modelsState, questionTypeModel: false });
  };

  const addQuestionType = async () => {
    try {
      const res = await _axios.post(
        `/cod/addquestiontype?type=${formState.questionType}`
      );

      if (res.data && res.data.message == "Success") {
        refetchData();
      }
    } catch (e) {
      console.log(e);
    }

    handleClose();
  };

  return (
    <>
      <Dialog open={modelsState.questionTypeModel} onClose={handleClose}>
        <DialogTitle>Add Question Type</DialogTitle>
        <DialogContent>
          <div className="min-w-[400px] mb-7">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Question Type"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) =>
                setFormState({ ...formState, questionType: e.target.value })
              }
              value={formState.questionType}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addQuestionType}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function AddQuestionModel() {
  return <h2>Add Question here!</h2>;
}

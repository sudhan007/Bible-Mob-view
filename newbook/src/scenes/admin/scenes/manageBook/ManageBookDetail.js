import React, { useEffect, useState } from "react";
import { Alert, Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Sidebar from "../globaladmin/Sidebar";
import Topbar from "../globaladmin/Topbar";
import { Add } from "@mui/icons-material";
import Modal from "react-modal";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import { _axios } from "../../../../lib/axios";
import ClockLoader from "react-spinners/ClockLoader";
import { Input } from "@mui/material";
import { BaseUrluser, _BaseUrluser } from "../../../../components/config/dev";
import { Close, Edit, DeleteForever } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";
const customStyles = {
    content: {
      width: "30%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

export function ManageBookDetail() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let { id } = useParams()

  const [ deldata , setDelData ] = useState()

  const [data, setData] = useState({
    questionTypes: [],
  });

  const [modelsState, setModalsState] = useState({
    questionTypeModel: false,
  });

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      valueGetter: (params) => `${params.row.bookTitle}`,
    },
    {
      field: "sub",
      headerName: "Sub title",
      flex: 1,
      valueGetter: (params) => `${params.row.subtit}`,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <div>
          <img style={{ width: 25 }} src={params.row.image} />
        </div>
      ),
    },
    {
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div className="flex gap-2">
          {/* <IconButton onClick={() => {}}>
            <Edit className="text-blue-400" />
          </IconButton> */}
          <IconButton
            onClick={() => { 
                setDelData(params)
                setIsOpen(true)
            }}
          >
            <DeleteForever className="text-red-500" />
          </IconButton>
        </div>
      ),
    },
  ];

  let deleteee = async () => { 
    console.log(deldata , 'sdfsdaz') 
    try {
      const res = await axios({
        method: "post",
        url: BaseUrluser + "/removebookone",
        data : {
            id : deldata.row._id,
            delid : id
        }
      });
      closeModal()
      if (res.data.status === true) {
        setData({ ...data, questionTypes: res.data?.data || [] });
      }
    } catch (e) {
      console.log(e);
    }
  };

  
  function closeModal() {
    setIsOpen(false);
  }

  const refetchData = () => setRefetch((prev) => !prev);

  useEffect(() => {
    async function getAllQuestionTypes() {
      try {
        const res = await axios({
          method: "post",
          url: BaseUrluser + "/getbookone",
          data:{
            id : id
          }
        });

        if (res.data.status === true) {
          setData({ ...data, questionTypes: res.data?.data || [] });
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllQuestionTypes();
  }, [refetch]);


  function AddQuestionTypeModel({ modelsState, setModalsState, refetchData }) {
  const [formState, setFormState] = useState({
    questionType: "",
    questionSub: "",

  });

  const [image, setImage] = useState();

  const handleClose = () => {
    setModalsState({ ...modelsState, questionTypeModel: false });
  };

  const addQuestionType = async () => {
    const formData = new FormData();
    formData.append(`file`, image);
    formData.append(`id`, id);
    formData.append(`title`, formState.questionType);
    formData.append(`subtitle`, formState.questionSub);
    // setIsOpen(true);
    let responce = await axios
      .post(`${BaseUrluser}/addbookone`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => { 
        console.log(res.data , 'fffff')
        if (res.data.status === true) {
            setData({ ...data, questionTypes: res.data?.data || [] });
          }
        console.log(res.data.data);
      })
      .catch((err) => {
        // swal("Oops!", "Something went wrong!", "error");
        // setIsOpen(false);
        console.log(err, "err");
      });

    // try {
    //     const res = await _axios.post(
    //         `/cod/addquestiontype?type=${formState.questionType}`
    //     );

    //     if (res.data && res.data.message == "Success") {
    //         refetchData();
    //     }
    // } catch (e) {
    //     console.log(e);
    // }

    handleClose();
  };

  return (
    <>
      <Dialog open={modelsState.questionTypeModel} onClose={handleClose}>
        <DialogTitle
          onClick={() => {
            console.log(image, "setImagesetImage");
          }}
        >
          Add Book Category
        </DialogTitle>
        <DialogContent>
          <div className="min-w-[400px] mb-7">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Book Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) =>
                setFormState({ ...formState, questionType: e.target.value })
              }
              value={formState.questionType}
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Book Sub Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) =>
                setFormState({ ...formState, questionSub: e.target.value })
              }
              value={formState.questionSub}
            />
            <Input
              type="file"
              style={{ width: "100%", marginTop: 20 }}
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              // Other props you might want to pass, such as accept, multiple, etc.
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
 
const getRowHeight = () => 120;

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
                Add Book
              </Button>
            </div>
          </Box>
        </Box>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data.questionTypes}
            columns={columns}
            getRowHeight={getRowHeight}
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      > 
          <>
            <div className="d-flex justify-content-between">
              <p style={{ color: "#000", fontWeight: "600", fontSize: 15 }}>
                Remove Category
              </p>
              <p
                onClick={closeModal}
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: 25,
                  cursor: "pointer",
                }}
              >
                x
              </p>
            </div>
            <div>
              <p style={{ color: "#000", fontWeight: "600", fontSize: 15 }}>
                Are you Sure you want delete Book
              </p>
              <div className="row">
                <div className="col-6">
                  <div
                    onClick={() => {
                      deleteee();
                    }}
                    style={{
                      width: "100%",
                      height: 50,
                      backgroundColor: "#fff",
                      border: "2px solid black",
                      borderRadius: 10,
                      padding: 13,
                      textAlign: "center",
                      color: "#000",
                      fontWeight: "600",
                      fontSize: 15,
                      cursor: "pointer",
                    }}
                    className=""
                  >
                    Yes
                  </div>
                </div>
                <div className="col-6">
                  <div
                    onClick={closeModal}
                    style={{
                      width: "100%",
                      height: 50,
                      backgroundColor: "#fff",
                      border: "2px solid black",
                      borderRadius: 10,
                      padding: 13,
                      textAlign: "center",
                      color: "#000",
                      fontWeight: "600",
                      fontSize: 15,
                      cursor: "pointer",
                    }}
                    className=""
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
          </> 
      </Modal>


    </div>
  );
}


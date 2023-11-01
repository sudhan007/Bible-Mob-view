import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Sidebar from "../globaladmin/Sidebar";
import Topbar from "../globaladmin/Topbar";
import Modal from "react-modal";
import axios from "axios";
import { BaseUrluser } from "../../components/config/dev";
import ReactLoading from "react-loading";
import { json, useNavigate } from "react-router-dom";
import objectHash from "object-hash";
import ClockLoader from "react-spinners/ClockLoader";

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

const customStyless = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Teamadmin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const [cname, setCname] = useState("");
  const [align, setAlign] = useState();

  const [err, setErr] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [modelval, setModelval] = useState(false);
  const [editss, setEditss] = useState(0);
  const [editssdata, setEditssdata] = useState();
  const [modalIsOpens, setIsOpens] = React.useState(false);

  let navigate = useNavigate();

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    setEditss(0);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    Start();
  }, []);

  let Start = async () => {
    let token = await localStorage.getItem("token");
    if (token === undefined || token === null || token === "") {
      navigate("/admin/login");
    } else {
      try {
        setIsOpens(true);
        let responce = await axios({
          method: "post",
          url: BaseUrluser + "/categorydetail",
          data: {
            token: token,
          },
        })
          .then((ree) => {
            console.log(ree.data, "ree.dataree.data");
            if (ree.data.status === true) {
              setData(ree.data.data);
              setIsOpens(false);
            } else {
              setErr(true);
              setErrmsg("Something Went Wrong");
              setIsOpens(false);
            }
          })
          .catch((err) => {
            navigate("/admin/login");
          });
      } catch (e) {
        setErr(true);
        setErrmsg("Network Error");
        setIsOpens(false);
      }
    }
  };

  let addCategory = async () => {
    setLoading(true);
    setErr(false);
    setIsOpens(true);
    let respon = await axios({
      method: "post",
      url: BaseUrluser + "/addcategory",
      data: {
        token: localStorage.getItem("token"),
        catname: cname,
        align: align,
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.data.status === true) {
          setData(res.data.data);
          setIsOpen(false);
          setIsOpens(false);
        } else {
          setErr(true);
          setErrmsg(res.data.message);
          setIsOpens(false);
        }
        console.log(res.data, "dcsd");
      })
      .catch((err) => {
        setLoading(false);
        setErr(true);
        setErrmsg(err.message);
        setIsOpens(false);
        console.log(err, "dcsd");
      });
  };

  let editClick = (dat) => {
    setIsOpen(true);
    setEditss(1);
    setEditssdata(dat);
    setCname(dat?.catname);
    setAlign(dat?.align);
    console.log(dat, "dat");
  };

  let editCategory = async () => {
    setIsOpens(true);
    let ooov = await axios({
      method: "post",
      url: BaseUrluser + "/editcategorydetail",
      data: {
        token: localStorage.getItem("token"),
        catname: cname,
        align: align,
        id: editssdata?._id,
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.data.status === true) {
          setData(res.data.data);
          setIsOpen(false);
          setIsOpens(false);
        } else {
          setErr(true);
          setErrmsg(res.data.message);
          setIsOpens(false);
        }
        console.log(res.data, "dcsd");
      })
      .catch((err) => {
        setLoading(false);
        setErr(true);
        setErrmsg("Network Error");
        setIsOpens(false);
        console.log(err, "dcsd");
      });
  };

  let editClicknext = (dat) => {
    delete dat.catname;

    const hash = btoa(JSON.stringify(dat));
    console.log(dat, "dvdvsdv", hash);
    navigate("/admin/detail" + "/" + dat._id + "/" + hash);
  };

  let deleteCategory = (dat) => {
    setEditss(3);
    setIsOpen(true);
    setEditssdata(dat);
  };

  let deleteCategoryss = async () => {
    setIsOpens(true);
    let ooov = await axios({
      method: "post",
      url: BaseUrluser + "/deletecategorydetail",
      data: {
        token: localStorage.getItem("token"),
        id: editssdata?._id,
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.data.status === true) {
          setData(res.data.data);
          setIsOpen(false);
          setIsOpens(false);
        } else {
          setErr(true);
          setErrmsg(res.data.message);
          setIsOpens(false);
        }
        console.log(res.data, "dcsd");
      })
      .catch((err) => {
        setLoading(false);
        setErr(true);
        setErrmsg("Network Error");
        setIsOpens(false);
        console.log(err, "dcsd");
      });
  };

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Box m="20px">
          <Header title="All Post" subtitle="Managing the Posts" />
          <div>
            <div className="row">
              {data?.map((dat, index) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: 300,
                        border: "3px solid  ",
                        borderRadius: 20,
                        padding: 20,
                      }}
                      className=""
                    >
                      <p style={{ fontSize: 30, textAlign: "center" }}>
                        {dat.catname}
                      </p>
                      <div className="row">
                        <div style={{ cursor: "pointer" }} className="col-6">
                          <div
                            onClick={() => {
                              editClick(dat);
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
                            }}
                            className=""
                          >
                            Edit
                          </div>
                        </div>
                        <div style={{ cursor: "pointer" }} className="col-6">
                          <div
                            onClick={() => {
                              editClicknext(dat);
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
                            }}
                            className=""
                          >
                            View
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div
                          onClick={() => {
                            deleteCategory(dat);
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
                          }}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
                <div
                  onClick={openModal}
                  style={{
                    width: "100%",
                    height: 300,
                    border: "3px dashed  ",
                    borderRadius: 20,
                    padding: 70,
                    cursor: "pointer",
                  }}
                  className=""
                >
                  <p style={{ fontSize: 100, textAlign: "center" }}>+</p>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </main>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {editss === 1 ? (
          <>
            <div className="d-flex justify-content-between">
              <p style={{ color: "#000", fontWeight: "600", fontSize: 15 }}>
                Edit Category
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
              <p style={{ color: "#000", marginTop: 10, marginBottom: 0 }}>
                Category Name
              </p>
              <input
                onChange={(e) => {
                  setErr(false);
                  setCname(e.target.value);
                }}
                value={cname}
                style={{ width: "100%", height: 40 }}
                type="text"
              />

              <p style={{ color: "#000", marginTop: 10, marginBottom: 0 }}>
                Align{" "}
              </p>
              <input
                onChange={(e) => {
                  setErr(false);
                  setAlign(e.target.value);
                }}
                value={align}
                style={{ width: "100%", height: 40 }}
                type="number"
              />
              {err === true ? (
                <p
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  {errmsg}
                </p>
              ) : (
                ""
              )}

              {loading === true ? (
                <div
                  style={{
                    backgroundColor: "#212529",
                    height: 40,
                    padding: 10,
                    textAlign: "center",
                    marginTop: 10,
                    borderRadius: 10,
                    cursor: "pointer",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <ReactLoading
                    className="roolloo"
                    type={"bubbles"}
                    color={"#fff"}
                    height={60}
                    width={40}
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    editCategory();
                  }}
                  style={{
                    height: 40,
                    backgroundColor: "#212529",
                    padding: 10,
                    textAlign: "center",
                    marginTop: 10,
                    borderRadius: 10,
                    cursor: "pointer",
                    color : '#fff'
                  }}
                >
                  Submit
                </div>
              )}
            </div>
          </>
        ) : editss === 0 ? (
          <>
            <div className="d-flex justify-content-between">
              <p style={{ color: "#000", fontWeight: "600", fontSize: 15 }}>
                New Category
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
              <p style={{ color: "#000", marginTop: 10, marginBottom: 0 }}>
                Category Name
              </p>
              <input
                onChange={(e) => {
                  setErr(false);
                  setCname(e.target.value);
                }}
                style={{ width: "100%", height: 40 }}
                type="text"
              />

              <p style={{ color: "#000", marginTop: 10, marginBottom: 0 }}>
                Align{" "}
              </p>
              <input
                onChange={(e) => {
                  setErr(false);
                  setAlign(e.target.value);
                }}
                style={{ width: "100%", height: 40 }}
                type="number"
              />
              {err === true ? (
                <p
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  {errmsg}
                </p>
              ) : (
                ""
              )}

              {loading === true ? (
                <div
                  style={{
                    backgroundColor: "#212529",
                    height: 40,
                    padding: 10,
                    textAlign: "center",
                    marginTop: 10,
                    borderRadius: 10,
                    cursor: "pointer",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <ReactLoading
                    className="roolloo"
                    type={"bubbles"}
                    color={"#fff"}
                    height={60}
                    width={40}
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    addCategory();
                  }}
                  style={{
                    height: 40,
                    backgroundColor: "#212529",
                    padding: 10,
                    textAlign: "center",
                    marginTop: 10,
                    borderRadius: 10,
                    cursor: "pointer",
                    color : '#fff'
                  }}
                >
                  Submit
                </div>
              )}
            </div>
          </>
        ) : (
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
                Are you Sure you want delete Categort : {editssdata?.catname}
              </p>
              <div className="row">
                <div className="col-6">
                  <div
                    onClick={() => {
                      deleteCategoryss();
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
        )}
      </Modal>

      <Modal
        isOpen={modalIsOpens}
        style={customStyless}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ClockLoader color="#36d7b7" />
      </Modal>
    </div>
  );
};

export default Teamadmin;

import React, { useState, useEffect } from "react";
import { BaseDashboardContext } from "../Context/BaseContext";
import { useParams } from "react-router-dom";
import { _axios } from "../../../../lib/axios";
import cls from "../../../../image/cls.png";
import sqr from "../../../../image/sqr.png";
import Modal from "react-modal";
import { RWebShare } from "react-web-share";
import { useLocation } from "react-router-dom";
import { _BaseUrluser } from "../../../../components/config/dev";
import prev from "../assets/prev.svg";
import next from "../assets/next.svg";
import { Settings } from "@mui/icons-material";
import { Drawer } from "@mui/material";

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

export function BMViewContent({
  handleSliderChange,
  colorMode,
  play,
  pagecontent,
  preid,
  NextPlan,
  bookcatdata,
}) {
  const { id: maincategory_id } = useParams();
  const { BMState, setBMState, BibleState, setBibleState } =
    BaseDashboardContext();
  const {
    sliderValue,
    selectedChapter,
    selectedBook,
    selectedMessage,
    books,
    messages,
  } = BMState;
  const { fetnext } = BibleState;

  let [show, setShow] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();

  function closeModal() {
    setIsOpen(false);
  }

  const handleDownloadPdf = (key) => {
    if (key) {
      window.open(`${_BaseUrluser}/user/servefiles?key=${key}`, "_blank");
    }
  };

  async function handleNextBookClick(type) {
    let currIdx = await +localStorage.getItem("currentbookidx");
    let hh = localStorage.getItem("activeView");
    if (hh === "Bible") {
      if (type == "next" && currIdx < books.length) {
        let nextIdx = currIdx + 1;
        await localStorage.setItem("currentbookidx", nextIdx);
      } else if (type == "prev" && currIdx > 0) {
        let prevIdx = currIdx - 1;
        await localStorage.setItem("currentbookidx", prevIdx);
      }
    } else {
      if (type == "next" && currIdx < messages.length) {
        let nextIdx = currIdx + 1;
        await localStorage.setItem("currentbookidx", nextIdx);
      } else if (type == "prev" && currIdx > 0) {
        let prevIdx = currIdx - 1;
        await localStorage.setItem("currentbookidx", prevIdx);
      }
    }

    console.log(
      localStorage.getItem("currentbookidx"),
      'localStorage.getItem("currentbookidx");'
    );

    setBibleState({
      ...BibleState,
      fetnext: !fetnext,
    });
  }

  useEffect(() => {
    let ps = document.querySelectorAll(".tracking-wide.leading-5.test > p");

    ps.forEach((p) => {
      // if inner html of p tag is br, then remove it
      if (p.querySelector("br")) {
        p.removeChild(p.querySelector("br"));
      }

      p.className = p.className.replace("keymanweb-font", "");
      p.className += " leading-7 text-justify";
    });
  }, [selectedChapter]);

  return (
    <div>
      <div className="container-xxl overflow-y-scroll">
        <div className="flex w-full gap-8 pt-2 justify-center">
          <div
            style={{
              border: "1px solid rgba(99, 12, 99, 1)",
              boxShadow: "rgba(99, 99, 99, 0.2) 4px 10px 13px 2px",
              borderRadius: 4,
              overflowX: "hidden",
            }}
            className={` ${
              show === 1 ? "w-[100%]" : show === 2 ? "hidden" : "w-[50%]"
            } container-xxl max-h-[calc(100vh-20px)] overflow-y-scroll`}
            id="bible-scroll"
          >
            <div className="flex w-full gap-8  justify-center">
              <div className="" style={{ width: "100%" }}>
                <div
                  className="row sticky top-0"
                  style={{ backgroundColor: "#b5b5b5" }}
                >
                  <div className="col-3">
                    <img
                      onClick={() => {
                        setShow(1);
                      }}
                      style={{ padding: 12 }}
                      src={sqr}
                    />
                  </div>
                  <div className="col-6">
                    <h1
                      style={{
                        backgroundColor: "#b5b5b5",
                        color: "#fff",
                        fontSize: 30,
                      }}
                      className="text-xl text-center  p-3 "
                    >
                      Bible
                    </h1>
                  </div>
                  <div className="col-3">
                    <img
                      onClick={() => {
                        setShow(0);
                      }}
                      style={{
                        padding: 12,
                        display: "block",
                        marginLeft: "auto",
                      }}
                      src={cls}
                    />
                  </div>
                </div>
                <div className="pl-4 flex">
                  <p
                    style={{
                      fontSize: sliderValue + "px",
                    }}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: selectedChapter?.bookDescription?.replace(
                          /\n/g,
                          "<br />"
                        ),
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(99, 12, 99, 1)",
              boxShadow: "rgba(99, 99, 99, 0.2) 4px 10px 13px 2px",
              borderRadius: 4,
              overflowX: "hidden",
            }}
            className={` ${
              show === 2 ? "w-[100%]" : show === 1 ? "hidden" : "w-[50%]"
            } container-xxl max-h-[calc(100vh-20px)] overflow-y-scroll`}
            id="bible-scroll"
          >
            <div className="flex w-full gap-8  justify-center">
              <div className="" style={{ width: "100%" }}>
                <div
                  className="row sticky top-0"
                  style={{ backgroundColor: "#b5b5b5" }}
                >
                  <div className="col-3">
                    <img
                      onClick={() => {
                        setShow(2);
                      }}
                      style={{ padding: 12 }}
                      src={sqr}
                    />
                  </div>
                  <div className="col-6">
                    <h1
                      style={{
                        backgroundColor: "#b5b5b5",
                        color: "#fff",
                        fontSize: 30,
                      }}
                      className="text-xl text-center  p-3 "
                    >
                      Message
                    </h1>
                  </div>
                  <div className="col-3">
                    <img
                      onClick={() => {
                        setShow(0);
                      }}
                      style={{
                        padding: 12,
                        display: "block",
                        marginLeft: "auto",
                      }}
                      src={cls}
                    />
                  </div>
                </div>

                <div className="pl-4 flex">
                  <p
                    style={{
                      fontSize: sliderValue + "px",
                    }}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: selectedMessage?.bookDescription?.replace(
                          /\n/g,
                          "<br />"
                        ),
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div
        onMouseEnter={() => {
          setSheetOpen(true);
        }}
        onMouseLeave={() => {
          if (!sheetOpen) {
            setTimeout(() => {
              setSheetOpen(false);
            }, 3000);
          }
        }}
        className="p-3 bg-maincolor cursor-pointer text-white rounded-full absolute bottom-10 right-10 flex justify-end items-end"
      >
        <Settings fontSize="large" />
      </div>
      <div className="max-w-[73%] relative">
        <Drawer
          anchor="bottom"
          open={sheetOpen}
          size={"sm"}
          onClose={() => setSheetOpen(false)}
          PaperProps={{
            sx: {
              bgcolor: "rgba(52, 9, 49, 0)",
              boxShadow: "none",
              width: "calc(100% - 23%)",
              left: "calc(100% - 75%)",
            },
          }}
        >
          <div className="p-4 bg-transparent">
            <div className="row bg-maincolor border-solid border-black border-[1px] h-[110px] rounded-[10px] w-[98%] mt-12">
              <div className="col">
                <p
                  style={{
                    display: "grid",
                    gridTemplateColumns: "37px 37px 37px",
                    gridTemplateRows: "40px",
                    rowGap: "10px",
                    columnGap: "15px",
                    marginTop: "7px",
                  }}
                >
                  <i
                    class="fa-solid fa-plus"
                    onClick={() => {
                      handleSliderChange(2, "add");
                    }}
                    style={{
                      backgroundColor: "white",
                      fontSize: "20px",
                      textAlign: "center",
                      paddingTop: "10px",
                    }}
                  ></i>

                  <i
                    class="fa-solid fa-minus"
                    onClick={() => {
                      handleSliderChange(2, "sub");
                    }}
                    style={{
                      backgroundColor: "white",
                      fontSize: "20px",
                      textAlign: "center",
                      paddingTop: "10px",
                    }}
                  ></i>

                  <i
                    class="bi bi-zoom-in"
                    style={{
                      backgroundColor: "white",
                      fontSize: "20px",
                      textAlign: "center",
                      paddingTop: "7px",
                    }}
                  ></i>
                  <i
                    onClick={() => {
                      setBMState({
                        ...BMState,
                        darkMode: !BMState.darkMode,
                      });

                      if (localStorage.getItem("mode") === "light") {
                        localStorage.setItem("mode", "dark");
                      } else {
                        localStorage.setItem("mode", "light");
                      }
                    }}
                    class="bi bi-brightness-high-fill"
                    style={{
                      backgroundColor: "white",
                      fontSize: "20px",
                      textAlign: "center",
                      paddingTop: "8px",
                    }}
                  ></i>

                  {selectedChapter && selectedChapter.pdf && (
                    <i
                      class="fa-solid fa-download"
                      style={{
                        backgroundColor: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    ></i>
                  )}
                  <RWebShare
                    data={{
                      text: "Bible",
                      url: location.pathname,
                      title: "Bible",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <i
                      class="fa-solid fa-share"
                      style={{
                        backgroundColor: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    ></i>
                  </RWebShare>
                </p>
              </div>

              <div className="col">
                <p style={{ color: "white" }}>
                  <div
                    style={{
                      marginTop: "25px",
                      marginLeft: "28px",
                      position: "absolute",
                      left: "-75px",
                    }}
                  >
                    {selectedChapter.audio && (
                      <audio controls>
                        <source
                          src={selectedChapter?.audio}
                          type="audio/mpeg"
                        />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                </p>
              </div>

              <div className="flex justify-center items-center gap-6 p-4">
                <div
                  className="cursor-pointer flex justify-center items-center gap-2 flex-col"
                  onClick={() => {
                    handleNextBookClick("prev");
                  }}
                >
                  <img src={prev} alt="arrow" srcSet="" className="w-8" />
                  <p className="text-white cursor-pointer font-bold">
                    Previous
                  </p>
                </div>

                <div
                  className="cursor-pointer flex justify-center items-center gap-2 flex-col"
                  onClick={() => {
                    handleNextBookClick("next");
                    setBMState({
                      ...BMState,
                      next: BMState.next + 1,
                    });
                  }}
                >
                  <img src={next} alt="" srcSet="" className="w-8" />
                  <p className="text-white cursor-pointer font-bold">Next</p>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>

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
              Download
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
            <p
              style={{
                color: "rgb(99, 12, 99)",
                fontWeight: "600",
                fontSize: 15,
              }}
            >
              Download Pdf or Text Formet
            </p>
            <div className="row">
              <div className="col-6">
                <div
                  onClick={() => {
                    handleDownloadPdf(selectedChapter.pdf);
                    closeModal();
                  }}
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#fff",
                    border: "2px solid rgb(99, 12, 99)",
                    borderRadius: 10,
                    padding: 13,
                    textAlign: "center",
                    color: "rgb(99, 12, 99)",
                    fontWeight: "600",
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                  className=""
                >
                  Pdf
                </div>
              </div>
              <div className="col-6">
                <div
                  onClick={() => {
                    handleDownloadPdf(selectedChapter.txt);
                    closeModal();
                  }}
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#fff",
                    border: "2px solid rgb(99, 12, 99)",
                    borderRadius: 10,
                    padding: 13,
                    textAlign: "center",
                    color: "rgb(99, 12, 99)",
                    fontWeight: "600",
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                  className=""
                >
                  Text
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
}

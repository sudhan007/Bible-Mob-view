import { BaseDashboardContext } from "../Context/BaseContext";
import { useParams } from "react-router-dom";
import { _axios } from "../../../../lib/axios";
import { _BaseUrluser } from "../../../../components/config/dev";
import prev from "../assets/prev.svg";
import next from "../assets/next.svg";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { RWebShare } from "react-web-share";
import { useLocation } from "react-router-dom";
import { Drawer } from "@mui/material";
import { Settings } from "@mui/icons-material";
import Mobbibleview from "./Mobbibleview";

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

export function BibleViewContent({
  handleSliderChange,
  colorMode,
  sliderValue,
}) {
  const { id: maincategory_id } = useParams();
  const { BibleState, setBibleState, BMState, setBMState, darkMode } =
    BaseDashboardContext();
  const { selectedChapter, selectedBook, books, fetnext, selectedBookAd } =
    BibleState;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const [conntt, setConntt] = useState();

  const location = useLocation();

  const handleDownloadPdf = (key) => {
    if (key) {
      window.open(`${_BaseUrluser}/user/servefiles?key=${key}`, "_blank");
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  async function handleNextandPrev(type) {
    let currIdx = +localStorage.getItem("currentbookidx");

    if (type == "next" && currIdx < books.length) {
      let nextIdx = currIdx + 1;
      await localStorage.setItem("currentbookidx", nextIdx);
    } else if (type == "prev" && currIdx > 0) {
      let prevIdx = currIdx - 1;
      await localStorage.setItem("currentbookidx", prevIdx);
    }

    setBibleState({
      ...BibleState,
      fetnext: !fetnext,
    });
  }

  function makeNameprettier(title) {
    if (!title) return " ";

    let newtitle = title.replace(".txt", "");
    return newtitle;
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


  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
    
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileView]);



  return (
 <>
 {isMobileView ? <Mobbibleview /> : 
 
 <>
 <div>
   <div
     className="container-xxl max-h-[calc(100vh)] overflow-y-scroll"
     id="bible-scroll"
   >
     <div className="flex w-full gap-8 justify-center items-center">
       <div className="" style={{ width: "100%" }}>
         <h1
           className={`text-xl bg-maincolor text-black font-roboto-slab text-center p-2 sticky top-0 ${
             !BMState.darkMode
               ? "border-[2px] border-solid border-gray-900"
               : "border-[2px] border-solid border-gray-50"
           }`}
         >
           {selectedBookAd?.subcatname} /{" "}
           {makeNameprettier(selectedChapter?.realbook)}
         </h1>
         <div className="pl-4 flex">
           <p
             style={{
               fontSize: sliderValue + "px",
             }}
             className="px-4"
           >
             {/*  */}
             <p
               className="tracking-wide leading-5 test"
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
 </div>

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
   className="p-3 bg-maincolor cursor-pointer text-white rounded-full absolute bottom-10 right-[50%] flex justify-end items-end"
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
         left: "calc(100% - 76%)",
       },
     }}
   >
     <div className="p-4 bg-transparent">
       <div className="flex bg-maincolor border-solid border-black border-[1px] h-[110px] rounded-[10px] w-full mt-12">
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

         <div
           className="flex justify-center items-center gap-6 p-5"
           style={{ marginTop: 20 }}
         >
           <div
             className={`cursor-pointer flex justify-center items-center gap-2 flex-col`}
             onClick={() => handleNextandPrev("prev")}
           >
             <img src={prev} alt="arrow" srcSet="" className="w-8" />
             <p className="text-white cursor-pointer font-bold">
               Previous
             </p>
           </div>

           <div
             className={`cursor-pointer flex justify-center items-center gap-2 flex-col`}
             onClick={() => handleNextandPrev("next")}
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
</>
 
 }
 </>
  );
}

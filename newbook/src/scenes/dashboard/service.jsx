import React from "react";
import bik from "../../image/Ellipse9.png";
import thirtyone from "../../image/Ellipse9.png";

function Service() {
  const inputStyle = {
    borderColor: "#E000A1",
    backgroundColor: "#F6F6F6",
    boxShadow: "0px 4px 0px 0px #000000",
  };

  // const placeholderNames = [
  //   "வேத விசுவாசம்",
  //   "இயேசுவின் வார்த்தைகள்",
  //   "கிறிஸ்துமஸ் கதைகள்",
  //   "பிபிள்புகள",
  //   "கேள்வி மற்றும் பதில்",
  //   "ஆத்திசயங்கள",
  //   "வார்த்தை வளர்த்தல்",
  //   "ஆதியாகமம்",
  //   "ரொமர் பதிவுகள்",
  //   "பரியேறின முந்து",
  //   "இயேசுவின் வரதம்",
  //   "ஆதியாகம கதைகள்",
  //   "கிறிஸ்தவ படைப்பு",
  //   "ஆத்திசய கதைகள்",
  //   // Add the remaining placeholder names here...
  // ];

  return (
    <>
      {/* first set */}

      <div style={{ backgroundColor: "#800080" }} className="container-fluid">
        <div className="d-flex justify-content-between">
          {/* Logo on the left */}
          <img
            style={{ height: "44px", marginTop: "5px" }}
            src={bik}
            className="img-fluid"
          />

          <div class="">
            <h1 style={{ fontFamily: "Bakbak One" }} className="abc">
              The Last Voice Ministry
            </h1>
          </div>

          <div class=""></div>
        </div>
        {/* Content in the center */}
      </div>

      {/* second set */}

      <nav
        style={{ backgroundColor: " #320032", height: "40px" }}
        className="navbar navbar-expand-md justify-content-center"
      >
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a
              style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
              className="nav-link"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
              className="nav-link"
              href="#"
            >
              Bible
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
              className="nav-link"
              href="#"
            >
              Message
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
              className="nav-link"
              href="#"
            >
              COD
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
              className="nav-link"
              href="#"
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
              className="nav-link"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/*  */}

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <h3
              style={{ fontFamily: "Source Sans 3", fontWeight: "bold" }}
              className="text-center"
            >
              SPECIAL BOOKS
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
         <div className="row">
         <div className="col-6">
              <h3 className="text-center mt-4 mb-4">English Books</h3>
                    
                 <a href=""  style={{color:"black",fontSize:"20px",fontWeight:"700",border:"1px solid #E000A1 ",backgroundColor:"#F6F6F6",borderRadius:"4px",padding:"10px 190px 10px 60px",marginLeft:"10px",textDecoration:"none"}}>
              Call to Christian Service
              </a>
                
            
              </div>
              <div className="col-6">
                <h3 className=" mt-4 mb-4" style={{marginLeft:"80px"}}>Tamil Books</h3>
                <a href=""  style={{color:"black",fontSize:"20px",fontWeight:"700",border:"1px solid #E000A1 ",backgroundColor:"#F6F6F6",borderRadius:"4px",padding:"10px 190px 10px 60px"}}>
              Call to Christian Service
              </a>
                
             
              </div>
         </div>
      </div> */}

      <div className="container-fluid">
        <div className="row" style={{ padding: "0px 60px" }}>
          <div className="col-6">
            <h3
              style={{ fontFamily: "Source Sans 3", fontWeight: "bold" }}
              className="text-center"
            >
              English Books
            </h3>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
          </div>
          <div className="col-6">
            <h3
              style={{ fontFamily: "Source Sans 3", fontWeight: "bold" }}
              className="text-center"
            >
              Tamil Books
            </h3>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>{" "}
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "90%",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 4px 4px rgb(211, 211, 211)",
                textIndent: "80px",
                height: "40px",
                color: "black",
                fontWeight: "bold",
                paddingTop: "8px",
                fontSize: "16px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "-8px",
              }}
            >
              <a
                href=""
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                Call to Christian Service
              </a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <br />

      <br />

      <br />

      <br />

      <div className="container-fluid" id="pk">
        <div className="row">
          <div className="col-6">
            <img src={thirtyone} alt="Logo" className="img-fluidd" />
            <span
              style={{
                borderRight: "1px solid white",
                paddingRight: "15px",
                padding: "7px",
                paddingTop: "13px",
                paddingBottom: "20px",
                marginLeft: "-5px",
              }}
              id="ty"
            >
              The Last Voice Ministry
            </span>
            <a href="#" className="btn btn-link" id="jk">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" className="btn btn-link" id="kj">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-link" id="i">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <div className="col-6">
            <div className="row" id="le">
              <div className="col">
                <h4 id="rr">Page</h4>
                <ul className="vl">
                  <li class="zx">
                    <a href="#">About us</a>
                  </li>
                  <li class="zx">
                    <a href="#">Reviews</a>
                  </li>
                  <li class="zx">
                    <a href="#">Contact us</a>
                  </li>
                  <li class="zx">
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 id="rr">Help</h4>
                <ul className="lu">
                  <li class="zx">
                    <a href="#">Privacy</a>
                  </li>
                  <li class="zx">
                    <a href="#">Policy</a>
                  </li>
                  <li class="zx">
                    <a href="#">Terms of use</a>
                  </li>
                </ul>
              </div>

              <div className="col" ml-6>
                <h4 id="rr">Contact</h4>
                <ul className="lu">
                  <li class="zx">
                    <a href="#">+91-85252518825</a>
                  </li>
                  <li class="zx">
                    <a href="#">nagercoilchurch@gmail.com</a>
                  </li>
                  <li class="zx">
                    <a href="#">SSC Church Street,ngl</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last set */}

      {/* modal div below  */}
    </>
  );
}

export default Service;

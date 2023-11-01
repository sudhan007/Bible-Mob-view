import React from "react";
import bi8 from "../../image/Ellipse2.png";
import image50 from "../../image/Vector(1).png";
import image49 from "../../image/Vector(2).png";
import image48 from "../../image/Vector(3).png";
import image47 from "../../image/Button.png";
import image46 from "../../image/Vector(4).png";
import image59 from "../../image/Group47.png";

function Bm() {
 
  return (
    <>
      {/* first set */}

      <div
        style={{ backgroundColor: "#800080", height: "50px" }}
        className="container-fluid"
      >
        <div className="row">
          {/* Logo on the left */}
          <img src={bi8} className="img-fluid" id="logo" />

          <div class="">
            <h3 className="abcc">The Last Voice Ministry</h3>
          </div>

          <div class=""></div>
        </div>
        {/* Content in the center */}
      </div>

      <div className="container-fluid" style={{}}>
        <div
          style={
            {
              // borderRight: "1px solid black !important ",
              // boxShadow: "1px 4px 4px rgb(211, 211, 211)",
            }
          }
          className="row"
        >
          <div
            style={{
              backgroundColor: "#620362",
              paddingTop: "13px",
              //   borderRight: "1px solid black !important ",
              //   boxShadow: "1px 4px 4px rgb(211, 211, 211)",
            }}
            className="col-3"
          >
            {/*  */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                marginLeft: "-14px",
              }}
            >
              <img
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "12px",
                  marginRight: "1px",
                }}
                src={image50}
              />
              <img
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "10px",
                  marginRight: "1px",
                }}
                src={image49}
              />
              <img
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "10px",
                  marginRight: "1px",
                }}
                src={image59}
              />

              <img
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "10px",
                  marginRight: "1px",
                }}
                src={image48}
              />
              <img
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "5px",
                  marginRight: "1px",
                  // width: "45px",
                }}
                src={image47}
              />

              <img
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "10px",
                  // width: "45px",
                }}
                src={image46}
              />
            </div>
            <br />

            <input
              style={{
                textIndent: "30px",
                backgroundColor: "#340931",
                color: "white",
                width: "300px",
                border: "0",
                height: "30px",
                position: "relative",
                top: "0px",
                width: "106%",
                marginLeft: "-9px",
                // marginBottom: "28px",
                borderRadius: "5px",
              }}
              type="text"
              name="search"
              placeholder="Search"
            />
            <i
              class="fa fa-search"
              style={{
                color: "white",
                position: "relative",
                left: "10px",
                top: "-25px",
              }}
            ></i>
            {/*  */}
            <br />
            <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
              <button
                style={{
                  padding: "5px 30px",
                  backgroundColor: "#410041",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600",
                  border: "0",
                  borderRadius: "5px",
                }}
              >
                BIBLE
              </button>
              <button
                style={{
                  padding: "5px 30px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  border: "0",
                  borderRadius: "5px",
                }}
              >
                MESSAGE
              </button>
              \
            </div>
            {/*  */}
            <br />

            {/* 1.
            <div style={{ display: "flex" }}>
              <h4
                style={{
                  backgroundColor: "#410041",
                  border: "1px solid white",
                  color: "white",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                BIBLE
              </h4>
              <h4
                style={{
                  backgroundColor: "white",
                  border: "1px solid white",
                  fontFamily: "Anek Tamil",
                  fontWeight: "bold",
                }}
              >
                MESSAGE
              </h4>
            </div>

            {/* 1. */}
            {/* 2 */}

            <div className="">
              <h5
                style={{
                  backgroundColor: "white",
                  fontFamily: "Source Sans 3",
                  fontWeight: "bold",
                  height:"30px",
                  marginTop:"3px",
                  width:"90%",
                  marginLeft:"15px",
                  paddingLeft:"15px"

                }}
              >
                Total:3073
              </h5>
            </div> 

            {/* 2.1 */}

          <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "  Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
              }}
            >
              ஆதியாகமம் 50{" "}
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              யாத்திராகமம் 40{""}
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              லேவியராகமம் 27 {""}
            </p>

            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              எண்ணாகமம் 36
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              உபாகமம் 34
            </p>

            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              யோசுவா 24
            </p>

            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              நியாயாதி 6
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              ரூத் 4
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              சாமுவேல் 1
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              சாமுவேல் 2
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              இராஜாக்கள் 1{" "}
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              இராஜாக்கள் 2
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              நாளாகம் 1
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "104%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              நாளாகம் 2
            </p>
            <p
              style={{
                border: "1px solid #E000A1",
                width: "100%",
                backgroundColor: "#F6F6F6",
                textIndent: "30px",
                height: "40px",
                paddingTop: "8px",
                fontFamily: "   Anek Tamil",
                fontWeight: "bold",
                width: "%",
                marginRight: "-10px",
                marginLeft: "-7px",
                marginTop: "-13px",
              }}
            >
              எஸ்றா 10
            </p>
            </div>
          <div
            className="col-9"
            style={{
              backgroundColor: "#FBE8FD",
              display: "grid",
              gridTemplateColumns: "48% 48%",
              gridTemplateRows: "62%",
              padding: "20px",
              gap: "20px",
            }}
          >
            
            <div style={{ border: "1px solid", borderColor: "#340A32" }}>
              <div>
                <i
                  class="fa-solid fa-expand"
                  style={{ padding: "10PX", fontSize: "20px" }}
                ></i>
                <button
                  style={{
                    backgroundColor: "#630C63",
                    border: "0",
                    position: "absolute",
                    left: "20%",
                    top: "15px",
                    padding: "10px 30px",
                    color: "white",
                  }}
                >
                  BIBLE
                </button>

                <i
                  class="fa fa-close"
                  style={{
                    position: "absolute",
                    right: "550px",
                    top: "30px",
                    fontSize: "20px",
                  }}
                ></i>
              </div>
            </div>

            <div style={{ border: "1px solid ", borderColor: "#340A32" }}>
              <i
                class="fa-solid fa-expand"
                style={{ padding: "10px", fontSize: "20px" }}
              ></i>
              <button
                style={{
                  backgroundColor: "#630C63",
                  border: "0",
                  padding: "10px 30px",
                  color: "white",
                  position: "absolute",
                  top: "15px",
                  right: "220px",
                }}
              >
                MESSAGE
              </button>
              <i
                class="fa fa-close"
                style={{
                  fontSize: "20px",
                  position: "absolute",
                  right: "60px",
                  top: "30px",
                }}
              ></i>
            </div>

            {/*  */}
            <div
              className="container"
              style={{
                border: "1px solid black",
                height: "110px",
                backgroundColor: "rgba(94, 3, 94, 0.98)",
                borderRadius: "10px",
                position: "fixed",
                top: "500px",
              }}
            >
              <div className="row">
                <div className="col-4">
                  <p
                    style={{
                      display: "grid",
                      gridTemplateColumns: "37px 37px 37px",
                      gridTemplateRows: "40px",
                      rowGap: "10px",
                      columnGap: "15px",
                      marginTop: "7px",
                      marginLeft: "14px",
                    }}
                  >
                    <i
                      class="fa-solid fa-plus"
                      style={{
                        backgroundColor: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        paddingTop: "10px",
                      }}
                    ></i>

                    <i
                      class="fa-solid fa-minus"
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
                        paddingTop: "10px",
                      }}
                    ></i>
                    <i
                      class="bi bi-brightness-high-fill"
                      style={{
                        backgroundColor: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        paddingTop: "8px",
                      }}
                    ></i>

                    <i
                      class="fa-solid fa-download"
                      style={{
                        backgroundColor: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    ></i>
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
                  </p>
                </div>

                <div className="col-4">
                  <p style={{ color: "white" }}>
                    <div
                      style={{
                        marginTop: "25px",
                        marginLeft: "120px",
                      }}
                    >
                      <audio controls>
                        <source src="" />
                      </audio>
                    </div>
                  </p>
                </div>

                <div className="col-4">
                  <p
                    style={{
                      color: "white",
                      display: "grid",
                      gridTemplateColumns: "30px 30px",
                      gridTemplateRows: "10px",
                      marginTop: "40px",
                      columnGap: "40px",
                      rowGap: "10px",
                      textAlign: "center",
                      position: "absolute",
                      left: "440px",
                    }}
                  >
                    <i
                      class="fa-solid fa-circle-chevron-left"
                      style={{ fontSize: "20px" }}
                    ></i>
                    <i
                      class="fa-solid fa-circle-chevron-right"
                      style={{ fontSize: "20px" }}
                    ></i>

                    <span style={{ marginTop: "5px", marginLeft: "-6px" }}>
                      PREVIOUS
                    </span>
                    <span style={{ marginTop: "5px", marginLeft: "5px" }}>
                      NEXT
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
    </>
  );
}

export default Bm;

import React from "react";
import bik from "../../image/Ellipse9.png";
import { Grid } from "@mui/material";
import fourteen from "../../image/Ellipse2.png";
//   "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?",
//      "2.ஒழுங்கின்மையும் வெறுமையுமாயிருந்தது எது?",
//      "3.ஆழத்தின் மேல் இருந்தது எது?",
//      "4.தேவ ஆவியானவர் எதின் மேல் அசைவாடிக்கொண்டிருந்தார்?",
//      "5.தேவன் முதலாவது உண்டாக்கியது எது?",
//      "6.ஜலத்தினின்று ஜலத்தை பிரித்தது எது? ",
//      "7.தேவன் ஆகாயவிரிவிற்கு வைத்த பெயர்?",
//      "8.தேவன் வெட்டாந்தரைக்கு வைத்த பெயர்?",
//      "9.தேவன் ஜலத்திற்கு வைத்த பெயர்?? ",
//      "10.காலங்களையும், நாட்களையும், வருஷங்களையும் குறிக்க உண்டாக்கப்பட்டது?? ",
//      "11.தேவன் பகலை ஆள உண்டாக்கியது எது?",
//      "12.தேவன் இரவை ஆள உண்டாக்கியது எது?",
//      "13.எத்தனை மகத்தான சுடர்களை தேவன் உண்டாக்கினார்?",
//      "14.தேவன் தாம் உண்டாக்கின எல்லாவற்றையும் பார்த்தார்?",
//      "15.உயிர்த்தெழுந்த இயேசு சீஷர்களுக்கு தரிசனமான கடற்கரை?",
//      "16.மீன் பிடிக்க போகிறேன் என்றது யார்? ",
//      "17.பிள்ளைகளே புசிக்கிறதற்கு ஏதாகிலும் உண்டா என்று கேட்டது?? ",
//          " 18.நீ என்னிடத்தில் அன்பாயிருக்கிறாயா என்று இயேசு யாரிடம் கேட்டார்??",
//          "19.தன் மேற்சட்டையை கட்டிக்கொண்டு கடலில் குதித்தது? ",
//      "20.சீமோன் பேதுரு கடலில் குதித்த இடத்திலிருந்து கரைக்கு எவ்வளவு தூரம்?? ",
//      "21.சீமோன் பேதுரு இழுத்த வளையில் இருந்த மீன்கள் எத்தனை?? ",
//      "22.இயேசு மரித்தோரிலிருந்து எழுந்த பின்பு சீஷருக்கு. மூன்றாவது தரிசனமான இடம்?? ",
//     " 23.நீ என்னிடத்தில் அன்பாயிருக்கிறாயா என்று இயேசு யாரிடம் கேட்டார்?? "

function Question() {
  return (
    <>
      {" "}
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
      <div
        className="container-fluid
     "
      >
        <h2
          style={{
            fontFamily: "Source Sans 3",
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            backgroundColor: "#800080",
          }}
        >
          COD Questions and Answers
        </h2>
      </div>
      <div style={{}} className="d-flex justify-content-center">
        <h4
          style={{
            border: "1px solid",
            borderColor: "#E000A1",
            backgroundColor: "#F6F6F6",
            fontFamily: "Anek Tamil",
            paddingLeft: "44px",
            paddingTop: "7px",
            fontWeight: "bold",
            borderRadius: "7px",
            marginTop: "28px",
            width: "25%",
            height: "40px",
          }}
        >
          {" "}
          அனைத்து கேள்விகள்
        </h4>
      </div>
      <br />
      <br />
      {/*  */}
      <div
        style={{}}
        className="d-flex justify-content-start
        "
      >
        <div className="row" style={{ width: "96%" }}>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
          <div
            style={{
              border: " 1px solid #E000A1 ",
              backgroundColor: "#F6F6F6",
              borderRadius: "6px",
              textIndent: "10px",
              color: "black",
              boxShadow: "0px 4px 4px rgb(211, 211, 211)",
              padding: "2px 0px",
              fontFamily: "Source Sans 3",
              fontWeight: "bold",
              marginLeft: "45px",
              marginRight: "150px",
              height: "40px",
              marginTop: "3px",
            }}
            className="col-12"
          >
            <p style={{ marginTop: "10px" }}>
              "1.ஆதியிலே தேவன் வானத்தையும், பூமியையும் ஏன் படைத்தார்?"
            </p>
          </div>
        </div>
        {/*  */}
      </div>
      <br />
      <br />
      <br />
      <br />
      {/*  */}
      <div className="container-fluid" id="pk">
        <div className="row">
          <div className="col-md-6">
            <img src={fourteen} alt="Logo" className="img-fluidd" />
            <span id="ty">The Last Voice Ministry</span>
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
          {/*  */}
        </div>
      </div>{" "}
    </>
  );
}

export default Question;

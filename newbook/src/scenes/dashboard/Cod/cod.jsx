import React, { useState, useEffect } from "react";
import bi6 from "../../image/Ellipse9.png";
import bi7 from "../../image/image50.png";
import { Grid } from "@mui/material";
import fourteen from "../../image/Ellipse2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrluser } from "../../../components/config/dev";

function Cod() {
  const [selected, setSelected] = useState("Dashboard");
  const [alldata, setAlldata] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [data, setData] = useState(2);

  let navigate = useNavigate();

  useEffect(() => {
    document.getElementById("root").classList.add("specific-screen-style");

    start();
  }, []);

  let start = async () => {
    let responce = await axios({
      method: "get",
      url: BaseUrluser + "/allbookcat",
    })
      .then((ree) => {
        console.log("savsv  wfcwfd wefcwfdc qefdcw");
        if (ree.data.status === true) {
          setAlldata(ree.data.data);
          setData(2);
        } else {
          setData(1);
        }
      })
      .catch((err) => {
        setData(1);
        console.log(err);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  let nextpage = (data) => {
    if (data.catname === "cod") {
      navigate(`/cod/${data._id}/${data.catname}`);
    } else {
      navigate(`/bible/${data._id}/${data.catname}`);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#800080" }} className="container-fluid">
        <div className="d-flex justify-content-between">
          {/* Logo on the left */}
          <img
            style={{ height: "44px", marginTop: "5px" }}
            src={bi6}
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
          {alldata?.map((data, key) => {
            return (
              <li
                onClick={() => {
                  nextpage(data);
                }}
                style={{ cursor: "pointer" }}
                className="nav-item"
              >
                <a
                  style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
                  className="nav-link"
                  id="hm"
                >
                  {data?.catname}
                </a>
              </li>
            );
          })}
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
        <h2>COD Questions and Answers</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          justifyContent: "space-around",
          padding: "50px 50px 0px 50px",
        }}
      >
        <div
          style={{
            border: "1px solid #E000A1",
            height: "130px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#F6F6F6",
            width: "90%",
            marginLeft: "30px",
          }}
        >
          <a href="/question" style={{ textDecoration: "none" }}>
            <h3
              style={{
                fontFamily: "Anek Tamil",
                fontWeight: "Bold",
                paddingTop: "50px",

                color: "black",
              }}
            >
              அனைத்து கேள்விகள்
            </h3>
          </a>
        </div>
        <div
          style={{
            border: "1px solid #E000A1",
            height: "130px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#F6F6F6",
            width: "90%",
            marginRight: "40px",
          }}
        >
          <h3
            style={{
              fontFamily: "Anek Tamil",
              fontWeight: "Bold",
              paddingTop: "50px",
            }}
          >
            {" "}
            பழைய ஏற்பாட்டின் கேள்விகள்
          </h3>
        </div>
        <div
          style={{
            border: "1px solid #E000A1",
            height: "130px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#F6F6F6",
            width: "90%",
            marginLeft: "30px",
          }}
        >
          <h3
            style={{
              fontFamily: "Anek Tamil",
              fontWeight: "Bold",
              paddingTop: "50px",
            }}
          >
            {" "}
            அனைத்து கேள்விகள்
          </h3>
        </div>
        <div
          style={{
            border: "1px solid #E000A1",
            height: "130px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#F6F6F6",
            width: "90%",
            marginRight: "40px",
          }}
        >
          <h3
            style={{
              fontFamily: "Anek Tamil",
              fontWeight: "Bold",
              paddingTop: "50px",
            }}
          >
            {" "}
            அனைத்து கேள்விகள்
          </h3>
        </div>
        <div
          style={{
            border: "1px solid #E000A1",
            height: "130px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#F6F6F6",
            width: "90%",
            marginLeft: "30px",
          }}
        >
          <h3
            style={{
              fontFamily: "Anek Tamil",
              fontWeight: "Bold",
              paddingTop: "50px",
            }}
          >
            {" "}
            அனைத்து கேள்விகள்
          </h3>
        </div>
        <div
          style={{
            border: "1px solid #E000A1",
            height: "130px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#F6F6F6",
            width: "90%",
            marginRight: "50px",
          }}
        >
          <h3
            style={{
              fontFamily: "Anek Tamil",
              fontWeight: "Bold",
              paddingTop: "50px",
            }}
          >
            {" "}
            அனைத்து கேள்விகள்
          </h3>
        </div>
      </div>
      <h1
        style={{
          color: "white",
          position: "relative",
          left: "850px",
          top: "320px",
          fontSize: "55px",
          fontFamily: "Eras Bold ITC",
        }}
      >
        Questions & <br /> Answers
      </h1>
      <div
        style={{ marginTop: "20px", marginLeft: "-13px" }}
        className="container-fluid"
      >
        <img src={bi7} />
      </div>{" "}
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

export default Cod;

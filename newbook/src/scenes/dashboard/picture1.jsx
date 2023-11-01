import React from "react";
import bic from "../../image/Ellipse2.png";
import image16 from "../../image/image16.png";
import image15 from "../../image/image15.png";
import image14 from "../../image/image14.png";
import image13 from "../../image/image13.png";
import image12 from "../../image/image12.png";
import image17 from "../../image/image17.png";
import image18 from "../../image/image18.png";
import image19 from "../../image/image19.png";
import image21 from "../../image/image21.png";
import image20 from "../../image/image20.png";
import thirty from "../../image/Ellipse2.png";

function Picture() {
  return (
    <>
      <div style={{ backgroundColor: "#800080" }} className="container-fluid">
        <div className="d-flex justify-content-between">
          {/* Logo on the left */}
          <img src={bic} className="img-fluid" id="jhhh" />

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
          <li className="nav-item">
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

      <div className="container-fluid p-5  text-white text-center">
        <h4
          style={{
            fontWeight: "bold",
            fontFamily: "Source Sans 3",
            color: "black",
          }}
        >
          PUBLISHED BOOKS
        </h4>
      </div>

      <div className="image-container ml-4">
        {/* First Row */}
        <div
          className="row"
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              <img src={image16} alt="Image 1" />
            </div>
            <h5
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              The Life of Jesus
            </h5>
            <p style={{ marginTop: "-4px" }}> by Ernest Renan</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              <img src={image15} alt="Image 2" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              A Revolutionary Biography
            </h6>
            <p style={{ marginTop: "-4px" }}>by Ernest Renan</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image14} alt="Image 3" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              A Pilgrimage
            </h6>
            <p style={{ marginTop: "-4px" }}>John Dominic Crossan</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image13} alt="Image 4" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              {" "}
              An Historical Approximation
            </h6>
            <p style={{ marginTop: "-4px" }}>James Martin</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image12} alt="Image 5" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                marginLeft: "5px",
                paddingTop: "19px",
              }}
            >
              The Life of Nazareth
            </h6>
            <p style={{ marginTop: "-4px" }}>José Antonio Pagola</p>
          </div>
        </div>

        {/* Second Row */}
        <div
          className="row mt-5 mb-5"
          style={{ justifyContent: "space-evenly" }}
        >
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image17} alt="Image 6" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              The Jesus I Never Knew{" "}
            </h6>
            <p style={{ marginTop: "-4px" }}> by Ernest Renan</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image18} alt="Image 7" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              Jesus Eastern Eyes
            </h6>
            <p style={{ marginTop: "-4px" }}> by Ernest Renan</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image19} alt="Image 8" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              The Case for Christ
            </h6>
            <p style={{ marginTop: "-4px" }}>John Dominic Crossan</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image21} alt="Image 9" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              The Historical Jesus
            </h6>
            <p style={{ marginTop: "-4px" }}>James Martin</p>
          </div>
          <div className="image-item">
            <div
              style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
              className=""
            >
              {" "}
              <img src={image20} alt="Image 10" />
            </div>
            <h6
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "bold",
                paddingTop: "19px",
              }}
            >
              Simply Jesus
            </h6>
            <p style={{ marginTop: "-4px" }}>Jose Antonio Pagola</p>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="pk">
        <div className="row">
          <div className="col-6">
            <img src={thirty} alt="Logo" className="img-fluidd" />
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
    </>
  );
}
export default Picture;

import React, { useState, useEffect } from "react";
import bih from "../../image/Ellipse9.png";
import nineteen from "../../image/Ellipse2.png";
import pop from "../../image/popup.png";
import { useNavigate } from "react-router-dom"; //nav check 25-28th line
import { Navebar } from "../../components/Navebar";
import eleven from "../../image/Ellipse9.png";
import Modal from "react-modal";
import axios from "axios";
import del from "../../../src/image/cls.png";
import { BaseUrluser } from "../../components/config/dev";
import Moblayoutpage from "../../components/Mobileview/Moblayoutpage";

const customStyles = {
  content: {
    width: "60%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(67, 0, 67)",
    border: "none",
  },
};

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [cname, setCname] = useState();
  const [city, setCity] = useState();

  const [data, setData] = useState();

  let navigate = useNavigate(); //nav

  useEffect(() => {
    start();
  }, []);

  let start = async () => {
    let re = await axios({
      method: "get",
      url: BaseUrluser + "/getbooktwo",
    })
      .then((rt) => {
        console.log(rt.data);
        setData(rt.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function closeModal() {
    setIsOpen(false);
  }

  // Function to toggle the modal's visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  let submit = async () => {
    if (name === "" || address === "") {
      alert("Enter Name and address Field");
      return;
    }
    let asd = await axios({
      method: "post",
      url: BaseUrluser + "/addbooktwo",
      data: {
        title: name,
        city: city,
        address: address,
        mobile: phone,
        pin: cname,
      },
    })
      .then((rty) => {
        setData(rty.data.data);
      })
      .catch((io) => {
        console.log(io);
      });
  };

  let dels = async (id) => {
    let gg = await axios({
      method: "post",
      url: BaseUrluser + "/removebooktwo",
      data: {
        id: id,
      },
    })
      .then((rty) => {
        setData(rty.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


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
  {isMobileView ? <Moblayoutpage/> : 
  
  <>
  {/* first set */}

  <div style={{ backgroundColor: "#800080" }} className="container-fluid">
    <div className="d-flex justify-content-between">
      {/* Logo on the left */}
      <img
        style={{ height: "44px", marginTop: "5px" }}
        src={bih}
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

  <Navebar />

  <div className="container mt-5">
    <div className="row">
      <div className="col">
        <h2
          style={{ fontFamily: "Source Sans 3", fontWeight: "bold" }}
          className="text-center"
        >
          END TIME CHURCH
        </h2>
        <p
          style={{
            fontFamily: "Anek Tamil",
            fontWeight: "bold",
            wordSpacingSpacing: "2px",
            fontSize: "23px",
            textAlign: "center",
          }}
        >
          ஊழியக்காரர்கள் தங்கள் சபை விலாசத்தை பதிவிட விரும்பினால் இங்கே
          பதிவிடலாம்
        </p>
      </div>
    </div>
  </div>

  {/* Search*/}

  <input
    style={{
      textIndent: "10px",
      backgroundColor: "#EEDEED",
      color: "white",
      width: "38%",
      border: "0",
      height: "50px",
      position: "relative",
      top: "0px",
      left: "50px",

      // marginBottom: "28px",
      borderRadius: "5px",
    }}
    type="text"
    name="search"
    placeholder="Seach near by Churches"
  />
  <style>
    {`
            input::placeholder {
              color: #800080  !important;
            }
          `}
  </style>

  <i
    class="fa fa-search"
    style={{
      color: "#800080",
      position: "relative",
    }}
  ></i>
  {/*  */}
  <div className="row p-5  ">
    {/* Card 1 */}
    <div className="col-sm-6 col-lg-3 mb-4">
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="card"
        style={{
          border: "dashed",
          borderColor: "#800080",
          height: "125px",
          borderRadius: "8px",
        }}
      >
        <div className="card-body">
          <div
            className="d-flex text-black align-items-center"
            data-toggle="modal"
            data-target="#exampleModal"
            style={{ cursor: "pointer" }}
          >
            <div className="flex-shrink-0">
              <img
                src="https://cdn3.iconfinder.com/data/icons/harmonicons-06/64/plus-circle-512.png"
                alt="Generic placeholder image"
                className="img-fluid rounded-circle p-4"
                style={{ width: "90px", borderRadius: "10px" }}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 style={{ color: "#800080" }} className="mt-2">
                ADD CHURCHES
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    {data?.map((dt, index) => {
      return (
        <div className="col-sm-6 col-lg-3 mb-4">
          <div
            className="card shadow"
            style={{
              backgroundColor: "#800080",
              border: "none",
              textColor: "white",
              borderRadius: "10px",
            }}
          >
            <div className="card-body">
              <div className="d-flex text-black align-items-center">
                <div className="flex-shrink-0"></div>
                <div className="flex-grow-1 ms-3">
                  <div
                    onClick={() => {
                      dels(dt._id);
                    }}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      padding: 4,
                      width: 30,
                      position: "absolute",
                      marginLeft: "78%",
                    }}
                  >
                    <img
                      src={del}
                      style={{ margin: "auto", display: "block" }}
                    />
                  </div>
                  <span
                    className="mb-1"
                    style={{
                      color: "white",
                      fontFamily: "Source Sans 3",
                      display: "inline",
                      fontSize: "19px",
                    }}
                  >
                    {dt.title}
                  </span>
                  <p
                    className="mb-1"
                    style={{
                      color: "white",
                      fontFamily: "Source Sans 3",
                      fontSize: "13px",
                    }}
                  >
                    {dt.address}
                  </p>
                  <p style={{ color: "white" }}>
                    <i
                      class="fa-solid fa-clock"
                      style={{
                        color: "white",
                      }}
                    ></i>
                    &nbsp; 10:00 am - 8:00 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  {/* Add more cards following the same structure */}

  {/*  */}

  {/*  */}
  <div
    style={{
      backgroundColor: "#430043",
      borderBottom: "1px solid grey",
    }}
    className="container-fluid p-4 absolute bottom-0"
  >
    <div style={{ backgroundColor: "#430043" }} className="row" id="xc">
      {/* Left Column */}
      <div style={{}} className="col-4">
        <div>
          Bro. David
          <br />
          17-A, Vivekananda Nagar,
          <br />
          Kumarapillai Street,
          <br />
          17-A, Vivekananda Nagar,
          <br />
          Kottucherry, Karaikal - 609609.
          <br />
          Cell - +91-9940808951
        </div>
      </div>

      {/* Center Column */}
      <div className="col-4" id="cx">
        <div>
          Bro. Robin
          <br />
          3/263, Thirumal Nagar,
          <br />
          Opp Govt. High School,
          <br />
          Pattanam, Coimbatore - 641016.
          <br />
          Cell - +91-9008700812
        </div>
      </div>

      {/* Right Column */}
      <div className="col-4" id="nx">
        <div>
          Bro. Jesu Doss KR
          <br />
          No.19, Jothi Nagar,
          <br />
          3rd Cross
          <br />
          Gurudayal Sharma
          <br />
          Thanjavur - 613001.
          <br />
          Cell - +91-8903429930
        </div>
      </div>
    </div>
  </div>

  {/* <div className="container-fluid " id="pk">
    <div className="row"> */}
  {/* <!-- Left Side: Logo and Social Media Icons --> */}
  {/* <div style={{ padding: 20, marginTop: 20 }} className="col-6">
        <img
          style={{}}
          src={eleven}
          alt="Logo"
          className="img-fluid"
          id="jh"
        />
        <span
          style={{
            borderRight: "1px solid white",
            paddingRight: "12px",
            padding: "14px",
            marginLeft: "-15px",
            fontSize: 25,
            marginTop: 10,
          }}
          id="ty"
        >
          The Last Voice Ministry
        </span>
        <a href="#" className="btn btn-link" id="jk">
          <i style={{ fontSize: 30 }} className="fab fa-facebook"></i>
        </a>
        <a href="#" className="btn btn-link" id="kj">
          <i style={{ fontSize: 30 }} className="fab fa-instagram"></i>
        </a>
        <a href="#" className="btn btn-link" id="i">
          <i style={{ fontSize: 30 }} className="fab fa-youtube"></i>
        </a>
      </div> */}
  {/* <!-- Right Side: Pages (About Us and Reviews) --> */}
  {/* <div style={{ padding: 20 }} className="col-6">
        <div className="row" id="le">
          <div className="col-4">
            <h4 id="rr">Page</h4>
            <ul className="vl">
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  About us
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Reviews
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Contact us
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <h4 id="rr">Help</h4>
            <ul className="lu">
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Privacy
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Policy
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
  {/* </div> */}
  {/* </div> */}

  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
    ariaHideApp={false}
  >
    <>
      <div
        className="modal-body"
        style={{ backgroundColor: "#430043", width: "80%" }}
      >
        <div className="row" style={{ padding: "50px 40px" }}>
          <div className="col-6">
            <form action="" style={{ color: "white" }}>
              <span style={{ fontWeight: "600" }}>Pastor Name :</span>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                style={{
                  backgroundColor: "#F5F4F4",
                  border: "0",
                  padding: "4px 12px",
                  borderRadius: "2px",
                  marginBottom: "5px",
                  width: "100%",
                  height: 38,
                  marginBottom: 20,
                }}
              />{" "}
              <br />
              <span style={{ fontWeight: "600" }}>Church Name :</span>
              <input
                type="text"
                onChange={(e) => {
                  setCname(e.target.value);
                }}
                style={{
                  backgroundColor: "#F5F4F4",
                  border: "0",
                  padding: "4px 12px",
                  borderRadius: "2px",
                  marginBottom: "5px",
                  width: "100%",
                  height: 38,
                  marginBottom: 20,
                }}
              />{" "}
              <br />
              <span style={{ fontWeight: "600" }}>Mobile Number :</span>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                style={{
                  backgroundColor: "#F5F4F4",
                  border: "0",
                  padding: "4px 12px",
                  borderRadius: "2px",
                  marginBottom: "5px",
                  width: "100%",
                  height: 38,
                  marginBottom: 20,
                }}
              />{" "}
              <br />
              <span style={{ fontWeight: "600" }}>City :</span>
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                style={{
                  backgroundColor: "#F5F4F4",
                  border: "0",
                  padding: "4px 12px",
                  borderRadius: "2px",
                  marginBottom: "5px",
                  width: "100%",
                  height: 38,
                  marginBottom: 20,
                }}
              />{" "}
              <br />
              <span style={{ fontWeight: "600" }}>Address :</span>
              <br />
              <textarea
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                name=""
                id=""
                style={{
                  backgroundColor: "#F5F4F4",
                  border: "0",
                  borderRadius: "2px",
                  width: "100%",
                }}
                cols="26"
                rows="4"
              ></textarea>{" "}
              <br />
              <input
                onClick={() => {
                  submit();
                }}
                type="submit"
                className="mt-4"
                style={{
                  borderRadius: "2px",
                  padding: "4px 70px",
                  backgroundColor: "#7D017D",
                  border: "0",
                  color: "white",
                  fontWeight: "400",
                  height: 38,
                  width: "100%",
                  borderRadius: 4,
                }}
              />
            </form>
          </div>
          <div
            className="col-6"
            style={{
              position: "relative",
              left: "20%",
              top: "20px",
            }}
          >
            <img style={{ width: "100%" }} src={pop} alt="fgh" />
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

export default Layout;

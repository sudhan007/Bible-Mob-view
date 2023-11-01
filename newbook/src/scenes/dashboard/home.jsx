import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrluser } from "../../components/config/dev";
import axios from "axios";
import TopbarHome from "../global/TopbarHome";
import biimg from "./bi.jpeg";
import bi2 from "../../image/Ellipse9.png";
import one from "../../image/image.jpg";
import two from "../../image/image1.png";
import image1 from "../../image/image1.png";
import three from "../../image/image3.png";
import five from "../../image/image4.png";
import six from "../../image/image5.png";
import seven from "../../image/image6.png";
import eight from "../../image/image10.png";
import eleven from "../../image/Ellipse9.png";
import { OneKPlusRounded } from "@mui/icons-material";
import { Navebar } from "../../components/Navebar";
import Mobhome from "../../components/Mobileview/Mobhome";

const Home = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [alldata, setAlldata] = useState();
  const [cat, setCat] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [data, setData] = useState(2);

  let navigate = useNavigate();

  useEffect(() => {
    document.getElementById("root").classList.add("specific-screen-style");

    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "light");
    }

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
          setCat(ree.data.cat);
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

  let ClicckedCat = (re) => {
    navigate("book" + "/" + re._id + "/" + re._id);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const images = [
    { id: 1, src: "image1.png", alt: "Image 1", buttonText: "Published Books" },
    { id: 2, src: "image1.png", alt: "Image 2", buttonText: "New Books" },
    { id: 3, src: "image1.png", alt: "Image 3", buttonText: "Special Books" },
    { id: 4, src: "image1.png", alt: "Image 4", buttonText: "Photos" },
    { id: 5, src: "image1.png", alt: "Image 5", buttonText: "Videos" },
  ];

  let nextpage = (data) => {
    if (data.catname === "cod") {
      navigate(`/cod/${data._id}/${data.catname}`);
    } else {
      navigate(`/bible/${data._id}/${data.catname}`);
    }
  };

  let nextnewpage = async (data) => {
    navigate("/picture/" + data._id + "/" + data.bookTitle);
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
 
{isMobileView ? <Mobhome/> :

<>
{/* first set */}
<div style={{ backgroundColor: "#800080" }} className="container-fluid">
  <div className="d-flex justify-content-between">
    {/* Logo on the left */}
    <img
      style={{ height: "44px", marginTop: "5px" }}
      src={bi2}
      className="img-fluid cursor-pointer"
    />

    <div className="">
      <h1 style={{ fontFamily: "Bakbak One" }} className="abc">
        The Last Voice Ministry
      </h1>
    </div>

    <div className=""></div>
  </div>
  {/* Content in the center */}
</div>
<Navebar />
{/* third set */}
<div className=" ">
  <img
    className="img-fluid"
    style={{ width: "100%" }}
    src={one}
    alt="New York"
  />
</div>
<div className="bg-lightPurple p-[20px] pt-[35px]">
  <p style={{ fontSize: 31, fontWeight: "800", color: "#fff" }}>
    ராஜ்யத்தினுடைய இந்தச் சுவிசேஷம் பூலோகமெங்குமுள்ள சகல ஜாதிகளுக்கும்
    சாட்சியாகப் பிரசங்கிக்கப்படும், அப்போது முடிவு வரும்.
  </p>
  <p
    style={{
      fontSize: 20,
      fontWeight: "700",
      color: "#fff",
      textAlign: "end",
      marginRight: "10%",
    }}
  >
    மத்தேயு 24:14
  </p>
</div>
{/* <div className="container-fluid  mt-5" style={{ padding: "0px 50px" }}> */}

<div className="" style={{ padding: 80, margin: "auto" }}>
  <div className="d-flex flex-wrap justify-content-around">
    {cat?.map((image, idx) => (
      <div
        key={idx}
        className="col-sm-6 col-md-6 col-lg-4 col-xl-2 col-xxl-2"
      >
        <div>
          <img
            src={image.image}
            style={{ width: "100%" }}
            alt={image.alt}
            className=""
          />
        </div>
        <button
          onClick={() => {
            nextnewpage(image);
          }}
          style={{
            width: "100%",
            backgroundColor: "#800080",
            color: "#fff",
            fontSize: 22,
            fontWeight: "500",
          }}
          className="btn  mt-3"
          id="btn"
        >
          {image.bookTitle}
        </button>
      </div>
    ))}
  </div>
</div>
<div className="container-fluid  " style={{ padding: 80 }}>
  <div className="row ml-5 ">
    {/* Left Side Content */}
    <div className="col-7 pt-6   " id="er" style={{ width: "100%" }}>
      <p
        className="mt-4"
        style={{
          fontSize: 38,
          color: "rgba(0, 0, 0, 1)",
          fontWeight: "800",
        }}
      >
        வேதவாக்கியங்களை ஆராய்ந்துபாருங்கள்; அவைகளால் உங்களுக்கு
        நித்தியஜீவன் உண்டென்று எண்ணுகிறீர்களே, என்னைக்குறித்துச்
        சாட்சிகொடுக்கிறவைகளும் அவைகளே.   யோவான் 5 : 39
      </p>
      <button
        style={{ width: "50%", padding: 10, fontWeight: "700" }}
        className="dc"
      >
        பரிசுத்த வேதாகமம்
      </button>
    </div>

    {/* Right Side Image */}
    <div className="col-5 pt-6 ">
      <div>
        <img
          style={{
            display: "block",
            margin: "auto",
          }}
          className="img-fluid"
          src={three}
          alt=""
        />
      </div>
    </div>
  </div>
</div>
{/* 6th set */}
<div className=" mt-5  ">
  <div className="row mx-5">
    <img
      style={{ width: "100%", height: "auto" }}
      className="img-fluid static-image"
      src={five}
    />
    <div className="ffffff">
      <button
        style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
        className="dce"
      >
        சகோ. பிரன்ஹாம் செய்திகள்
      </button>
    </div>
  </div>
</div>
{/* 7th set */}
<div className="container-xxl mt-5 " id="mo">
  <div className="row mx-5">
    {/* <h1 className="yy"> Special Books</h1> */}
    {/* Image */}
    <img
      style={{ width: "100%", height: "auto" }}
      className="img-fluid static-image"
      src={six}
    />
    <div className="ffffff">
      <button
        style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
        className="dce"
      >
        Special books
      </button>
    </div>

    {/* <button
    style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
    id="cd"
  >
    Special books
  </button> */}
  </div>
</div>
{/* 8th set */}
<div className="container-xxl">
  <div className="row mt-6 ml-5 mr-5">
    {/* Left Side Content */}
    <div className="col-8 pt-4   " id="re">
      கர்த்தராகிய இயேசு கிறிஸ்துவின் நாமத்தினால்
      www.thelastvoicemessage.com என்கிற இந்த வலைத்தளத்திற்கு உங்களை
      வரவேற்கிறோம். இந்த வலைத்தளமானது மல்கியா-4 வெளி-10 ஏழாம் தூதனும்
      எலியா தீர்க்கதரிசியுமாகிய சகோதரன். வில்லியம் மரியன் பிரன்ஹாம்
      அவர்களால் 1947 முதல் 1965 வரை பிரசிங்கிக்கப்பட்ட அனைத்து
      செய்திகளையும் தமிழில் வாசிக்கவும், கேட்கவும், ஆராய்ந்து பார்த்து
      அதன்படி ஜீவிக்கவும். உங்கள் விசுவாச ஓட்டத்தை இன்னும்
      மேம்படுத்திக்கொள்ள மிகவும் உதவியாயிருக்கும்.
      <br />
      <button
        style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
        className="dce"
      >
        End Time Church Address
      </button>
    </div>

    {/* Right Side Image */}
    <div className="col-4 mt-4 ">
      <div>
        <img className="rounded float-right img-fluid" src={seven} />
      </div>
    </div>
  </div>
</div>

{/* last set */}
<div className="container-fluid mt-5 " id="pk">
  <div className="row">
    {/* <!-- Left Side: Logo and Social Media Icons --> */}
    <div style={{ padding: 20, marginTop: 20 }} className="col-5">
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
    </div>
    {/* <!-- Right Side: Pages (About Us and Reviews) --> */}
    <div style={{ padding: 20 }} className="col-7">
      <div className="flex gap-8 justify-center">
        <div className="">
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
        <div className="">
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

        <div className="text-white font-bold self-center">
          Contact <br /> +91-85252518825 nagercoilchurch@gmail.com <br />
          SSC Church Street,Nagercoil
        </div>
      </div>
    </div>
  </div>
</div>
</>

}

 </>
  );
};
export default Home;
// line alone incomplete,logo size

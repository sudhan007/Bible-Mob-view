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
import thirty from "../../image/Ellipse9.png";
import { Navebar } from "../../components/Navebar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrluser } from "../../components/config/dev";
import Mobpictures from "../../components/Mobileview/Mobpictures";

function Picture() {
  let [dat, setdate] = useState([]);

  let [tit, setTit] = useState("");

  let { id, title } = useParams();

  useEffect(() => {
    setTit(title);
    Start();
  }, []);

  let Start = async () => {
    let gg = await axios({
      method: "post",
      url: BaseUrluser + "/gryyy",
      data: {
        id: id,
      },
    })
      .then((res) => {
        setdate(res.data.data);
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
      console.log(isMobileView)
      console.log(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileView]);

  return (
   <>
   {isMobileView ? <Mobpictures/> : 
   
   <div style={{ overflow: "hidden" }}>
   <div style={{ backgroundColor: "#800080" }} className="container-fluid">
     <div className="d-flex justify-content-between">
       {/* Logo on the left */}
       <img src={bic} className="img-fluid" id="jhhh" />

       <div class="">
         <h1 style={{ fontFamily: "Bakbak One" }} className="abc">
           {tit}
         </h1>
       </div>

       <div class=""></div>
     </div>
     {/* Content in the center */}
   </div>
   {/* second set */}
   {/* <nav
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
   </nav> */}

   <Navebar />

   <div className="container-fluid p-5  text-white text-center">
     <h4
       style={{
         fontWeight: "bold",
         fontFamily: "Source Sans 3",
         color: "black",
       }}
     >
       {tit}
     </h4>
   </div>

   <div>
     <div className="image-container ml-4">
       {/* First Row */}
       <div className="row">
         {dat?.length === 0 ? (
           <>
             <p
               style={{
                 textAlign: "center",
                 fontWeight: "700",
                 fontSize: 25,
               }}
             >
               No data Fount
             </p>
           </>
         ) : (
           dat?.map((da, key) => {
             return (
               <div key={key} className=" col-3 image-item mt-3">
                 <div
                   style={{ boxShadow: "1px 1px 5px rgb(176, 176, 176)" }}
                   className=""
                 >
                   <img
                     style={{ width: "100%" }}
                     src={da.image}
                     alt="Image 1"
                   />
                 </div>
                 <h5
                   style={{
                     fontFamily: "Source Sans 3",
                     fontWeight: "bold",
                     paddingTop: "19px",
                   }}
                 >
                   {da.bookTitle}
                 </h5>
                 <p style={{ marginTop: "-4px" }}>{da.subtit}</p>
               </div>
             );
           })
         )}
       </div>
     </div>
   </div>

   {/* <div className="container-fluid" id="pk">
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
   </div> */}

   <div className="container-fluid mt-5 " id="pk">
     <div className="row">
       {/* <!-- Left Side: Logo and Social Media Icons --> */}
       <div style={{ padding: 20, marginTop: 20 }} className="col-6">
         <img
           style={{}}
           src={thirty}
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
       <div style={{ padding: 20 }} className="col-6">
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
       </div>
     </div>
   </div>
 </div>
   
   }
   
   </>
  );
}
export default Picture;

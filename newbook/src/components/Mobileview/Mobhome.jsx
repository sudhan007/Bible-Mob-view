import React from 'react'
import head from '../Mobileview/assets/head.png'
// import img1 from '../MobileView/assets/img1.png'
// import img2 from '../MobileView/assets/img2.png'
// import img3 from '../MobileView/assets/img3.png'
// import img4 from '../MobileView/assets/img4.png'
// import img5 from '../MobileView/assets/img5.png'
// import img6 from '../MobileView/assets/img6.png'
import img7 from '../Mobileview/assets/img7.png'
import downimg from '../Mobileview/assets/downimg.png'
import bar from '../Mobileview/assets/Bar.png'
import search from '../../components/Mobileview/assets/search.png'
import homenav from '../../components/Mobileview/assets/homenav.png'
import biblenav from '../../components/Mobileview/assets/bible.png'
import messagenav from '../../components/Mobileview/assets/message.png'
import codnav from '../../components/Mobileview/assets/codnav.png'
import { BaseUrluser } from '../../components/config/dev';
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link ,useNavigate } from 'react-router-dom'
import  Modal  from 'react-modal'




const customStyles = {
    content: {
      backgroundColor: "rgba(248, 248, 248, 1)",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      

    },
  };
  
  const customStyles1 = {
    content: {
      top: '68%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "0px !important",
      width:"100%",
      paddingBottom:"100px"
    },
  };

function Mobhome() {



    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen1, setIsOpen1] = React.useState(false);
  
  
    function openModal() {
      setIsOpen(true);
    }
    function openModal1() {
      setIsOpen1(true);
    }
  
  
  
    function closeModal() {
      setIsOpen(false);
    }
    function closeModal1() {
      setIsOpen1(false);
    }
  
    const [alldata, setAlldata] = useState();
    const [cat, setCat] = useState()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const [data, setData] = useState(2);
  
    let navigate = useNavigate();
  
    useEffect(() => {
      document.getElementById("root").classList.add("specific-screen-style");
      start();
      // document.querySelector("body > div:nth-child(6)").style.height = "0px"
  
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
            setCat(ree.data.cat)
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
  
    let nextpage = (data) => {
      if (data.catname === "cod") {
        navigate(`/cod/${data._id}/${data.catname}`);
      } else {
        navigate(`/bible/${data._id}/${data.catname}`);
      }
    };
  
    let nextnewpage = async (data) => {
      navigate('/picture/' + data._id + '/' + data.bookTitle)
    }




  return (

    <>

    <main>
      <div className="container-md">


        <div className="row " style={{ backgroundColor: "#720272", padding: "10px" }}>

          <div className="col-2"  ><img src={bar} alt="" onClick={openModal1} /></div>

          <div className="col-8">
            <h4 className="text-center name" style={{ color: "white",fontWeight: "400", fontSize: "22px",fontFamily:"Bakbak One"}}>The Last Voice Ministry</h4>
          </div>

          <div className="col-2">
            
          
          <img src={search} alt="" />

          </div>
        </div>


        <div className="row px-0" >
          <img src={head} className=" px-0" style={{ padding: "0 !important", width: "100%" }} alt="" />
        </div>


        <div className="row  text-center p-3" style={{ backgroundColor: "rgba(18, 18, 18, 1)" }} >


          <div className="col-4 p-0">

            {cat?.map((image, idx) => (

              <div className="card flex-shrink-0 flex-nowrap flex-shrink-0" style={{ backgroundColor: "rgba(18, 18, 18, 1)", border: "0" }} key={idx}>

                <img src={image.image} width="100%" alt="" />

                <div>
                  <a href="#" className="btn" style={{ width: "95%", borderRadius: "0", fontSize: "10px", color: "white", padding: "5px 0px", fontFamily: "'poppins',sans-serif", fontWeight: "600", position: "relative", top: "-31px", backgroundColor: "rgba(114, 2, 114,1)", boxShadow: "none" }}
                    onClick={() => {
                      nextnewpage(image)
                    }}   >{image.bookTitle}
                  </a>
                </div>

              </div>
            ))}

          </div>



          {/* <div className="col-4 p-0">
      
                    <div className="card  flex-nowrap flex-shrink-0" style={{ backgroundColor: "rgba(18, 18, 18, 1) ", border: "0" }}>
                      <img src={img2} width="100%" alt="" />
                      <div>
                        <a href="#" className="btn" style={{
                          width: "90%", borderRadius: "0", fontSize: "9px", color: "white", padding: "5px 0px", fontFamily: "'poppins',sans-serif", fontWeight: "600", position: "relative", top: "-31px", backgroundColor: "rgba(114, 2, 114,1)", boxShadow: "none"
                        }}>Published Books</a>
                      </div>
                    </div>
      
                  </div>
      
                  <div className="col-4 p-0">
      
                    <div className="card  flex-nowrap flex-shrink-0" style={{ backgroundColor: "rgba(18, 18, 18, 1)", border: "0" }}>
                      <img src={img3} width="100%" alt="" />
                      <div>
                        <a href="#" className="btn" style={{ width: "90%", borderRadius: "0", fontSize: "10px", color: "white", padding: "5px 0px", fontFamily: "'poppins',sans-serif", fontWeight: "600", position: "relative", top: "-31px", backgroundColor: "rgba(114, 2, 114,1)", boxShadow: "none" }}
                        >Special Books</a>
                      </div>
                    </div>
      
                  </div>
      
                  <div className="col-4 p-0">
      
                    <div className="card flex-nowrap flex-shrink-0" style={{ backgroundColor: "rgba(18, 18, 18, 1)", border: "0" }}>
                      <img src={img4} width="100%" alt="" />
                      <div>
                        <a href="#" className="btn" style={{ width: "90%", borderRadius: "0", fontSize: "10px", color: "white", padding: "5px 0px", fontFamily: "'poppins',sans-serif", fontWeight: "600", position: "relative", top: "-31px", backgroundColor: "rgba(114, 2, 114,1)", boxShadow: "none" }}
                        >Videos</a>
                      </div>
                    </div>
      
                  </div>
      
                  <div className="col-4 p-0">
      
                    <div className="card  flex-nowrap flex-shrink-0" style={{ backgroundColor: "rgba(18, 18, 18, 1)", border: "0" }}>
                      <img src={img5} width="100%" alt="" />
                      <div>
                        <a href="#" className="btn" style={{ width: "90%", borderRadius: "0", fontSize: "9px", color: "white", padding: "5px 0px", fontFamily: "'poppins',sans-serif", fontWeight: "600", position: "relative", top: "-31px", backgroundColor: "rgba(114, 2, 114,1)", boxShadow: "none" }}
                        >Add Bookmarks</a>
                      </div>
                    </div>
      
                  </div>
      
                  <div className="col-4 p-0">
      
                    <div className="card  flex-nowrap flex-shrink-0" style={{ backgroundColor: "rgba(18, 18, 18, 1) ", border: "0" }}>
                      <img src={img6} width="100%" alt="" />
                      <div>
                        <a href="#" className="btn" style={{ width: "90%", borderRadius: "0", fontSize: "10px", color: "white", padding: "5px 0px", fontFamily: "'poppins',sans-serif", fontWeight: "600", position: "relative", top: "-31px", backgroundColor: "rgba(114, 2, 114,1)", boxShadow: "none" }}
                        >Photos</a>
                      </div>
                    </div>
      
                  </div> */}


          <div className="col-12 p-0">

            <div className="card  flex-nowrap flex-shrink-0" style={{ backgroundColor: "rgba(18, 18, 18, 1) ", border: "0" }}>
              <img src={img7} width="100%" alt="" style={{ backgroundColor: "rgba(18,18,18,1) !important" }} />
              <div >
                <a className="btn" onClick={openModal} style={{ width: "100%", borderRadius: "0", fontSize: "10px", color: "white", padding: "5px 0px", fontFamily: "'poppins',sans-serif", fontWeight: "600", position: "relative", top: "-26px", backgroundColor: "rgba(114, 2, 114,1)", boxShadow: "none" }}
                >இன்றைய மன்னா <span style={{ position: "absolute", right: "20px" }}><i className="fa-solid fa-chevron-right" style={{ color: "white", fontSize: "12px" }}></i></span></a>

              </div>
            </div>

          </div>


        </div>

        <div className="row px-2 pt-2" style={{ backgroundColor: "rgba(114, 2, 114, 1)" }}>
          <div className="col-2 p-0 text-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <aside>
               
                 <img src={homenav} style={{width:"30%"}} alt="" />
                <br />
                <span style={{ color: "white", fontSize: "12px" }}>Home</span>
              </aside>
            </Link>
          </div>
          <div className="col-2 p-0 text-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <aside>
                <img src={biblenav} style={{width:"25%"}} alt="" />
                <br />
                <span style={{ color: "white", fontSize: "12px" }}>Bible</span>
              </aside>
            </Link>
          </div>
          <div className="col-4 text-center p-0">
          <Link to="/layout" style={{textDecoration:"none"}}>
            <aside>
              <img src={homenav} style={{width:"15%"}} alt="" />
              <br/>
              <span style={{ color: "white", fontSize: "12px" }}>Notes</span>
            
            </aside>
            </Link> 
          </div>
          <div className="col-2 p-0 text-center">
            {/**/}
            <aside>
              <img src={messagenav} style={{width:"30%"}} alt="" />
              <br />
              <span style={{ color: "white", fontSize: "12px" }}>Message</span>
            </aside>
          </div>
          <div className="col-2 p-0 text-center">
            <Link to="/cod/questiontypes" style={{ textDecoration: "none" }}>
              <aside>
                <img src={codnav} style={{width:"30%"}} alt="" />
                <br />
                <span style={{ color: "white", fontSize: "12px" }}>COD</span>
              </aside>
            </Link>
          </div>
        </div>

      </div>

    </main>

    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" >
      <main  >
        <div class="container-md">
          <div class="maincard p-3">
            <div class="carddd " style={{ backgroundColor: "rgba(248, 248, 248, 1)", border: "0" }}>
              <div><h6 class="text-center mt-4" style={{ fontSize: "18px", fontweight: "600", marginTop: "10px" }}>இன்றைய மன்னா
              </h6>
                <h6 class="text-center" style={{ fontSize: "18px", fontweight: "600" }}>03/10/2023</h6>

                <p class="p-3" style={{ fontsize: "15px", fontweight: "700" }}>
                  “அவர் ஜீவிக்கிறார், அவர் ஜீவிக்கிறார், கிறிஸ்து இயேசு இன்றைக்கும் ஜீவிக்கிறார். அவர் ஜீவிக்கிறார் என்று எப்படி நான் அறிவேன் என்று நீங்கள் என்னை கேட்கலாம்; அவர் என் இருதயத்தில் ஜீவிக்கிறார்” என்று பாடமுடியும். இன்றைக்கு நமக்கு ஒரு காலியான கல்லறை உண்டு. <br />
                  53-04-05S - போய் என் சீஷர்களுக்குச் சொல்லுங்கள்
                </p>
              </div>
            </div>
          </div>

        </div>

      </main>
 
    </Modal>



    <Modal isOpen={modalIsOpen1} onRequestClose={closeModal1} style={customStyles1} contentLabel="Example Modal" >
      <main>
        <div className="container-md">
          <div className="mt-3 p-3 row " style={{
            border: "1px solid  rgba(255, 255, 255, 1)",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            marginBottom: "0 !important",
            marginTop: "200px !important"
          }}>
            <i className="fa-solid fa-circle-xmark" style={{
              fontSize: "30px",
              color: "rgba(114, 2, 114, 1)"
            }} onClick={closeModal1}></i>
            <div className="col-12 text-center">
              <h4 style={{
                fontFamily: "poppins,sans-serif",
                fontWeight: "700",
                fontSize: "23px",
                color:
                  "rgba(0, 0, 0, 1)"
              }}>MENU LIST</h4>
            </div>
            <div className="mt-4">

                  <p className=" text-center">
                    <Link to="/loginscreen" style={{textDecoration:"none"}}>
                <a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> LOGIN </a>
                </Link>
              </p>
              {/* <p className="text-center">
              <a href=""  style={{fontFamily: "poppins,sans-serif",
  fontWeight: "900",
  fontSize: "18px",
color: "rgba(114, 2, 114, 1)",
textDecoration: "none"}}> BIBLE </a>
          </p>
          <p className="text-center">
              <a href=""   style={{fontFamily: "poppins,sans-serif",
  fontWeight: "900",
  fontSize: "18px",
color: "rgba(114, 2, 114, 1)",
textDecoration: "none"}}> MESSAGE </a>
          </p> */}
              <p className="text-center">
                <a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> SPECIAL BOOKS </a>
              </p>
              <p className="text-center">
                <Link to="/mobsettings" style={{ textDecoration: "none" }}> <a style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> SETTINGS </a>
                </Link>
              </p>
              <p className="text-center">
                <a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> ABOUT US</a>
              </p>
              <p className="text-center">
                <a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> Contact us</a>
              </p>
              <p className="text-center">
            <Link to="/layout" style={{textDecoration:"none"}}><a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> End Time Church Address</a></Link>    
              </p>
              <p className="text-center">
              <Link to="/cod/questiontypes" style={{textDecoration:"none"}}><a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> COD QUESTIONS & ANSWERS</a></Link>  
              </p>

            </div>

          </div>
          <div className="row " style={{
            border: "1px solid rgba(114, 2, 114, 1)",
            backgroundColor:
              "rgba(114, 2, 114, 1)"
          }}>
            <div className="col-4 p-3 ">
              <img src={downimg} className="p-2 img-fluid" alt="" style={{
                borderRight: "1px solid  rgba(255, 255, 255, 1)"
              }} />
            </div>
            <div className="col-8 ">
              <h3 className="mt-4 " style={{
                width: "100%", fontFamily: "poppins,sans-serif",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 1)",
                fontSize: "17px"
              }}>The Last Voice Ministry</h3>
            </div>
          </div>
        </div>
      </main>
    </Modal>

  </>


  )
}

export default Mobhome
import React from "react";
import codimg from "../../../../components/Mobileview/assets/cod.png";
import { Link } from "react-router-dom";
import { _axios } from "../../../../lib/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bar from '../../../../components/Mobileview/assets/Bar.png'
import downimg from '../../../../components/Mobileview/assets/downimg.png'
import Modal  from "react-modal";
import homenav from '../../../../components/Mobileview/assets/homenav.png'
import biblenav from '../../../../components/Mobileview/assets/bible.png'
import messagenav from '../../../../components/Mobileview/assets/message.png'
import codnav from '../../../../components/Mobileview/assets/codnav.png'



const section = {
  padding: "20px 20px 20px 10px ",
  backgroundColor: "rgba(248, 248, 248, 1)",
  fontFamily: "Anek Tamil, sans-serif",
  fontSize: "12px",
  fontWeight: "800",
  color: "rgba(0, 0, 0, 1)",
  borderTopRightRadius: "13px",
  borderBottomRightRadius: "13px",
  width: "40%",
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

function Mobcodpage() {

    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    function openModal1() {
        setIsOpen1(true);
      }
      function closeModal1() {
        setIsOpen1(false);
      }




    const [questionTypes, setQuestionTypes] = useState([]);
    const navigate = useNavigate();
    const _static = [
      {
        type: "அனைத்து கேள்விகள்",
        _id: "all",
      },
    ];
  
    const navigateTo = (url) => navigate(url);
  
    useEffect(() => {
      async function getAllQuestionTypes() {
        try {
          const res = await _axios.get("/cod/getallquestiontype");
  
          if (res.data && res.data.message == "Success") {
            let data = [..._static, ...res.data?.data];
            setQuestionTypes(data);
          }
        } catch (e) {
          console.log(e);
        }
      }
  
      getAllQuestionTypes();
    }, []);

  return (

    <>
    <main>
      <div className="container-md">
        <div
          className="row "
          style={{
            backgroundColor: "#720272",
            padding: "10px",
            fontFamily: "Bakbak One",
          }}
        >
          <div className="col-2">
          

            <img src={bar} alt="" onClick={openModal1} />
          </div>

          <div className="col-8 text-center">
            <h4
              className=" text-center name"
              style={{ fontWeight: "400", color: "white", fontSize: "22px" }}
            >
              The Last Voice Ministry
            </h4>
          </div>
        </div>

        <div
          className="row "
          style={{
            backgroundColor: "rgba(18, 18, 18, 1) ",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          <p
            className="text-center mt-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
          >
            COD QUESTIONS & ANSWERS
          </p>

          {questionTypes.map((questionType, idx) => (
            <div
              className="d-flex justify-content-center w-100 mt-2"
              key={idx}
              onClick={() => navigateTo(`/cod/questions/${questionType.id}`)}
            >
              <img
                src={codimg}
                style={{
                  borderRadius: "10px",
                  boxShadow: "1px 1px 10px rgb(55, 55, 55)",
                }}
                alt=""
              />
              <section style={section} className="">
                {questionType.type}
              </section>
            </div>
          ))}
          {/* <div className="d-flex justify-content-center mt-2">
                  <img src={codimg} style={{borderRadius: "10px", boxShadow: "1px 1px 10px rgb(55, 55, 55)"}} alt="" />
                  <section style={section} className="pb-0" >பழைய ஏற்பாட்டின் &nbsp; &nbsp; &nbsp;  <br />
                      கேள்விகள் </section>
              </div>

              <div className="d-flex justify-content-center mt-2">
                  <img src={codimg} style={{borderRadius: "10px", boxShadow: "1px 1px 10px rgb(55, 55, 55)"}} alt="" />
                  <section style={section} className="pb-0" >பழைய ஏற்பாட்டின் &nbsp; &nbsp; &nbsp;  <br />
                      தலைப்புகள் </section>
              </div>

              <div className="d-flex justify-content-center mt-2">
                  <img src={codimg} style={{borderRadius: "10px", boxShadow: "1px 1px 10px rgb(55, 55, 55)"}} alt="" />
                  <section style={section} className="pb-0" >பழைய ஏற்பாட்டின் &nbsp; &nbsp; &nbsp;  <br />
                      கேள்விகள் </section>
              </div>

              <div className="d-flex justify-content-center mt-2">
                  <img src={codimg} style={{borderRadius: "10px", boxShadow: "1px 1px 10px rgb(55, 55, 55)"}} alt="" />
                  <section style={section} className="pb-0" >முத்திரைகள் மேலுள்ள <br />
                      கேள்விகள் </section>
              </div>

              <div className="d-flex justify-content-center mt-2 mb-5">
                  <img src={codimg} style={{borderRadius: "10px", boxShadow: "1px 1px 10px rgb(55, 55, 55)"}} alt="" />
                  <section style={section} className="pb-0" >எபிரேயர் புத்திகத்தின் &nbsp; <br />  
                      கேள்விகள் </section>
              </div> */}
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

export default Mobcodpage
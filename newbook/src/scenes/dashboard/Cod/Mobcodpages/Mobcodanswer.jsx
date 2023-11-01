import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { _axios } from '../../../../lib/axios';
import  Modal  from 'react-modal';
import bar from '../../../../components/Mobileview/assets/Bar.png'
import downimg from '../../../../components/Mobileview/assets/downimg.png'
import messagenav from '../../../../components/Mobileview/assets/message.png'
import homenav from '../../../../components/Mobileview/assets/homenav.png'
import codnav from '../../../../components/Mobileview/assets/codnav.png'
import biblenav from '../../../../components/Mobileview/assets/bible.png'


const booooks = {

    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    border: "1px solid white",
    padding: "20px 15px",
    backgroundColor: "rgba(248, 248, 248, 1)",
    fontWeight: "700",
    borderRadius: "10px",
    marginBottom: "10px !important"

}


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

function Mobcodanswer() {

    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    function openModal1() {
        setIsOpen1(true);
      }
      function closeModal1() {
        setIsOpen1(false);
      }

    const [answer, setAnswer] = useState({});
    const { question } = useParams();
  
    useEffect(() => {
      async function getQuestionAndAnswer() {
        try {
          const res = await _axios.get(
            `/cod/getsinglequetionandanswer?id=${question}`
          );
  
          if (res.data && res.data.message == "Success") {
            setAnswer(res.data.data);
            console.log(res.data.data);
          }
        } catch (e) {
          console.log(e);
        }
      }
  
      getQuestionAndAnswer();
    }, []);




  return (

    <>
            <main>
                <div className="container-md">
                    <div className="row " style={{ backgroundColor: "#720272", padding: "10px" }}>

                        <div className="col-2">
                            
                            
                        <img src={bar} alt="" onClick={openModal1} />
                        </div>

                        <div className="col-8 text-center">
                            <h4 className=" text-center " style={{ fontWeight: "400", color: "white", fontSize: "22px" ,fontFamily: "Bakbak One",}}>The Last Voice Ministry</h4>
                        </div>



                    </div>
                   
                        <div className="row" style={{ backgroundColor: "rgba(18, 18, 18, 1) " }}>


                            <div className="row text-center g-0">
                                <div className="text-center" style={{marginTop:"25px"}}>
                                    <span style={{ backgroundColor: "white", padding: "15px 25px", fontFamily: "Anek Tamil, sans-serif", fontWeight: "800", fontSize: "14px", borderRadius: "10px" }}>அனைத்து கேள்விகள்</span>
                                </div>

                            </div>
                            <div className="mt-4 px-2">
                                <p style={booooks} >
                                   {1}. {answer?.question}
                                </p>
                            </div>
                            <div className="mt-2 mb-2">
                                <h5 style={{ fontFamily: "Poppins,sans-serif", fontWeight: "700", color: "rgba(255, 209, 255, 1)" }}>ANSWER :  </h5>
  
                                <div className="mt-3 px-3">
                                    <p style={{ fontSize: "16px", color: "black", backgroundColor: "white", padding: "15px", fontFamily: "sans-serif", fontWeight: "700", lineHeight: "1.6", height: "450px", overflowY: "scroll", borderRadius: "10px" }}>
                                       {answer?.answer}
                                    </p>
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
                <a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> End Time Church Address</a>
              </p>
              <p className="text-center">
                <a href="" style={{
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "rgba(114, 2, 114, 1)",
                  textDecoration: "none"
                }}> COD QUESTIONS & ANSWERS</a>
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

export default Mobcodanswer
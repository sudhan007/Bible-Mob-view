import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { _axios } from '../../../../lib/axios';
import bar from '../../../../components/Mobileview/assets/Bar.png'
import downimg from '../../../../components/Mobileview/assets/downimg.png'
import  Modal from 'react-modal';
import homenav from '../../../../components/Mobileview/assets/homenav.png'
import messagenav from '../../../../components/Mobileview/assets/message.png'
import biblenav from '../../../../components/Mobileview/assets/bible.png'
import codnav from '../../../../components/Mobileview/assets/codnav.png'

const booooks ={
   
    color:  "rgba(0, 0, 0, 1)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "10px",
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

function Mobcodquestion() {


    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    function openModal1() {
        setIsOpen1(true);
      }
      function closeModal1() {
        setIsOpen1(false);
      }


    const [questions, setquestions] = useState([]);
    const navigator = useNavigate();
    const navigateTo = (url, opt) => navigator(url, opt);
  
    const _static = [
      {
        type: "அனைத்து கேள்விகள்",
        _id: "all",
      },
    ];
  
  
  
    useEffect(() => {
      async function getAllquestions() {
        try {
          const res = await _axios.get("/cod/getallquestions");
  
          if (res.data && res.data.message == "Success") {
            let data = [..._static, ...res.data?.data];
            setquestions(data);
          }
        } catch (e) {
          console.log(e);
        }
      }
  
      getAllquestions();
    }, []);


  return (
    <>
    <main>
           <div className="container-md">
               <div className="row " style={{backgroundColor:"#720272",padding:"10px"}}>
   
                   <div className="col-2">
                    {/* <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <circle cx="17" cy="17" r="17" fill="#F8F8F8" />
                           <path
                               d="M23.4357 11H13.8323C12.9696 11 12.2678 11.6579 12.2678 12.4676C12.2678 13.2763 12.9696 13.9342 13.8323 13.9342H23.4357C24.2983 13.9342 25.0001 13.2763 25.0001 12.4676C25.0001 11.6579 24.2983 11 23.4357 11Z"
                               fill="#720272" />
                           <path
                               d="M9.565 11C8.70208 11 8 11.6581 8 12.4671C8 13.276 8.70208 13.9342 9.565 13.9342C10.4279 13.9342 11.13 13.276 11.13 12.4671C11.13 11.6581 10.4279 11 9.565 11Z"
                               fill="#720272" />
                           <path
                               d="M9.565 15.5009C8.70208 15.5009 8 16.1591 8 16.968C8 17.777 8.70208 18.4351 9.565 18.4351C10.4279 18.4351 11.13 17.777 11.13 16.968C11.13 16.1591 10.4279 15.5009 9.565 15.5009Z"
                               fill="#720272" />
                           <path
                               d="M9.565 20.0018C8.70208 20.0018 8 20.6599 8 21.4689C8 22.2778 8.70208 22.936 9.565 22.936C10.4279 22.936 11.13 22.2778 11.13 21.4689C11.13 20.6599 10.4279 20.0018 9.565 20.0018Z"
                               fill="#720272" />
                           <path
                               d="M23.4357 15.5009H13.8323C12.9696 15.5009 12.2678 16.1588 12.2678 16.9685C12.2678 17.7772 12.9696 18.4351 13.8323 18.4351H23.4357C24.2983 18.4351 25.0001 17.7772 25.0001 16.9685C25.0001 16.1588 24.2983 15.5009 23.4357 15.5009Z"
                               fill="#720272" />
                           <path
                               d="M23.4357 20.0018H13.8323C12.9696 20.0018 12.2678 20.6597 12.2678 21.4694C12.2678 22.2781 12.9696 22.936 13.8323 22.936H23.4357C24.2983 22.936 25.0001 22.2781 25.0001 21.4694C25.0001 20.6597 24.2983 20.0018 23.4357 20.0018Z"
                               fill="#720272" />
                       </svg> */}
                       <img src={bar} alt="" onClick={openModal1} />
                       </div>
   
                   <div className="col-8 text-center">
                       <h4 className=" text-center " style={{fontWeight:"400",color:"white",fontSize:"22px",fontFamily: "Bakbak One",}}>The Last Voice Ministry</h4>
                   </div>
   
              
   
               </div>
               <div className="row text-center" style={{backgroundColor: "rgba(18, 18, 18, 1)"}}>
                <div  className="col-5 mt-4">
                    <h6 style={{fontFamily: "Poppins,sans-serif",fontSize: "14px",fontWeight: "700",color: "white"}}>COD QUESTIONS </h6>
                </div>
                <div className="col-7 mt-2 pb-1">
   <button style={{padding: "14px 20px",fontFamily: "Anek Tamil, sans-serif",fontSize: "11px",fontWeight: "700",border: "0",borderRadius: "10px",backgroundColor: "rgba(248, 248, 248, 1)"}}> அனைத்து கேள்விகள் </button> 
                </div>
                
   
                <div className="col-12 " style={{height:"550px",overflow: "scroll",overflowX:"hidden"}}>
   
                   {questions.map(
                       (q,idx) => q?.question && (
   
                      
   
   <p style={booooks} key={idx} onClick={() => navigateTo(`/cod/answer/${q._id}`,{})}>
    {idx} .{q.question}
   </p>
    )
    )}
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

export default Mobcodquestion
import React, { useEffect,useState } from 'react'
import { _axios } from '../../../../lib/axios';
import { useParams } from "react-router-dom";
import { BaseDashboardContext } from '../Context/BaseContext';
import { _BaseUrluser } from '../../../../components/config/dev';
import { useLocation, Link } from "react-router-dom";
import Modal from 'react-modal'
import downimg from '../../../../components/Mobileview/assets/downimg.png'
import bar from '../../../../components/Mobileview/assets/Bar.png'
import search from '../../../../components/Mobileview/assets/search.png'
import homenav from '../../../../components/Mobileview/assets/homenav.png'
import codnav from '../../../../components/Mobileview/assets/codnav.png'
import messagenav from '../../../../components/Mobileview/assets/message.png'
import  biblenav from '../../../../components/Mobileview/assets/bible.png'



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


  

function Mobbibleview() {


    const { id: maincategory_id } = useParams();
    const { BibleState, setBibleState, BMState, setBMState } =
      BaseDashboardContext();
    const { books, selectedBook, selectedChapter } = BibleState;
  
  
    const handleDownloadPdf = (key) => {
      if (key) {
        window.open(`${_BaseUrluser}/user/servefiles?key=${key}`, "_blank");
      }
    };
    const location = useLocation();
  
    useEffect(() => {
      console.log(selectedChapter, "pagecontentpagecontentpagecontent");
    }, [selectedChapter]);
  
  
    const [modalIsOpen1, setIsOpen1] = React.useState(false);
  
  
   
    function openModal1() {
      setIsOpen1(true);
    }
  
  
  
  
    function closeModal1() {
      setIsOpen1(false);
    }


  return (


    <>

    <div className="container-md px-0">


      <div className="row " style={{ backgroundColor: "#720272", padding: "15px" }}>

        <div className="col-2">
          
        
        <img src={bar} alt="" onClick={openModal1} />
        </div>

        <div className="col-8">
          <h4 className="text-center " style={{ fontWeight: "400", color: "white", fontFamily: "Bakbak One", fontSize: "22px" }}>BIBLE</h4>
        </div>

        <div className="col-2">
          
        <img src={search} alt="" />

        </div>
      </div>





      <div className="row py-3" style={{ backgroundColor: "rgba(65, 0, 65, 1)" }}>

        <div className="col-3 p-0 text-center">
          <button style={{ padding: "4px", border: "0", backgroundColor: "white", fontFamily: "Source Sans 3, sans-serif", fontWeight: "400" }}>ஆதியா</button>


        </div>

        <div className="col-6 p-0 text-center">
          <div>
            <button style={{ padding: "8px 6px", backgroundColor: "rgba(114, 2, 114, 1)", border: "0", marginTop: "-2px" }}><i className="fa fa-chevron-left" style={{ color: "white" }}></i></button>
            <span style={{ backgroundColor: "white", padding: "9px", fontFamily: "Source Sans 3, sans-serif", fontWeight: "400" }}>அதிகாரம்-1</span>
            <button style={{ padding: "8px 6px", backgroundColor: "rgba(114, 2, 114, 1)", border: "0" }}><i className="fa fa-chevron-right" style={{ color: "white" }}></i></button>
          </div>
        </div>

        <div className="col-3 p-0 text-center">
          <button style={{ padding: "5px", border: "0", backgroundColor: "white", fontFamily: "Source Sans 3, sans-serif", fontWeight: "400" }}>ஆதியா</button>
        </div>

      </div>



      <div className="row" style={{
        backgroundColor:
          "rgba(18, 18, 18, 1)"
      }}>
        <p className="text-end mt-2">
          <audio controls className="w-50"></audio>
        </p>

        <div className="px-4 mt-0" style={{ height: "400px", overflow: "scroll", fontFamily: "Source Sans 3, sans-serif",overflowX:"hidden", fontWeight: "600", fontSize: "13px", color: "white", lineHeight: "2" }}>
          {/* 1. ஆதியிலே தேவன் வானத்தையும் பூமியையும் சிருஷ்டித்தார்.2. பூமியானது ஒழுங்கின்மையும் வெறுமையுமாய் இருந்தது; ஆழத்தின்மேல் இருள் இருந்தது; தேவ ஆவியானவர் ஜலத்தின்மேல் அசைவாடிக்கொண்டிருந்தார்.3. தேவன் வெளிச்சம் உண்டாகக்கடவது என்றார், வெளிச்சம் உண்டாயிற்று.4. வெளிச்சம் நல்லது என்று தேவன் கண்டார்; வெளிச்சத்தையும் இருளையும் தேவன் வெவ்வேறாகப் பிரித்தார்.5. தேவன் வெளிச்சத்துக்குப் பகல் என்று பேரிட்டார், இருளுக்கு இரவு என்று பேரிட்டார்; சாயங்காலமும் விடியற்காலமுமாகி முதலாம் நாள் ஆயிற்று.6. பின்பு தேவன்: ஜலத்தின் மத்தியில் ஆகாயவிரிவு உண்டாகக்கடவது என்றும், அது ஜலத்தினின்று ஜலத்தைப் பிரிக்கக்கடவது என்றும் சொன்னார்.7. தேவன் ஆகாயவிரிவை உண்டுபண்ணி, ஆகாயவிரிவுக்குக் கீழே இருக்கிற ஜலத்திற்கும் ஆகாயவிரிவுக்கு மேலே இருக்கிற ஜலத்திற்கும் 
      */}
          <p style={{ color: "white" }}
            dangerouslySetInnerHTML={{
              __html: selectedChapter?.bookDescription?.replace(
                /\n/g,
                "<br />"
              ),
            }}
          />

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



      <div style={{ position: "fixed", top: "220px", right: "20px" }}>
        <div>
          <button style={{
            padding: "0px 24px", border: "0", backgroundColor:
              "rgba(114, 2, 114, 1)", borderRadius: "3px", color: "white"
          }}>Notes</button> <button style={{
            padding: "6px 10px", border: "0", borderRadius: "50%", backgroundColor:
              "rgba(232, 215, 231, 1)"
          }}><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.16953 2.76378V0H0.771191C0.566728 0.000245544 0.370703 0.0889453 0.226125 0.246638C0.0815476 0.404331 0.000225122 0.618139 0 0.84115V13.3382C0.000225122 13.5613 0.0815476 13.7751 0.226125 13.9327C0.370703 14.0904 0.566728 14.1791 0.771191 14.1794H8.70344C8.9079 14.1791 9.10393 14.0904 9.24851 13.9327C9.39308 13.7751 9.47441 13.5613 9.47463 13.3382V3.60493H6.94072C6.73626 3.60468 6.54023 3.51598 6.39565 3.35829C6.25108 3.2006 6.16975 2.98679 6.16953 2.76378ZM7.3814 11.2954H2.09323C2.00641 11.2941 1.92358 11.2555 1.86263 11.188C1.80168 11.1206 1.76752 11.0297 1.76752 10.9349C1.76752 10.8402 1.80169 10.7493 1.86264 10.6819C1.92359 10.6144 2.00643 10.5758 2.09325 10.5745H7.3814C7.46822 10.5758 7.55106 10.6144 7.612 10.6819C7.67295 10.7493 7.70712 10.8402 7.70712 10.935C7.70712 11.0297 7.67295 11.1206 7.612 11.188C7.55106 11.2555 7.46822 11.2941 7.3814 11.2954ZM7.3814 8.4115H2.09323C2.00641 8.41012 1.92358 8.37153 1.86263 8.30407C1.80168 8.23661 1.76752 8.14571 1.76752 8.051C1.76752 7.95629 1.80169 7.86539 1.86264 7.79794C1.92359 7.73048 2.00643 7.6919 2.09325 7.69052H7.3814C7.46822 7.6919 7.55106 7.73049 7.612 7.79794C7.67295 7.8654 7.70712 7.9563 7.70712 8.05101C7.70712 8.14572 7.67295 8.23662 7.612 8.30407C7.55106 8.37153 7.46822 8.41012 7.3814 8.4115ZM7.71191 5.16707C7.71197 5.21442 7.70346 5.26133 7.68687 5.3051C7.67028 5.34886 7.64594 5.38863 7.61524 5.42211C7.58453 5.4556 7.54807 5.48215 7.50795 5.50025C7.46782 5.51834 7.42482 5.52762 7.3814 5.52756H2.09323C2.00558 5.52756 1.92151 5.48958 1.85953 5.42197C1.79754 5.35437 1.76272 5.26267 1.76272 5.16707C1.76272 5.07146 1.79754 4.97976 1.85953 4.91216C1.92151 4.84455 2.00558 4.80657 2.09323 4.80657H7.3814C7.42482 4.80651 7.46782 4.81579 7.50795 4.83388C7.54807 4.85198 7.58453 4.87853 7.61524 4.91202C7.64594 4.9455 7.67028 4.98527 7.68687 5.02904C7.70346 5.0728 7.71197 5.11971 7.71191 5.16707Z" fill="#720272" />
              <path d="M6.94086 2.88392H9.27867C9.26899 2.87131 9.25869 2.85927 9.24782 2.84787L6.86374 0.247513C6.85328 0.235665 6.84225 0.224434 6.83069 0.213867V2.76375C6.83115 2.79547 6.8429 2.82574 6.86346 2.84817C6.88403 2.8706 6.91178 2.88342 6.94086 2.88392Z" fill="#720272" />
              <path d="M11.7881 0.961182C11.4669 0.961797 11.159 1.10126 10.9318 1.34901C10.7047 1.59676 10.5768 1.93261 10.5763 2.28299V3.84512H13V2.28299C12.9994 1.93261 12.8716 1.59676 12.6444 1.34901C12.4173 1.10126 12.1094 0.961797 11.7881 0.961182Z" fill="#720272" />
              <path d="M11.4928 13.9801C11.5207 14.0393 11.563 14.089 11.6151 14.1236C11.6672 14.1583 11.7271 14.1767 11.7881 14.1767C11.8491 14.1766 11.909 14.1583 11.961 14.1236C12.0131 14.0889 12.0554 14.0393 12.0833 13.9801C12.0833 13.9801 12.9757 12.031 12.9801 12.0166H10.596C10.6004 12.031 11.4928 13.9801 11.4928 13.9801Z" fill="#720272" />
              <path d="M10.5763 4.56616H13V11.2954H10.5763V4.56616Z" fill="#720272" />
            </svg>
          </button>

        </div>


        <div className="mt-1">
          <button style={{
            padding: "0px 25px", border: "0", backgroundColor:
              "rgba(114, 2, 114, 1)", borderRadius: "3px", color: "white"
          }}>Share</button> <button style={{
            padding: "6px 10px", border: "0", borderRadius: "50%", backgroundColor:
              "rgba(232, 215, 231, 1) "
          }}><i className="fa-solid fa-share" style={{ color: "rgba(114, 2, 114, 1)" }}></i>
          </button>

        </div>

        <div className="mt-1">
          <button style={{
            padding: "0px 10px", border: "0", backgroundColor:
              "rgba(114, 2, 114, 1)", borderRadius: "3px", color: "white"
          }}>Bookmark</button> <button style={{
            padding: "6px 12px", border: "0", borderRadius: "50%", backgroundColor:
              "rgba(232, 215, 231, 1)"
          }}><i className="fa-solid fa-bookmark" style={{ color: "rgba(114, 2, 114, 1)" }}></i>
          </button>

        </div>

        <div className="mt-1">
          <button style={{
            padding: "0px 21px", border: "0", backgroundColor:
              "rgba(114, 2, 114, 1)", borderRadius: "3px", color: "white"
          }}>Colour</button> <button style={{
            padding: "6px 15px", border: "0", borderRadius: "50%", backgroundColor:
              "rgba(232, 215, 231, 1)"
          }}><i className="fa-solid fa-ellipsis-vertical" style={{ color: "rgba(114, 2, 114, 1)" }}></i>
          </button>

        </div>



      </div>

    </div>



    {/* left drawer in bible page */}
{/* <Modal show={isModalVisible}>

    <main>
      <div class="container-md">
        <div class="row " style={{ width: "60%" }}>

          <div class="col-12 p-2" style={{ border: "1px solid blue" }}>
            <div>
              <span><i class="fa-solid fa-circle-xmark" style={{ fontSize: "30px", color: "rgba(114, 2, 114, 1)" }}></i></span> &nbsp; &nbsp;
              <span style={{ fontSize: "12px", fontWeight: "700" }}>SELECT THE BOOK</span>
            </div>
            <div class="mt-4 row">

              <div style={{ height: "650px", overflow: "scroll" }}>



                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>ஆதியாகமம்-50</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>யாத்திராகமம்-40</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>லேவியராகமம்-27</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>எண்ணாகமம்-36</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>உபாகமம்-30</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>யோசுவா -24</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>நியாயாதிபதிகள் -21</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>ரூத்-4</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />



                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>1 சாமுவேல்-31 </p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />


                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>2 சாமுவேல்-24 </p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>1 இராஜாக்கள்-22 </p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>2 இராஜாக்கள்-25 </p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />


                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>1 நாளாகமம்-29 </p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>எஸ்றா-10</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>நெகேமியா-16</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />


                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>எஸ்தர்-17</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />


                <p class="mb-3" style={{
                  color:
                    "rgba(0, 0, 0, 1)", fontSize: "12px", fontWeight: "700", marginLeft: "8px"
                }}>யோபு-18</p>
                <hr style={{ color: "rgba(114, 2, 114, 1);" }} />

              </div>
            </div>
          </div>


        </div>
      </div>

    </main>

    </Modal> */}






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

export default Mobbibleview
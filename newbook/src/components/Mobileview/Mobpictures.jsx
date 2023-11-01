import React, {useEffect ,useState} from "react";
import img1 from '../Mobileview/assets/img1.png';
import img2 from '../Mobileview/assets/img2.png';
import img3 from '../Mobileview/assets/img3.png';
import img4 from '../Mobileview/assets/img4.png';
import img5 from '../Mobileview/assets/img5.png';
import img6 from '../Mobileview/assets/img6.png';
import axios from "axios";
import { BaseUrluser } from "../config/dev";
import { useParams,Link } from "react-router-dom";




function Mobpictures() {



    let [dat, setdate] = useState([]);

  let [ tit , setTit ] =useState('')

  let { id , title } = useParams();

  useEffect(() => {
    setTit(title)
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

  return (

<>

<main>
    <div class="container-md">
        <div class="row " style={{backgroundColor:"#720272",padding:"10px"}}>

            <div class="col-2"><svg width="34" height="34" viewBox="0 0 34 34" fill="none"
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
                </svg></div>

            <div class="col-8 text-center">
                <h4 class=" text-center "style={{color:"white",fontFamily:"Bakbak One",fontWeight:"400",fontSize:"22px"}}>The Last Voice Ministry</h4>
            </div>

        </div>


        <div class="row" style={{backgroundColor: "rgba(18, 18, 18, 1)"}}>
            <div class="mt-1">
                <h2 class="text-center"
                    style={{fontFamily: "Poppins ,sans-serif", fontWeight: "700",fontSize: "18px",color: "white"}}>
                    {tit} </h2>

                <div class="row  text-center px-3" style={{backgroundColor: "rgba(18, 18, 18, 1)"}}>

                        {dat?.length === 0 ? (
                            <>
                            <p style={{textAlign:"center",
                                      fontWeight:"700",
                                      fontSize:"20px"}}>

                                
                               No data found
                            </p>
                            </>
                        ) : (  dat?.map((da,key)=>   {
                            return (
<div class="col-4 p-0">

<div class="card flex-shrink-0 flex-nowrap flex-shrink-0" key={key}
style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
<img src={da.image} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} / >
<div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
    <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
>{da.bookTitle}</a>
</div>
</div>

</div>
                            )
                        })     )  }

                    

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img2} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px" ,fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}>Published Books</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img3} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px" ,fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px" ,backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                      >Special Books</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img4} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px" ,fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                          >Videos</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img5} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0" ,fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"
                                }}>Add Bookmarks</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img6} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px" ,backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                                  >Photos</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img1} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600" ,position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                                      >New Books</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img2} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px",backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                                          >Published Books</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img3} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0",fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                                              >Special Books</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img4} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px" ,fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                                                  >Videos</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img5} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px" ,backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                                                      >Add Bookmarks</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 p-0">

                        <div class="card  flex-nowrap flex-shrink-0"
                            style={{backgroundColor: "rgba(18, 18, 18, 1) !important",border: "0"}}>
                            <img src={img6} width="100%" alt="" style={{backgroundColor: "rgba(18, 18, 18, 1)"}} />
                            <div style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
                                <a href="#" class="btn" style={{width: "90%",borderRadius: "0", fontSize: "10px",color: "white",padding: "5px 0px", fontFamily: "poppins,sans-serif",fontWeight: "600", position: "relative",top: "-31px", backgroundColor: "rgba(114, 2, 114,1)",boxShadow: "none"}}
                                                          >Photos</a>
                            </div>
                        </div>

                    </div>




                </div>

            </div>



        </div>

        <div className="row px-2 pt-1" style={{ backgroundColor: "rgba(114, 2, 114, 1)" }}>
        <div className="col-2 p-0 text-center">
        <Link to="/" style={{textDecoration:"none"}}>
          <aside>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.479 5.57827L13.093 1.12502C11.2787 -0.375007 8.7213 -0.375007 6.90703 1.12502L1.52097 5.57827C0.55059 6.38059 0 7.59705 0 8.8663V15.8109C0 18.066 1.73415 20 4 20H6C7.10457 20 8 19.1046 8 18V14.7478C8 13.4803 8.9521 12.5587 10 12.5587C11.0479 12.5587 12 13.4803 12 14.7478V18C12 19.1046 12.8954 20 14 20H16C18.2659 20 20 18.066 20 15.8109V8.8663C20 7.59706 19.4494 6.38059 18.479 5.57827Z" fill="#F2F2F2" />
            </svg> <br />
          <span style={{ color: "white", fontSize: "12px" }}>Home</span>
          </aside>
          </Link> 
        </div>
        <div className="col-2 p-0 text-center">
          <Link to="" style={{textDecoration:"none"}}>
          <aside>
            <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8424 16.9597C16.9414 16.8937 17 16.7837 17 16.6701V0.344546C17 0.157608 16.8424 0 16.6555 0H2.22488C1.00064 0 0.00366895 0.996971 0.00366895 2.22122C0.00366895 2.22122 0 18.5358 0 18.5468C0 19.7747 1.00064 20.7753 2.22488 20.7753H3.65803V20.9109C3.65803 21.0392 3.73135 21.1565 3.84497 21.2152C3.9586 21.2775 4.09421 21.2738 4.20053 21.2005L5.04356 20.636L5.89393 21.2005C5.95256 21.2408 6.01854 21.2592 6.08451 21.2592C6.14317 21.2592 6.19814 21.2445 6.24946 21.2152C6.35941 21.1565 6.42906 21.0392 6.42906 20.9109V20.7753H16.6555C16.8057 20.7753 16.934 20.6727 16.978 20.5298C17.0293 20.3868 16.9707 20.2292 16.8461 20.1412C16.8277 20.1266 16.3402 19.7637 16.3402 18.5468C16.3402 17.3372 16.8314 16.967 16.8424 16.9597ZM5.38443 6.30078H7.63498C7.82556 6.30078 7.97952 6.14681 7.97952 5.95623V3.70569H9.02048V5.95623C9.02048 6.14681 9.17444 6.30078 9.36502 6.30078H11.6156V7.34173H9.36502C9.17444 7.34173 9.02048 7.49569 9.02048 7.68628V13.4006H7.97952V7.68628C7.97952 7.49569 7.82556 7.34173 7.63498 7.34173H5.38443V6.30078ZM15.9554 20.0826H6.42906V18.895H14.0714C14.262 18.895 14.4159 18.7374 14.4159 18.5468C14.4159 18.3562 14.262 18.2022 14.0714 18.2022H2.69771C2.50346 18.2022 2.34949 18.3562 2.34949 18.5468C2.34949 18.7374 2.50346 18.895 2.69771 18.895H3.65803V20.0826H2.22488C1.38185 20.0826 0.692761 19.3935 0.692761 18.5468C0.692761 18.1399 0.850369 17.7514 1.14359 17.4655C1.43315 17.1723 1.81803 17.0147 2.22488 17.0147H15.959C15.7868 17.3519 15.6475 17.843 15.6475 18.5468C15.6475 19.2505 15.7868 19.7417 15.9554 20.0826Z" fill="#F2F2F2" />
            </svg> <br />
            <span style={{ color: "white", fontSize: "12px" }}>Bible</span>
          </aside>
          </Link>
        </div>
        <div className="col-4 text-center p-0">
          <aside>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.479 5.57827L13.093 1.12502C11.2787 -0.375007 8.7213 -0.375007 6.90703 1.12502L1.52097 5.57827C0.55059 6.38059 0 7.59705 0 8.8663V15.8109C0 18.066 1.73415 20 4 20H6C7.10457 20 8 19.1046 8 18V14.7478C8 13.4803 8.9521 12.5587 10 12.5587C11.0479 12.5587 12 13.4803 12 14.7478V18C12 19.1046 12.8954 20 14 20H16C18.2659 20 20 18.066 20 15.8109V8.8663C20 7.59706 19.4494 6.38059 18.479 5.57827Z" fill="#F2F2F2" />
            </svg> <br />
            <span style={{ color: "white", fontSize: "12px" }}>Notes</span>
          </aside>
        </div>
        <div className="col-2 p-0 text-center">
          {/* <Link to="/"></Link> */}
          <aside>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5001 19.4519C13.6639 18.8032 18.8117 16.3014 23.2143 19.8983V8.39429C21.5824 6.73797 19.271 5.93792 16.9643 6.2309V6.82286C16.9643 7.31597 16.5646 7.71572 16.0715 7.71572H14.2858V12.18C14.2858 12.6731 13.886 13.0729 13.3929 13.0729H12.9465V17.9836C12.9465 18.2301 12.7466 18.43 12.5001 18.43C12.2535 18.43 12.0536 18.2301 12.0536 17.9836V13.0729H11.6072C11.1141 13.0729 10.7143 12.6731 10.7143 12.18V7.71572H8.92862C8.43551 7.71572 8.03577 7.31597 8.03577 6.82286V6.23045C5.7299 5.9367 3.41892 6.73482 1.78577 8.38893V19.8965C6.18934 16.3023 11.3362 18.8032 12.5001 19.4519ZM17.1393 8.60858C17.2626 8.39506 17.5356 8.32191 17.7492 8.44518L18.9099 9.11483C19.0491 9.19401 19.1353 9.34173 19.1357 9.50193C19.136 9.66213 19.0505 9.81024 18.9116 9.89003C18.7727 9.96982 18.6016 9.96906 18.4634 9.88804L17.3027 9.2184C17.0892 9.09512 17.0161 8.82209 17.1393 8.60858ZM15.9438 10.0336C16.0345 9.95749 16.1518 9.92057 16.2698 9.93095C16.3877 9.94133 16.4968 9.99816 16.5728 10.0889L17.4335 11.1157C17.5423 11.2371 17.5762 11.4082 17.5221 11.5619C17.4679 11.7156 17.3343 11.8276 17.1734 11.8541C17.0126 11.8805 16.8501 11.8172 16.7496 11.6889L15.8884 10.6621C15.7303 10.4732 15.7551 10.1919 15.9438 10.0336ZM8.42728 10.0889C8.5287 9.9634 8.68996 9.90237 8.84908 9.92932C9.00819 9.95626 9.14038 10.067 9.19481 10.2189C9.24925 10.3708 9.21746 10.5403 9.11166 10.6621L8.2505 11.6889C8.14919 11.815 7.98762 11.8764 7.82816 11.8495C7.6687 11.8225 7.53628 11.7114 7.482 11.5591C7.42772 11.4068 7.46007 11.237 7.56657 11.1153L8.42728 10.0889ZM5.92728 9.72465C5.86812 9.62206 5.85215 9.50017 5.88288 9.3858C5.9136 9.27143 5.98852 9.17395 6.09112 9.11483L7.25184 8.44518C7.39004 8.36416 7.56106 8.36341 7.69997 8.4432C7.83889 8.52299 7.9244 8.67109 7.92404 8.83129C7.92369 8.99149 7.83753 9.13922 7.69827 9.2184L6.53755 9.88804C6.43498 9.94738 6.31302 9.9635 6.19855 9.93285C6.08408 9.9022 5.98649 9.8273 5.92728 9.72465Z" fill="#F2F2F2" />
              <path d="M12.0536 12.18H12.9464C13.193 12.18 13.3929 11.9801 13.3929 11.7336V7.2693C13.3929 7.02274 13.5927 6.82287 13.8393 6.82287H15.625C15.8716 6.82287 16.0714 6.62299 16.0714 6.37644V5.48358C16.0714 5.23703 15.8716 5.03715 15.625 5.03715H13.8393C13.5927 5.03715 13.3929 4.83728 13.3929 4.59072V2.80501C13.3929 2.55845 13.193 2.35858 12.9464 2.35858H12.0536C11.807 2.35858 11.6072 2.55845 11.6072 2.80501V4.59072C11.6072 4.83728 11.4073 5.03715 11.1607 5.03715H9.37502C9.12846 5.03715 8.92859 5.23703 8.92859 5.48358V6.37644C8.92859 6.62299 9.12846 6.82287 9.37502 6.82287H11.1607C11.4073 6.82287 11.6072 7.02274 11.6072 7.2693V11.7336C11.6072 11.9801 11.807 12.18 12.0536 12.18Z" fill="#F2F2F2" />
              <path d="M1.97992 20.9095L2.6134 21.5345C6.60983 17.9452 11.5621 20.9595 11.7719 21.088L12.0536 21.2693V20.2211C10.9822 19.6068 6.08528 17.1501 1.97992 20.9095Z" fill="#F2F2F2" />
              <path d="M0.446429 23.3407H9.375V22.9001C9.375 22.6535 9.57487 22.4536 9.82143 22.4536C10.068 22.4536 10.2679 22.6535 10.2679 22.9001V23.7871C10.2679 24.1443 11.158 24.68 12.5 24.68C13.842 24.68 14.7321 24.1443 14.7321 23.7871V22.8943C14.7321 22.6477 14.932 22.4478 15.1786 22.4478C15.4251 22.4478 15.625 22.6477 15.625 22.8943V23.3407H24.5536C24.8001 23.3407 25 23.1408 25 22.8943V9.84516C24.9993 9.61915 24.8316 9.42844 24.6076 9.39874L24.1071 9.33713C24.1071 9.42373 24.1071 20.955 24.1071 20.9045C24.1062 21.0232 24.058 21.1366 23.9732 21.2197C23.8839 21.309 24.2513 20.9447 23.0129 22.1702C22.6716 22.5028 22.1299 22.5115 21.7781 22.1898C18.2067 18.9711 13.8888 21.7251 13.7067 21.8438L12.9812 22.3103C12.6869 22.4998 12.3091 22.4998 12.0147 22.3103L11.2946 21.8456C11.1161 21.7336 6.71384 19.0541 3.21964 22.1911C2.86732 22.5109 2.32721 22.5019 1.98571 22.1706L1.02679 21.2202C0.942256 21.1366 0.894128 21.023 0.892857 20.9041V9.33713L0.390179 9.39963C0.16681 9.42998 0.000178937 9.62063 0 9.84606V22.8943C0 23.1408 0.199873 23.3407 0.446429 23.3407Z" fill="#F2F2F2" />
              <path d="M12.9464 21.2724L13.2228 21.0938C13.4259 20.9599 18.3004 17.8528 22.3777 21.526L23.0165 20.9059C18.9495 17.1952 13.9986 19.6331 12.9464 20.2229V21.2724Z" fill="#F2F2F2" />
              <path d="M17.7491 3.41483L18.9098 2.74519C19.0491 2.66601 19.1353 2.51828 19.1356 2.35809C19.136 2.19789 19.0504 2.04978 18.9115 1.96999C18.7726 1.8902 18.6016 1.89096 18.4634 1.97198L17.3027 2.64162C17.1634 2.7208 17.0773 2.86853 17.0769 3.02873C17.0766 3.18893 17.1621 3.33703 17.301 3.41682C17.4399 3.49661 17.6109 3.49585 17.7491 3.41483Z" fill="#F2F2F2" />
              <path d="M6.5375 1.97198C6.3993 1.89096 6.22828 1.8902 6.08937 1.96999C5.95046 2.04978 5.86494 2.19789 5.8653 2.35809C5.86565 2.51828 5.95181 2.66601 6.09107 2.74519L7.25179 3.41483C7.38999 3.49585 7.56101 3.49661 7.69992 3.41682C7.83884 3.33703 7.92435 3.18893 7.924 3.02873C7.92364 2.86853 7.83748 2.7208 7.69822 2.64162L6.5375 1.97198Z" fill="#F2F2F2" />
              <path d="M16.5728 1.77108L17.4335 0.74429C17.5423 0.622878 17.5762 0.451849 17.5221 0.298115C17.4679 0.14438 17.3343 0.0323787 17.1734 0.00592796C17.0126 -0.0205227 16.8501 0.0427821 16.7496 0.171076L15.8884 1.19786C15.73 1.38685 15.7548 1.66847 15.9438 1.82688C16.1328 1.98529 16.4144 1.96006 16.5728 1.77108Z" fill="#F2F2F2" />
              <path d="M9.05626 1.82642C9.24499 1.66807 9.26977 1.38676 9.11162 1.19785L8.25046 0.171068C8.14915 0.0450154 7.98758 -0.0163892 7.82812 0.0105512C7.66866 0.0374916 7.53624 0.148564 7.48196 0.300903C7.42768 0.453242 7.46003 0.623025 7.56653 0.744728L8.42724 1.77151C8.50337 1.86222 8.61241 1.91896 8.73038 1.92926C8.84835 1.93956 8.96557 1.90257 9.05626 1.82642Z" fill="#F2F2F2" />
            </svg> <br />
            <span style={{ color: "white", fontSize: "12px" }}>Message</span>
          </aside>
        </div>
        <div className="col-2 p-0 text-center">
          <Link to="/cod/questiontypes" style={{textDecoration:"none"}}>
          <aside>
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 17.2437V24C21.2798 23.9952 19.9401 23.7499 18.9062 22.1931C18.2626 21.224 16.703 21.112 15.5857 21.112L15.3564 21.1125C13.9974 21.1125 12.666 20.4987 11.7853 19.5035H17.9453C18.161 19.5035 18.3361 19.3243 18.3361 19.1035V12.4085C19.8567 12.5632 19.9932 13.7269 19.9932 16.8437C19.9932 17.0651 20.1678 17.2437 20.3841 17.2437H22ZM4.04481 19.5035C3.82908 19.5035 3.65399 19.3243 3.65399 19.1035V12.4096C2.14278 12.5691 2.00677 13.7339 2.00677 16.8437C2.00677 17.0651 1.8322 17.2437 1.61595 17.2437H0V24C0.720167 23.9952 2.05993 23.7499 3.0938 22.1931C3.73736 21.224 5.29703 21.112 6.4148 21.112L6.64356 21.1125C8.00261 21.1125 9.33403 20.4987 10.2147 19.5035H4.04481ZM9.60396 7.08747V11.1792L10.7665 10.3227C10.8348 10.272 10.9151 10.2469 10.9953 10.2469C11.075 10.2469 11.1553 10.272 11.2236 10.3227L12.3861 11.1792V7.08747H9.60396ZM13.1678 7.08747V11.9605C13.1678 12.1104 13.086 12.248 12.9552 12.3163C12.8249 12.3851 12.6681 12.3728 12.5487 12.2848L10.9953 11.1403L9.44138 12.2848C9.37363 12.3349 9.29338 12.3605 9.21313 12.3605C9.15216 12.3605 9.09119 12.3456 9.03491 12.3163C8.90412 12.248 8.8223 12.1104 8.8223 11.9605V7.08747H4.43564L4.44554 18.7035H17.5545V7.08747H13.1678ZM8.85268 2.52965C8.85268 1.13493 9.81376 0.000213318 10.995 0.000213318C12.1763 0.000213318 13.1374 1.13488 13.1374 2.52965C13.1374 3.92443 12.1764 5.05909 10.995 5.05909C9.81376 5.05904 8.85268 3.92437 8.85268 2.52965ZM9.63434 2.52965C9.63434 3.48325 10.2448 4.25909 10.995 4.25909C11.7453 4.25909 12.3558 3.48325 12.3558 2.52965C12.3558 1.57605 11.7453 0.800213 10.995 0.800213C10.2448 0.800213 9.63434 1.57605 9.63434 2.52965ZM14.3698 4.65013V0.4C14.3698 0.17904 14.5448 0 14.7607 0H15.9342C17.2586 0 18.3361 1.13477 18.3361 2.52965C18.3361 3.84693 17.3979 4.92981 16.1539 5.04848C16.1419 5.0496 16.1298 5.05019 16.1177 5.05019H14.7607C14.5448 5.05013 14.3698 4.87109 14.3698 4.65013ZM15.1515 4.25013H16.0985C16.9163 4.16261 17.5544 3.41045 17.5544 2.5296C17.5544 1.57589 16.8276 0.799947 15.9342 0.799947H15.1515V4.25013ZM5.83127 5.05904C6.50954 5.05904 7.13669 4.70256 7.55201 4.08107C7.67384 3.89872 7.62819 3.64981 7.45003 3.52512C7.27186 3.40037 7.02866 3.44709 6.90677 3.62949C6.63945 4.02955 6.24742 4.25904 5.83127 4.25904C5.0617 4.25904 4.43564 3.4832 4.43564 2.5296C4.43564 1.576 5.06175 0.80016 5.83127 0.80016C6.24737 0.80016 6.6394 1.0296 6.90672 1.42965C7.02856 1.612 7.27176 1.65872 7.44997 1.53397C7.62809 1.40923 7.67374 1.16032 7.5519 0.977973C7.13658 0.356587 6.50948 0.000160014 5.83127 0.000160014C4.63069 0.000160014 3.65399 1.13483 3.65399 2.5296C3.65399 3.92437 4.63074 5.05904 5.83127 5.05904Z" fill="#F2F2F2" />
            </svg>
            <br />
            <span style={{ color: "white", fontSize: "12px" }}>COD</span>
          </aside>
          </Link>
        </div>
      </div>

    </div>
</main> 

</>
  )
}

export default Mobpictures
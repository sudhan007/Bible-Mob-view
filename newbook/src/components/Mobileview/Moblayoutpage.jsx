import React from 'react'
import { Link } from 'react-router-dom';
import popupimg from '../Mobileview/assets/popup.png'
import  Modal  from 'react-modal';
import '../../components/Mobileview/Moblayout.css'
import homenav from './assets/homenav.png'
import messagenav from './assets/message.png'
import codnav from './assets/codnav.png'
import biblenav from './assets/bible.png'




function Moblayoutpage() {


    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
  return (

    <>

    <main>
      <div className="container-md">
        <div className="head row p-4">
          <h2 className="text-center">The Last Voice Ministry</h2>
        </div>

        <div className="content row">
          <h3 className="text-center mt-4 endtime">End Time Church Address</h3>
          <p className="text-center mt-3 timeend">ஊழியக்காரர்கள் தங்கள் சபை விலாசத்தை பதிவிட விரும்பினால்
            இங்கே பதிவிடலாம் </p>

          <div className="mt-2  justify-content-center d-flex ">

            <div className=" w-75 ">
              <div className="card-body dash p-3 text-center">
                <span className="d-flex justify-content-center mt-3"><i className="fa-regular fa-plus"></i></span>
                <span style={{
                  color:
                    "rgba(255, 158, 255, 0.71)"
                }} onClick={openModal} >Add Churches</span>
              </div>
            </div>

          </div>


          <div className="row mt-3 mx-1 ">

            <div className=" col-6 col-xs-12">
              <div className="cad" style={{ width: "100%" }}>
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>

            <div className=" col-6  col-xs-12">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>


          </div>

          <div className="row mt-3 mx-1 ">

            <div className=" col-6">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>

            <div className=" col-6 ">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>


          </div>

          <div className="row mt-3 mx-1 ">

            <div className=" col-6">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>

            <div className=" col-6 ">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>


          </div>

          <div className="row mt-3 mx-1 ">

            <div className=" col-6">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>

            <div className=" col-6 ">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>


          </div>

          <div className="row mt-3 mb-3 mx-1 ">

            <div className=" col-6">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>

            <div className=" col-6 ">
              <div className="cad">
                <div className="p-1">
                  <span id="txt1">C.S.I Christ Church, Nagercoil</span> <br />
                  <span id="txt2">Protestant church in Nagercoil, Tamil Nadu</span><br />
                  <i className="fa-solid fa-clock">&nbsp; &nbsp;</i><span id="txt3">10:00 am - 8:00 pm</span>
                </div>
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







  

<div className="container-md">
<div className="row  mt-3 p-2">

  <span><i className="fa-solid fa-circle-xmark"></i></span>

  <div className="col-12 text-center">
    <img src={popupimg} className="img-fluid" alt="uhgu" />
  </div>

  <div className="mt-3 col-12 ">
    <form action="#">
      <p>
        <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgss">
          <path d="M6.33344 9.51769C6.31617 9.81525 6.54324 10.0705 6.84093 10.0877C6.85159 10.0884 6.86232 10.0887 6.87291 10.0887C7.15664 10.0887 7.3945 9.86733 7.41109 9.58042C7.41541 9.50575 7.41871 9.43357 7.42236 9.36078C7.08904 9.40955 6.55842 9.4192 6.33844 9.42129C6.33668 9.45374 6.3354 9.48484 6.33344 9.51769Z" fill="#9F569F" />
          <path d="M7.45065 8.28827C7.44789 6.25211 7.12267 5.12541 6.67927 4.44779C6.4576 4.11138 6.19842 3.89565 5.95895 3.77624C5.8073 3.69981 5.66773 3.66231 5.55514 3.64511C5.43479 3.90657 4.87894 5.09506 4.40956 5.76222L4.29913 5.68451C4.55662 5.31909 4.84723 4.78077 5.07187 4.33527C5.22648 4.02881 5.35013 3.76667 5.41246 3.63256C5.40498 3.63242 5.39681 3.63202 5.38987 3.63202C5.34703 3.63202 5.31438 3.63485 5.29286 3.63769H2.70691C2.68573 3.63485 2.65314 3.63202 2.61031 3.63202C2.60343 3.63202 2.5952 3.63236 2.58778 3.63256C2.65004 3.76673 2.77362 4.02894 2.92824 4.33534C3.15301 4.7807 3.44349 5.31902 3.70111 5.68458L3.59068 5.76215C3.12124 5.09499 2.56551 3.90664 2.44503 3.64504C2.33245 3.66224 2.19281 3.69975 2.04123 3.77611C1.6783 3.95609 1.28711 4.34971 1.01336 5.04716C0.736311 5.74738 0.550328 6.75966 0.549316 8.28827C0.549384 8.58057 0.5564 8.89202 0.571173 9.22365C0.875613 9.27202 1.42392 9.28403 1.65503 9.28672C1.63729 8.92825 1.62858 8.59514 1.62872 8.28827C1.62676 6.93249 1.79048 6.07004 1.97998 5.54204C1.8939 7.65221 1.70407 12.8153 1.79069 15.4024C1.94159 15.4236 2.19996 15.4588 2.50156 15.4938C2.98194 15.55 3.57119 15.6059 4.00002 15.6059C4.42878 15.6059 5.0181 15.55 5.49841 15.4938C5.80008 15.4587 6.05858 15.4236 6.20949 15.4023C6.2961 12.8156 6.10634 7.65369 6.0202 5.54291C6.02074 5.54433 6.02121 5.54548 6.02175 5.54689C6.21178 6.07388 6.37172 6.93863 6.37125 8.28834C6.37125 8.59501 6.36248 8.92811 6.34501 9.28652C6.57626 9.28376 7.12429 9.27188 7.4288 9.22372C7.44344 8.89209 7.45059 8.58064 7.45065 8.28827ZM3.44362 5.92851H3.89053V5.53502H4.10977V5.92851H4.55669V6.14775H4.10977V7.23835H3.89053V6.14775H3.44362V5.92851Z" fill="#9F569F" />
          <path d="M0.590014 9.58069C0.606946 9.86739 0.844737 10.0887 1.1284 10.0887C1.13899 10.0887 1.14965 10.0884 1.16037 10.0878C1.4578 10.0702 1.685 9.81491 1.66753 9.51735C1.66564 9.48463 1.66429 9.45367 1.66254 9.42129C1.44262 9.41913 0.911993 9.40948 0.578613 9.36078C0.582189 9.43363 0.585562 9.50582 0.590014 9.58069Z" fill="#9F569F" />
          <path d="M3.00994 16.2176C3.3444 16.2176 3.63218 16.0203 3.76507 15.7361C3.26366 15.7178 2.6458 15.6496 2.20361 15.5936C2.29684 15.9524 2.62206 16.2176 3.00994 16.2176Z" fill="#9F569F" />
          <path d="M4.9909 16.2176C5.37886 16.2176 5.70407 15.9524 5.7973 15.5936C5.35518 15.6495 4.73733 15.7179 4.23584 15.7361C4.3688 16.0203 4.65651 16.2176 4.9909 16.2176Z" fill="#9F569F" />
          <path d="M3.99975 3.25322C4.83802 3.25322 5.51756 2.57367 5.51756 1.73541C5.51756 0.897139 4.83802 0.21759 3.99975 0.21759C3.16148 0.21759 2.48193 0.897139 2.48193 1.73541C2.48193 2.57367 3.16148 3.25322 3.99975 3.25322Z" fill="#9F569F" />
          <path d="M3.91943 15.7402C3.94675 15.7406 3.9736 15.7409 3.99978 15.7409C4.02602 15.7409 4.0528 15.7406 4.08012 15.7402C4.05287 15.7406 4.02595 15.7408 3.99971 15.7408C3.97347 15.7408 3.94662 15.7406 3.91943 15.7402Z" fill="#9F569F" />
        </svg>

        <label for="">Pastor name :</label> <br />
        <input type="text" name="" id="" placeholder="Enter Pastor name" />
      </p>

      <p>
        <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgss">
          <path d="M6.95295 14.1711H3.55666H7.46239V11.9909V10.8572V10.1595C7.46239 10.1595 7.54701 9.15648 7.46239 9.113L6.61332 7.39373V5.62463C6.61108 5.51187 6.57557 5.40247 6.5115 5.31088L4.57555 2.65866V1.96184H4.74468C4.8798 1.96184 5.00938 1.90671 5.10492 1.80858C5.20045 1.71045 5.25413 1.57736 5.25413 1.43858C5.25413 1.29981 5.20045 1.16671 5.10492 1.06858C5.00938 0.970454 4.8798 0.915326 4.74468 0.915326H4.57555V0.740907C4.57555 0.602131 4.52188 0.469039 4.42634 0.370909C4.3308 0.27278 4.20122 0.217651 4.06611 0.217651C3.93099 0.217651 3.80141 0.27278 3.70588 0.370909C3.61034 0.469039 3.55666 0.602131 3.55666 0.740907V0.915326H3.38617C3.25106 0.915326 3.12148 0.970454 3.02594 1.06858C2.9304 1.16671 2.87673 1.29981 2.87673 1.43858C2.87673 1.57736 2.9304 1.71045 3.02594 1.80858C3.12148 1.90671 3.25106 1.96184 3.38617 1.96184H3.55666V2.65866L1.62071 5.31088C1.55392 5.40102 1.51811 5.51136 1.51889 5.62463V7.39373L0.500005 8.93858V9.63626C0.500005 9.63626 0.500007 10.9344 0.500005 11.0316V14.1711V14.52C0.500005 14.52 0.500005 14.73 0.500005 14.8688L0.5 15.0644C0.5 15.2177 0.500003 15.2177 0.500003 15.2177H6.95295C7.08806 15.2177 7.46239 15.2177 7.46239 15.2177V14.6944V14.1711C7.46239 14.1711 7.08806 14.1711 6.95295 14.1711ZM4.57555 14.1711H3.55666V12.0781C3.55666 11.9393 3.61034 11.8062 3.70588 11.7081C3.80141 11.61 3.93099 11.5549 4.06611 11.5549C4.20122 11.5549 4.3308 11.61 4.42634 11.7081C4.52188 11.8062 4.57555 11.9393 4.57555 12.0781V14.1711Z" fill="#9F569F" />
        </svg>

        <label for="">Church Name :</label> <br />
        <input type="text" name="" id="" placeholder="Enter Church name " />

      </p>

      <p>
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgss">
          <path d="M11.6853 9.67335L10.0072 7.87532C9.40783 7.23317 8.38894 7.49006 8.14921 8.32483C7.9694 8.90279 7.37006 9.22387 6.83065 9.09541C5.63197 8.77434 4.01374 7.10474 3.71407 5.75622C3.53427 5.17826 3.89387 4.5361 4.43328 4.34348C5.21243 4.08662 5.45216 2.99496 4.85282 2.35281L3.17466 0.554782C2.69519 0.105275 1.97598 0.105275 1.55644 0.554782L0.417686 1.77487C-0.721065 3.05918 0.537555 6.46259 3.35447 9.48071C6.17138 12.4988 9.34789 13.9116 10.5466 12.6273L11.6853 11.4072C12.1049 10.8934 12.1049 10.1229 11.6853 9.67335Z" fill="#9F569F" />
        </svg>


        <label for="">Mobile Number :</label> <br />
        <input type="text" name="" id="" placeholder="Enter Mobile number" />

      </p>

      <p>
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgss">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99998 0.217529L0 1.70181V14.0059H1.52223V11.4195L1.16996 11.4428C1.02584 11.4522 0.897982 11.3788 0.884394 11.2787C0.870806 11.1786 0.976572 11.0898 1.12069 11.0804L3.83002 10.9013C3.97414 10.8918 4.102 10.9653 4.11563 11.0654C4.12922 11.1655 4.02345 11.2542 3.87933 11.2637L3.47779 11.2902V14.0059H10V1.70181L4.99998 0.217529ZM1.96143 9.76165L1.01633 9.82448V8.55634L1.96143 8.45513V9.76165ZM1.96174 7.70171L1.01637 7.82505V6.55387L1.96174 6.39206V7.70171ZM1.96174 5.64074L1.01637 5.82462V4.55344L1.96174 4.33108V5.64074ZM1.96174 3.5787L1.01637 3.82214V2.63458L1.96204 2.35308L1.96174 3.5787ZM3.98365 9.62788L2.91867 9.69877V8.35118L3.98365 8.23695V9.62788ZM3.98365 7.43617L2.91867 7.57536V6.22884L3.98365 6.04633V7.43613V7.43617ZM3.98365 5.24555L2.91867 5.45299V4.10541L3.98365 3.85462V5.24555ZM3.98365 3.05494L2.91867 3.33062L2.91836 2.06854L3.98361 1.75115V3.05494H3.98365ZM6.51301 11.8452C6.51301 11.946 6.39527 12.0278 6.25002 12.0278C6.10476 12.0278 5.98703 11.946 5.98703 11.8452V1.81273C5.98703 1.71186 6.10476 1.6301 6.25002 1.6301C6.39527 1.6301 6.51301 1.71186 6.51301 1.81273V11.8452V11.8452ZM7.763 11.8452C7.763 11.946 7.64527 12.0278 7.50001 12.0278C7.35475 12.0278 7.23702 11.946 7.23702 11.8452V2.18381C7.23702 2.08294 7.3548 2.00118 7.50001 2.00118C7.64523 2.00118 7.763 2.08297 7.763 2.18381V11.8452V11.8452ZM9.013 11.8452C9.013 11.946 8.89526 12.0278 8.75001 12.0278C8.60475 12.0278 8.48701 11.946 8.48701 11.8452V2.55489C8.48701 2.45402 8.60475 2.37226 8.75001 2.37226C8.89526 2.37226 9.013 2.45402 9.013 2.55489V11.8452V11.8452Z" fill="#9F569F" />
        </svg>

        <label for="">City :</label> <br />
        <input type="text" name="" id="" placeholder="Enter your city" />

      </p>

      <p>
        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgss">
          <path d="M5.99998 0.101807C4.63873 0.101807 3.33323 0.642562 2.37068 1.60511C1.40813 2.56767 0.867371 3.87316 0.867371 5.23442C0.867371 7.94537 5.44006 13.6799 5.63603 13.9272C5.67975 13.9817 5.73516 14.0257 5.79815 14.0559C5.86114 14.0861 5.93011 14.1018 5.99998 14.1018C6.06985 14.1018 6.13882 14.0861 6.20182 14.0559C6.26481 14.0257 6.32021 13.9817 6.36393 13.9272C6.5599 13.6799 11.1326 7.94537 11.1326 5.23442C11.1326 3.87316 10.5918 2.56767 9.62929 1.60511C8.66674 0.642562 7.36123 0.101807 5.99998 0.101807ZM5.99998 6.63422C5.63084 6.63422 5.26999 6.52476 4.96306 6.31967C4.65613 6.11459 4.41691 5.8231 4.27565 5.48206C4.13439 5.14102 4.09742 4.76575 4.16944 4.4037C4.24146 4.04165 4.41921 3.70909 4.68023 3.44807C4.94126 3.18705 5.27382 3.00929 5.63586 2.93728C5.99791 2.86526 6.37318 2.90222 6.71422 3.04348C7.05526 3.18475 7.34676 3.42397 7.55184 3.7309C7.75692 4.03783 7.86639 4.39868 7.86639 4.76782C7.86639 5.26282 7.66975 5.73755 7.31973 6.08756C6.96971 6.43758 6.49498 6.63422 5.99998 6.63422Z" fill="#9F569F" />
        </svg>

        <label for="">Address :</label> <br />
        <input type="text" name="" id="" placeholder="Enter your Address" />

      </p>

      <input type="submit" value="Sign In" id="sign" />
    </form>

  </div>
</div>
</div>

 



</>
     


  )
}

export default Moblayoutpage
import React from 'react'
import '../Loginpages/Loginpage.css'
import { Link } from 'react-router-dom'

function Registerpage() {
  return (

    <>
    
    <main>

<div className="container-md setbody">
<div className="pt-4 p-3">
<Link to="/loginscreen" style={{textDecoration:"none"}}><i className="fa-solid fa-arrow-left" style={{color: "white"}}></i></Link>

<div className="mt-4">
    <h2 className="text-center login">Registration</h2>
</div>
<div className="mt-1 p-4">

<form action="#">
  <p>
    <svg className="screen1icons" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.51429 2.92308C2.51429 1.31138 3.85377 0 5.5 0C7.14623 0 8.48571 1.31138 8.48571 2.92308C8.48571 4.53477 7.14623 5.84615 5.5 5.84615C3.85377 5.84615 2.51429 4.53477 2.51429 2.92308ZM7.38571 6.76923H3.61429C1.62171 6.76923 0 8.35692 0 10.3077C0 11.2412 0.775029 12 1.72857 12H9.27143C10.225 12 11 11.2412 11 10.3077C11 8.35692 9.37829 6.76923 7.38571 6.76923Z" fill="#727272"/>
        </svg>
        
      <label className="lable" for="">First name</label> 
      <br />
          <input type="text" className="input1" placeholder="Enter First name" />
          
  </p>
  <p className="topping">
    <svg className="screen1icons" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.51429 2.92308C2.51429 1.31138 3.85377 0 5.5 0C7.14623 0 8.48571 1.31138 8.48571 2.92308C8.48571 4.53477 7.14623 5.84615 5.5 5.84615C3.85377 5.84615 2.51429 4.53477 2.51429 2.92308ZM7.38571 6.76923H3.61429C1.62171 6.76923 0 8.35692 0 10.3077C0 11.2412 0.775029 12 1.72857 12H9.27143C10.225 12 11 11.2412 11 10.3077C11 8.35692 9.37829 6.76923 7.38571 6.76923Z" fill="#727272"/>
        </svg>
    <label className="lable" for="">Last name</label> 
    <br />
        <input type="text" className="input1" placeholder="Enter Last name " />
        
</p>
<p className="topping">
    <svg className="screen1icons"  width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_460_328)">
        <path d="M12.6462 9.54069L10.832 7.7265C10.1841 7.07858 9.08258 7.33777 8.82341 8.18005C8.62903 8.76321 7.98111 9.08717 7.39798 8.95756C6.10213 8.6336 4.35273 6.94899 4.02877 5.58835C3.83439 5.00519 4.22315 4.35727 4.80628 4.16292C5.64858 3.90375 5.90775 2.80227 5.25983 2.15435L3.44564 0.34016C2.9273 -0.113387 2.14979 -0.113387 1.69624 0.34016L0.465185 1.57122C-0.765872 2.86707 0.59477 6.30107 3.64001 9.34631C6.68526 12.3916 10.1193 13.817 11.4151 12.5211L12.6462 11.2901C13.0997 10.7717 13.0997 9.99424 12.6462 9.54069Z" fill="#727272"/>
        </g>
        <defs>
        <clipPath id="clip0_460_328">
        <rect width="13" height="13" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    <label className="lable" for="">Mobile Number</label> 
    <br />
        <input type="text" className="input1" placeholder="Enter Mobile number " />
        
</p>

<p className="topping">
    <svg className="screen1icons"  width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00288 6.09774C6.70433 6.29889 6.35755 6.40522 6.00001 6.40522C5.6425 6.40522 5.29571 6.29889 4.99717 6.09774L0.0798986 2.78457C0.0526173 2.76619 0.0260391 2.74703 0 2.72732V8.15631C0 8.77876 0.499806 9.27275 1.10468 9.27275H10.8953C11.5112 9.27275 12 8.76762 12 8.15631V2.72729C11.9739 2.74705 11.9473 2.76626 11.9199 2.78467L7.00288 6.09774Z" fill="#727272"/>
        <path d="M0.469922 2.18388L5.38718 5.79496C5.57332 5.93166 5.78665 6 5.99998 6C6.21333 6 6.42668 5.93164 6.61282 5.79496L11.5301 2.18388C11.8243 1.96793 12 1.60649 12 1.2164C12 0.545661 11.5046 0 10.8957 0H1.1043C0.495398 2.58167e-05 0 0.545687 0 1.21705C0 1.60649 0.175687 1.96793 0.469922 2.18388Z" fill="#727272"/>
        </svg>
        
    <label className="lable" for="">Email</label> 
    <br />
        <input type="text" className="input1" placeholder="Enter email" />
        
</p>

  <p className="topping">
    <svg className="screen1icons" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 4.875H8.33333V3.25C8.33333 1.45763 6.83833 0 5 0C3.16167 0 1.66667 1.45763 1.66667 3.25V4.875H1.25C0.561111 4.875 0 5.42154 0 6.09375V11.7812C0 12.4535 0.561111 13 1.25 13H8.75C9.43889 13 10 12.4535 10 11.7812V6.09375C10 5.42154 9.43889 4.875 8.75 4.875ZM2.77778 3.25C2.77778 2.05508 3.77444 1.08333 5 1.08333C6.22556 1.08333 7.22222 2.05508 7.22222 3.25V4.875H2.77778V3.25ZM5.55556 9.05775V10.2917C5.55556 10.5907 5.30722 10.8333 5 10.8333C4.69278 10.8333 4.44444 10.5907 4.44444 10.2917V9.05775C4.11389 8.86979 3.88889 8.52421 3.88889 8.125C3.88889 7.52754 4.38722 7.04167 5 7.04167C5.61278 7.04167 6.11111 7.52754 6.11111 8.125C6.11111 8.52421 5.88611 8.86979 5.55556 9.05775Z" fill="#727272"/>
        </svg>
        
          
      <label className="lable" for="">Password</label> 
      <br />
          <input type="text" className="input1" placeholder="Enter password" /> <br />        
  </p>

  <p className="topping">
    <svg className="screen1icons" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 4.875H8.33333V3.25C8.33333 1.45763 6.83833 0 5 0C3.16167 0 1.66667 1.45763 1.66667 3.25V4.875H1.25C0.561111 4.875 0 5.42154 0 6.09375V11.7812C0 12.4535 0.561111 13 1.25 13H8.75C9.43889 13 10 12.4535 10 11.7812V6.09375C10 5.42154 9.43889 4.875 8.75 4.875ZM2.77778 3.25C2.77778 2.05508 3.77444 1.08333 5 1.08333C6.22556 1.08333 7.22222 2.05508 7.22222 3.25V4.875H2.77778V3.25ZM5.55556 9.05775V10.2917C5.55556 10.5907 5.30722 10.8333 5 10.8333C4.69278 10.8333 4.44444 10.5907 4.44444 10.2917V9.05775C4.11389 8.86979 3.88889 8.52421 3.88889 8.125C3.88889 7.52754 4.38722 7.04167 5 7.04167C5.61278 7.04167 6.11111 7.52754 6.11111 8.125C6.11111 8.52421 5.88611 8.86979 5.55556 9.05775Z" fill="#727272"/>
        </svg>
        
        
    <label className="lable" for="">Confirm Password</label> 
    <br />
        <input type="text" className="input1" placeholder="Confirm your Password" /> <br />        
</p>

  <input type="submit" className="inputsub1 mt-3 input1" value="Register" />
<p className="text-center"><Link to="/loginscreen" style={{textDecoration:"none"}}><a href="#" className="lable1">Login</a></Link></p>  
</form>
</div>
<svg width="157" height="142" viewBox="0 0 157 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M157 7.55276L51.6997 0.323137C44.8526 -0.846226 38.7374 1.22719 34.7035 5.42549H34.7027C34.7027 5.42549 -42.0426 82.4124 -42.4506 82.8572L-42.4714 82.8783C-42.469 82.8767 -42.4678 82.8752 -42.4654 82.8736C-45.9336 86.6681 -48 91.8064 -48 97.6256C-48 108.205 -42.3165 121.425 -23.8961 125.812L94.4374 142L157 46.3971C157 46.3971 153.265 40.7968 153.265 30.8638C153.265 20.9308 157 7.55276 157 7.55276ZM35.7761 30.2231L61.3863 32.721L74.0791 18.261L87.1438 19.1514L75.0661 34.0547L104.949 36.9692L98.6579 46.4529L67.6544 43.201L46.0129 69.906L30.4353 67.9802L53.4906 41.7156L27.3655 38.9756L35.7761 30.2231ZM89.366 131.977L-22.4995 117.557C-31.9307 115.934 -39.5982 106.998 -39.5982 97.6256C-39.5982 89.8917 -34.2914 84.491 -26.694 84.491C-25.8672 84.491 71.0481 97.9919 89.366 100.544V131.977ZM145.935 34.881C146.46 40.1357 148.598 43.7547 148.598 43.7547L94.4073 126.827V97.9173L148.599 18.3112C148.599 18.3112 145.138 26.8862 145.935 34.881Z" fill="#720272" fill-opacity="0.06"/>
</svg>

</div>
    
</div>

</main> 
    
    </>
  )
}

export default Registerpage
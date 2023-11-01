import React from 'react'
import { Link } from 'react-router-dom'
import '../Loginpages/Loginpage.css'

function Loginscreen() {
  return (

    <>
    <main>
        <div className="container-md setbody">
            <div className="pt-4 p-3">
             <Link to="/">   <i className="fa-solid fa-arrow-left" style
                    ={{color: "white"}}></i></Link>

                <div className="mt-5">
                    <h2 className="text-center login">Login In to Continue</h2>
                    <h6 className="text-center loginquote mt-1" >Praise the Lord</h6>
                </div>
            </div>


            <div className="mt-1 p-4">

                <form action="#">
                    <p>
                        <svg className="screen1icons" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.41931 5.58958C6.14564 5.77397 5.82776 5.87144 5.50001 5.87144C5.17229 5.87144 4.8544 5.77397 4.58074 5.58958L0.0732404 2.5525C0.0482325 2.53565 0.0238692 2.51809 0 2.50002V7.4766C0 8.04717 0.458155 8.5 1.01263 8.5H9.98738C10.5519 8.5 11 8.03697 11 7.4766V2.5C10.9761 2.51811 10.9517 2.53572 10.9266 2.55259L6.41931 5.58958Z" fill="#726B72" />
                            <path d="M0.430762 2.00189L4.93825 5.31205C5.10888 5.43736 5.30443 5.5 5.49998 5.5C5.69555 5.5 5.89112 5.43733 6.06175 5.31205L10.5692 2.00189C10.839 1.80393 11 1.47262 11 1.11504C11 0.500189 10.5459 0 9.98772 0H1.01228C0.454115 2.36653e-05 0 0.500213 0 1.11563C0 1.47262 0.161047 1.80393 0.430762 2.00189Z" fill="#726B72" />
                        </svg>
                        <label className="lable" for="">Email or Phone number</label>
                        <br />
                        <input type="text" className="input1" placeholder="Enter Email or Phone number" />

                    </p>

                    <p>
                        <svg className="screen1icons" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 4.875H8.33333V3.25C8.33333 1.45763 6.83833 0 5 0C3.16167 0 1.66667 1.45763 1.66667 3.25V4.875H1.25C0.561111 4.875 0 5.42154 0 6.09375V11.7812C0 12.4535 0.561111 13 1.25 13H8.75C9.43889 13 10 12.4535 10 11.7812V6.09375C10 5.42154 9.43889 4.875 8.75 4.875ZM2.77778 3.25C2.77778 2.05508 3.77444 1.08333 5 1.08333C6.22556 1.08333 7.22222 2.05508 7.22222 3.25V4.875H2.77778V3.25ZM5.55556 9.05775V10.2917C5.55556 10.5907 5.30722 10.8333 5 10.8333C4.69278 10.8333 4.44444 10.5907 4.44444 10.2917V9.05775C4.11389 8.86979 3.88889 8.52421 3.88889 8.125C3.88889 7.52754 4.38722 7.04167 5 7.04167C5.61278 7.04167 6.11111 7.52754 6.11111 8.125C6.11111 8.52421 5.88611 8.86979 5.55556 9.05775Z" fill="white" fill-opacity="0.38" />
                        </svg>

                        <label className="lable" for="">Password</label>
                        <br />
                        <input type="text" className="input1" placeholder="Password" /> <br />
                        <p className="text-end mt-2" style={{color: 
        "rgba(255, 255, 255, 1)"}}> <Link to="/forgetpassword" style={{textDecoration:"none"}}><a  className="lable1">Forgotten Password?</a></Link></p>

                    </p>
                    <input type="submit" className="inputsub1 mt-4 input1" value="Sign in" />
                    <p className="text-center mt-2"><Link to="/register" style={{textDecoration:"none"}}><a href="#" className="lable1">Register</a></Link></p>


                </form>
            </div>

            <svg width="157" height="142" viewBox="0 0 157 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M157 7.55276L51.6997 0.323137C44.8526 -0.846226 38.7374 1.22719 34.7035 5.42549H34.7027C34.7027 5.42549 -42.0426 82.4124 -42.4506 82.8572L-42.4714 82.8783C-42.469 82.8767 -42.4678 82.8752 -42.4654 82.8736C-45.9336 86.6681 -48 91.8064 -48 97.6256C-48 108.205 -42.3165 121.425 -23.8961 125.812L94.4374 142L157 46.3971C157 46.3971 153.265 40.7968 153.265 30.8638C153.265 20.9308 157 7.55276 157 7.55276ZM35.7761 30.2231L61.3863 32.721L74.0791 18.261L87.1438 19.1514L75.0661 34.0547L104.949 36.9692L98.6579 46.4529L67.6544 43.201L46.0129 69.906L30.4353 67.9802L53.4906 41.7156L27.3655 38.9756L35.7761 30.2231ZM89.366 131.977L-22.4995 117.557C-31.9307 115.934 -39.5982 106.998 -39.5982 97.6256C-39.5982 89.8917 -34.2914 84.491 -26.694 84.491C-25.8672 84.491 71.0481 97.9919 89.366 100.544V131.977ZM145.935 34.881C146.46 40.1357 148.598 43.7547 148.598 43.7547L94.4073 126.827V97.9173L148.599 18.3112C148.599 18.3112 145.138 26.8862 145.935 34.881Z" fill="#720272" fill-opacity="0.06" />
            </svg>


        </div>
    </main>

</>

  )
}

export default Loginscreen
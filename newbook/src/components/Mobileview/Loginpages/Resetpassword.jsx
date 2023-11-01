import React from 'react'
import { Link } from 'react-router-dom'
import '../Loginpages/Loginpage.css'

function Resetpassword() {
  return (

    <>
<main>
    <div className="container-md setbody">
        <div className="pt-4 p-3">
          <Link to="/forgetpassword"> <i className="fa-solid fa-arrow-left mt-3" style={{color:"white"}}></i></Link> 
            <div className="mt-5">
                <h2 className="text-center login">Forgotten Password</h2>
            </div>
        </div>

        <div className="mt-2 p-4">
            <form action="#">
                <p>
                    
                    <label className="lable" for="">Update password</label> 
                    <br />
                        <input type="text" className="input1" />
                </p>

                <p>
                    
                    <label className="lable" for="">Reset Password</label> 
                    <br />
                        <input type="text" className="input1" />
                </p>
                <p className="text-end" style={{color: 
                "rgba(255, 255, 255, 1)"}}><a  className="lable1">Login/Register</a></p>

                <input type="submit"  value="Continue" className="inputsub1 input1 mt-3" />
            </form>

        </div>
        
        <svg style={{position:"fixed",bottom:"80px"}} width="157" height="142" viewBox="0 0 157 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M157 7.55276L51.6997 0.323137C44.8526 -0.846226 38.7374 1.22719 34.7035 5.42549H34.7027C34.7027 5.42549 -42.0426 82.4124 -42.4506 82.8572L-42.4714 82.8783C-42.469 82.8767 -42.4678 82.8752 -42.4654 82.8736C-45.9336 86.6681 -48 91.8064 -48 97.6256C-48 108.205 -42.3165 121.425 -23.8961 125.812L94.4374 142L157 46.3971C157 46.3971 153.265 40.7968 153.265 30.8638C153.265 20.9308 157 7.55276 157 7.55276ZM35.7761 30.2231L61.3863 32.721L74.0791 18.261L87.1438 19.1514L75.0661 34.0547L104.949 36.9692L98.6579 46.4529L67.6544 43.201L46.0129 69.906L30.4353 67.9802L53.4906 41.7156L27.3655 38.9756L35.7761 30.2231ZM89.366 131.977L-22.4995 117.557C-31.9307 115.934 -39.5982 106.998 -39.5982 97.6256C-39.5982 89.8917 -34.2914 84.491 -26.694 84.491C-25.8672 84.491 71.0481 97.9919 89.366 100.544V131.977ZM145.935 34.881C146.46 40.1357 148.598 43.7547 148.598 43.7547L94.4073 126.827V97.9173L148.599 18.3112C148.599 18.3112 145.138 26.8862 145.935 34.881Z" fill="#720272" fill-opacity="0.06"/>
            </svg>
    </div>
</main>  
</>
  )
}

export default Resetpassword
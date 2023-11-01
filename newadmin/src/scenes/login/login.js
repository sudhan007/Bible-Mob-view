import React , { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrluser } from "../../components/config/dev";

let Login = () =>{

    let [ name , setName ] = useState('')
    let [ password , setPassword ] = useState('')

    let navigate = useNavigate()

    useEffect(()=>{
        
    },[])

    let Start = async () =>{
        let responce = await axios({
            method : 'post',
            url : BaseUrluser+'/login',
            data :{
                name : name,
                password : password
            }
        })
        .then((res)=>{
            console.log(res , 'dcsd')
            if(res.data.status === true){
                localStorage.setItem('token',res.data.token)
                navigate('/')
            }
        })
        .catch((err)=>{
            console.log(err , 'dcsd')
        })
    }

    return(
        <>
            <body>
                <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                    data-sidebar-position="fixed" data-header-position="fixed">
                    <div
                    className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <div style={{ marginTop : '10%' , width : '100%' }} className="row justify-content-center ">
                        <div className="col-sm-8 col-md-8 col-lg-6 col-xl-3 col-xxl-3">
                            <div className="card mb-0">
                            <div className="card-body">
                                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                {/* <img src="../assets/images/logos/dark-logo.svg" width="180" alt="" /> */}
                                </a>
                                <p style={{ color : 'black' }} className="text-center">Admin Panel</p>
                                <form>
                                <div className="mb-3">
                                    <label  style={{ color : 'black' }} for="exampleInputEmail1" className="form-label">Username</label>
                                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-4">
                                    <label style={{ color : 'black' }} for="exampleInputPassword1" className="form-label">Password</label>
                                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                {/* <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="form-check">
                                    <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked  />
                                    <label className="form-check-label text-dark" for="flexCheckChecked">
                                        Remeber this Device
                                    </label>
                                    </div>
                                    <a className="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                                </div> */}
                                <div  onClick={()=>{ Start() }} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</div>
                                {/* <div className="d-flex align-items-center justify-content-center">
                                    <p className="fs-4 mb-0 fw-bold">New to Modernize?</p>
                                    <a className="text-primary fw-bold ms-2" href="./authentication-register.html">Create an account</a>
                                </div> */}
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Login
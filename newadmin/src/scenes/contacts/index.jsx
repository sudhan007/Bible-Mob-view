import React , { useState , useEffect } from "react";
import { Box } from "@mui/material"; 
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { BaseUrluser } from "../../components/config/dev";
import axios from "axios";
import swal from "sweetalert";
import Modal from 'react-modal';
import ClockLoader from "react-spinners/ClockLoader";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Contacts = () => {

  const [isSidebar, setIsSidebar] = useState(true);
  const [ searchs , setSearch ] = useState('')
  const [ data , setData ] = useState([])

  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(()=>{
    Start()
  },[])

  let Start = async() =>{
    setIsOpen(true)
    let rr = await axios({
        method : 'post',
        url : BaseUrluser + '/searchone',
        data : {
          token : localStorage.getItem('token')
        }
    })
    .then((res)=>{
      console.log(res.data , 'data')
      setData(res.data.data)
      setIsOpen(false)
    })
    .catch((err)=>{
      console.log(err , 'err')
      setIsOpen(false)
    })
  }

  let searchff =async ( re ) =>{

    
    setIsOpen(true)
    let responce = await axios({
        method : 'post',
        url : BaseUrluser + '/addsearch',
        data : {
            text : 'ok',
            token : localStorage.getItem('token'),
            pro : re.mainCategory,
            id : re._id
        }
    })
    .then((res)=>{
      Start()
      // if( res.data.status === true){
      //   setData(res.data.data)
        swal("Success", "Search inserted " + '' + re.bookTitle.replace(/\.(txt|doc)/gi, ''), "success");
      //   setIsOpen(false)
      // }else{
      //   swal("Oops!", "Something went wrong!", "error");
      //   setIsOpen(false)
      // }

      
      // console.log(res.data , 'reseeeee')
    })
    .catch((err)=>{
        swal("Oops!", "Something went wrong!", "error");
        setIsOpen(false)
        console.log(err,'err')
    })
}

let newsrch = async() =>{
  setIsOpen(true)
  let responce = await axios({
      method : 'post',
      url : BaseUrluser + '/searchresult',
      data : {
          search : searchs
      }
  })
  .then((res)=>{
    setIsOpen(false)
      console.log(res.data , 'reseeeee')
  })
  .catch((err)=>{
      swal("Oops!", "Something went wrong!", "error");
      setIsOpen(false)
      console.log(err,'err')
  })
}

let caZcaSc =async () =>{
  setIsOpen(true)
  let responce = await axios({
      method : 'post',
      url : BaseUrluser + '/alladdsearch',
      data : {
          text : 'ok',
          token : localStorage.getItem('token')
      }
  })
  .then((res)=>{
    Start()
      swal("Success", "Search inserted ", "success");
    //   setIsOpen(false)
    // }else{
    //   swal("Oops!", "Something went wrong!", "error");
    //   setIsOpen(false)
    // }

    setIsOpen(false)    
    // console.log(res.data , 'reseeeee')
  })
  .catch((err)=>{
      swal("Oops!", "Something went wrong!", "error");
      setIsOpen(false)
      console.log(err,'err')
  })
}

  
  return (

    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
          <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title="Search" subtitle="Click to Add Search" />
              <div >
                <button onClick={()=>{caZcaSc()}} >Click Insert Search</button>
                {/* <input onChange={(e)=>{ setSearch(e.target.value) }} type="text"  />
                <button onClick={()=>{ newsrch() }} >Search</button> */}
              </div>
              
            </Box>
            <div style={{}} className="row" >
                {
                  data?.map((re,index)=>{
                    return(
                      <div style={{ padding : 10 , cursor : 'pointer' }} onClick={()=>{ searchff(re) }} className="
                      col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index} >
                        <div style={{ width : '100%' , height : 100 , backgroundColor : '#fff' , padding : 20, cursor : 'pointer'  }} >
                          <p style={{ color : '#000' , cursor : 'pointer' }}>{ re.realbook.replace(/\.(txt|doc)/gi, '') }</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
          </Box>
        </main>

        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >

            <ClockLoader color="#36d7b7" />
        
        </Modal>

    </div>
  );
};

export default Contacts;

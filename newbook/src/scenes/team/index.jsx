import React , { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import Modal from 'react-modal';
import axios from "axios";
import { BaseUrluser } from "../../components/config/dev";
import ReactLoading from 'react-loading';
import { json, useNavigate } from "react-router-dom";
import objectHash from 'object-hash';

const customStyles = {
  content: {
    width : '30%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const [ cname , setCname ] = useState('')
  const [ align , setAlign ] = useState()

  const [ err , setErr ] = useState(false)
  const [ errmsg , setErrmsg ] = useState('')
  const [ loading , setLoading ] = useState(false)
  const [ data , setData ] = useState()
  const [ modelval , setModelval ] = useState(false)
  const [ editss , setEditss ] = useState(0)
  const [ editssdata , setEditssdata ] = useState()

  let navigate = useNavigate()

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
      setEditss(0)
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }


    useEffect(()=>{
      Start()
    },[])

    let Start = async () =>{
        let token = await localStorage.getItem('token')
        if(token === undefined || token === null || token === ''){
            navigate('/login')
        }else{
            let responce = await axios({
                method : 'post',
                url : BaseUrluser+'/categorydetail',
                data : {
                    token : token
                }
            })
            .then((ree)=>{
              console.log(ree.data , 'ree.dataree.data')
                if(ree.data.status === true){
                  setData(ree.data.data)
                }
            })
            .catch((err)=>{
                navigate('/login')
            })
        }
    }

  let addCategory = async () =>{
    setLoading(true)
    setErr(false)
    let respon = await axios ( {
      method : 'post' ,
      url : BaseUrluser + '/addcategory',
      data : {
        token : localStorage.getItem('token'),
        catname : cname ,
        align : align
      }
    })
    .then((res)=>{
      setLoading(false)
      if(res.data.status === true){
        setData(res.data.data)
        setIsOpen(false);
      }else{
        setErr(true)
        setErrmsg(res.data.message)
      }
      console.log(res.data , 'dcsd')
    })
    .catch((err)=>{
      setLoading(false)
      setErr(true)
      setErrmsg('Network Error')
      console.log(err , 'dcsd')
    })
  }

  let editClick = (dat) =>{
    setIsOpen(true);
    setEditss(1)
    setEditssdata(dat)
    setCname(dat?.catname)
    setAlign(dat?.align)
    console.log(dat , 'dat')
  }

  let editCategory = async () =>{
    let ooov = await axios({
      method : 'post' ,
      url : BaseUrluser + '/editcategorydetail',
      data : {
        token : localStorage.getItem('token'),
        catname : cname ,
        align : align,
        id : editssdata?._id
      }
    }) 
    .then((res)=>{
      setLoading(false)
      if(res.data.status === true){
        setData(res.data.data)
        setIsOpen(false);
      }else{
        setErr(true)
        setErrmsg(res.data.message)
      }
      console.log(res.data , 'dcsd')
    })
    .catch((err)=>{
      setLoading(false)
      setErr(true)
      setErrmsg('Network Error')
      console.log(err , 'dcsd')
    })
  }

  let editClicknext = (dat) =>{

    
    const hash = btoa(JSON.stringify(dat));
    console.log(dat, 'dvdvsdv' , hash)
    navigate('/detail'+'/' + hash)
  }


  let deleteCategory = (dat) =>{
    setEditss(3)
    setIsOpen(true);
    setEditssdata(dat)
  }

  let deleteCategoryss = async () => {
    let ooov =await axios({
      method : 'post' ,
      url : BaseUrluser + '/deletecategorydetail',
      data : {
        token : localStorage.getItem('token'),
        id : editssdata?._id
      }
    }) 
    .then((res)=>{
      setLoading(false)
      if(res.data.status === true){
        setData(res.data.data)
        setIsOpen(false);
      }else{
        setErr(true)
        setErrmsg(res.data.message)
      }
      console.log(res.data , 'dcsd')
    })
    .catch((err)=>{
      setLoading(false)
      setErr(true)
      setErrmsg('Network Error')
      console.log(err , 'dcsd')
    })
  }
   

  return (
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
      <Topbar setIsSidebar={setIsSidebar} />
    <Box m="20px">
      <Header title="All Post" subtitle="Managing the Posts" />
      {/* <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box> */}
      <div >
        <div className="row" >
          {
            data?.map((dat , index)=>{
              return(
                  <div style={{ cursor : 'pointer' }} className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4" >
                    <div style={{ width : '100%' , height : 300 , border : '3px solid  ' , borderRadius : 20 , padding : 20 }} className="" >
                      <p style={{ fontSize : 30 , textAlign : 'center' }}>{dat.catname}</p>
                      <div className="row"  >
                        <div style={{cursor : 'pointer' }} className="col-6" >
                          <div onClick={()=>{ editClick(dat) }} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                            borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 }} className="" >
                            Edit 
                          </div>
                        </div>
                        <div style={{cursor : 'pointer' }} className="col-6" >
                          <div onClick={()=>{ editClicknext(dat) }}  style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                            borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 }} className="" >
                            View 
                          </div>
                        </div>
                      </div>
                      <div className="mt-3" >
                        <div onClick={()=>{ deleteCategory(dat) }} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                          borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 }} >
                            Delete
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })
          }
          
          <div  className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4" >
            <div 
              onClick={openModal}
              style={{ width : '100%' , height : 300 , border : '3px dashed  ' , borderRadius : 20 ,padding : 70 , cursor : 'pointer' }} 
              className="" >
              <p style={{ fontSize : 100 , textAlign : 'center' }} >+</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
    </main>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {
          editss === 1 ? 

          <>
            <div className="d-flex justify-content-between" >
              <p style={{ color : '#000' , fontWeight : '600' , fontSize : 15  }} >Edit Category</p>
              <p onClick={closeModal} style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >x</p>
            </div>
            <div >
              <p style={{ color : '#000' , marginTop : 10 , marginBottom : 0 }} >Category Name</p>
              <input onChange={(e)=>{ 
                setErr(false)
                setCname(e.target.value) }} value={cname} style={{ width : '100%' , height : 40 }} type="text" />

              <p style={{ color : '#000', marginTop : 10 , marginBottom : 0 }}>Align </p>
              <input onChange={(e)=>{ 
                setErr(false)
                setAlign(e.target.value) }} value={align} style={{ width : '100%' , height : 40 }} type="number" />
              {
                err === true ?
                  <p style={{ marginTop : 10 , marginBottom : 10 , textAlign : 'center' , color : 'red' }} >{errmsg}</p>
                : ''
              }
              
              {
                loading === true ?
                <div style={{ backgroundColor : '#212529' ,height : 40,  padding : 10 , 
                  textAlign : 'center' , marginTop : 10 , borderRadius : 10 , cursor : 'pointer',
                  marginLeft : 'auto' , marginRight : 'auto' }} >
                  <ReactLoading className='roolloo' type={'bubbles'} color={'#fff'} height={60} width={40} />
              </div>
              :
              <div onClick={()=>{ editCategory() }} style={{ height : 40,backgroundColor : '#212529' , padding : 10 , textAlign : 'center' , marginTop : 10 , borderRadius : 10 , cursor : 'pointer' }} >
                Submit
              </div>
            }
              
              
              
                </div>
              </>
              :  editss === 0 ? 

              <>
                <div className="d-flex justify-content-between" >
              <p style={{ color : '#000' , fontWeight : '600' , fontSize : 15  }} >New Category</p>
              <p onClick={closeModal} style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >x</p>
            </div>
            <div >
              <p style={{ color : '#000' , marginTop : 10 , marginBottom : 0 }} >Category Name</p>
              <input onChange={(e)=>{ 
                setErr(false)
                setCname(e.target.value) }} style={{ width : '100%' , height : 40 }} type="text" />

              <p style={{ color : '#000', marginTop : 10 , marginBottom : 0 }}>Align </p>
              <input onChange={(e)=>{ 
                setErr(false)
                setAlign(e.target.value) }} style={{ width : '100%' , height : 40 }} type="number" />
              {
                err === true ?
                  <p style={{ marginTop : 10 , marginBottom : 10 , textAlign : 'center' , color : 'red' }} >{errmsg}</p>
                : ''
              }
              
              {
                loading === true ?
                <div style={{ backgroundColor : '#212529' ,height : 40,  padding : 10 , 
                  textAlign : 'center' , marginTop : 10 , borderRadius : 10 , cursor : 'pointer',
                  marginLeft : 'auto' , marginRight : 'auto' }} >
                  <ReactLoading className='roolloo' type={'bubbles'} color={'#fff'} height={60} width={40} />
              </div>
              :
              <div onClick={()=>{ addCategory() }} style={{ height : 40,backgroundColor : '#212529' , padding : 10 , textAlign : 'center' , marginTop : 10 , borderRadius : 10 , cursor : 'pointer' }} >
                Submit
              </div>
              }
              
              
              
            </div>          
          </>
          :
          <>
              <div className="d-flex justify-content-between" >
                <p style={{ color : '#000' , fontWeight : '600' , fontSize : 15  }} >Remove Category</p>
                <p onClick={closeModal} style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >x</p>
              </div> 
              <div >
                <p style={{ color : '#000' , fontWeight : '600' , fontSize : 15  }}>Are you Sure you want delete Categort : { editssdata?.catname }</p>
                <div className="row" >
                  <div className="col-6" >
                    <div onClick={()=>{ deleteCategoryss() }} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                      borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 }} className="" >
                      Yes
                    </div>
                  </div>
                  <div className="col-6" >
                    <div onClick={closeModal} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                      borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 }} className="" >
                      No
                    </div>
                  </div>
                </div>
              </div>
          </>
        }
        
      </Modal>


    </div>
  );
};

export default Team;

import React,{ useState , useEffect } from "react";
import Topbar from "../global/Topbar";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import axios from "axios";
import Dropzone from 'react-dropzone';
import { BaseUrluser } from "../../components/config/dev";
import { useNavigate , useParams , useH } from "react-router-dom";
import objectHash from 'object-hash';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

//http://192.168.1.63:3000/api/v1/user/imsgeserve/1689152579726.mp3


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
  


let Detail =()=>{
    const [isSidebar, setIsSidebar] = useState(true);
    const [selectedImages, setSelectedImages] = useState([]);
    const [ searchs , setSearch ] = useState('')

    const [ cname , setCname ] = useState('')
    const [ align , setAlign ] = useState()

    const [ err , setErr ] = useState(false)
    const [ errmsg , setErrmsg ] = useState('')
    const [ loading , setLoading ] = useState(false)
    const [ data , setData ] = useState()
    const [ books , setBooks ] = useState()

    let [ bookstatus , setBookstatus ] = useState(false)
    let [ subcatdet , setSubcatdet ] = useState(false)
    let [ commoonid , setCommonid ] = useState()
    const [ editss , setEditss ] = useState(0)
    const [ editssdata , setEditssdata ] = useState()

    const [content, setContent] = useState(false);
    const [ bookkey , setBookkey ] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    // const { id } = useParams();

    // const unhashedData = JSON.parse(atob(id));
    const { id } = useParams();

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        const handleBackButtonClick = (event) => {
          // Check if the back arrow or back button was clicked
          if (event.type === 'popstate') {
            // Back arrow or back button was clicked
            Start()
          }
        };
    
        window.addEventListener('popstate', handleBackButtonClick);
    
        
      }, []);

    function openModal() {
        setEditss(0)
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }

    // console.log(unhashedData , 'unhashedDataunhashedDataunhashedData')

    useEffect(()=>{
        Start()
    },[content])

    let Start = async () =>{

        const currentUrl = window.location.href;
        const lastPart = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);


        const unhashedData = JSON.parse(atob(lastPart));

        setCommonid(unhashedData)

        let mainid = unhashedData?._id

        let responce = await axios({
            method : 'post',
            url : BaseUrluser + '/allsubcategorydata',
            data : {
                token : localStorage.getItem('token'),
                mainid : mainid
            }
        })
        .then((res)=>{
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
                setData([])
                setBooks([])
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
                setBooks([])
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
                setData([])
            }
            
            console.log(res.data , 'reseeeee')
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            console.log(err,'err')
        })
    }

    const handleSubmit =async (files) => {
        setSelectedImages(files)
        console.log(files , 'dafafvsdv')
    };

    const handleImageUpload = async ( iddd ) => {

        selectedImages.forEach(async(image, index) => {
             

           
          const file = image; // Get the selected file
          let textname = image.name
            const reader = new FileReader();

            // Event listener for when the file is loaded
             reader.onload =async (event) => {
                const contents =await event.target.result; // The contents of the file
                newText(contents , textname , iddd)
                
            };
            // Read the file as text
            let tessst = await reader.readAsText(file)


        });

        setSelectedImages([])
        
    };

    let newText =async (contents , name , iddd) => {
        console.log(typeof(contents), 'dafafvsdv',contents)
        let responce = await axios({
            method : 'post',
            url : BaseUrluser + '/book',
            maxContentLength: 50 * 1024 * 1024,
            data : {
                text : `${contents}`,
                fileName : name,
                mainCatnameid : iddd
            }
        })
        .then((res)=>{
            
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
            }
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            console.log(err,'err')
        })
        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 1000);
    }


    let search =async () =>{
        let responce = await axios({
            method : 'post',
            url : BaseUrluser + '/addsearch',
            data : {
                text : 'ok'
            }
        })
        .then((res)=>{
            console.log(res.data , 'reseeeee')
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            console.log(err,'err')
        })
    }


    let newsrch = async() =>{
        let responce = await axios({
            method : 'post',
            url : BaseUrluser + '/searchresult',
            data : {
                search : searchs
            }
        })
        .then((res)=>{
            console.log(res.data , 'reseeeee')
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            console.log(err,'err')
        })
    }

    let addSubCat = async () => {
        console.log( align , 'dv' , commoonid , 'dv' , cname )
        
        let responce =await axios({
            method :'post',
            url : BaseUrluser + '/addsubcategory',
            data : {
                token : localStorage.getItem('token'),
                align : align,
                maincatid : commoonid?._id,
                subcatname : cname
            }
        })
        .then((res)=>{
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
            }
            setIsOpen(false);
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            console.log(err, 'vsvzsxv')
        })
    }

    let clickSub = async (dat) =>{
        const hash = btoa(JSON.stringify(dat));
        console.log(dat, 'dvdvsdv' , hash)
        navigate('/detail'+'/' + hash)
        setContent(!content)
    }

    let edSubCat =async ( ) =>{
       let re = await axios({
           method : 'post',
           url : BaseUrluser + '/editsubcategory',
           data : {
               token : localStorage.getItem('token'),
               id : editssdata?._id,
               catname : cname,
               align : align,
               maincatid : commoonid?._id,
           }
       })
       .then((res)=>{
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
            }
            setIsOpen(false);
       })
       .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
           console.log(err,'err')
       })
    } 

    let editSubCat = ( dat ) =>{
        setIsOpen(true);
        setEditss(1)
        setEditssdata(dat)
        setCname(dat?.subcatname)
        setAlign(dat?.align)
    }

    let deleteSubCat = (dat) =>{
        setIsOpen(true);
        setEditss(3)
        setEditssdata(dat)
    }

    let deleteCategoryss =async ()=>{
        let tt = await axios({
            method : 'post',
            url : BaseUrluser + '/deletesubcategory',
            data : {
                token : localStorage.getItem('token'),
                id : editssdata?._id,
                maincatid : commoonid?._id,
            }
        })
        .then((res)=>{
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
            }
            setIsOpen(false);
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            console.log(err,'err')
        })
    }

    let removeImg = (data) =>{
        setSelectedImages(prevItems => prevItems.filter(item => item.name !== data.name));
        //selectedImages
    }

    const handleFileChange = (event) => {
        console.log(event.target.files , 'event.target.files')
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    let uploadAudio = async ( datt ) =>{
        console.log(datt , 'datt')
        if(selectedFile === '' || selectedFile === undefined || selectedFile === null){
            swal("No Audio File", "Select Audio File.", "warning");
            return
        }

        else{
            const formData = new FormData();
            formData.append(`files`, selectedFile);
            formData.append(`id`, datt._id);
            formData.append(`mainid`,  commoonid?._id,);

            let responce = await axios.post( `${BaseUrluser}/addaudio`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                } 
            })
            .then((res)=>{
                if(res.data.book === false && res.data.subcat === false){
                    setBookstatus(true)
                    setSubcatdet(true)
                }else if(res.data.book === false && res.data.subcat === true){
                    setBookstatus(false)
                    setSubcatdet(true)
                    setData(res.data.data)
                }else if(res.data.book === true && res.data.subcat === false ){
                    setBookstatus(true)
                    setSubcatdet(false)
                    setBooks(res.data.data)
                }
            })
            .catch((err)=>{
                swal("Oops!", "Something went wrong!", "error");
                console.log(err,'err')
            })

        }
    }

    let removeBook = (dett) =>{
        setIsOpen(true);
        setEditss(8)
        setEditssdata(dett)
    }

    let deleteoneBook =async() => {
        let rrv = await axios({
            method : 'post',
            url : BaseUrluser + '/deletebooks',
            data : {
                token : localStorage.getItem('token'),
                id : editssdata?._id,
                mainid : commoonid?._id,
            }
        })
        .then((res)=>{
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
            }
            setIsOpen(false);
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            console.log(err,'err')
        })
    }

    let Bookview = (dat) =>{
        navigate('/bookview'+'/' + dat._id)
    }
    
    return(
        <>
            <div className="app">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    <Box m="20px">
                        <Header title="All Post" subtitle="Managing the Posts" />
                        <div >


                            <div >
                                <div className="row" >
                                    {
                                        data?.map((dat , index)=>{
                                            console.log(dat , 'lgvnsknfkv')
                                            return(
                                                <div className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4" >
                                                    <div style={{ width : '100%' , height : 200 , border : '3px solid  ' , 
                                                        borderRadius : 20 ,padding : 30 , cursor : 'pointer' }} >
                                                        <div className="row" >
                                                            <div className="col-12" >
                                                                <p style={{ fontSize : 20 }} >{dat?.subcatname}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row" >
                                                            <div className="col-6" >
                                                                <div onClick={()=>{ editSubCat(dat) }} style={{ width : '100%' , height : 40 , backgroundColor : '#fff' ,
                                                                    borderRadius : 10 ,padding : 10 , cursor : 'pointer' }} >
                                                                        <p style={{ color : '#000' , textAlign : 'center' }} >Edit</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-6" >
                                                                <div onClick={()=>{ clickSub(dat) }}  style={{ width : '100%' , height : 40 , backgroundColor : '#fff' ,
                                                                    borderRadius : 10 ,padding : 10 , cursor : 'pointer' }} >
                                                                        <p style={{ color : '#000' , textAlign : 'center' }} >View</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2" >
                                                            <div className="col-12" >
                                                                <div onClick={()=>{ deleteSubCat(dat) }} style={{ width : '100%' , height : 40 , backgroundColor : '#fff' ,
                                                                    borderRadius : 10 ,padding : 10 , cursor : 'pointer' }} >
                                                                        <p style={{ color : '#000' , textAlign : 'center' }} >Delete</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {
                                       bookstatus === false &&  subcatdet === true ?
                                            <div className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4" >
                                                <div onClick={openModal} style={{ width : '100%' , height : 200 , border : '3px dashed  ' , 
                                                borderRadius : 20 ,padding : 50 , cursor : 'pointer' }} >
                                                    <p  style={{ fontSize : 60 , textAlign : 'center' }} >+</p>
                                                </div>
                                            </div>
                                        : bookstatus === true &&  subcatdet === true ?

                                        <div className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4" >
                                            <div onClick={openModal} style={{ width : '100%' , height : 200 , border : '3px dashed  ' , 
                                                borderRadius : 20 ,padding : 50 , cursor : 'pointer' }} >
                                                    <p  style={{ fontSize : 60 , textAlign : 'center' }} >+</p>
                                                </div>
                                        </div>

                                        : ''
                                    }
                                    
                                    
                                </div>
                            </div>

                            <div >

                            {
                                books?.length != 0 ?
                                <div className="row" >
                                <div style={{ width : '100%' }} class="">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Book Name</th>
                                                <th>Audio</th>
                                                <th>Edit and View</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            books?.map((datt , key )=>{
                                                return(
                                                <tr key={key}>
                                                    <td>{ key + 1 }</td>
                                                    <td>{datt.bookTitle}</td>
                                                    <td>{ datt?.audio === '' || datt?.audio === undefined || datt?.audio === null ? 
                                                        <>
                                                            <div className="row" >
                                                                <div className="col-6" >
                                                                    <input type="file" accept="audio/*" onChange={handleFileChange} />
                                                                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                                                                </div>
                                                                <div  className="col-6" >
                                                                    <div onClick={() => uploadAudio(datt)} style={{ backgroundColor : '#fff' , cursor : 'pointer' , borderRadius : 10 }} >
                                                                        <p  style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>Upload</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                          
                                                        </> 
                                                        : datt.audio
                                                     }</td>
                                                    <td>
                                                        <>
                                                        <div onClick={()=>{ Bookview(datt) }} style={{ backgroundColor : '#fff' , cursor : 'pointer' , borderRadius : 10 }} ><p 
                                                            style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>View and Edit</p></div>
                                                        </>
                                                    </td>
                                                    <td>
                                                    <>
                                                        <div onClick={()=>{ removeBook(datt) }} style={{ backgroundColor : '#fff' , cursor : 'pointer' , borderRadius : 10 }} ><p 
                                                            style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>Delete</p></div>
                                                        </>
                                                    </td>
                                                </tr>
                                                )
                                            })
                                        }
                                        
                                           
                                            
                                        </tbody>
                                    </table>

                                        {/* <nav>
                                            <ul class="pagination">
                                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav> */}
                                    </div>
                                </div>

                                : ''
                            }
                            
                                
                            </div>

                            {
                                bookstatus === true &&  subcatdet === false ?
                                <>
                                    <Dropzone onDrop={handleSubmit} accept="image/*" multiple>
                                        {({ getRootProps, getInputProps }) => (
                                         <div className="mt-4" style={{ width : 200 , height : 200 , 
                                            border : '3px dashed  ', backgroundColor : '#212529' , borderRadius : 10 , padding : 50 }} {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p >Drag and drop some files here, or click to select files</p>
                                            </div>
                                        )}
                                    </Dropzone>
                                    <div style={{ width : 200 , height : 50 , borderRadius : 10 , padding : 15 , 
                                        backgroundColor : '#fff' }} className="mt-4" onClick={()=>{handleImageUpload( commoonid._id )}}>
                                            <p style={{ color : '#000' , textAlign : 'center' }}>Upload</p></div>
                                </>
                                :  bookstatus === true &&  subcatdet === true ? 

                                <>
                                    <Dropzone onDrop={handleSubmit} accept="image/*" multiple>
                                        {({ getRootProps, getInputProps }) => (
                                        <div className="mt-4" style={{ width : 200 , height : 200 , 
                                        border : '3px dashed  ', backgroundColor : '#212529' , borderRadius : 10 , padding : 50 }} {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p >Drag and drop some files here, or click to select files</p>
                                        </div>
                                        )}
                                    </Dropzone>
                                    <div style={{ width : 200 , height : 50 , borderRadius : 10 , padding : 15 , 
                                        backgroundColor : '#fff' }} className="mt-4" onClick={()=>{handleImageUpload( commoonid._id )}}>
                                            <p style={{ color : '#000' , textAlign : 'center' }}>Upload</p></div>
                                </>

                                : ''
                            }
                            <div className="row" >
                                {
                                    selectedImages?.map((dataa , key)=>{
                                        console.log( dataa , 'ffff')
                                        return(
                                            <>
                                                <div className="" >
                                                    
                                                        <div className="col-xxxl-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12  mt-4" >
                                                            <div  >
                                                                <div onClick={()=>{ removeImg(dataa) }} style={{ width : 40 , height : 40 , backgroundColor : 'red' ,
                                                                position : 'absolute' , borderRadius : 10 , marginBottom : -10  }} >
                                                                    <p style={{ color : '#fff' , textAlign : 'center', fontSize : 25 }}>X</p>
                                                                </div>
                                                                <img
                                                                    alt="profile-user"
                                                                    src={`../../assets/file.png`}
                                                                    style={{ cursor: "pointer",}}
                                                                    />
                                                                <p style={{ textAlign : 'center' , color : '#fff' , display: 'inline' }} >{ dataa.name }</p>
                                                            </div>
                                                        </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                        {/* <button onClick={()=>{search()}} >Click Insert Search</button>


                        <input onChange={(e)=>{ setSearch(e.target.value) }} type="text"  />
                        <button onClick={()=>{ newsrch() }} >Search</button> */}




                    </Box>
                </main>
            </div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {
                editss === 0 ?
                <>
                    <div className="d-flex justify-content-between" >
                        <p  style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >Add SubCategory</p>
                        <p onClick={closeModal} style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >x</p>
                    </div>
                    <div >
                    <p style={{ color : '#000' , marginTop : 10 , marginBottom : 0 }} >Sub Category Name</p>
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
                    <div onClick={()=>{ addSubCat() }} style={{ height : 40,backgroundColor : '#212529' , padding : 10 , textAlign : 'center' , marginTop : 10 , borderRadius : 10 , cursor : 'pointer' }} >
                        Submit
                    </div>
                    }
            </div>
            </>
            : editss === 1 ? 

            <>
            <div className="d-flex justify-content-between" >
                <p  style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >Edit SubCategory</p>
                <p onClick={closeModal} style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >x</p>
            </div>
            <div >
            <p style={{ color : '#000' , marginTop : 10 , marginBottom : 0 }} >Sub Category Name</p>
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
            <div onClick={()=>{ edSubCat() }} style={{ height : 40,backgroundColor : '#212529' , padding : 10 , textAlign : 'center' , marginTop : 10 , borderRadius : 10 , cursor : 'pointer' }} >
                Submit
            </div>
            }
    </div>
    </>

    : editss === 8 ?
    <>
            <div className="d-flex justify-content-between" >
                <p  style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >Delete Book</p>
                <p onClick={closeModal} style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >x</p>
            </div>
            <div >
            <p style={{ color : '#000' , marginTop : 10 , marginBottom : 0 }} >Are you sure you want to delete ?</p>
            <div className="row" >
                <div className="col-6" >
                <div onClick={()=>{ deleteoneBook() }} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
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
    :

    <>
    <div className="d-flex justify-content-between" >
            <p  style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >Delete SubCategory</p>
            <p onClick={closeModal} style={{ color : '#000' , fontWeight : '600' , fontSize : 25 , cursor : 'pointer' }} >x</p>
        </div>
        <div >
        <p style={{ color : '#000' , marginTop : 10 , marginBottom : 0 }} >Are you sure you want to delete ?</p>
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
        </>
    )
}

export default Detail
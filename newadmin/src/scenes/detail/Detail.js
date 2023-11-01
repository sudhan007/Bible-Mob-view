import React,{ useState , useEffect } from "react";
import Topbar from "../global/Topbar";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar"; 
import axios from "axios";
import Dropzone from 'react-dropzone';
import { BaseUrluser } from "../../components/config/dev";
import { useNavigate , useParams , useH } from "react-router-dom";
import objectHash from 'object-hash';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';
import ClockLoader from "react-spinners/ClockLoader";
import ReactPaginate from "react-paginate";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
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
  
  const customStyless = {
    content: {
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
    const [modalIsOpens, setIsOpens] = React.useState(false);
 
    const [alldata, setAlldata] = useState();
    const [selected, setSelected] = useState(false);
    const [ pagecount , setpagecount ] = useState(1)

    const [ inputt , setInputt ] = useState(1)

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const navigate = useNavigate();

    // const { id } = useParams();

    // const unhashedData = JSON.parse(atob(id));
    const { pro } = useParams();

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

        try {
        const currentUrl = window.location.href;
        const lastPart = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);


        const unhashedData = JSON.parse(atob(lastPart));

        setCommonid(unhashedData)
        setIsOpens(true)
        let mainid = unhashedData?._id

        let responce = await axios({
            method : 'post',
            url : BaseUrluser + '/allsubcategorydata',
            data : {
                token : localStorage.getItem('token'),
                mainid : mainid,
                page : 1
            }
        })
        .then((res)=>{
            setAlldata(res.data)
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
                setData([])
                setBooks([])
                setIsOpens(false)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
                setBooks([])
                setIsOpens(false)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                let ff = res.data.data
                ff.sort((a, b) => {
                    const firstTwoA = parseInt(a.realbook.substring(0, 2));
                    const firstTwoB = parseInt(b.realbook.substring(0, 2));
                  
                    return firstTwoA - firstTwoB;
                });
                  
                setBooks(ff)
                setData([])
                setIsOpens(false)
            }
            
            console.log(res.data , 'reseeeee')
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpens(false)
            console.log(err,'err')
        })
    }catch(e){
        
    }
    }

    const handleSubmit =async (files) => {
        setSelectedImages(files)
        console.log(files , 'dafafvsdv')
    };

    // const handleImageUpload = async ( iddd ) => {
    //     setIsOpens(true)
    //     for (let i = 0; i < selectedImages.length; i++) {

    //     // selectedImages.forEach(async(image, index) => {
             
            
           
    //       const file = selectedImages[i]; // Get the selected file
    //       let textname = selectedImages[i].name
    //         const reader = new FileReader();

    //         // Event listener for when the file is loaded
    //          reader.onload =async (event) => {
    //             const contents =await event.target.result; // The contents of the file
    //             setTimeout(() => {
    //                 newText(contents , textname , iddd)
               
    //             }, 2000);
                
    //         };

       
    //         // Read the file as text
    //         let tessst = await reader.readAsText(file)

       
    //     // });
    // }

    //     setSelectedImages([])
    //     setIsOpens(false)
    // };

    // let newText =async (contents , name , iddd) => {
    //     console.log(typeof(contents), 'dafafvsdv',contents)
        
    //     let responce = await axios({
    //         method : 'post',
    //         url : BaseUrluser + '/book',
    //         maxContentLength: 50 * 1024 * 1024,
    //         data : {
    //             text : `${contents}`,
    //             fileName : name,
    //             mainCatnameid : iddd,
    //             pro : pro
    //         }
    //     })
    //     .then((res)=>{
            
    //         if(res.data.book === false && res.data.subcat === false){
    //             setBookstatus(true)
    //             setSubcatdet(true)
    //             // setIsOpens(false)
    //         }else if(res.data.book === false && res.data.subcat === true){
    //             setBookstatus(false)
    //             setSubcatdet(true)
    //             setData(res.data.data)
    //             // setIsOpens(false)
    //         }else if(res.data.book === true && res.data.subcat === false ){
    //             setBookstatus(true)
    //             setSubcatdet(false)
    //             setBooks(res.data.data)
    //             // setIsOpens(false)
    //         }

    //         if(res.data.ok === false){
    //             swal("Oops!", res.data.message, "error");
               
    //         }
    //     })
    //     .catch((err)=>{
    //         swal("Oops!", "Something went wrong!", "error");
    //         setIsOpens(false)
    //         console.log(err,'err')
    //     })
    //     setTimeout(() => {
    //         console.log("Delayed for 1 second.");
    //     }, 1000);
    // }

    const handleImageUpload = async (iddd) => {
        
      
        for (let i = 0; i < selectedImages.length; i++) {

            setIsOpens(true)
          const file = selectedImages[i];
          let textname = selectedImages[i].name;
          const reader = new FileReader();
      
          reader.onload = async (event) => {
            const contents = await event.target.result;
            setTimeout(async () => {
              await newText(contents, textname, iddd , i);
            }, i * 4000); // Multiply the delay by the index to create a gap
          };
      
          let tessst = await reader.readAsText(file);
        }
      
        setSelectedImages([]);
      };
      
      let newText = async (contents, name, iddd , i) => {
        setIsOpens(true)
        console.log(typeof contents, 'dafafvsdv', contents);
      
        let responce = await axios({
          method: 'post',
          url: BaseUrluser + '/book',
          maxContentLength: 50 * 1024 * 1024,
          data: {
            text: `${contents}`,
            fileName: name,
            mainCatnameid: iddd,
            pro: pro,
          },
        })
          .then((res) => {
            console.log(res.data , 'data')
            // if(res.data.book === false && res.data.subcat === false){
            //     setBookstatus(true)
            //     setSubcatdet(true)
            //     // setIsOpens(false)
            // }else if(res.data.book === false && res.data.subcat === true){
            //     setBookstatus(false)
            //     setSubcatdet(true)
            //     setData(res.data.data)
            //     // setIsOpens(false)
            // }else if(res.data.book === true && res.data.subcat === false ){
            //     setBookstatus(true)
            //     setSubcatdet(false)
            //     setBooks(res.data.data)
            //     // setIsOpens(false)
            // }

            if (i === selectedImages.length-1){
                setIsOpens(false)
            }

            if(res.data.status === true){
                Start()
            }
          })
          .catch((err) => {
            swal("Oops!", "Something went wrong!", "error");
            setIsOpens(false)
            console.log(err,'err')
          });
      
        setTimeout(() => {
          console.log("Delayed for 1 second.");
        }, 1000);
      };

    let addSubCat = async () => {
        setIsOpens(true)
        console.log( align , 'dv' , commoonid , 'dv' , cname )
        setIsOpens(true)
        let responce =await axios({
            method :'post',
            url : BaseUrluser + '/addsubcategory',
            data : {
                token : localStorage.getItem('token'),
                align : align,
                maincatid : commoonid?._id,
                subcatname : cname,
                pro : pro
            }
        })
        .then((res)=>{

            if (res.data.status === false){
                setIsOpen(false);
                setIsOpens(false)
                swal("Oops!", res.data.message, "error");
                return
            }
            if(res.data.book === false && res.data.subcat === false){
                setBookstatus(true)
                setSubcatdet(true)
                setIsOpens(false)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
                setIsOpens(false)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
                setIsOpens(false)
            }
            setIsOpen(false);
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpens(false)
            console.log(err, 'vsvzsxv')
        })
    }

    let clickSub = async (dat) =>{

        delete dat.subcatname 

        const hash = btoa(JSON.stringify(dat));
        console.log(dat, 'dvdvsdv' , hash)
        navigate('/detail'+'/' +pro +'/' + hash)
        setContent(!content)
    }

    let edSubCat =async ( ) =>{
        setIsOpens(true)
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
                setIsOpens(false)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
                setIsOpens(false)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
                setIsOpens(false)
            }
            setIsOpen(false);
       })
       .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpens(false)
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
        setIsOpens(true)
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
                setIsOpens(false)
            }else if(res.data.book === false && res.data.subcat === true){
                setBookstatus(false)
                setSubcatdet(true)
                setData(res.data.data)
                setIsOpens(false)
            }else if(res.data.book === true && res.data.subcat === false ){
                setBookstatus(true)
                setSubcatdet(false)
                setBooks(res.data.data)
                setIsOpens(false)
            }
            setIsOpen(false);
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpens(false)
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
            setIsOpens(true)
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
                    setIsOpens(false)
                }else if(res.data.book === false && res.data.subcat === true){
                    setBookstatus(false)
                    setSubcatdet(true)
                    setData(res.data.data)
                    setIsOpens(false)
                }else if(res.data.book === true && res.data.subcat === false ){
                    setBookstatus(true)
                    setSubcatdet(false)
                    setBooks(res.data.data)
                    setIsOpens(false)
                }
            })
            .catch((err)=>{
                swal("Oops!", "Something went wrong!", "error");
                setIsOpens(false)
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
        setIsOpens(true)
        console.log(editssdata , 'editssdata')
        
        let rrv = await axios({
            method : 'post',
            url : BaseUrluser + '/deletebooks',
            data : {
                token : localStorage.getItem('token'),
                id : editssdata?._id,
                mainid : commoonid?._id,
                catid : editssdata?.mainCatnameid
            }
        })
        .then((res)=>{
            // if(res.data.book === false && res.data.subcat === false){
            //     setBookstatus(true)
            //     setSubcatdet(true)
            //     setBooks([])
            //     // setIsOpens(false)
            // }else if(res.data.book === false && res.data.subcat === true){
            //     setBookstatus(false)
            //     setSubcatdet(true)
            //     setData(res.data.data)
            //     setIsOpens(false)
            // }else if(res.data.book === true && res.data.subcat === false ){
            //     setBookstatus(true)
            //     setSubcatdet(false)
            //     setBooks(res.data.data)
            //     setIsOpens(false)
            // }
            setIsOpen(false);
            Start()
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpens(false)
            console.log(err,'err')
        })
    }

    let Bookview = (dat) =>{
        navigate('/bookview'+'/' + dat._id )
    }

    const handleSearch = async (curPage) => {
        try {
            setpagecount(curPage)
            const currentUrl = window.location.href;
            const lastPart = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
    
    
            const unhashedData = JSON.parse(atob(lastPart));
    
            setCommonid(unhashedData)
            setIsOpens(true)
            let mainid = unhashedData?._id
    
            let responce = await axios({
                method : 'post',
                url : BaseUrluser + '/allsubcategorydata',
                data : {
                    token : localStorage.getItem('token'),
                    mainid : mainid,
                    page : curPage
                }
            })
            .then((res)=>{
                if(res.data.book === false && res.data.subcat === false){
                    setBookstatus(true)
                    setSubcatdet(true)
                    setData([])
                    setBooks([])
                    setIsOpens(false)
                }else if(res.data.book === false && res.data.subcat === true){
                    setBookstatus(false)
                    setSubcatdet(true)
                    setData(res.data.data)
                    setBooks([])
                    setIsOpens(false)
                }else if(res.data.book === true && res.data.subcat === false ){
                    setBookstatus(true)
                    setSubcatdet(false)
                    let ff = res.data.data
                    ff.sort((a, b) => {
                        const firstTwoA = parseInt(a.realbook.substring(0, 2));
                        const firstTwoB = parseInt(b.realbook.substring(0, 2));
                      
                        return firstTwoA - firstTwoB;
                    });
                      
                    setBooks(ff)
                    setData([])
                    setIsOpens(false)
                }
                
                console.log(res.data , 'reseeeee')
            })
            .catch((err)=>{
                swal("Oops!", "Something went wrong!", "error");
                setIsOpens(false)
                console.log(err,'err')
            })
        }catch(e){
            
        }
      };
    

    const handlePageClick = (e) => { 
        handleSearch(e.selected + 1);
    };

    let backksearch = async () =>{
        setIsOpens(true)
        console.log(inputt , 'inputt')
        if(inputt === '' || inputt === undefined){
            return
        }
        let ser = await axios({
            method : 'post',
            url : BaseUrluser + '/inputsearch',
            data : {
                token : localStorage.getItem('token'),
                search : inputt
            }
        })
        .then((re)=>{
            console.log(re.data.data)
            let ff = re.data.data
            ff.sort((a, b) => {
                const firstTwoA = parseInt(a.realbook.substring(0, 2));
                const firstTwoB = parseInt(b.realbook.substring(0, 2));
              
                return firstTwoA - firstTwoB;
            });
              
            setBooks(ff)
            setIsOpens(false)
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpens(false)
            console.log(err)
        })
    }
    
    return(
        <>
            <div className="app">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                    



                <Box display="flex" justifyContent="space-between" p={2}>
                    {/* SEARCH BAR */}
                    <Box
                        display="flex"
                        backgroundColor={colors.primary[400]}
                        borderRadius="3px"
                    >
                        {
                             books && books.length > 0  ?
                             <>
                                <InputBase onChange={(e)=>setInputt(e.target.value)} sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                                <IconButton onClick={()=>{ backksearch()  }} type="button" sx={{ p: 1 }}>
                                <SearchIcon />
                                </IconButton>
                             </>
                             :""
                        }
                        
                    </Box>

                    {/* ICONS */}
                    <Box display="flex">
                        <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                        </IconButton>
                        <IconButton>
                        <NotificationsOutlinedIcon />
                        </IconButton>
                        <IconButton>
                        <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton>
                        <PersonOutlinedIcon />
                        </IconButton>
                    </Box>
                    </Box>


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


                            {
                                bookstatus === true &&  subcatdet === false ?
                                <>
                                    <Dropzone onDrop={handleSubmit} accept="image/*" multiple>
                                        {({ getRootProps, getInputProps }) => (
                                         <div className="mt-4" style={{ width : 200 , height : 200 , 
                                            border : '3px dashed  ', backgroundColor : 'rgb(223, 223, 223)' , borderRadius : 10 , padding : 50 }} {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p style={{ color : '#000' }} >Drag and drop some files here, or click to select files</p>
                                            </div>
                                        )}
                                    </Dropzone>
                                    <div style={{ width : 200 , height : 50 , borderRadius : 10 , padding : 15 , 
                                        backgroundColor : 'rgb(223, 223, 223)'   , cursor : 'pointer' }} className="mt-4 mb-3" onClick={()=>{handleImageUpload( commoonid._id )}}>
                                            <p style={{ color : '#000' , textAlign : 'center' }}>Upload</p></div>
                                </>
                                :  bookstatus === true &&  subcatdet === true ? 

                                <>
                                    <Dropzone onDrop={handleSubmit} accept="image/*" multiple>
                                        {({ getRootProps, getInputProps }) => (
                                        <div className="mt-4" style={{ width : 200 , height : 200 , 
                                        border : '3px dashed  black', backgroundColor : 'rgb(223, 223, 223)' , borderRadius : 10 , padding : 50 }} {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p style={{ color : '#000' }} >Drag and drop some files here, or click to select files</p>
                                        </div>
                                        )}
                                    </Dropzone>
                                    <div style={{ width : 200 , height : 50 , borderRadius : 10 , padding : 15 , 
                                        backgroundColor : 'rgb(223, 223, 223)'   }} className="mt-4 mb-3" onClick={()=>{handleImageUpload( commoonid._id )}}>
                                            <p style={{ color : '#000' , textAlign : 'center' }}>Upload</p></div>
                                </>

                                : ''
                            }



<div style={{ marginBottom : 20}} className="" >
                                {
                                    selectedImages?.map((dataa , key)=>{
                                        console.log( dataa , 'ffff')
                                        return(
                                            <>
                                                {/* <div className="" >
                                                    
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
                                                </div> */}

                                                <div style={{ backgroundColor : 'rgb(223, 223, 223)' , padding : 10, borderBottom : '1px solid black' }} className="row" >
                                                    <div  className="col-4" >
                                                        <p style={{ color : '#000' , marginTop : 10 }}>{key+1}</p>
                                                    </div>
                                                    <div className="col-6" >
                                                        <p  style={{ color : '#000', marginTop : 10 }} >{dataa.name}</p>
                                                    </div>
                                                    <div className="col-2" >
                                                        <p onClick={()=>{ removeImg(dataa) }} style={{ color : 'red' , textAlign : 'center', fontSize : 21 , marginTop : 10 }}>X</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>

                            

                            <div >

                            {
                                books?.length != 0 ?
                                <>
                              
                                   

                                {


                        books && books.length > 0  ? (
                          <div className="wgvawsgvaw">
                            <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign : 'center' }} >S.no</th> 
                                                <th style={{ textAlign : 'center' }} >Book Name</th>
                                                {/* <th>Audio</th> */}
                                                {/* <th>Edit and View</th> */}
                                                <th style={{ textAlign : 'center' }} >Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                            {books &&
                              books.map((datt, key) => { 
                                return (
                                    <tr key={key}>
                                    <td onClick={()=>{ Bookview(datt) }} style={{ paddingTop : 32 , textAlign : 'center' }} >{ ((pagecount * 10)+ key+1)-10 }</td>
                                    <td onClick={()=>{ Bookview(datt) }} style={{ paddingTop : 32 , textAlign : 'center' , cursor : 'pointer' }} >{datt.realbook.replace(/\.(txt|doc)/gi, '')}</td>
                                    {/* <td>{ datt?.audio === '' || datt?.audio === undefined || datt?.audio === null ? 
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
                                     }</td> */}
                                    {/* <td style={{ paddingTop : 32 }} >
                                        <>
                                        <div onClick={()=>{ Bookview(datt) }} style={{ backgroundColor : 'rgb(223, 223, 223)' , cursor : 'pointer' , borderRadius : 10 }} ><p 
                                            style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>View and Edit</p></div>
                                        </>
                                    </td> */}
                                    <td style={{ paddingTop : 32 , textAlign : 'center' }} >
                                    <>
                                        <div  onClick={()=>{ removeBook(datt) }} style={{ backgroundColor : 'rgb(223, 223, 223)' , 
                                        cursor : 'pointer' , borderRadius : 10 , zIndex : 1000 }} ><p 
                                            style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>Delete</p></div>
                                        </>
                                    </td>
                                </tr>
                               
                                );
                              })}

</tbody>
                                </table>

                            {books && books.length > 0 && (
                              <ReactPaginate
                                pageCount={Math.ceil(alldata?.count / 10)} // Calculate the total number of pages based on the array length and the limit
                                onPageChange={handlePageClick}
                                containerClassName="pagination"
                                activeClassName="active"
                                breakLabel="..."
                                nextLabel="next >"
                                pageRangeDisplayed={5}
                              />
                            )}
                          </div>
                        ) : selected === true ? (
                          <div className="text-lg font-semibold">No Results</div>
                        ) : '' }

</>



                                : ''
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
                    <p style={{ color : '#000' , marginBottom : 10 }} >Sub Category Name</p>
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
            <p style={{ color : '#000' ,  marginBottom : 10 }} >Sub Category Name</p>
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
            <p style={{ color : '#000' ,   marginBottom : 10 }} >Are you sure you want to delete ?</p>
            <div className="row" >
                <div className="col-6" >
                <div onClick={()=>{ deleteoneBook() }} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                    borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 ,
                    cursor : 'pointer'}} className="" >
                    Yes
                </div>
                </div>
                <div className="col-6" >
                <div onClick={closeModal} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                    borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 ,cursor : 'pointer' }} className="" >
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
        <p style={{ color : '#000'  , marginBottom : 10 }} >Are you sure you want to delete ?</p>
        <div className="row" >
            <div className="col-6" >
            <div onClick={()=>{ deleteCategoryss() }} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 , cursor : 'pointer' }} className="" >
                Yes
            </div>
            </div>
            <div className="col-6" >
            <div onClick={closeModal} style={{ width : '100%' , height : 50 , backgroundColor : '#fff' , border : '2px solid black', 
                borderRadius : 10 , padding : 13 , textAlign : 'center' , color : '#000' , fontWeight : '600' , fontSize : 15 , cursor : 'pointer' }} className="" >
                No
            </div>
            </div>
        </div>
    
    </div>
    </>


            }
      </Modal>



      <Modal
            isOpen={modalIsOpens}
            style={customStyless}
            contentLabel="Example Modal"
        >

            <ClockLoader color="#36d7b7" />
        
        </Modal>



        </>
    )
}

export default Detail
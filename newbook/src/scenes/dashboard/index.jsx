import React , { useState , useEffect , useContext , useRef } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens , ColorModeContext } from "../../theme";
import Topbar from "../global/Topbar";
import { useNavigate , useParams , useH } from "react-router-dom";
import { BaseUrluser } from "../../components/config/dev";
import axios from "axios";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { getImageLink , getPdf } from "../../components/config/dev";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import RemoveIcon from '@mui/icons-material/Remove';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ReactPaginate from "react-paginate";
import { saveAs } from 'file-saver';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const scrollButtonRef = useRef();

  const [isSidebar, setIsSidebar] = useState(true);
  const [bookcat, setBookcat ] = useState(true);
  const [bookcatdata, setBookcatdata ] = useState([]);
  const [preid, setPreid ] = useState(0);
  const [s, setS ] = useState(false);

  const colorMode = useContext(ColorModeContext);
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
  const [heading, setHEading] = useState('');
  const [maincat, setMaincat] = useState();


  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(false);
  const [ showsearch , setShowsearch ] = useState(false)
  let [ pagecontent , setPagecontent ] = useState('')
  let [ pagecontents , setPagecontents ] = useState('')
  const [ play , setPlay ] = useState(false) 


  const [ data , setData ] = useState(2)
  const [ mocsearch , setMocsearch ] = useState(false)
  const [ ids , setIds ] = useState('')
  const [ alldata , setAlldata ] = useState()
  const [ fulldata , setFulldata ] = useState()

  let { id , count } = useParams()

  const [sliderValue, setSliderValue] = useState(22);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollRef = useRef(null);
  const textRef = useRef("");

  const getWindowDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    document.getElementById('root').classList.remove('specific-screen-style');
    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const goBack = () => {
    navigate(-1); // This navigates back one step in the navigation history.
  }

  
  useEffect(() => {

    if(windowDimensions.width < 750){
      setIsCollapsed(true)
    }else{
      setIsCollapsed(false)
    }

    console.log(windowDimensions , 'windowDimensions')
  }, [windowDimensions]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    let kkurl='https://clientdemoproject.s3.ap-south-1.amazonaws.com/'

    return
    if ( option === 'p' ){
      //   const url = 'http://192.168.102.132:3000/api/v1/user/pdftext/your-file-name.pdf';
  
      // // Fetch the PDF file as a blob
      // fetch(url)
      //   .then((response) => response.blob())
      //   .then((blob) => {
      //     // Save the blob as a file using FileSaver.js
      //     saveAs(blob, 'file.pdf');
      //   })
      //   .catch((error) => {
      //     console.error('Error fetching the PDF file:', error);
      //   });
      const url =  getPdf(pagecontent.bookTitle+'.pdf')
      window.open(url, '_blank');
      }else{
  
        console.log(pagecontent.bookTitle+'pagecontent.bookTitle')
     
        const url =  getPdf(pagecontent.bookTitle)
  
        fetch(url)
          .then((response) => response.text())
          .then((text) => {
            // Create a Blob with the text content
            const blob = new Blob([text], { type: 'text/plain' });
    
            // Create a temporary link to download the file
            const tempLink = document.createElement('a');
            tempLink.href = URL.createObjectURL(blob);
            tempLink.download = 'file.txt'; // Replace 'file.txt' with the desired filename
            tempLink.click();
    
            // Clean up the URL object to release the resource
            URL.revokeObjectURL(tempLink.href);
          })
          .catch((error) => {
            console.error('Error fetching the text file:', error);
          });
      }
    
  
  };


  const handleSearch = async (curPage) => {
    if (!search) return;
    const res = await axios.get(
      `${BaseUrluser}/${search}/${count}?page=${curPage}&limit=10`
    );
    if( res.data.length === 0  ){
      setSelected(true)
    }else{
      setSelected(false)
    }
    
    setRes(res.data[0]);
  };

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
    handleSearch(e.selected + 1);
  };

  const handleSliderChange = (event) => {

    console.log(sliderValue)

    // if( sliderValue>  30 || sliderValue < 6){

      
     
    // }else{
      setSliderValue(sliderValue+event);
    //   return
    // }
    
  };
  

    let navigate = useNavigate()

    useEffect(()=>{

      let hh =getImageLink('translate_tts_1689835838582.mp3')

      console.log(hh , 'hhhhhh')
      if( count === '0'){
        start(id)
      }else{
        start(id)
      }
    },[id])



    let start = async (one) =>{
      
            let responce = await axios({
                method : 'post',
                url : BaseUrluser+'/booksubcatt',
                data : {
                  id : one
                }
            })
            .then(async(ree)=>{ 
              let responcess = await axios({
                method : 'get',
                url : BaseUrluser+'/allbookcat',
            })
            .then((rees)=>{
                if(rees.data.status === true){
                  
                  setMaincat(rees.data.data)
                }else{
                }
            })
            .catch((err)=>{
                console.log(err)
            })

              console.log(ree.data , 'ree.dataree.data')
                if(ree.data.status === true){
                  
                  setFulldata(ree.data)
                  if(  ree.data.subcat.length === 0) {
                    setBookcat(true)
                    setHEading(ree.data.book[0].realbook)
                    setPagecontent(ree.data.book[0])
                    setIds(ree.data.book[0]._id)
                    setBookcatdata(ree.data.booksub)
                  }else{
                    setBookcat(false)
                    setAlldata(ree.data.subcat)
                    setIds(ree.data.subcat[0]._id)
                    setPagecontent(ree.data.book[0])
                  }
                    setData(1)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    let subClick = (reed , index) =>{
      navigate('/book'+'/' + reed._id + '/' + count)
      start(reed._id)
      setIds(reed._id)
      setPreid(index)
      setHEading(reed.realbook)
    }
      
    let Subb =async () => {
      let tt = await axios({
        method : 'post',
        url : BaseUrluser + '/booksubonlycatt',
        data : {
          id : id
        }
      })
      .then((re)=>{
        console.log(re, 're')
      })
      .catch((err)=>{
        console.log(err , 'err')
      })
    }
  
  let subClickbook = async( id  , index , nu) =>{
    // setHEading(ree.data.book[0].realbook)
    console.log('correct')
    setHEading(id.realbook)

    if( id === undefined){
      return
    }

    document.getElementById('hahaha')?.scrollIntoView({ behavior: 'smooth' });
    
    setPreid(index)
    setIds(id._id)
    let tt = await axios({
      method : 'post',
      url : BaseUrluser + '/booksubonlydata',
      data : {
        id : nu === '0' ? id.book : id._id,
        nu :  nu === '0'? '0' : '1'
      }
    })
    .then((re)=>{
      setPagecontent(re.data.data)
      if(windowDimensions.width<750){
        setIsCollapsed(true)
      }
    })
    .catch((err)=>{
      console.log(err , 'err')
    })
  }

  let subClickbooks = async( id  , index , nu , content) =>{
    console.log(id ,'3')
    // return
    setPreid(index)
    setIds(id._id)
    let tt = await axios({
      method : 'post',
      url : BaseUrluser + '/booksubonlydata',
      data : {
        id : nu === '0' ? id.book : id._id,
        nu :  nu === '0'? '0' : '1'
      }
    })
    .then((re)=>{
      setMocsearch(true)
      let two = re.data.data.bookDescription
      // const regex = new RegExp(search, 'g');
      // const matches = re.data.data.match(regex) || [];
       
        const updatedText = two?.replace(content, `<a id="imhere"></a>${content} `);
        textRef.current = updatedText
        setPagecontents(updatedText)

        console.log(updatedText , 're.data.data dfvdfv')
        setHEading(re.data.data.realbook)
        if( windowDimensions.width < 750 ){
          setIsCollapsed(true)
        } 
        setTimeout(() => {
          document.getElementById('imhere')?.scrollIntoView({ behavior: 'smooth' });
        }, 1000); 
    })
    .catch((err)=>{
      console.log(err , 'err')
    })
  }

  let NextPlan = (ff) =>{
    setS(true)
    console.log(bookcatdata.length ,'one')
    // return
    if(ff === 1) {
      subClickbook(bookcatdata[preid-1] , preid-1)
    }else{
      subClickbook(bookcatdata[preid+1] , preid+1)
    }
  }


  function searchBookTitle(data) {

    if ( bookcat === false ) {
      console.log('worked')
      if (data === '' || data === undefined ){
        setAlldata(fulldata.subcat);
        return
      }
      
      const filteredData = alldata?.filter((item) =>
        item.subcatname.includes(data)
      );
    
      // Update the state with the filtered results
      setAlldata(filteredData);


    }else{

      if (data === '' || data === undefined ){
        setBookcatdata(fulldata.booksub);
        return
      }
      console.log(data , 'datadata')
      // const searchText = 'இயேசு'; // The bookTitle you want to search for
    
      // Filter the bookcatdata array to find the matching entries
      const filteredData = bookcatdata.filter((item) =>
        item.bookTitle.includes(data)
      );
    
      // Update the state with the filtered results
      setBookcatdata(filteredData);
    }

    
  }

  let ClicckedCat = (re)=>{
    navigate('/book'+'/' + re._id + '/' + re._id)
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission if inside a form element
      handleSearch(1);
    }
  };
  return (
    <>
      {
        data === 2 ?
        <div className="">

          

        <div className="row">
          <div className={ isCollapsed === false ? "col-3" : "newssst"} >
            {/* <Box
             style={ windowDimensions.width < 750 ? { width : 60 } : { width : '100%' }}
                sx={{
                  "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                  },
                  "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                  },
                  "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                  },
                  "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                  },
                  "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                  },
                }}
              >
                <ProSidebar collapsed={isCollapsed}>
                  <Menu iconShape="square">
                    <MenuItem
                      onClick={() => setIsCollapsed(!isCollapsed)}
                      icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                      style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                      }}
                    >
                      {!isCollapsed && (
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          ml="15px"
                        >
                          <Typography variant="h3" color={colors.grey[100]}>
                            MENU
                          </Typography>
                          <IconButton onClick={() => {setIsCollapsed(!isCollapsed)
                          setMocsearch(true)}}>
                            <MenuOutlinedIcon />
                          </IconButton>


                          
                        </Box>
                      )}
                      
                    </MenuItem>
                  </Menu>
                </ProSidebar>
            </Box> */}
          </div>
          <div className={ isCollapsed === false ? "col-9" : " col-12"} >
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {/* <div className="d-flex justify-content-end" style={{ margin : 10 }} >
              <input type="range" defaultValue={0} />
            </div> */}
             
            </main>
          </div>
        </div>

            





            
        </div>
      : 

      <div className="">
        {
          windowDimensions.width < 750 && s ===false ? 
          <IconButton onClick={()=>{  
           setS(true) }} >
            <ArrowForwardIosIcon />
          </IconButton> :
          windowDimensions.width < 750 && s ===true ? 

              <div className="tjsfjb" >

                <div className={windowDimensions.width < 750 ?  "" :"d-flex justify-content-start"} >
      
                  {/* SEARCH BAR */}
                  <div className={windowDimensions.width < 750 ?  "d-flex justify-content-center" : ""} style={{display:"flex" , marginRight : 20}} >
                    {
                      windowDimensions.width < 750 && s ===true ? 
                      <IconButton onClick={()=>{  
                       setS(false) }} >
                        <ArrowForwardIosIcon />
                      </IconButton>
                      :""
                    }
                    {
                      isCollapsed === true ?
                        <IconButton onClick={() => {setIsCollapsed(!isCollapsed)
                          }}>
                          <MenuOutlinedIcon />
                        </IconButton>
                      :""
                    }
                    <IconButton onClick={()=> navigate('/') }>
                      <OtherHousesIcon />
                    </IconButton>

                    <IconButton onClick={()=>{ setShowsearch(!showsearch);
                    setMocsearch(!mocsearch)
                    setIsCollapsed(false) }} type="button" sx={{ p: 1 }}>
                      <SearchIcon />
                    </IconButton>

                    {
                        preid === 0 ? <p >  </p> : <IconButton onClick={()=>{ NextPlan(1) }} >
                        <ArrowBackIcon />
                      </IconButton>
                      }

                    {
                        bookcatdata?.length-1 === preid  ? '' :  <IconButton onClick={()=>{ NextPlan(2) }} >
                        <ArrowForwardIcon />
                      </IconButton> 
                      }


                      

                    <IconButton  onClick={() => setPlay(!play)}>
                      <AudiotrackIcon />
                    </IconButton>

                  {/* <div className="dropdown-container">

                      <div  onClick={toggleDropdown}>
                        <IconButton onClick={toggleDropdown} >
                          <DownloadForOfflineIcon />
                        </IconButton>
                      </div>
                      {isDropdownOpen && (
                        <div className="dropdown-menu">
                          <div className="dropdown-item" onClick={() => handleOptionSelect('p')}>Pdf</div>
                          <div className="dropdown-item" onClick={() => handleOptionSelect('t')}>Text</div>
                        </div>
                      )}
                    </div> */}



                    
                  

                    <IconButton onClick={colorMode.toggleColorMode}>
                      {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                      ) : (
                        <LightModeOutlinedIcon />
                      )}
                    </IconButton>

                    <IconButton>
                      <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={()=>{handleSliderChange(2)}}>
                      <AddIcon />
                    </IconButton>
                    <IconButton  onClick={()=>{handleSliderChange(-2)}} >
                      <RemoveIcon />
                    </IconButton>



                  </div>

                  <div style={windowDimensions.width < 750 ? { paddingLeft : 20 , paddingRight : 20} : {}}  className={windowDimensions.width < 750 ?  "d-flex justify-content-center" : ""} >
                    
                      <div className="row mt-2" >
                        {
                          maincat?.map((data , key)=>{ 
                            return(
                              <div key={key} style={{ marginRight : 20 , marginBottom : 4 }} className="">
                                <div onClick={()=>{ ClicckedCat(data) }} style={{ width : "100%" , padding : 10 , borderRadius : 5 , border : '1px solid rgb(179, 179, 179)'
                              , cursor : 'pointer'}} className="" >
                                  <p style={{   textAlign : 'center' , cursor : 'pointer' }}>{data.catname}</p>
                                </div>
                              </div>

                            )
                          })
                        }
                        
                      </div>
                  </div>
      
                </div >
            

              </div>
        : ''}


{
        
          windowDimensions.width > 750 ? 

              <div className="tjsfjb" >

                <div className={windowDimensions.width < 750 ?  "" :"d-flex justify-content-start"} >
      
                  {/* SEARCH BAR */}
                  <div className={windowDimensions.width < 750 ?  "d-flex justify-content-center" : ""} style={{display:"flex" , marginRight : 20}} >
                    {
                      windowDimensions.width < 750 && s ===true ? 
                      <IconButton onClick={()=>{  
                       setS(false) }} >
                        <ArrowForwardIosIcon />
                      </IconButton>
                      :""
                    }
                    {
                      isCollapsed === true ?
                        <IconButton onClick={() => {setIsCollapsed(!isCollapsed)
                          }}>
                          <MenuOutlinedIcon />
                        </IconButton>
                      :""
                    }
                    <IconButton onClick={()=> navigate('/') }>
                      <OtherHousesIcon />
                    </IconButton>

                    <IconButton onClick={()=>{ setShowsearch(!showsearch);
                    setMocsearch(!mocsearch)
                    setIsCollapsed(false) }} type="button" sx={{ p: 1 }}>
                      <SearchIcon />
                    </IconButton>

                    {
                        preid === 0 ? <p >  </p> : <IconButton onClick={()=>{ NextPlan(1) }} >
                        <ArrowBackIcon />
                      </IconButton>
                      }

                    {
                        bookcatdata?.length-1 === preid  ? '' :  <IconButton onClick={()=>{ NextPlan(2) }} >
                        <ArrowForwardIcon />
                      </IconButton> 
                      }


                      

                    <IconButton  onClick={() => setPlay(!play)}>
                      <AudiotrackIcon />
                    </IconButton>

                  {/* <div className="dropdown-container">

                      <div  onClick={toggleDropdown}>
                        <IconButton onClick={toggleDropdown} >
                          <DownloadForOfflineIcon />
                        </IconButton>
                      </div>
                      {isDropdownOpen && (
                        <div className="dropdown-menu">
                          <div className="dropdown-item" onClick={() => handleOptionSelect('p')}>Pdf</div>
                          <div className="dropdown-item" onClick={() => handleOptionSelect('t')}>Text</div>
                        </div>
                      )}
                    </div> */}



                    
                  

                    <IconButton onClick={colorMode.toggleColorMode}>
                      {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                      ) : (
                        <LightModeOutlinedIcon />
                      )}
                    </IconButton>

                    <IconButton>
                      <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={()=>{handleSliderChange(2)}}>
                      <AddIcon />
                    </IconButton>
                    <IconButton  onClick={()=>{handleSliderChange(-2)}} >
                      <RemoveIcon />
                    </IconButton>



                  </div>

                  <div style={windowDimensions.width < 750 ? { paddingLeft : 20 , paddingRight : 20} : {}}  className={windowDimensions.width < 750 ?  "d-flex justify-content-center" : ""} >
                    
                      <div className="row mt-2" >
                        {
                          maincat?.map((data , key)=>{ 
                            return(
                              <div key={key} style={{ marginRight : 20 , marginBottom : 4 }} className="">
                                <div onClick={()=>{ ClicckedCat(data) }} style={{ width : "100%" , padding : 10 , borderRadius : 5 , border : '1px solid rgb(179, 179, 179)'
                              , cursor : 'pointer'}} className="" >
                                  <p style={{  textAlign : 'center' , cursor : 'pointer' }}>{data.catname}</p>
                                </div>
                              </div>

                            )
                          })
                        }
                        
                      </div>
                  </div>
      
                </div >
            

              </div>
        : ''}
        
        

        <div className="row">
        <div style={{ paddingRight : 0 , backgroundColor : '#fbe5e5' }} className={ isCollapsed === false ? "col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3" : "newssst"} >
            
          <MenuItem 
                      icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                      style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                      }}
                    >
                      {!isCollapsed && (
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          ml="15px"
                        >
                          <Typography variant="h3" color={colors.grey[100]}>
                            MENU
                          </Typography>
                          <Box >
                            {
                              showsearch === true ? 

                              <IconButton onClick={()=>{  
                                setShowsearch(!showsearch);
                    setMocsearch(!mocsearch)
                    setIsCollapsed(false) }} >
                                <MenuBookIcon />
                              </IconButton>

                            : ''
                            }
                           <IconButton onClick={() =>{goBack()}}>
                              <ArrowBackIcon />
                            </IconButton>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                              <MenuOutlinedIcon />
                            </IconButton>
                            
                          

                          </Box>
                          
                        </Box>
                      )}
                      
                    </MenuItem>

                      {
                        showsearch === false && isCollapsed === false ?
                          <div style={{ padding : 10 }} >
                            <Box
                              display="flex"
                              backgroundColor={'#fff'}
                              borderRadius="3px"
                            >
                              <InputBase style={{ color : '#000' }}  onInput={(e)=>{searchBookTitle(e.target.value)}} sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                              <IconButton type="button" sx={{ p: 1 }}>
                                <SearchIcon />
                              </IconButton>
                            </Box>
                          </div>
                        : ''
                      }
                      
            <Box
             style={ windowDimensions.width < 750 ? {   } : { width : '100%' }}
                sx={{
                  "& .pro-sidebar-inner": {
                    
                    background: `${ theme.palette.mode === "dark" ? '#141b2d'  :  '#fbe5e5'} !important`,
                    width : '100%'
                  },
                  "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                  },
                  "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                  },
                  "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                  },
                  "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                  },
                }}
                
              >
                <ProSidebar collapsed={isCollapsed}>
                  <Menu iconShape="square">

                   
                        

                        {
                          showsearch === true ?
                        <div style={{ padding : 10 }} >
                          <div className="d-flex justify-content-between" >
                            <p style={theme.palette.mode === "dark" ? {color : '#fff' } :{ color : '#000' }} > Global Search  </p>
                            {
                              res?.totalCount > 0 ?   <p style={theme.palette.mode === "dark" ? {color : '#fff', marginRight : 20} :{ color : '#000' , marginRight : 20 }} >Total Count : { res?.totalCount}</p> : ''
                            }
                          </div>
                          
                          <Box
                            display="flex"
                            backgroundColor={'#fff'}
                            borderRadius="3px"
                          >
                            <InputBase style={{ width : '70%' , color : '#000' }}  onKeyDown={handleKeyDown}  onInput={(e) => setSearch(e.target.value)}  sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                            <IconButton onClick={() => handleSearch(1)} type="button" sx={{ p: 1 }}>
                              <SearchIcon />
                            </IconButton>
                          </Box>
                        </div>

                        : ''

                        }












{
  showsearch === true ? 


                      res?.res && res.res.length > 0  ? (
                          
                          <div className="wgvawsgvaw">
                            {res &&
                              res.res.map((e, i) => {
                                // Create a regular expression with the search keyword
                                const regex = new RegExp(search, "gi");

                                // Replace the matched text with a <span> element for highlighting
                                const highlightedContent = e.content.replace(
                                  regex,
                                  (match) =>
                                    `<span style="background-color: red ; color: #fff" class="text-red text-red-500 font-bold">${match}</span>`
                                );

                                return (
                                  <div style={{ cursor : 'pointer' }} onClick={()=>{ subClickbooks(e , i , '0' , e.content ) }} key={i} className="flex justify-between m-3">
                                    <p
                                      className=""
                                      dangerouslySetInnerHTML={{ __html: highlightedContent }}
                                    ></p>
                                    <p style={theme.palette.mode === "dark" ? { fontWeight : '700' , color : '#fff' } : { fontWeight : '700' , color : '#000' }} className="text-xs text-left">{e.book.replace(/\.(txt|doc)/gi, '')}</p>
                                  </div>
                                );
                              })}

                            {res && res.res.length > 0 && (
                              <ReactPaginate
                                pageCount={Math.ceil(res.totalCount / 10)} // Calculate the total number of pages based on the array length and the limit
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
                        ) : ''

                        : '' }












                    


                    {
                      isCollapsed === false &&  showsearch === false ?

                      <div className="neeeeww"  style={{
                      }} >
                        {
                          bookcat === false ? 
                          alldata?.map((reed , index)=>{ 
                            return(
                                <div className="row" style={{ backgroundColor :  ids === reed._id ? 'green' : 'red' , 
                                width : '100%'  , padding : 25 , cursor : 'pointer' , margin : 10 , borderRadius : 20 }} >
                                  <div  onClick={()=>{ subClick(reed , index) }}  
                                  className="col-10" >
                                    <p style={{ color : '#fff' , fontSize: `${sliderValue}px` , marginBottom: 0 }}>{reed.subcatname}</p>
                                  </div>
                                  <div className="col-2" >
                                    <p style={{ color : '#fff' , fontSize: `${sliderValue}px`, marginBottom: 0 }}>{reed.count}</p>
                                  </div>
                                </div>
                            )
                          })
                          :  showsearch === false ?
                          bookcatdata?.map((reed , index)=>{ 
                            return(
                            <div onClick={()=>{ subClickbook(reed , index , '1') }} style={{ backgroundColor :  ids === reed._id ? 'red' : '#fff' ,
                             width : '100%' , padding : 25 , cursor : 'pointer', marginBottom : 10 , marginTop : 10 ,  borderRadius : 6  }} 
                            className="plzhover" >
                              <p className="plzhovetttr" style={{ color : ids === reed._id ? '#fff' : '#000' , fontSize: `${sliderValue}px` , marginBottom: 0 }}>
                                { reed?.realbook.replace(/\.(txt|doc)/gi, '')}</p>
                            </div>
                            )
                          })

                          : ''
                        }
                          
                      </div>
                      : ''
                    }
                  </Menu>
                </ProSidebar>
            </Box>
          </div>
        <div style={{ padding : 0 }}  className={ isCollapsed === false ? " col-sm-none col-md-9 col-lg-9 col-xl-9 col-xxl-9 col-xxxl-9" : " col-12"} >
        



          





            {/* <div className="d-flex justify-content-end" style={{ margin : 10 }} >

              
              <input type="range" step={3}  min={10}  max={26}  value={sliderValue}  onInput={handleSliderChange} />
            </div> */}

            

           

            
                  {
                    mocsearch === true && search != '' ? 

                    <>

                      {/* <div className="d-flex justify-content-between" style={{ margin : 10 , marginTop : -5 , marginBottom : 0 }} >
                        <div className="" >
                         
                        </div>
                        <div style={{  width : 300 , height : 60}} >
                          {
                            play && 
                            <audio style={{ width : '100%' }} controls>
                              <source src={pagecontent?.audio} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>

                          }
                        </div>
                        <div >
                        
                          
                        </div>
                      </div> */}


                     {/* <div>
                        {parts.map((part, index) =>
                          matches.includes(part) ? (
                            <span key={index} style={{ color: 'blue' }}>
                              {part}
                            </span>
                          ) : (
                            <span key={index}>{part}</span>
                          )
                        )}
                      </div> */}

                          {(() => {

                            
                                // Create a regular expression with the search keyword
                                const regex = new RegExp(search, "gi");

                                // Replace the matched text with a <span> element for highlighting
                                const highlightedContent = textRef.current.replace(
                                  regex,
                                  (match) =>
                                    `<span style="background-color: red ; color: #fff" class="text-red text-red-500 font-bold">${match}</span>`
                                );

                                return (
                                  <>
                                    <div > 
                                        {
                                          heading != '' ? <p className="mb-3" style={{ fontWeight : '700' , color : 'red' , textAlign : 'center' 
                                        , marginTop : 10 , fontSize : 25}}>{heading?.replace(/\.(txt|doc)/gi, '')}</p>  : ''
                                        }
                                    </div>
                                  <div    className="fflltrrafvszvsz drhtdfth"  >

                                  <div className="d-flex justify-content-around" style={{ margin : 10 , marginTop : -5 , marginBottom : 0 }} >
                        <div className="" >
                         
                        </div>
                       
                        <div >
                        </div>
                        <div style={{  width : 200 , height : 60  , marginTop : 0}} >
                        {
                            play && 
                        
                          
                            <audio style={{ width : '100%' }} controls>
                            <source src={pagecontent?.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>

                          
                      
                        }

                        </div>
                      </div>

                                    <p 
                                      className="" style={{ fontSize: `${sliderValue}px` , 
                                      paddingLeft : 30 , paddingRight :  10 }}
                                      dangerouslySetInnerHTML={{ __html: highlightedContent.replace(/\n/g, '<br />') }}
                                    ></p>
                                  </div>
                                  </>
                                );

                            })()}
                    </>
                    : windowDimensions.width  < 750 && isCollapsed === false ? '' :
                  <Box  > 
                        <div >
                         
                            {
                              heading != '' ? <p className="mb-3" style={{ fontWeight : '700' , color : 'red' , textAlign : 'center' 
                            , marginTop : 10 , fontSize : 25}}>{heading?.replace(/\.(txt|doc)/gi, '')}</p>  : ''
                            }
                        </div> 
                    <div style={{ padding : 17 }} className="fflltrr testtt" >
                   
                    <div className="d-flex justify-content-around" style={{ margin : 10 , marginTop : -5 , marginBottom : 0 }} >
                        <div className="" >
                         
                        </div>
                       
                        <div >
                        </div>
                        <div style={{  width : 200 , height : 60  , marginTop : 0}} >
                        {
                            play && 
                        
                          
                            <audio style={{ width : '100%' }} controls>
                            <source src={pagecontent?.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>

                          
                      
                        }

                        </div>
                      </div>
                      
                    <p id='hahaha'  style={{ fontSize: `${sliderValue}px` ,  marginTop : -10 , paddingLeft : 10 , paddingRight :  10 }} 
                    dangerouslySetInnerHTML={{ __html: pagecontent.bookDescription.replace(/\n/g, '<br />') }} /> 
                      {/* <pre style={{ }} >{ pagecontent} </pre>
                      <p>{ReactHtmlParser(pagecontent)}</p> */}
                    </div>
                </Box>
                  }

             
          </div>
        </div>

            





            
        </div>
        
      }


      
      </>
  );
};

export default Dashboard;

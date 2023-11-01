import React ,{ useEffect , useState } from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { useParams ,  useNavigate } from "react-router-dom";
import { BaseUrluser } from "../../components/config/dev";
import axios from "axios";
import swal from "sweetalert";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

let Bookview = () =>{

    const [isSidebar, setIsSidebar] = useState(true);
    const [ data , setData ] = useState()
    const [text, setText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [ align , setAlign ] = useState()



    

    const handleChange = (value) => {
        setText(value);

    };


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("red");
  

    let navigate = useNavigate()

    const { id } = useParams();

    useEffect(()=>{
        Start()
    },[])

    const formats = [
        'align',
        'bold',
        'italic',
        'underline',
        'list',
        'bullet',
        'indent',
      ];
    
      const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'list', 'bullet', 'indent'],
        ],
      };

    let Start =async () =>{
        setIsOpen(true)
        let responce =await axios({
            method : 'post',
            url : BaseUrluser+'/viewbookss',
            data : {
                token : localStorage.getItem('token'),
                id : id,
                page : 1 ,
                limit : 10
            }
        })
        .then(async(ree)=>{
            if(ree.data.status === true){
                console.log(ree.data.data.bookDescription , 'ree.data')
                setData(ree.data.data)
                let one = await ree.data.data.bookDescription.replace(/\n/g, "<br>")
                setText(one)
                setAlign(ree.data.data.align)
                console.log(one , 'ree.data')
                setIsOpen(false)
            }else{
                swal("Oops!", "Something went wrong!", "error");
                setIsOpen(false)
            }
            
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpen(false)
            console.log(err,'err')
        })
    }

    let Updattted = async () =>{
        console.log('neww' , text )
        // return
        setIsOpen(true)
        let re = await axios({
            method : 'post',
            url : BaseUrluser+'/updatebook',
            data : {
                token : localStorage.getItem('token'),
                id : data._id,
                text : text,
                catid : data.mainCategory
            }
        })
        .then((ree)=>{
            console.log(ree.data , 'ree.data')
            if(ree.data.status === true){
                setData(ree.data.data)
                setText(ree.data.data.bookDescription)
                setIsOpen(false)
            }else{
                swal("Oops!", "Something went wrong!", "error");
                setIsOpen(false)
            }
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
            setIsOpen(false)
            console.log(err,'err')
        })
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
            formData.append(`file`, selectedFile);
            formData.append(`id`, datt._id);
            setIsOpen(true)
            let responce = await axios.post( `${BaseUrluser}/addaudio`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                } 
            })
            .then((res)=>{
                setIsOpen(false)
                setData(res.data.data)
            })
            .catch((err)=>{
                swal("Oops!", "Something went wrong!", "error");
                setIsOpen(false)
                console.log(err,'err')
            })

        }
    }

    let alignChange =async (one) =>{
        setIsOpen(true)
        let rr = await axios({
            method : 'post',
            url : BaseUrluser+'/updatebookalign',
            data : {
                token : localStorage.getItem('token'),
                id : one._id,
                align : align
            }
        })
        .then((ree)=>{
            setIsOpen(false)
            console.log(ree ,'res')
        })
        .catch((err)=>{
            setIsOpen(false)
            console.log(err,'err')
        })
    }

    let DetAud =async (one) => {
        console.log(one , 'oneoneone')
        setIsOpen(true)
        let ax = await axios({
            method : 'post',
            url : BaseUrluser+'/deleteaudio',
            data : {
                token : localStorage.getItem('token'),
                id : one._id
            }
        })
        .then((ree)=>{
            Start()
            console.log(ree ,'res')
        })
        .catch((err)=>{
            setIsOpen(false)
            console.log(err,'err')
        })
    }

    return(
        <>
            <div className="app">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    <Box m="20px">
                        <Header title="Book Detail" subtitle="Managing book detail" />

                        <div className="row" >
                            <div className="col-4" >
                            {
                                data?.audio === '' || data?.audio === undefined ? 

                                <div   >
                                    <div  >
                                        <input style={{ marginBottom : 20 }} type="file" accept="audio/*" onChange={handleFileChange} />
                                     
                                    </div>
                                    <div  >
                                        <div onClick={() => uploadAudio(data)} style={{ backgroundColor : 'rgb(223 223 223)' , cursor : 'pointer' , 
                                        borderRadius : 10 , width : 120 }} >
                                            <p  style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>Upload Audio</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <>

                                    <p>{data?.audio}</p>
                                    <div onClick={() => {DetAud(data)}} style={{ backgroundColor : 'rgb(223 223 223)' , cursor : 'pointer' , 
                                        borderRadius : 10 , width : 120 }} >
                                            <p  style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>Detete Audio</p>
                                        </div>
                                </>
                            }
                            </div>
                            <div style={{ marginTop : -26 }} className="col-4" >
                                <p  style={{ marginBottom : 5 }} >Align</p>
                                <input type="number" style={{ marginBottom : 20 }} onChange={(e)=>{setAlign(e.target.value)}} value={align} />
                                <div onClick={() => alignChange(data)}  style={{ backgroundColor : 'rgb(223 223 223)' , cursor : 'pointer' , 
                                borderRadius : 10, width : 120 }} >
                                    <p  style={{ textAlign : 'center' , color : 'black' ,  padding : 6 }}>Upload Align</p>
                                </div>
                            </div>
                            <div className="col-4" >
                                <div onClick={()=>{ Updattted() }} style={{ width : 120 , height : 40 , padding : 10 ,
                                    backgroundColor : 'rgb(223 223 223)' , marginBottom : 10 , cursor : 'pointer' }} >
                                    <p style={{ color : '#000',  textAlign : 'center' }}>Update Text</p>
                                </div>
                            </div>
                        </div>
                       
                     
                      

                        

                        <div  >
                       
                            <ReactQuill value={text}
                                        onChange={handleChange}
                                        formats={formats}
                                        modules={modules} />
                        </div>
                    </Box>
                </main>
            </div>


        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >

            <ClockLoader color="#36d7b7" />
        
        </Modal>

        </>
    )
}



export default Bookview
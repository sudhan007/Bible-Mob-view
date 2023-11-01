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

let Bookview = () =>{

    const [isSidebar, setIsSidebar] = useState(true);
    const [ data , setData ] = useState()
    const [text, setText] = useState('');

    const handleChange = (value) => {
        setText(value);
    };

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
        let responce =await axios({
            method : 'post',
            url : BaseUrluser+'/viewbookss',
            data : {
                token : localStorage.getItem('token'),
                id : id
            }
        })
        .then((ree)=>{
            if(ree.data.status === true){
                setData(ree.data.data)
                setText(ree.data.data.bookDescription)
            }
            console.log(ree.data.data.bookDescription , 'ree.data')
        })
        .catch((err)=>{
            swal("Oops!", "Something went wrong!", "error");
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
                        <div  >
                            <ReactQuill value={text}
                                        onChange={handleChange}
                                        formats={formats}
                                        modules={modules} />
                        </div>
                    </Box>
                </main>
            </div>
        </>
    )
}



export default Bookview
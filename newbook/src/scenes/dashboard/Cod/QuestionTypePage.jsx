import { Navebar } from "../../../components/Navebar";
import bi6 from "../../../image/Ellipse9.png";
import bi7 from "../../../image/image50.png";
import { _axios } from "../../../lib/axios";
import fourteen from "../../../image/Ellipse2.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/ListRounded";
import Mobcodpage from "./Mobcodpages/Mobcodpage";

export function QuestionTypesClient() {
  const [questionTypes, setQuestionTypes] = useState([]);
  const navigate = useNavigate();
  const _static = [
    {
      type: "அனைத்து கேள்விகள்",
      _id: "all",
    },
  ];

  const navigateTo = (url) => navigate(url);

  useEffect(() => {
    async function getAllQuestionTypes() {
      try {
        const res = await _axios.get("/cod/getallquestiontype");

        if (res.data && res.data.message == "Success") {
          let data = [..._static, ...res.data?.data];
          setQuestionTypes(data);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getAllQuestionTypes();
  }, []);


  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileView]);

  return (
  <>
  {isMobileView ? <Mobcodpage /> : 
  
  <>
  <div style={{ backgroundColor: "#800080" }} className="container-fluid">
    <div className="d-flex justify-content-between">
      <img
        style={{ height: "44px", marginTop: "5px" }}
        src={bi6}
        className="img-fluid"
      />

      <div class="">
        <h1 style={{ fontFamily: "Bakbak One" }} className="abc">
          The Last Voice Ministry
        </h1>
      </div>

      <div class=""></div>
    </div>
    {/* Content in the center */}
  </div>
  <Navebar />
  <div
    className="container-fluid
 "
  >
    <h2 className="text-center text-lg font-bold italic p-4">
      COD Questions and Answers
    </h2>
  </div>
  <div className="grid grid-cols-2 gap-6 p-4 justify-items-center mt-5">
    {questionTypes.map((questionType, idx) => (
      <div
        className="bg-gray-100 shadow-md p-2 flex cursor-pointer justify-start items-center min-w-full text-center border-gray-200 rounded-lg border-2 border-solid"
        key={idx}
        onClick={() => navigateTo(`/cod/questions/${questionType._id}`)}
      >
        <div className="w-[30px] h-full bg-gray-200 rounded-full flex justify-center items-center">
          <ListIcon className="right-0" />
        </div>
        <div className="w-[90%]">
          <h3 className="text-sm font-bold text-center">
            {questionType.type}
          </h3>
        </div>
      </div>
    ))}
  </div>
  <h1
    style={{
      color: "white",
      position: "relative",
      top: "280px",
      fontSize: "55px",
      fontFamily: "Eras Bold ITC",
      right:"100px",
    }}
 className="text-end" >
    Questions & <br /> Answers
  </h1>
  <div className="w-full">
    <img src={bi7} style={{ width: "100%" }} className="" />
  </div>
</>
  
  }
  </>
  );
}

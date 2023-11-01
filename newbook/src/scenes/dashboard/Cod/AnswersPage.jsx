import { Navebar } from "../../../components/Navebar";
import bi6 from "../../../image/Ellipse9.png";
import { _axios } from "../../../lib/axios";
import fourteen from "../../../image/Ellipse2.png";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Footer } from "./Footer";
import Mobcodanswer from "./Mobcodpages/Mobcodanswer";

export function AnswersClient() {
  const [answer, setAnswer] = useState({});
  const { question } = useParams();

  useEffect(() => {
    async function getQuestionAndAnswer() {
      try {
        const res = await _axios.get(
          `/cod/getsinglequetionandanswer?id=${question}`
        );

        if (res.data && res.data.message == "Success") {
          setAnswer(res.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getQuestionAndAnswer();
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
  {isMobileView ? <Mobcodanswer /> :
  
  <>
  <div style={{ backgroundColor: "#800080" }} className="container-fluid">
    <div className="d-flex justify-content-between">
      {/* Logo on the left */}
      <img
        style={{ height: "44px", marginTop: "5px" }}
        src={bi6}
        className="img-fluid"
      />

      <div className="">
        <h1 style={{ fontFamily: "Bakbak One" }} className="abc">
          The Last Voice Ministry
        </h1>
      </div>

      <div className=""></div>
    </div>
    {/* Content in the center */}
  </div>
  <Navebar />

  <div className="mx-[20%] font-normal text-[1rem] pb-24 m-24">
    <div
      onClick={() => {}}
      className="border-dashed  border-b-2 border-t-0 border-l-0 border-r-0 px-2 p-1 my-2 border-gray-300 rounded-md text-textGray hover:shadow-md shadow-sm cursor-pointer"
    >
      {"1)"} {answer?.question}
    </div>

    <div
      onClick={() => {}}
      className="border-dashed border-b-2 border-t-0 border-l-0 border-r-0 p-4 my-2 border-gray-300 rounded-md text-textGray hover:shadow-md shadow-sm cursor-pointer"
    >
      {answer?.answer}
    </div>
  </div>
</>
  
  }
  </>
  );
}

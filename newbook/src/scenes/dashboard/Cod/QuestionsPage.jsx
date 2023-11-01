import { Navebar } from "../../../components/Navebar";
import bi6 from "../../../image/Ellipse9.png";
import { _axios } from "../../../lib/axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Pagination } from "@mui/material";
import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import Mobcodquestion from "./Mobcodpages/Mobcodquestion";

export function QuestionsClient() {
  const [questions, setquestions] = useState([]);
  const navigator = useNavigate();
  const navigateTo = (url, opt) => navigator(url, opt);

  const [count, setCount] = useState(14);
  const [page, setPage] = useState(1);
  const [refetch, setRefetch] = useState(false);

  const [searchText, setSearchText] = useState("");

  const { type } = useParams();

  const _static = [
    {
      type: "அனைத்து கேள்விகள்",
      _id: "all",
    },
  ];

  async function getAllquestions(txt) {
    try {
      const res = await _axios.get(
        `/cod/getallquestions?type=${type}&limit=14&page=${page}&searchText=${txt}`
      );

      if (res.data && res.data.message == "Success") {
        let data = [...res.data?.data];
        setquestions(data);
        let totalPages = Math.ceil(res.data?.count / 14);
        setCount(totalPages);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAllquestions("");
  }, [refetch]);

  useEffect(() => {
    const inputsaffected = document.querySelectorAll("input.keymanweb-font");
    inputsaffected.forEach((e) => {
      console.log(e);
      if (e.classList.contains("keymanweb-font")) {
        e.classList.remove("keymanweb-font");
        e.removeAttribute("inputmode");
      }
    });
  }, []);

  const [isMobileView , setIsMobileView] = useState(window.innerWidth <= 800)
  useEffect(()=>{
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800)
    }
  
    window.addEventListener('resize' , handleResize)
  
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[isMobileView])

  return (
<>
{isMobileView ? <Mobcodquestion /> :
    <>
    <div className="w-full overflow-hidden">
      <div style={{ backgroundColor: "#800080" }} className="container-fluid">
        <div className="d-flex justify-content-between">
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
        </div>
      </div>
      <Navebar />
    </div>

    {/* heading */}
    <div className="flex w-[70%] m-auto justify-between items-center ">
      <h3 className="border-b text-center font-bold text-lg p-2">
        {type == "all"
          ? "அனைத்து கேள்விகள்"
          : questions.length > 0
          ? questions[0].questionType.type
          : ""}
      </h3>

      <div className="flex gap-2">
        <FormControl
          variant="outlined"
          className="font-normal font-roboto-slab"
        >
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            size="small"
            className="font-roboto-slab"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);

              if (!e.target.value && searchText) {
                setSearchText("");
                getAllquestions("");
              }
            }}
          />
        </FormControl>
        <IconButton
          variant="outline"
          sx={{
            border: "#555555 1px solid",
          }}
          onClick={() => {
            if (!searchText) return;
            getAllquestions(searchText);
          }}
          className="font-normal font-roboto-slab bg-sky-500"
        >
          <Search />
        </IconButton>
      </div>
    </div>
    {searchText}

    <div className="mx-[10%] my-2 font-normal items-center text-[1rem] text-textGray">
      {questions &&
        questions.map((item, idx) => (
          <div
            onClick={() => {
              navigateTo(`/cod/answer/${item._id}`);
            }}
            key={idx}
            className="border-dashed border-b-2 border-t-0 border-l-0 border-r-0 px-2 py-1 my-2 border-gray-300 rounded-md text-textGray hover:shadow-md shadow-sm cursor-pointer"
          >
            {"Q ." + (idx + 1) + " "}
            {item.question}
          </div>
        ))}
    </div>
    <div className="flex justify-center pb-24 mt-5">
      <Pagination
        count={count}
        page={page}
        onChange={(_, value) => {
          setPage(value);
          setRefetch(!refetch);
        }}
        variant="outline"
        showFirstButton
        showLastButton
        color="#555555"
      />
    </div>
  </>
}
</>
  );
}

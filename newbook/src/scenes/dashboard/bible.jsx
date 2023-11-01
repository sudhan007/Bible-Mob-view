import React, { useState, useEffect, useRef, useContext } from "react";
import bi8 from "../../image/Ellipse2.png";
import { BreakfastDiningTwoTone } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrluser } from "../../components/config/dev";
import { getPdf } from "../../components/config/dev";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { _axios } from "../../lib/axios";
import { BMViewContext } from "./bible-components/Context/BaseContext";
import {
  BMViewContent,
  BibleViewContent,
  BibleViewSidebar,
  BmSidebar,
  SearchView,
  Topbar,
  SearchviewContent,
  MessageViewContent,
  MessageViewSidebar,
} from "./bible-components/index";
import '../../scenes/dashboard/bible.css'



const OPTIONS = Object.freeze({
  1: "Home",
  2: "Bible",
  3: "Message",
  4: "COD",
  5: "BM",
  6: "Search",
});

function Bible() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const scrollButtonRef = useRef();

  const { id: maincategory_id } = useParams();

  const [isSidebar, setIsSidebar] = useState(true);
  const [bookcat, setBookcat] = useState(true);
  const [bookcatdata, setBookcatdata] = useState([]);
  const [preid, setPreid] = useState(0);
  const [s, setS] = useState(false);

  const colorMode = useContext(ColorModeContext);
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
  const [heading, setHEading] = useState("");

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(false);
  let [pagecontent, setPagecontent] = useState("");
  let [pagecontents, setPagecontents] = useState("");
  const [play, setPlay] = useState(false);

  const [mocsearch, setMocsearch] = useState(false);
  const [ids, setIds] = useState("");

  let { id, newid } = useParams();

  const [sliderValue, setSliderValue] = useState(18);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollRef = useRef(null);
  const textRef = useRef("");

  const [sw, setSwitch] = useState("2");
  const [hei, setHeight] = useState(900);

  // states for handle search
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [messageSearchResults, setMessageSearchResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [activeSearchView, setActiveSearchView] = useState("Bible");
  const [searchKey, setSearchKey] = useState("");
  const [selectedResultBook, setSelectedResultBook] = useState({});
  const [selectedChapter, setSelectedChapter] = useState({});
  const [selectedMessage, setSelectedMessage] = useState({});
  const [totalSearchResult, setTotalSearchResult] = useState([]);

  const [next, setNext] = useState(0);
  // helpers
  const navigateTo = (url) => navigate(url);

  // states for bm view
  const [BMState, setBMState] = useState({
    activeView: "Bible",
    books: [],
    messages: [],
    sliderValue: sliderValue,
    ids,
    hei,
    selectedBook: {},
    selectedChapter: {},
    selectedMessage: {},
    sw,
    OPTIONS,
    setNext,
    darkMode: localStorage.getItem("mode") != "dark" ? true : false,
  });

  // states for Bible View
  const [BibleState, setBibleState] = useState({
    books: [],
    sliderValue: sliderValue,
    selectedBook: {},
    totalBooks: [],
    selectedChapter: {},
    currentlySelectedBookIdx: 0,
    allDataofBible: [],
    fetnext: false,
    currentBook: "",
    currentChapter: 1,
    selectedBookAd: "",
  });

  // states for message view
  const [MessageState, setMessageState] = useState({
    messages: [],
    sliderValue: sliderValue,
    selectedMessage: {},
  });

  const getWindowDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    document.getElementById("root").classList.remove("specific-screen-style");
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goBack = () => {
    navigate(-1); // This navigates back one step in the navigation history.
  };

  useEffect(() => {
    if (windowDimensions.width < 750) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }

    // console.log(windowDimensions , 'windowDimensions')
  }, [windowDimensions]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    let kkurl = "https://clientdemoproject.s3.ap-south-1.amazonaws.com/";

    // return;
    if (option === "p") {
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
      const url = getPdf(pagecontent.bookTitle + ".pdf");
      window.open(url, "_blank");
    } else {
      console.log(pagecontent.bookTitle + "pagecontent.bookTitle");

      const url = getPdf(pagecontent.bookTitle);

      fetch(url)
        .then((response) => response.text())
        .then((text) => {
          // Create a Blob with the text content
          const blob = new Blob([text], { type: "text/plain" });

          // Create a temporary link to download the file
          const tempLink = document.createElement("a");
          tempLink.href = URL.createObjectURL(blob);
          tempLink.download = "file.txt"; // Replace 'file.txt' with the desired filename
          tempLink.click();

          // Clean up the URL object to release the resource
          URL.revokeObjectURL(tempLink.href);
        })
        .catch((error) => {
          console.error("Error fetching the text file:", error);
        });
    }
  };

  const handleSearch = async (curPage) => {
    if (!search) return;
    const res = await axios.get(
      `${BaseUrluser}/${search}/${id}?page=${curPage}&limit=10`
    );
    if (res.data.length === 0) {
      setSelected(true);
    } else {
      setSelected(false);
    }

    setRes(res.data[0]);
  };

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
    handleSearch(e.selected + 1);
  };

  const handleSliderChange = (event, type) => {
    if (type == "add" && sliderValue < 28) {
      let pl = sliderValue + event;
      setSliderValue(sliderValue + event);
      setBMState({ ...BMState, sliderValue: pl });
    }
    if (type == "sub" && sliderValue > 10) {
      let mi = sliderValue - event;
      setSliderValue(sliderValue - event);
      setBMState({ ...BMState, sliderValue: mi });
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    start(sw);
  }, [sw]);

  let start = async (option) => {
    setHeight(window.innerHeight);

    let selectedOption = option ? OPTIONS[option] : OPTIONS[1];
  };

  let subClick = (reed, index) => {
    navigate("/book" + "/" + reed._id + "/" + id);
    start(reed._id);
    setIds(reed._id);
    setPreid(index);
    setHEading(reed.realbook);
  };

  let Subb = async () => {
    let tt = await axios({
      method: "post",
      url: BaseUrluser + "/booksubonlycatt",
      data: {
        id: id,
      },
    })
      .then((re) => {
        console.log(re, "re");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  let subClickbook = async (id, index, nu) => {
    // setHEading(ree.data.book[0].realbook)
    console.log("correct");
    setHEading(id.realbook);

    if (id === undefined) {
      return;
    }

    // document.getElementById("hahaha")?.scrollIntoView({ behavior: "smooth" });

    setPreid(index);
    setIds(id._id);
    let tt = await axios({
      method: "post",
      url: BaseUrluser + "/booksubonlydata",
      data: {
        id: nu === "0" ? id.book : id._id,
        nu: nu === "0" ? "0" : "1",
      },
    })
      .then((re) => {
        setPagecontent(re.data.data);
        if (windowDimensions.width < 750) {
          setIsCollapsed(true);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    console.log(newid, "asdajcaksj");
    if (newid === "Messages") {
      console.log(sw, "fdw");
      setSwitch("3");
    } else if (newid === "Bible") {
      setSwitch("2");
    }
  }, []);

  let subClickbooks = async (id, index, nu, content) => {
    console.log(id, "3");
    // return
    setPreid(index);
    setIds(id._id);
    let tt = await axios({
      method: "post",
      url: BaseUrluser + "/booksubonlydata",
      data: {
        id: nu === "0" ? id.book : id._id,
        nu: nu === "0" ? "0" : "1",
      },
    })
      .then((re) => {
        setMocsearch(true);
        let two = re.data.data.bookDescription;
        // const regex = new RegExp(search, 'g');
        // const matches = re.data.data.match(regex) || [];

        const updatedText = two?.replace(
          content,
          `<a id="imhere"></a>${content} `
        );
        textRef.current = updatedText;
        setPagecontents(updatedText);

        console.log(updatedText, "re.data.data dfvdfv");
        setHEading(re.data.data.realbook);
        if (windowDimensions.width < 750) {
          setIsCollapsed(true);
        }
        setTimeout(() => {
          document
            .getElementById("imhere")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  let NextPlan = (ff) => {
    setS(true);
    console.log(bookcatdata.length, "one");
    // return
    if (ff === 1) {
      subClickbook(bookcatdata[preid - 1], preid - 1);
    } else {
      subClickbook(bookcatdata[preid + 1], preid + 1);
    }
  };

  // handle search
  async function handleBibleSearch() {
    if (!searchKey) return;
    const res = await _axios.get(
      `/bible/searchentirebible?searchquery=${searchKey}&id=${maincategory_id}`
    );

    if (res.data && res.data.message == "Success") {
      let data = res.data?.data || [];
      setSearchResults(data);
      setTotalSearchResult(res.data);
      handleResultsChange(data[0]);
      setSelectedMessage(res.data?.messages ? res.data?.messages[0] : {});
      setTotalCount(res.data?.total_count);
      setMessageSearchResults(res.data?.messages || []);
    }
  }

  async function handleResultsChange(e, type) {
    if (type == "Bible") {
      setSelectedResultBook(e);
      setSelectedChapter(e?.verses[0] || []);
    } else {
      console.log(e);
      setSelectedMessage(e);
    }
  }

  let ClicckedCat = (re) => {
    navigate("/book" + "/" + re._id + "/" + re._id);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission if inside a form element
      handleSearch(1);
    }
  };

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
    <div className="overflow-y-hidden max-h-screen">
      {/* first set */}

      <BMViewContext.Provider
        value={{
          BMState,
          setBMState,
          BibleState,
          setBibleState,
          MessageState,
          setMessageState,
        }}
      >
        <div className="container-fluid overflow-y-hidden">
          <div className="row">
            <div className="col-3 pl-0 pr-0 border-[2px] bg-maincolor"  id="jjj">
              {/* the shortcut bar on the top */}

              <Topbar setSwitch={setSwitch} sw={sw} start={start} />

              {OPTIONS[sw] === "Search" ? (
                <SearchView
                  books={books}
                  searchKey={searchKey}
                  setSearchKey={setSearchKey}
                  search={search}
                  handleBibleSearch={handleBibleSearch}
                  totalCount={totalCount}
                  hei={hei}
                  searchResults={searchResults}
                  sliderValue={sliderValue}
                  ids={ids}
                  subClickbook={subClickbook}
                  handleResultsChange={handleResultsChange}
                  messageSearchResults={messageSearchResults}
                  setActiveSearchView={setActiveSearchView}
                  activeSearchView={activeSearchView}
                />
              ) : OPTIONS[sw] === "Bible" ? (
                <BibleViewSidebar
                  books={books}
                  hei={hei}
                  sliderValue={sliderValue}
                  ids={ids}
                  subClickbook={subClickbook}
                  handleResultsChange={handleResultsChange}
                />
              ) : OPTIONS[sw] === "BM" ? (
                <BmSidebar />
              ) : OPTIONS[sw] === "Message" ? (
                <MessageViewSidebar />
              ) : (
                <></>
              )}
              {/*  */}
            </div>
            <div
              className={ isMobileView ? "col-12" : `col-9 h-screen ${
                BMState.darkMode
                  ? "bg-gray-50 text-black"
                  : "bg-gray-900 text-white"
              }`}
            >
              {/* {OPTIONS[sw] === "Bible" && activeSearchView === "Bible" && (
                <h4
                  style={{
                    backgroundColor: "#630C63",
                    marginTop: "2px",
                    height: "50px",
                    width: "100%",
                    fontFamily: "Source Sans 3",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "10px",
                  }}
                >
                  {selectedResultBook && selectedResultBook.bookName
                    ? selectedResultBook?.bookName.replace(/\.(txt|doc)/gi, "")
                    : ""}
                </h4>
              )} */}
              {OPTIONS[sw] === "Bible" ? (
                <BibleViewContent
                  NextPlan={NextPlan}
                  bookcatdata={bookcatdata}
                  colorMode={colorMode}
                  handleSliderChange={handleSliderChange}
                  sliderValue={sliderValue}
                  pagecontent={pagecontent}
                  play={play}
                  preid={preid}
                />
              ) : OPTIONS[sw] === "Search" ? (
                <SearchviewContent
                  searchKey={searchKey}
                  searchResults={searchResults}
                  sliderValue={sliderValue}
                  selectedResultBook={selectedResultBook}
                  selectedChapter={selectedChapter}
                  setSelectedChapter={setSelectedChapter}
                  NextPlan={NextPlan}
                  ClicckedCat={ClicckedCat}
                  bookcatdata={bookcatdata}
                  colorMode={colorMode}
                  handleSliderChange={handleSliderChange}
                  pagecontent={pagecontent}
                  play={play}
                  preid={preid}
                  key={preid}
                  setActiveSearchView={setActiveSearchView}
                  activeSearchView={activeSearchView}
                  messageSearchResults={messageSearchResults}
                  selectedMessage={selectedMessage}
                />
              ) : OPTIONS[sw] === "BM" ? (
                <BMViewContent
                  NextPlan={NextPlan}
                  bookcatdata={bookcatdata}
                  colorMode={colorMode}
                  handleSliderChange={handleSliderChange}
                  pagecontent={pagecontent}
                  play={play}
                  preid={preid}
                />
              ) : OPTIONS[sw] === "Message" ? (
                <MessageViewContent
                  NextPlan={NextPlan}
                  bookcatdata={bookcatdata}
                  colorMode={colorMode}
                  handleSliderChange={handleSliderChange}
                  pagecontent={pagecontent}
                  play={play}
                  preid={preid}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </BMViewContext.Provider>
      {/*  */}

      {/*  */}
    </div>
  );
}

export default Bible;

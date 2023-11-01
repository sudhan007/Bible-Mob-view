import { Box, Button } from "@mui/material";
import { BaseDashboardContext } from "../Context/BaseContext";
import { useEffect, useState } from "react";
import { _axios } from "../../../../lib/axios";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Link } from "@mui/material";
import Typography from "@mui/material";
import axios from "axios";
import {
  BaseUrluser,
  bibleid,
  messid,
} from "../../../../components/config/dev";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export function BmSidebar({}) {
  const { id: maincategory_id } = useParams();
  const [count, setCount] = useState(1);
  const { BMState, setBMState, BibleState } = BaseDashboardContext();
  const { fetnext } = BibleState;
  const [bookcount, setBookCount] = useState(1);
  const [sel, setSel] = useState("");
  const [sels, setSels] = useState(0);
  const [vyu, setVyu] = useState(0);
  const [de, setDe] = useState([]);
  const [activeViews, setActive] = useState("Bible");
  const [alldata, setAlldata] = useState([]);
  const [select, setSelect] = useState("bible");
  const [iddd, setIdd] = useState("");

  const {
    books,
    sliderValue,
    hei,
    ids,
    selectedBook,
    selectedMessage,
    sw,
    OPTIONS,
    selectedChapter,
    messages,
    activeView,
  } = BMState;

  useEffect(() => {
    localStorage.setItem("currentbookidx", 0);
    localStorage.setItem("activeView", "Bible");
    console.log("res.data?.subcat sdvcsv 1");
    fetchDatass();
  }, []);

  useEffect(() => {
    fetchDatassnext(books);
  }, [fetnext]);

  let fetchDatassnext = async (tt) => {
    console.log("cs");
    let currIdx = await +localStorage.getItem("currentbookidx");
    let hh = await localStorage.getItem("activeView");

    console.log(tt[currIdx]?._id, "cs", currIdx);

    if (hh === "Bible") {
      if (!tt[currIdx]) return;
      if (sels === 0) {
        console.log("sdvcsv 4");
        const res = await axios({
          method: "post",
          url: BaseUrluser + "/booksubcatt",
          data: {
            id: tt[currIdx]?._id,
            count: count,
          },
        });

        console.log(res.data.book[0], "resres");

        if (res.data && res.data.status == true) {
          setVyu(1);
          if (res.data?.subcat.length === 0) {
            setSels(1);
            setBMState({
              ...BMState,
              books: res.data?.booksub || [],
              selectedBook: res.data?.booksub[0] || {},
              selectedChapter: res.data?.book[0] || {},
            });
          } else {
            setDe(res.data?.subcat);
            setSels(0);
            setSel(res.data?.subcat[0]._id);
            setBMState({
              ...BMState,
              books: res.data?.subcat || [],
              selectedBook: res.data?.subcat[0] || {},
              selectedChapter: res.data?.book[0] || {},
            });
          }
        }
      } else {
        const res = await axios({
          method: "post",
          url: BaseUrluser + "/booksubonlydata",
          data: {
            id: tt[currIdx]?._id,
            nu: "1",
            count: count,
            bookcount: bookcount,
          },
        });

        if (res.data && res.data.status == true) {
          setVyu(1);
          setIdd(res.data?.data?._id);
          setBMState({
            ...BMState,
            selectedChapter: res.data?.data || {},
          });
        }
      }
    } else {
      if (!messages[currIdx]) return;
      const res = await axios({
        method: "post",
        url: BaseUrluser + "/booksubonlydata",
        data: {
          id: messages[currIdx]?._id,
          nu: "1",
          count: count,
          bookcount: bookcount,
        },
      });

      if (res.data && res.data.status == true) {
        setVyu(1);
        setBMState({
          ...BMState,
          selectedMessage: res.data?.data || {},
        });
      }
    }
  };

  const handleViewChange = (e) => {
    setActive(e);
    localStorage.setItem("activeView", e);
    setBMState({
      ...BMState,
      activeView: e,
    });
  };

  // books: res.data?.data || [],
  //         messages: res.data?.messages || [],
  //         selectedBook: res.data?.data[0] || {},
  //         selectedChapter: res.data?.data[0]?.books[0] || {},
  //         selectedMessage: res.data?.messages[0] || {},

  async function fetchDatass() {
    localStorage.setItem("currentbookidx", 0);
    console.log("sdvcsv 1");
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubcatt",
      data: {
        id: bibleid,
        count: count,
      },
    });

    if (res.data.status == true) {
      setAlldata(res.data);
      console.log(res.data.book[0], "resres");
      setVyu(0);

      const resss = await axios({
        method: "post",
        url: BaseUrluser + "/booksubcatt",
        data: {
          id: messid,
        },
      });

      if (resss.data.status == true) {
        if (res.data?.subcat.length === 0) {
          setIdd(res.data?.booksub[0]?._id);
          setSels(1);
          setBMState({
            ...BMState,
            books: res.data?.booksub || [],
            selectedBook: res.data?.booksub[0] || {},
            selectedChapter: res.data?.book[0] || {},
            selectedMessage: resss.data?.book[0] || {},
            messages: resss.data?.booksub || [],
          });
        } else {
          console.log(res.data?.subcat, "res.data?.subcat sdvcsv 1");
          setDe(res.data?.subcat);
          setSels(0);
          setSel(res.data?.subcat[0]._id);
          setBMState({
            ...BMState,
            books: res.data?.subcat || [],
            selectedBook: res.data?.subcat[0] || {},
            selectedChapter: res.data?.book[0] || {},
            selectedMessage: resss.data?.book[0] || {},
            messages: resss.data?.booksub || [],
          });
        }
      }
    }
  }

  let nextcat = async (gg) => {
    console.log("sdvcsv 4");
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubcatt",
      data: {
        id: gg,
        count: count,
      },
    });

    console.log(res.data.book[0], "resres");

    if (res.data && res.data.status == true) {
      setVyu(1);
      if (res.data?.subcat.length === 0) {
        setSels(1);
        setBMState({
          ...BMState,
          books: res.data?.booksub || [],
          selectedBook: res.data?.booksub[0] || {},
          selectedChapter: res.data?.book[0] || {},
        });
      } else {
        setDe(res.data?.subcat);
        setSels(0);
        setSel(res.data?.subcat[0]._id);
        setBMState({
          ...BMState,
          books: res.data?.subcat || [],
          selectedBook: res.data?.subcat[0] || {},
          selectedChapter: res.data?.book[0] || {},
        });
      }
    }
  };

  let nextcats = async (gg) => {
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubonlydata",
      data: {
        id: gg,
        nu: "1",
        count: count,
        bookcount: bookcount,
      },
    });

    if (res.data && res.data.status == true) {
      setIdd(res.data?.data?._id);
      setVyu(1);
      setBMState({
        ...BMState,
        selectedChapter: res.data?.data || {},
      });
    }
  };

  let nextcatss = async (gg) => {
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubonlydata",
      data: {
        id: gg,
        nu: "1",
        count: count,
        bookcount: bookcount,
      },
    });

    if (res.data && res.data.status == true) {
      setVyu(1);
      setBMState({
        ...BMState,
        selectedMessage: res.data?.data || {},
      });
    }
  };

  function searchBookTitle(data) {
    // if ( sels === 0 ) {
    //   console.log('worked')
    //   if (data === '' || data === undefined ){
    //     setBibleState({
    //       ...BibleState,
    //       books: alldata?.subcat || []
    //     });
    //     return
    //   }
    //   const filteredData = alldata?.subcat?.filter((item) =>
    //     item.subcatname.includes(data)
    //   );
    //   // Update the state with the filtered results
    //   // setAlldata(filteredData);
    //   setBibleState({
    //     ...BibleState,
    //     books: filteredData || []
    //   });
    // }else{
    //   if (data === '' || data === undefined ){
    //     // setBookcatdata(fulldata.booksub);
    //     setBibleState({
    //       ...BibleState,
    //       books: alldata?.booksub || []
    //     });
    //     return
    //   }
    //   console.log(data , 'datadata')
    //   // const searchText = 'இயேசு'; // The bookTitle you want to search for
    //   // Filter the bookcatdata array to find the matching entries
    //   const filteredData = alldata?.booksub.filter((item) =>
    //     item.bookTitle.includes(data)
    //   );
    //   setBibleState({
    //     ...BibleState,
    //     books: filteredData || []
    //   });
    //   // Update the state with the filtered results
    //   // setBookcatdata(filteredData);
    // }
  }

  return (
    <>
      <div className="mt-[12px] h-[calc(100vh-206px)] overflow-y-scroll hide-scroll">
        {/* Categories */}

        <div className="flex flex-col">
          <div className="flex justify-between items-center px-4 pb-1">
            <IconButton
              disabled={vyu !== 1}
              onClick={() => fetchDatass()}
              className="rounded-full bg-white w-[40px]"
            >
              <ArrowBack />
            </IconButton>
            <h3 className="text-white font-bold text-sm px-4">
              Total :{" "}
              {activeView == "Messages" ? messages?.length : books?.length}
            </h3>
          </div>

          <div className="flex gap-2 mb-2 px-2">
            <div
              className={`border-[2px] border-solid p-1 font-bold w-full text-xl cursor-pointer flex justify-center items-center bg-[#F6F6F6] rounded-lg ${
                activeView === "Bible"
                  ? ""
                  : "bg-maincolor border-white text-white"
              }`}
              onClick={() => {
                handleViewChange("Bible");
              }}
            >
              Bible
            </div>

            <div
              className={`border-[2px] border-solid p-1 font-bold w-full text-xl cursor-pointer flex justify-center items-center bg-[#F6F6F6] rounded-lg ${
                activeView === "Messages"
                  ? ""
                  : "bg-maincolor border-white text-white"
              }`}
              onClick={() => {
                handleViewChange("Messages");
              }}
            >
              Messages
            </div>
          </div>
        </div>

        {activeView === "Bible" ? (
          sels === 0 ? (
            <>
              {books?.map((data, key) => {
                return (
                  <>
                    <p
                      key={key}
                      style={{
                        fontSize: sliderValue,
                      }}
                      className={`cursor-pointer break-words w-full px-2 mb-0 py-2 ${
                        sel == data?._id
                          ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]"
                          : "bg-[rgba(65, 0, 65, 1)] text-[#fff] border-[1px] border-dashed border-white border-t-0 border-x-0"
                      } w-full`}
                      onClick={() => {
                        nextcat(data?._id);
                        setSel(data?._id);
                        setBMState({
                          ...BMState,
                          selectedBook: data,
                        });
                      }}
                    >
                      {data?.subcatname?.replace(/\.(txt|doc)/gi, "")}{" "}
                      {data?.modified ? "(" + data?.count + ")" : "0"}
                    </p>
                  </>
                );
              })}
            </>
          ) : (
            books?.map((data, key) => {
              return (
                <p
                  key={key}
                  style={{
                    fontSize: sliderValue,
                  }}
                  className={`cursor-pointer break-words w-full px-2 mb-0 py-2 ${
                    iddd == data?._id
                      ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]"
                      : "bg-[rgba(65, 0, 65, 1)] text-[#fff] border-[1px] border-dashed border-white border-t-0 border-x-0"
                  } w-full`}
                  onClick={() => {
                    nextcats(data._id);
                    setSel(data?._id);
                    setBMState({
                      ...BMState,
                      selectedBook: data,
                    });
                  }}
                >
                  {data?.bookTitle?.replace(/\.(txt|doc)/gi, "")}
                  {/* "hello" */}
                </p>
              );
            })
          )
        ) : (
          <></>
        )}

        {/* {OPTIONS[sw] === "BM" &&
      activeView === "Bible" &&
      selectedBook !== null ? (
        <div className="mb-4">
          {console.log(activeView, OPTIONS[sw], selectedChapter)}
          {selectedBook &&
            selectedBook?.books &&
            selectedBook?.books?.map((data, key) => {
              return (
                <div
                key={key}
                  style={{
                    borderRadius: 4,
                    border: "2px solid rgba(224, 0, 161, 1)",
                    marginTop: 3,
                    fontSize : sliderValue
                  }}
                  className={`cursor-pointer w-full ${
                    (selectedChapter?._id !== data?._id?._id) !== data?._id
                      ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]  "
                      : "bg-[rgba(65, 0, 65, 1)] text-[#fff]"
                  } text-[14px] p-3 font-[Anek Tamil]  font-bold w-full  `}
 
                  onClick={() => {
                    setBMState({
                      ...BMState,
                      selectedChapter: data,
                    });
                  }}
                >
                  {data?.realbook?.replace(/\.(txt|doc)/gi, "")}
                </div>
              );
            })}
        </div>
      ) : (
        <></>
      )} */}

        {activeView === "Messages" ? (
          <div className="mb-4">
            {messages &&
              messages.length > 0 &&
              messages?.map((data, key) => {
                return (
                  <div
                    key={key}
                    style={{
                      fontSize: sliderValue,
                    }}
                    className={`cursor-pointer break-words w-full px-2 mb-0 py-2 ${
                      iddd == data?._id
                        ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]"
                        : "bg-[rgba(65, 0, 65, 1)] text-[#fff] border-[1px] border-dashed border-white border-t-0 border-x-0"
                    } w-full`}
                    onClick={() => {
                      nextcatss(data._id);
                    }}
                  >
                    {data?.bookTitle?.replace(/\.(txt|doc)/gi, "")}
                  </div>
                );
              })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

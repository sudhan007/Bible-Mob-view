import { Button, IconButton } from "@mui/material";
import { BaseDashboardContext } from "../Context/BaseContext";
import { useEffect, useState, useRef } from "react";
import { _axios } from "../../../../lib/axios";
import { BaseUrluser } from "../../../../components/config/dev";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBack, SkipPreviousOutlined } from "@mui/icons-material";

export function BibleViewSidebar({ ids, subClickbook }) {
  const { BibleState, setBibleState, BMState } = BaseDashboardContext();

  const { books, selectedBook, selectedChapter, allDataofBible, fetnext } =
    BibleState;
  const [select, setSelect] = useState("bible");
  const [title, setTitle] = useState();
  const { OPTIONS, sw, sliderValue, next } = BMState;
  const [count, setCount] = useState(1);
  const [bookcount, setBookCount] = useState(1);
  const [sel, setSel] = useState("");
  const [sels, setSels] = useState(0);
  const [vyu, setVyu] = useState(0);
  const { id } = useParams();
  const [de, setDe] = useState([]);
  const [alldata, setAlldata] = useState([]);
  const [currBookAd, setcurrBookAd] = useState({});

  const [iddd, setIddd] = useState("");

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetchDatassnext();
  }, [fetnext]);

  let hh = 1;
  const fetchDatas = () => {
    // Your API call logic here
    hh = hh + 1;
    console.log("Fetching more data from the API...");
    // scrollfetchDatass(hh)
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      scrollContainerRef.current;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchDatas();
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    scrollContainerRef.current.addEventListener("scroll", handleScroll);
    localStorage.setItem("currentbookidx", 0);
    // Clean up the event listener when the component unmounts
    // return () => {
    //   scrollContainerRef.current.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  useEffect(() => {
    fetchDatass();
  }, []);

  async function fetchDatass() {
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubcatt",
      data: {
        id: id,
        count: count,
      },
    });

    if (res.data && res.data.status == true) {
      setAlldata(res.data);
      setVyu(0);
      if (res.data?.subcat.length === 0) {
        setSels(1);
        localStorage.setItem("currentbookidx", 0);
        setIddd(res.data?.booksub[0]?._id);
        setBibleState({
          ...BibleState,
          books: res.data?.booksub || [],
          selectedBook: res.data?.booksub[0] || {},
          selectedChapter: res.data?.book[0] || {},
          totalBooks: res.data?.book || [],
          selectedBookAd: res.data?.newname[0],
        });
      } else {
        setDe(res.data?.subcat);
        setIddd(res.data?.subcat[0]?._id);
        setSels(0);
        localStorage.setItem("currentbookidx", 0);

        setSel(res.data?.subcat[0]?._id);
        setBibleState({
          ...BibleState,
          books: res.data?.subcat || [],
          selectedBook: res.data?.subcat[0] || {},
          selectedChapter: res.data?.book[0] || {},
          totalBooks: res.data?.book || [],
          selectedBookAd: res.data?.newname[0],
        });
      }
    }
  }

  async function fetchDatassnext() {
    let hh = +localStorage.getItem("currentbookidx");

    if (!books[hh]) return;
    if (sels === 0) {
      const res = await axios({
        method: "post",
        url: BaseUrluser + "/booksubcatt",
        data: {
          id: books[hh]?._id,
          count: count,
        },
      });

      if (res.data && res.data.status == true) {
        setAlldata(res.data);
        setVyu(0);
        if (res.data?.subcat.length === 0) {
          setSels(1);
          setIddd(res.data?.booksub[hh]?._id);
          localStorage.setItem("currentbookidx", 0);
          setSel(res.data?.booksub[hh]?._id);
          setBibleState({
            ...BibleState,
            books: res.data?.booksub || [],
            selectedBook: res.data?.booksub[0] || {},
            selectedChapter: res.data?.book[0] || {},
            totalBooks: res.data?.book || [],
            selectedBookAd: res.data?.newname[0],
          });
        } else {
          setDe(res.data?.subcat);
          setSels(0);
          setIddd(res.data?.subcat[hh]?._id);
          localStorage.setItem("currentbookidx", 0);
          setSel(res.data?.subcat[hh]?._id);
          setBibleState({
            ...BibleState,
            books: res.data?.subcat || [],
            selectedBook: res.data?.subcat[0] || {},
            selectedChapter: res.data?.book[0] || {},
            totalBooks: res.data?.book || [],
            selectedBookAd: res.data?.newname[0],
          });
        }
      }
    } else {
      const res = await axios({
        method: "post",
        url: BaseUrluser + "/booksubonlydata",
        data: {
          id: books[hh]?._id,
          nu: "1",
          count: count,
          bookcount: bookcount,
        },
      });

      if (res.data && res.data.status == true) {
        setIddd(res.data?.data?._id);
        setAlldata(res.data);
        setVyu(1);
        setBibleState({
          ...BibleState,
          selectedChapter: res.data?.data || {},
        });
      }
    }
  }

  async function scrollfetchDatass(count) {
    console.log("sdvcsv 2");
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubcatt",
      data: {
        id: id,
        count: count,
      },
    });

    console.log(res.data?.subcat, "resres", de);

    if (res.data && res.data.status == true) {
      setAlldata(res.data);
      setVyu(0);
      if (res.data?.subcat.length === 0) {
        setSels(1);
      } else {
        setSels(0);
        setDe(res.data?.subcat);
      }
    }
  }

  async function fetchData() {
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubcatt",
      data: {
        id: id,
        count: 1,
        bookcount: 1,
      },
    });

    if (res.data && res.data.status == true) {
      setAlldata(res.data);
      setVyu(0);
      if (res.data?.subcat.length === 0) {
        setIddd(res.data?.booksub[0]?._id);
        setSels(1);
        setBibleState({
          ...BibleState,
          books: res.data?.booksub || [],
          selectedBook: res.data?.booksub[0] || {},
          selectedChapter: res.data?.book[0] || {},
          selectedBookAd: res.data?.newname[0],
        });
      } else {
        setSels(0);
        setIddd(res.data?.subcat[0]?._id);
        setSel(res.data?.subcat[0]?._id);
        setDe(res.data?.subcat);
        setBibleState({
          ...BibleState,
          books: res.data?.subcat || [],
          selectedBook: res.data?.subcat[0] || {},
          selectedChapter: res.data?.book[0] || {},
          selectedBookAd: res.data?.newname[0],
        });
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

    if (res.data && res.data.status == true) {
      setAlldata(res.data);
      setVyu(1);
      if (res.data?.subcat.length === 0) {
        setIddd(res.data?.booksub[0]?._id);
        setSels(1);
        setBibleState({
          ...BibleState,
          books: res.data?.booksub || [],
          selectedBook: res.data?.booksub[0] || {},
          selectedChapter: res.data?.book[0] || {},
          selectedBookAd: res.data?.newname[0],
        });
      } else {
        setIddd(res.data?.subcat[0]?._id);
        setDe(res.data?.subcat);
        setSels(0);
        setSel(res.data?.subcat[0]?._id);
        setBibleState({
          ...BibleState,
          books: res.data?.subcat || [],
          selectedBook: res.data?.subcat[0] || {},
          selectedChapter: res.data?.book[0] || {},
          selectedBookAd: res.data?.newname[0],
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
      setIddd(res.data?.data?._id);
      setAlldata(res.data);
      setVyu(1);
      setBibleState({
        ...BibleState,
        selectedChapter: res.data?.data || {},
      });
    }
  };

  let chhh = () => {
    console.log(books, "booksbooksbooks");
  };

  function searchBookTitle(data) {
    if (sels === 0) {
      console.log("worked");
      if (data === "" || data === undefined) {
        setBibleState({
          ...BibleState,
          books: alldata?.subcat || [],
        });
        return;
      }

      const filteredData = alldata?.subcat?.filter((item) =>
        item.subcatname.includes(data)
      );

      // Update the state with the filtered results
      // setAlldata(filteredData);
      setBibleState({
        ...BibleState,
        books: filteredData || [],
      });
    } else {
      if (data === "" || data === undefined) {
        // setBookcatdata(fulldata.booksub);
        setBibleState({
          ...BibleState,
          books: alldata?.booksub || [],
        });
        return;
      }
      console.log(data, "datadata");
      // const searchText = 'இயேசு'; // The bookTitle you want to search for

      // Filter the bookcatdata array to find the matching entries
      const filteredData = alldata?.booksub.filter((item) =>
        item.bookTitle.includes(data)
      );

      setBibleState({
        ...BibleState,
        books: filteredData || [],
      });

      // Update the state with the filtered results
      // setBookcatdata(filteredData);
    }
  }

  return (
    <>
      <div>
        {select === "search" ? (
          <></>
        ) : (
          <div className="flex justify-around items-center">
            <IconButton
              disabled={vyu !== 1}
              onClick={() => fetchData()}
              className="rounded-full bg-white"
            >
              <ArrowBack />
            </IconButton>
            <div
              style={{
                padding: 10,
                backgroundColor: "#b5b5b5",
                borderRadius: 4,
                border: "2px solid white",
              }}
              className="d-flex mx-2"
            >
              <SearchIcon style={{ color: "#fff" }} />
              <input
                onInput={(e) => {
                  searchBookTitle(e.target.value);
                }}
                placeholder="search"
                style={{
                  backgroundColor: "#b5b5b5",
                  border: "unset",
                  width: "100%",
                  color: "#fff",
                }}
                className="sdcsdfcsd font-bold"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
        )}
      </div>

      <h3 className="text-white font-bold text-sm px-4 py-2">
        Total : {books?.length || 0}
      </h3>

      <div
        ref={scrollContainerRef}
        className="mt-[12px] h-[calc(100vh-206px)] overflow-y-scroll hide-scroll pr-0"
      >
        <div className="mb-2">
          {sels === 0
            ? books?.map((data, key) => {
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
                      nextcat(data?._id);
                      setSel(data?._id);
                      setBibleState({
                        ...BibleState,
                        selectedBook: data,
                      });
                    }}
                  >
                    {data?.subcatname?.replace(/\.(txt|doc)/gi, "")}{" "}
                    {data?.modified ? "(" + data?.count + ")" : "0"}
                    {/* "hello" */}
                  </p>
                );
              })
            : books?.map((data, key) => {
                return (
                  <p
                    key={key}
                    style={{
                      fontSize: sliderValue,
                      marginBottom: "4px !important",
                    }}
                    className={`cursor-pointer break-words w-full px-2 mb-0 py-2 ${
                      iddd == data?._id
                        ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]"
                        : "bg-[rgba(65, 0, 65, 1)] text-[#fff] border-[1px] border-dashed border-white border-t-0 border-x-0"
                    } w-full`}
                    onClick={() => {
                      nextcats(data?._id);
                      setSel(data?._id);
                      localStorage.setItem("currentbookidx", key);

                      setBibleState({
                        ...BibleState,
                        selectedBook: data,
                      });
                    }}
                  >
                    {data?.bookTitle?.replace(/\.(txt|doc)/gi, "")}
                    {/* "hello" */}
                  </p>
                );
              })}
        </div>

        {/* <div  style={{ paddingBottom :  20 }} className="">
          {selectedBook &&
            selectedBook?.books &&
            selectedBook?.books?.map((data, key) => {
              return (
                <div
                  key={key}
                  style={{ borderRadius : 4 , border : '2px solid rgba(224, 0, 161, 1)'  , marginTop : 3 , fontSize : sliderValue}}
                  className={`cursor-pointer w-full ${
                    selectedChapter?._id !== data?._id
                      ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]  "
                      : "bg-[rgba(65, 0, 65, 1)] text-[#fff]"
                  } text-[14px] p-3 font-[Anek Tamil]  font-bold w-full `}
                  onClick={() => {
                    setBibleState({
                      ...BibleState,
                      selectedChapter: data,
                    });

                    console.log(selectedChapter);
                  }}
                >
                  {data?.realbook?.replace(/\.(txt|doc)/gi, "")}
                </div>
              );
            })}
        </div>  */}
      </div>
    </>
  );
}

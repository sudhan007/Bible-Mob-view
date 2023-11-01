import { Button } from "@mui/material";
import { BaseDashboardContext } from "../Context/BaseContext";
import { useEffect } from "react";
import { _axios } from "../../../../lib/axios";
import axios from "axios";
import { BaseUrluser } from "../../../../components/config/dev";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export function MessageViewSidebar({}) {
  const { BibleState, setBibleState, BMState } = BaseDashboardContext();

  const { books, selectedBook, selectedChapter, fetnext } = BibleState;
  const { OPTIONS, sw, sliderValue } = BMState;
  const [sel, setSel] = useState("");
  const [sels, setSels] = useState(0);
  const [vyu, setVyu] = useState(0);
  const [select, setSelect] = useState("bible");
  const { id } = useParams();
  const [alldata, setAlldata] = useState([]);
  const [iddd, setIddd] = useState("");
  const [de, setDe] = useState([]);
  const [count, setCount] = useState(1);
  const [bookcount, setBookCount] = useState(1);

  useEffect(() => {
    fetchDatassnext();
  }, [fetnext]);

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

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    localStorage.setItem("currentbookidx", 0);
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubcatt",
      data: {
        id: id,
      },
    });

    console.log(res.data.book[0], "resres");

    if (res.data && res.data.status == true) {
      setVyu(0);
      setAlldata(res.data);
      if (res.data?.subcat.length === 0) {
        setIddd(res.data?.booksub[0]?._id);
        setSels(1);
        setBibleState({
          ...BibleState,
          books: res.data?.booksub || [],
          selectedBook: res.data?.booksub[0] || {},
          selectedChapter: res.data?.book[0] || {},
        });
      } else {
        setSels(0);
        setSel(res.data?.subcat[0]._id);
        setIddd(res.data?.subcat[0]?._id);
        setBibleState({
          ...BibleState,
          books: res.data?.subcat || [],
          selectedBook: res.data?.subcat[0] || {},
          selectedChapter: res.data?.book[0] || {},
        });
      }
    }
  }

  let nextcat = async (gg) => {
    const res = await axios({
      method: "post",
      url: BaseUrluser + "/booksubcatt",
      data: {
        id: gg,
      },
    });

    console.log(res.data.book[0], "resres");

    if (res.data && res.data.status == true) {
      setAlldata(res.data);
      setVyu(1);
      if (res.data?.subcat.length === 0) {
        setSels(1);
        setIddd(res.data?.booksub[0]?._id);
        setSel(res.data?.booksub[0]?._id);
        setBibleState({
          ...BibleState,
          books: res.data?.booksub || [],
          selectedBook: res.data?.booksub[0] || {},
          selectedChapter: res.data?.book[0] || {},
        });
      } else {
        setSels(0);
        setSel(res.data?.subcat[0]._id);
        setIddd(res.data?.subcat[0]?._id);
        setBibleState({
          ...BibleState,
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
      },
    });

    if (res.data && res.data.status == true) {
      setAlldata(res.data);
      setSel(res.data?.data?._id);
      setVyu(1);
      setBibleState({
        ...BibleState,
        selectedChapter: res.data?.data || {},
      });
    }
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

  function makeNamePrettier(booktitle) {
    if (!booktitle) return "";

    booktitle = booktitle.replace(".txt", "");

    return booktitle;
  }

  return (
    <>
      <div style={{ paddingTop: 2 }}>
        {select === "search" ? (
          <></>
        ) : (
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
              className="sdcsdfcsd"
            />
          </div>
        )}
      </div>
      <div className="mt-[12px] h-[calc(100vh-206px)] overflow-y-scroll hide-scroll pr-2">
        {/* {vyu === 1 && (
        <p
          style={{ borderRadius: 2, textAlign: "center" }}
          className="bg-white p-2 text-black font-bold w-[100px] cursor-pointer"
          onClick={() => {
            fetchData();
          }}
        >
          Back
        </p>
      )} */}
        <h3 className="text-white font-bold text-sm px-4 py-2">
          Total : {books?.length || 0}
        </h3>

        <div className="mb-4">
          {sels === 0
            ? books?.map((data, key) => {
                return (
                  <p
                    key={key}
                    style={{
                      fontSize: sliderValue,
                    }}
                    className={`cursor-pointer font-semibold break-words w-full px-2 mb-0 py-2 ${
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
                    {makeNamePrettier(data?.subcatname)}
                    {/* "hello" */}
                  </p>
                );
              })
            : books?.map((data, key) => {
                return (
                  <p
                    key={key}
                    style={{
                      borderRadius: 4,
                      marginTop: 3,
                      fontSize: sliderValue - 3,
                    }}
                    className={`cursor-pointer font-semibold break-words w-full px-2 mb-0 py-2 ${
                      iddd == data?._id
                        ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]"
                        : "bg-[rgba(65, 0, 65, 1)] text-[#fff] border-[1px] border-dashed border-white border-t-0 border-x-0"
                    } w-full`}
                    onClick={() => {
                      nextcats(data._id);
                      setSel(data?._id);
                      setBibleState({
                        ...BibleState,
                        selectedBook: data,
                      });
                    }}
                  >
                    {makeNamePrettier(data?.realbook)}
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

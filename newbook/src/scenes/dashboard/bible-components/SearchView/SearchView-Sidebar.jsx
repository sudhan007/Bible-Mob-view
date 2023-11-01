import { Button } from "@mui/material";
import { useState } from "react";
import { BaseDashboardContext } from "../Context/BaseContext";

export function SearchView({
  searchKey,
  setSearchKey,
  books,
  handleBibleSearch,
  totalCount,
  hei,
  searchResults,
  ids,
  messageSearchResults,
  subClickbook,
  handleResultsChange,
  activeSearchView,
  setActiveSearchView,
}) {
  let total = 0;

  const { BMState, setBMState } = BaseDashboardContext();
  const { sliderValue, selectedChapter, selectedBook, selectedMessage } =BMState;

  for (let book of messageSearchResults) {
    total += book.verses.length;
  }

  let [id, setId] = useState();

  const handleViewChange = (e) => {
    if (!searchKey) return;
    if (
      !searchResults ||
      searchResults.length === 0 ||
      !messageSearchResults ||
      messageSearchResults.length === 0
    )
      return;
    setActiveSearchView(e);
  };

  return (
    <div className="mt-[12px] h-[calc(100vh-160px)] overflow-y-scroll hide-scroll pr-2">
      <div className="flex items-center mb-2 gap-2">
        <div className="relative flex-grow">
          <input
            className="w-full py-2 px-8 pr-12 rounded-lg bg-white text-black placeholder-white focus:outline-none text-[15px]"
            type="text"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Search"
          />
          <i className="fa fa-search text-black absolute top-1/2 left-4 transform -translate-y-1/2"></i>
        </div>
        <Button
          onClick={handleBibleSearch}
          className="bg-white p-2 text-black font-bold"
        >
          Search
        </Button>
      </div>

      {/* Categories */}

      <div className="flex gap-2">
        <div
          className={`border-[2px] border-solid p-1 font-bold w-full text-xl cursor-pointer flex justify-center items-center bg-[#F6F6F6] rounded-lg ${
            activeSearchView === "Bible"
              ? ""
              : "bg-contrastPurple border-white text-white"
          }`}
          onClick={() => handleViewChange("Bible")}
        >
          Bible
        </div>

        <div
          className={`border-[2px] border-solid p-1 font-bold w-full text-xl cursor-pointer flex justify-center items-center bg-[#F6F6F6] rounded-lg ${
            activeSearchView === "Messages"
              ? ""
              : "bg-contrastPurple border-white text-white"
          }`}
          onClick={() => handleViewChange("Messages")}
        >
          Messages
        </div>
      </div>

      {/* bottom view */}

      <div
        className={
          "border-[1px] border-[#E000A1] p-2 mt-2 font-bold w-full  bg-[#F6F6F6] mb-2 rounded-lg"
        }
      >
        Total Results: {activeSearchView === "Bible" ? totalCount : total}
      </div>

      {activeSearchView === "Bible" ? (
        <div
          className="container-xxl"
          style={{
            height: hei - 190,
            overflow: "auto",
            overflowX: "hidden",
          }}
        >
          {searchResults &&
            searchResults?.map((data, key) => {
              return (
                <div
                  key={key}
                  style={{
                    borderRadius: 4,
                    border: "2px solid rgba(224, 0, 161, 1)",
                    marginTop: 7,
                    fontSize : sliderValue
                  }}
                  className={`cursor-pointer w-full ${
                    id != data.bookName
                      ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]  "
                      : "bg-[rgba(65, 0, 65, 1)] text-[#fff]"
                  } text-[14px] p-3 font-[Anek Tamil]  font-bold w-full   d-flex justify-content-between`}
                  onClick={() => {
                    console.log(data, "datadatadata");
                    handleResultsChange(data, "Bible");
                    setId(data.bookName);
                  }}
                >
                  <div>{data?.bookName?.replace(/\.(txt|doc)/gi, "")}</div>
                  <div
                    className=" shadow-lg p-2  "
                    style={{
                      width: 60,
                      height: 40,
                      backgroundColor: "rgba(52, 10, 50, 1)",
                      border: "1px solid #fff",
                      borderRadius: 4,
                      textAlign: "center",
                      marginTop: -20,
                    }}
                  >
                    <p style={{ color: "#fff" }}>{data?.total_verses || 0}</p>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div
          className="container-xxl"
          style={{
            height: hei - 190,
            overflow: "auto",
            overflowX: "hidden",
          }}
        >
          {messageSearchResults &&
            messageSearchResults?.map((data, key) => {
              return (
                <div
                key={key}
                style={{
                  borderRadius: 4,
                  border: "2px solid rgba(224, 0, 161, 1)",
                  marginTop: 7,
                  fontSize : sliderValue
                }}
                className={`cursor-pointer w-full ${
                  id != data._id
                    ? "bg-[#fff] text-[rgba(65, 0, 65, 1)]  "
                    : "bg-[rgba(65, 0, 65, 1)] text-[#fff]"
                } text-[14px] p-3 font-[Anek Tamil]  font-bold w-full  text-${sliderValue} d-flex justify-content-between`}
                  onClick={() => {
                    handleResultsChange(data, "Messages");
                    setId(data._id);
                  }}
                >
                  <div>{data?.bookTitle?.replace(/\.(txt|doc)/gi, "")}</div>
                  <div
                    className=" shadow-lg p-2  "
                    style={{
                      width: 60,
                      height: 40,
                      backgroundColor: "rgba(52, 10, 50, 1)",
                      border: "1px solid #fff",
                      borderRadius: 4,
                      textAlign: "center",
                      marginTop: -20,
                    }}
                  >
                  <p style={{ color: "#fff" }}>
                    {data?.count || 0}
                  </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

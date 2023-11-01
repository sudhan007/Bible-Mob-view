import React, { useEffect, useState } from "react";
import image50 from "../../../image/Vector(1).png";
import image49 from "../../../image/Vector(2).png";
import image48 from "../../../image/Vector(3).png";
import image47 from "../../../image/Button.png";
import image46 from "../../../image/Vector(4).png";
import image59 from "../../../image/Group47.png";
import image69 from "../../../image/Group 90.png";

import { BaseDashboardContext } from "./Context/BaseContext";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";
import { bibleid, messid } from "../../../components/config/dev";

import w1 from "../../../image/wb1.png";
import w2 from "../../../image/ws2.png";
import w3 from "../../../image/w3.png";

export function Topbar({ setSwitch, start, sw }) {
  const { BMState, setBMState } = BaseDashboardContext();
  const [select, setSelect] = useState("bible");
  const [title, setTitle] = useState();
  let navigate = useNavigate();

  let { newid } = useParams();

  let arr = ["", w3, w1, "", image69, w2];

  let check = () => {
    console.log(sw, "fdw");
  };

  return (
    <>
      <div className="flex justify-between p-2">
        {[image50, image49, image59, image48, image47, image46].map(
          (item, index) => (
            <div
              onClick={() => {
                check();
                setSwitch(String(index + 1));
                start(index + 1);
                setSelect(arr[index]);
                setBMState({
                  ...BMState,
                  sw: index + 1,
                });
                if (index === 0) {
                  navigate("/");
                } else if (index === 3) {
                  navigate("/cod/questiontypes");
                } else if (index === 1) {
                  navigate(`/bible/${bibleid}/Bible`);
                } else if (index === 2) {
                  navigate(`/bible/${messid}/Messages`);
                }
              }}
              style={{ padding: 11 }}
              className={` object-scale-down cursor-pointer rounded-lg ${
                sw === String(index + 1)
                  ? "border-solid border-[1px] border-white filter-grayscale"
                  : "bg-white"
              }`}
            >
              <img
                style={{ width: 28, height: 28 }}
                src={sw === String(index + 1) ? arr[sw - 1] : item}
                key={index}
              />
            </div>
          )
        )}
      </div>
      {/* <div style={{ paddingTop: 2 }}>
        {select === "search" ? (
          <></>
        ) : (
          <div
            style={{
              padding: 10,
              backgroundColor: "rgba(52, 9, 49, 1)",
              marginTop: 10,
              borderRadius: 4,
            }}
            className="d-flex  "
          >
            <SearchIcon style={{ color: "#fff" }} />
            <input
              placeholder="search"
              style={{
                backgroundColor: "unset",
                border: "unset",
                width: "100%",
                color: "#fff",
              }}
              className="sdcsdfcsd"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        )}
      </div> */}
    </>
  );
}

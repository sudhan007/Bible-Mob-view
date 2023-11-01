import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _axios } from "../lib/axios";

export function Navebar({}) {
  let navigate = useNavigate();
  const [allData, setAllData] = useState([]);

  const links = [
    {
      name: "Home",
      link: "/",
    },
  ];

  const links2 = [
    {
      name: "About Us",
      link: "#",
    },
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Cod",
      link: "/cod/questiontypes",
    },
    {
      name: "Add Church",
      link: "/layout",
    },
  ];

  useEffect(() => {
    async function getAllData() {
      const res = await _axios.get("/user/allbookcat");

      if (res.data && res.data.status) {
        setAllData(res.data?.data || []);

        console.log(res.data);
      } else {
        setAllData({});
      }
    }

    getAllData();
    console.log("dada");
  }, []);

  return (
    <div>
      <nav className="bg-subContrastPurple flex justify-center items-center">
        <ul className="flex justify-center items-center   m-0">
          {links.map((link, index) => {
            return (
              <li
              style={{ padding : 15 }}
                className="font-roboto-slab text-[1rem] list-none text-white font-bold 
                 border-y-[0px] border-r-[0px] border-l-[1px] border-r-white border-solid"
                key={index}
              >
                <a
                  onClick={() => {
                    navigate(link.link);
                  }}
                  className="text-white"
                  href="#"
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {allData &&
            allData.length > 0 &&
            allData?.map((data, key) => {
              return (
                <li
                style={{ padding : 15 }}
                  key={key}
                  className="cursor-pointer font-roboto-slab text-[1rem] list-none text-white font-bold   border-y-[0px] border-r-[0px] border-l-[1px] border-r-white border-solid"
                >
                  <a
                    onClick={() => {
                      let name = data?.catname === "cod" ? "/cod" : "/bible";
                      navigate(name + "/" + data._id + "/" + data.catname);
                    }}
                    className="text-white"
                  >
                    {data?.catname}
                  </a>
                </li>
              );
            })}

          {links2.map((link, index) => {
            return (
              <li
              style={{ padding : 15 }}
                className="font-roboto-slab text-[1rem] list-none text-white font-bold  border-y-[0px] border-r-[0px] border-r-white border-l-[1px] border-solid"
                key={index}
              >
                <a
                  onClick={() => {
                    navigate(link.link);
                  }}
                  className="text-white"
                  href="#"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

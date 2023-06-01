import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  IoIosNotificationsOutline,
  IoIosInformationCircleOutline,
  IoMdSunny,
} from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import DarkModeContext from "../constants/darkModeContext";
import { SidebarContext } from "../constants/SidebarContextProvider";

const Search = () => {
  const [input, setInput] = useState("");
  const { theme, setTheme } = useContext(DarkModeContext);
  const { setActive } = useContext(SidebarContext);

  return (
    <div className="w-[22rem] md:w-full h-14 bg-white dark:bg-[#131c41] rounded-full flex justify-between items-center px-3 drop-shadow-xl">
      <div className="rounded-full w-full flex items-center px-3 py-2 dark:bg-[#0d1435] bg-gray-100">
        <AiOutlineSearch className="text-xl text-gray-500 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent ml-2 outline-none w-2/3"
        />
      </div>
      <div className="flex items-center">
        <RxHamburgerMenu
          onClick={() => setActive(true)}
          className="text-xl mx-1 hidden xl:block text-gray-500 cursor-pointer dark:text-white"
        />
        <IoIosNotificationsOutline className="text-xl mx-1 text-gray-500 cursor-pointer dark:text-white" />
        <IoIosInformationCircleOutline className="text-xl mx-1 text-gray-500 cursor-pointer dark:text-white" />

        <div className="text-xl mx-1 text-gray-500 cursor-pointer dark:text-white">
          {theme == "light" ? (
            <CiDark
              onClick={() => {
                localStorage.setItem("theme", "dark");
                setTheme(localStorage.getItem("theme"));
              }}
            />
          ) : (
            <IoMdSunny
              onClick={() => {
                localStorage.setItem("theme", "light");
                setTheme(localStorage.getItem("theme"));
              }}
            />
          )}
        </div>

        <div className="bg-blue-900 p-2 rounded-full w-10 h-10 text-white text-center cursor-pointer">
          AP
        </div>
      </div>
    </div>
  );
};

export default Search;
``;

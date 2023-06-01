import React from "react";
import Search from "./Search";

const Navbar = ({ title }) => {
  return (
    <div className="w-full sticky top-0 z-10 bg-blue-20 py-4">
      <div className="flex md:flex-col md:py-3 md:items-start items-center justify-between mx-4 xl:mx-8 md:mx-5 rounded-lg px-3 backdrop-blur-[200px] bg-red-20">
        <div>
          <p className=" dark:text-white">Pages / {title}</p>
          <p className="text-gray-800 text-[2rem] font-bold dark:text-white">
            {title}
          </p>
        </div>

        <Search />
      </div>
    </div>
  );
};

export default Navbar;

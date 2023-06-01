import React from "react";
import { BsSun } from "react-icons/bs";

const Third = () => {
  return (
    <div className="bg-white dark:bg-[#131c41] p-10 rounded-3xl flex items-center gap-5">
      <BsSun className="text-2xl text-slate-500 font-bold dark:text-white" />
      <input
        type="range"
        className="w-full h-2 accent-[#707eae] dark:accent-white cursor-pointer"
        min="0"
        max="100"
      />
    </div>
  );
};

export default Third;

import React from "react";
import { fourthData } from "./data";
import Info from "./Info";

const Fourth = () => {
  return (
    <div className="rounded-3xl bg-white dark:bg-[#131c41] p-5">
      <p className="dark:text-white">Your Transfers</p>
      {fourthData.map((item) => {
        return <Info key={item.id} {...item} />;
      })}
      <p className="text-right text-[#5C2FED] dark:text-white font-semibold cursor-pointer">
        View all
      </p>
    </div>
  );
};

export default Fourth;

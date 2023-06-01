import React from "react";
import Creator from "./Creator";
import { creatorData } from "../data";

const RightPlace = () => {
  return (
    <div className="basis-[35%] h-full bg-white dark:bg-[#131c41] rounded-3xl">
      <div className="flex justify-between shadow-[0px_5px_30px_10px_#edf2f7] dark:shadow-[0px_3px_10px_#21294c] rounded-3xl p-5">
        <p className="text-xl text-gray-800 font-semibold dark:text-white">
          Top Creators
        </p>
        <button className="text-[#422AFB] dark:bg-[#7043f6] dark:text-white bg-slate-100 font-semibold rounded-3xl px-4 py-2">
          See all
        </button>
      </div>

      <div className="p-5 flex justify-betwee text-xs text-gray-400 font-bold uppercase">
        <p className="basis-[60%]">Name</p>
        <p className="basis-[25%]">Artworks</p>
        <p className="basis-[15%]">Rating</p>
      </div>

      <div>
        {creatorData.map((item) => {
          return <Creator key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RightPlace;

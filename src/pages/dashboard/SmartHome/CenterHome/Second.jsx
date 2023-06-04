import { data } from "../data";
import React, { useState } from "react";
import { ImSun } from "react-icons/im";

const Second = () => {
  const [active, setActive] = useState([]);
  const handleClick = (id) => {
    if (!active.includes(id)) {
      setActive([...active, id]);
    } else {
      const data = active.filter((item) => item !== id);
      setActive(data);
    }
  };
  return (
    <div className="flex md:flex-col gap-5">
      <div className="rounded-3xl w-1/2 md:w-full h-[22rem] bg-white dark:bg-[#131c41] p-6">
        <p className="text-gray-800 dark:text-white text-xl font-semibold">
          Friday, 25 Jun
        </p>
        <p className="text-gray-400 font-semibold text-sm mt-1">
          New York, USA
        </p>
        <div className="bg-gradient-to-b from-[#f1f2f7] to-white dark:from-[#1b2347] p-5 rounded-3xl mt-5">
          <ImSun className="text-[3rem] text-[#422AFB] dark:text-white" />
          <p className="text-4xl text-gray-800 dark:text-white font-semibold mt-3">
            25<sup className="text-5xl">.</sup>C
          </p>
          <p className="font-semibold dark:text-white">Sunny</p>
          <button className="text-white text-md ml-auto flex items-end font-semibold bg-[#422AFB] dark:bg-[#7053f6] rounded-3xl py-2 px-5 mt-2">
            View more
          </button>
        </div>
      </div>

      <div className="rounded-3xl w-1/2 md:w-full h-[22rem] bg-white dark:bg-[#131c41] p-6">
        <p className="text-gray-800 dark:text-white text-xl font-semibold">
          General Controllers
        </p>
        <p className="text-gray-400 font-semibold text-sm mt-1">Dinner Room</p>

        <div className="grid grid-cols-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center mt-5"
              >
                <p
                  className={`w-16 h-16 rounded-full shadow-xl flex justify-center items-center text-2xl cursor-pointer ${
                    active.includes(item.id)
                      ? `text-gray-400 bg-gray-50 dark:bg-[#21294c]`
                      : `text-[#422AFB] dark:text-white`
                  }`}
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  {item.icon}
                </p>
                <p className="text-gray-400 text-sm mt-2">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Second;

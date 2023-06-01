import React from "react";

const CenterInterface = () => {
  return (
    <div className="bg-white dark:bg-[#131c41] w-1/2 md:w-full md:p-5 rounded-3xl p-14 flex flex-col justify-center items-center gap-10">
      <p className="text-[#1b2559] dark:text-white font-semibold text-lg">
        Welcome back, sir.
      </p>
      <div>
        <img
          src="https://horizon-ui.com/chakra-pro/static/media/Tesla.3f53331a28418b56e1c8.png"
          alt="car image"
        />
      </div>
      <p className="text-lg text-center text-slate-400">
        Your Model S is now in{" "}
        <span className="text-[#1b2559] dark:text-white font-semibold text-lg">
          Parking Mode
        </span>
      </p>

      <button className="text-white font-semibold w-full py-2 px-3 rounded-xl dark:bg-[#7053f6] bg-[#11047a]">
        Turn on Engine
      </button>

      <div className="flex gap-8 text-slate-400 text-xl items-center justify-center">
        <p>N</p>
        <p>R</p>
        <p className="text-5xl font-semibold text-[#1b2559] dark:text-white">
          P
        </p>
        <p>D</p>
        <p>M</p>
      </div>
    </div>
  );
};

export default CenterInterface;

import React from "react";

const RightNft = () => {
  return (
    <div className="w-[50%] lg:w-96 sm:w-auto lg:mx-auto h-full rounded-3x p-[5rem] 2xl:p-[2rem] xl:p-[4rem] lg:p-0 ">
      <p className="text-4xl text-gray-800 font-semibold dark:text-white">
        Color Abstractus
      </p>
      <div className="flex justify-between mt-2 mb-8">
        <div className="flex items-center mt-8">
          <img
            className="rounded-full w-14 h-14 md:w-10 md:h-10"
            src="https://horizon-ui.com/chakra-pro/static/media/avatarSimmmple.ab7bfac55f4a7cc9806a.png"
            alt=""
          />
          <div className="ml-3 text-lg font-semibold">
            <p className="text-gray-400">Creator</p>
            <p className="dark:text-white">Simmmple</p>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <img
            className="rounded-full w-14 h-14 md:w-10 md:h-10"
            src="https://w7.pngwing.com/pngs/476/552/png-transparent-dollar-sign-united-states-dollar-computer-icons-dollar.png"
            alt=""
          />
          <div className="ml-3 text-lg font-semibold">
            <p className="text-gray-400">Instant Price</p>
            <p className="dark:text-white">3.87 ETH</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#131c41] dark:border-[#131c41] rounded-2xl border-[1px] py-[4rem] xl:px-[2rem] flex justify-center items-center gap-3 flex-col">
        <p className="text-xl text-gray-800 dark:text-white font-semibold">
          Current Bid
        </p>
        <p className="text-6xl 2xl:text-5xl font-bold text-gray-800 dark:text-white">
          2.82 ETH
        </p>
        <p className="text-2xl text-slate-400 font-semibold">$10.827,84</p>
        <p className="text-xl text-gray-800 dark:text-white font-semibold mt-12">
          Auction ends in
        </p>
        <div className="flex gap-10 mt-5">
          <div>
            <p className="text-5xl text-gray-800 dark:text-white font-semibold">
              20
            </p>
            <p className="text-2xl text-slate-400 font-semibold">Hrs</p>
          </div>
          <div>
            <p className="text-5xl text-gray-800 dark:text-white font-semibold">
              37
            </p>
            <p className="text-2xl text-slate-400 font-semibold">Min</p>
          </div>
          <div>
            <p className="text-5xl text-gray-800 dark:text-white font-semibold">
              49
            </p>
            <p className="text-2xl text-slate-400 font-semibold">Secs</p>
          </div>
        </div>
      </div>

      <button className="bg-[#422afb] dark:bg-[#7053f6] rounded-2xl text-white w-full mt-8 py-3">
        Place a bid
      </button>
    </div>
  );
};

export default RightNft;

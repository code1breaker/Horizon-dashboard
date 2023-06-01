import React from "react";

const First = () => {
  return (
    <div className="rounded-3xl p-16 sm:p-8 bg-cover bg-[url('https://horizon-ui.com/chakra-pro/static/media/NftBanner1.ee560f9b2e6b11a3c3b6.png')]">
      <p className="text-white text-3xl md:text-2xl  sm:text-xl font-semibold">
        Discover, collect, and sell
      </p>
      <p className="text-white text-3xl md:text-2xl sm:text-xl font-semibold">
        extraordinary NFTs
      </p>
      <p className="text-slate-300 text-lg md:text-base sm:text-sm mt-4">
        Enter in this creative world. Discover now the
      </p>
      <p className="text-slate-300 text-lg md:text-base sm:text-sm">
        latest NFTs or start creating your own!
      </p>

      <div className="mt-10">
        <button className="bg-white sm:text-sm rounded-2xl py-2 px-6 sm:px-3">
          Discover now
        </button>
        <button className="text-white sm:text-sm rounded-2xl py-2 px-6 sm:px-3 ml-2 sm:ml-0">
          Watch video
        </button>
      </div>
    </div>
  );
};

export default First;

import React from "react";

const CenterNft = () => {
  return (
    <div className="w-[50%] lg:w-full flex flex-col gap-6">
      <div className="w-full">
        <img
          className="rounded-3xl w-full"
          src="https://horizon-ui.com/chakra-pro/static/media/NftLarge1.2222ef8b145450695b42.png"
          alt=""
        />
      </div>

      <div className="w-full rounded-3xl bg-white dark:bg-[#131c41] p-8">
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">
          Description
        </p>
        <p className="my-4 text-xl text-gray-400">
          Created by{" "}
          <span className="text-blue-600 dark:text-white font-semibold">
            simmmple.web
          </span>
        </p>
        <p className="text-lg text-[#1b2559] dark:text-white">
          The Abstractus® project is an online art show and the First Art NFTs
          on Ethereum, launched on May 9, 2017. Abstractus® features 28 unique
          series of cards from 7 different artists. Abstractus® are referenced
          with CryptoAbstractus® and Crypto in the original ERC-721 Non-Fungible
          Token Standard, and pre-dates them both. Join the Abstractus® Discord
          and check out theAbstractus® Docs to find out more.
        </p>
      </div>
    </div>
  );
};

export default CenterNft;

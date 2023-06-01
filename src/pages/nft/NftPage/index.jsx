import React from "react";
import Navbar from "../../../components/Navbar";
import CenterNft from "./CenterNft";
import { data } from "./data";
import Card from "../MarketPlace/CenterPlace/Card";
import RightNft from "./RightNft";

const NftPage = () => {
  return (
    <div className="w-[80%] xl:w-full">
      <Navbar title={"NFT Page"} />
      <div className="flex lg:flex-col m-6 mt-0 gap-6">
        <CenterNft />
        <RightNft />
      </div>
      <p className="m-6 text-2xl text-gray-800 dark:text-white font-semibold">
        More from this collection
      </p>

      <div className="flex lg:flex-wrap gap-5 m-6">
        {data.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default NftPage;

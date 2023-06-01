import React from "react";
import Navbar from "../../../components/Navbar";
import CenterPlace from "./CenterPlace";
import RightPlace from "./RightPlace";

const MarketPlace = () => {
  return (
    <div className="w-[80%] xl:w-full">
      <Navbar title={"MarketPlace"} />
      <div className="flex m-6 mt-0 gap-6 xl:flex-col">
        <CenterPlace />
        <RightPlace />
      </div>
    </div>
  );
};

export default MarketPlace;

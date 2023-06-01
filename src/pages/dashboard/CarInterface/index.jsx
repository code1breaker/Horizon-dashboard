import React from "react";
import CenterInterface from "./CenterInterface";
import RightInterface from "./RightInterface";
import Navbar from "../../../components/Navbar";
import Map from "../../../components/Map";

const CarInterface = () => {
  return (
    <div className="w-[80%] xl:w-full">
      <Navbar title={"Car Interface"} />

      <div className="flex m-6 mt-0 gap-6 md:flex-col">
        <CenterInterface />
        <RightInterface />
      </div>

      <div className="m-6 rounded-3xl h-[100vh] lg:h-[80vh] md:h-[70vh] bg-white dark:bg-[#131c41] p-6 relative">
        <Map />
      </div>
    </div>
  );
};

export default CarInterface;

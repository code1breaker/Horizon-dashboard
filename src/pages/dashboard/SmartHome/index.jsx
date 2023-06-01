import React from "react";
import Navbar from "../../../components/Navbar";
import CenterHome from "./CenterHome";
import RightHome from "./RightHome";

const SmartHome = () => {
  return (
    <div className="w-[80%] xl:w-full">
      <Navbar title={"Smart Home"} />

      <div className="flex m-6 mt-0 gap-6 lg:flex-col">
        <CenterHome />
        <RightHome />
      </div>
    </div>
  );
};

export default SmartHome;

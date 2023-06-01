import React from "react";
import Navbar from "../../../components/Navbar";
import CenterDashboard from "./CenterDashboard";
import RightDashboard from "./RightDashboard";

const MainDashboard = () => {
  return (
    <div className="w-[80%] xl:w-full">
      <Navbar title={"Main Dashboard"} />

      <div className="flex m-6 mt-0 gap-6 xl:flex-col xl:mx-8 md:mx-5">
        <CenterDashboard />
        <hr className="w-[1px] block bg-gray-300 h-auto xl:hidden" />
        <RightDashboard />
      </div>
    </div>
  );
};

export default MainDashboard;

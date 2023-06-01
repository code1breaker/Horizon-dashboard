import React from "react";
import Navbar from "../../../components/Navbar";
import StackColumn from "./StackColumn";
import Area from "./Area";
import Pie from "./Pie";

const Chart = () => {
  return (
    <div className="w-[80%] xl:w-full">
      <Navbar title={"Chart"} />

      <div className="flex lg:flex-co flex-wrap m-6 mt-0 gap-6">
        <StackColumn />
        <Area />
        <Pie />
      </div>
    </div>
  );
};

export default Chart;

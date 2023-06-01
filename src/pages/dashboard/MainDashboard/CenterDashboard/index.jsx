import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

const CenterDashboard = () => {
  return (
    <div className="w-[65%] xl:w-full flex flex-col gap-6">
      <First />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
};

export default CenterDashboard;

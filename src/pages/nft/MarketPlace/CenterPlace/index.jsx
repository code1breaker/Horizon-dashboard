import React from "react";
import First from "./First";
import Second from "./Second";

const CenterPlace = () => {
  return (
    <div className="w-[65%] xl:w-full flex flex-col gap-6">
      <First />
      <Second />
    </div>
  );
};

export default CenterPlace;

import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const RightInterface = () => {
  return (
    <div className="w-1/2 md:w-full flex flex-col gap-6">
      <First />
      <Second />
      <Third />
    </div>
  );
};

export default RightInterface;

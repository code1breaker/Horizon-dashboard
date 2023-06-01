import React, { useState } from "react";
import First from "./First";
import Second from "./Second";

const CenterHome = () => {
  return (
    <div className="rounded-3xl w-[70%] lg:w-full flex flex-col gap-5">
      <First />
      <Second />
    </div>
  );
};

export default CenterHome;

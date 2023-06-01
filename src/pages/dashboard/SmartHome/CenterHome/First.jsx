import React from "react";

const First = () => {
  return (
    <div className="flex md:flex-col gap-5">
      <div className="rounded-3xl w-1/2 md:w-full h-[22rem]">
        <img
          className="rounded-3xl w-full h-full"
          src="https://horizon-ui.com/chakra-pro/static/media/home.77887379eecf1671b131.png"
        />
      </div>

      <div className="rounded-3xl w-1/2 md:w-full h-[22rem]">
        <img
          className="rounded-3xl w-full h-full"
          src="https://d.newsweek.com/en/full/1966654/smart-home.jpg"
        />
      </div>
    </div>
  );
};

export default First;

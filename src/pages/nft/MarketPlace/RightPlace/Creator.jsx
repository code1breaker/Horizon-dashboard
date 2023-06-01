import React from "react";

const Creator = ({ image, name, artwork, rating }) => {
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <div className="flex items-center basis-[60%]">
        <img className="w-8 h-8 rounded-full mr-2" src={image} />
        <p className="dark:text-white">{name}</p>
      </div>
      <p className="basis-[25%] dark:text-white">{artwork}</p>
      <div className={`h-2 bg-gray-200 rounded basis-[15%]`}>
        <div
          className={`bg-[#422AFB] dark:bg-[#7053f6] rounded h-full w-${rating}`}
        ></div>
      </div>
    </div>
  );
};

export default Creator;

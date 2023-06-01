import React from "react";

const Card = ({ image, title, author, bid }) => {
  return (
    <div className="bg-white dark:bg-[#131c41] w-full lg:w-auto lg:flex-grow md:w-full p-4 rounded-2xl">
      <div className="w-full mb-2 ">
        <img className="rounded-2xl w-full h-full" src={`${image}`} alt="" />
      </div>
      <div>
        <p className="text-xl text-gray-800 font-semibold dark:text-white">
          {title}
        </p>
        <p className="text-[0.9rem] mt-1 text-slate-400">{author}</p>
        <p className="text-sm mt-8 font-semibold text-[#422AFB] dark:text-white">
          Current id:{bid}
        </p>
        <button className="text-white bg-[#0F0475] dark:bg-[#7053f6] rounded-full mt-3 px-6 py-2">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Info = ({ icon, image, name, date, amount }) => {
  return (
    <div className="flex justify-between my-4">
      <div className="flex items-center">
        <div className="rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center">
          {icon && icon}
          {image && <img src={image} className="w-full h-full rounded-full" />}
        </div>
        <div className="ml-4">
          <p className="font-semibold dark:text-white text-md">{name}</p>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
      <div>
        <p className={`font-semibold dark:text-white ${amount.class}`}>
          {amount.value}
        </p>
      </div>
    </div>
  );
};

export default Info;

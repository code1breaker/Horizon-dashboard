import React from "react";
import { IoMdBody } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { BsFillFileMusicFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdPersonalVideo } from "react-icons/md";
import { GiRoundStar } from "react-icons/gi";

const icons = [
  {
    icon: <IoMdBody />,
  },
  {
    icon: <AiFillLock />,
  },
  {
    icon: <BsFillFileMusicFill />,
  },
  {
    icon: <GiRoundStar />,
  },
  {
    icon: <MdPersonalVideo />,
  },
  {
    icon: <BsFillTelephoneFill />,
  },
];

const Second = () => {
  return (
    <div className="flex gap-6 flex-wrap sm:justify-center">
      {icons.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white dark:bg-[#131c41] w-[30%] lg:w-[45%] md:w-[30%] sm:w-[25%] sm:h-20 h-36 rounded-3xl flex items-center justify-center text-4xl text-slate-400 dark:text-white"
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Second;

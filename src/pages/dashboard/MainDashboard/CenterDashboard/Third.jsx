import React from "react";

import { Bar, Line } from "react-chartjs-2";
import { bar1, line2, barOptions1, options2 } from "../chartData";
import { CiMenuKebab } from "react-icons/ci";

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { BsHandbag } from "react-icons/bs";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const Third = () => {
  return (
    <div className="flex md:flex-col justify-between gap-6">
      <div className="bg-white dark:bg-[#131c41] w-1/2 md:w-full rounded-3xl py-8 px-6">
        <div className="flex justify-between mb-16">
          <div>
            <p className="text-gray-400">Daily Traffic</p>
            <p className="text-3xl font-bold dark:text-white">
              2.579{" "}
              <span className="text-gray-400 text-base font-normal">
                visitors
              </span>
            </p>
          </div>
          <div>
            <p className="text-green-500 font-semibold">+2.45%</p>
          </div>
        </div>
        <div className="w-[20vw] h-[65%] xl:w-[40vw] lg:w-[35vw] md:w-[85vw] sm:w-[72vw]">
          <Bar data={bar1} options={barOptions1} />
        </div>
      </div>

      <div className="bg-white dark:bg-[#131c41] w-1/2 md:w-full rounded-3xl  py-8 px-6">
        <div className="flex justify-between">
          <p className="text-xl font-semibold dark:text-white">
            Project Status
          </p>
          <span className="bg-gray-100 dark:bg-[#21294c] dark:text-white flex items-center justify-center w-9 h-9 rounded-lg">
            <CiMenuKebab />
          </span>
        </div>
        <div className="flex justify-between mt-3 my-5 mb-5">
          <div className="flex items-center">
            <span className="rounded-full w-9 h-9 bg-gray-100 dark:bg-[#21294c] text-blue-700 dark:text-white text-xl flex items-center justify-center">
              <BsHandbag />
            </span>
            <div className="ml-3">
              <p className="text-xl font-semibold dark:text-white">eCommerce</p>
              <p className="text-gray-400 text-sm">UI Design</p>
            </div>
          </div>

          <div>
            <p className="font-bold dark:text-white">71%</p>
          </div>
        </div>

        <div className="w-[20vw] h-[65%] xl:w-[40vw] lg:w-[35vw] md:w-[85vw] sm:w-[72vw] ">
          <Line data={line2} options={options2} />
        </div>
      </div>
    </div>
  );
};

export default Third;

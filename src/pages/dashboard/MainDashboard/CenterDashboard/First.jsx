import React from "react";
import { Line } from "react-chartjs-2";
import { line1, options1 } from "../chartData";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const First = () => {
  return (
    <div className="w-full px-5 pt-4 pb-8 bg-white dark:bg-[#131c41] rounded-3xl">
      <div className="flex justify-between mb-10 xl:px-3 text-gray-800">
        <div className="flex items-center">
          <div>
            <p className="text-3xl dark:text-white font-bold">$37.5K</p>
            <p className="text-gray-400">Overall Revenue</p>
          </div>
          <div>
            <p className="ml-4 font-semibold text-green-500">+2.45%</p>
          </div>
        </div>
        <div>
          <p className="text-gray-400 font-semibold">Monthly</p>
        </div>
      </div>

      <div className="w-[45vw] pt-8 xl:w-[90vw] lg:w-[85vw] sm:w-[75vw]">
        <Line data={line1} options={options1} />
      </div>
    </div>
  );
};

export default First;

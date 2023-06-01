import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "./data";
import { data } from "./data";
import { useContext } from "react";
import DarkModeContext from "../../../constants/darkModeContext";

const Area = () => {
  const { theme } = useContext(DarkModeContext);

  const updateOption = {
    ...options,
    chart: {
      ...options.chart,
      background: theme == "dark" ? "#131c41" : "#ffffff",
    },
    theme: { mode: theme == "dark" && "dark" },
  };
  return (
    <div className="bg-white dark:bg-[#131c41] p-5 sm:p-0 rounded-3xl w-[48%] md:w-full">
      <p className="text-xl pl-5 sm:p-5 sm:pl-10 font-semibold text-gray-800 dark:text-white">
        Consumption per day
      </p>
      <ReactApexChart
        options={updateOption}
        series={data}
        type="area"
        height={300}
      />
    </div>
  );
};

export default Area;

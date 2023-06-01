import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { donut, options2 } from "./data";
import DarkModeContext from "../../../constants/darkModeContext";

const Pie = () => {
  const { theme } = useContext(DarkModeContext);

  const updateOption = {
    ...options2,
    chart: {
      ...options2.chart,
      background: theme == "dark" ? "#131c41" : "#ffffff",
    },
    theme: { mode: theme == "dark" && "dark" },
  };
  return (
    <div className="bg-white dark:bg-[#131c41] p-5 rounded-3xl w-[48%] md:w-full">
      <p className="text-xl pl-5 font-semibold dark:text-white text-gray-800">
        Consumption per day
      </p>
      <ReactApexChart
        options={updateOption}
        series={donut}
        type="donut"
        height={300}
      />
    </div>
  );
};

export default Pie;

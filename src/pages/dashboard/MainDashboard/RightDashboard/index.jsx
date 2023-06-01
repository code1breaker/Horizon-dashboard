import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { transactionData } from "../CenterDashboard/data";
import Info from "../CenterDashboard/Info";

const RightDashboard = () => {
  return (
    <div className="basis-[35%] h-full bg-white dark:bg-[#131c41] rounded-3xl px-8 py-5 sm:px-5">
      <div className="flex justify-between">
        <p className=" dark:text-white">Your Card</p>
        <div className="bg-slate-200 rounded-lg w-9 h-9 flex justify-center items-center cursor-pointer">
          <BsFillPlusCircleFill className="text-blue-700 text-xl" />
        </div>
      </div>

      <div className="rounded-2xl mt-4 p-5 bg-[url('https://horizon-ui.com/chakra-pro/static/media/Debit.6267a35e0e3a3041695d.png')] bg-cover">
        <p className="text-white text-2xl font-semibold mt-3">Glassy.</p>
        <p className="text-white text-lg font-semibold mt-10">
          7812 XXXX XXXX XXXX
        </p>

        <div className="flex mt-3 gap-6">
          <div className="">
            <p className="text-white text-xs font-semibold">VALID THRU</p>
            <p className="text-white text-xs font-semibold">05/24</p>
          </div>
          <div>
            <p className="text-white text-xs font-semibold">CVV</p>
            <p className="text-white text-xs font-semibold">09X</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xl font-semibold dark:text-white">
          Your Transactions
        </p>
        {transactionData.map((item) => {
          return <Info key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RightDashboard;

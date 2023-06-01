import React from "react";

const First = () => {
  return (
    <div className="bg-white dark:bg-[#131c41] p-5 rounded-3xl">
      <div className="flex justify-between p-2">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAYCAYAAABJA/VsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHcSURBVHgB5ZhPTsJAFMbfmzbGFeraP2lvUE8gbk1MPIKcAE3ci2tJkBOIJ9CVLsETwA2mAYnLQpcI83wzBULiBNkO8y3otLxJ5jdveOV9CHNJme2L3bBKRGUgKIOToh4RNuOjUmtdFOoP+Z1FqII2DyPYDqU0mZ3H8UFq+9JAp8NcggGmlJSqwBR6PGEEjkn2sysMRIOxIijAT60c8iu/ZmhKh2Opjzg4Ls2gWTSTHIxrtpgQEaucYaAZ3i52RXzc3ZOCGx66sgkjRGipi7phkIOsgiJoY4BntmDUO6IH0WHJHHXxftcgMsDOiRP1AJf1ms427gSZfrbgWpX4M5HoGhwVCqjq63/1SFimuvy73mjtAjyQLmhc3Lq6uut7L6ALYYJB8MpFruwRdCEGv/cOmt/OiX/QXOx8zHTHO2j6mVX8geYMkyo6rxA8UHy8V1u9t2SanGspV7TR2pfQi7aSFDbBUfHaXzaJE2wjdMwohMRcuUshRU23Mk6josN6NN2h7OdX8+c9a3jxv1SbCPkWmQh5YSKwQWKLwaL3FN2lxTKD2/ik9AaOySQsDBMU9Axz6ys63IttsSvGoGjPwbdA7PVN1HpjcCF9HBCoCogJuCj9Lib6hKl6Wmck/ALjsukQFlIYrgAAAABJRU5ErkJggg=="
          alt=""
        />
        <p className="text-slate-400 dark:text-white">657 Miles</p>
      </div>

      <div className="flex items-center justify-center mt-16 text-slate-400 text-xl">
        <img src="https://i.ibb.co/Y3nrFfd/elipse-light.png" />
      </div>
      <p className="text-xl text-slate-400 dark:text-white text-center">
        Hello! how can I help?
      </p>
    </div>
  );
};

export default First;

import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { secondData } from "./data";
import Info from "./Info";

const Second = () => {
  return (
    <div className="rounded-3xl bg-white dark:bg-[#131c41] p-5">
      <div className="rounded-2xl bg-blue-900 dark:bg-gradient-to-r from-[#1d2548] to-[#262e50] p-4 text-white flex justify-between relative">
        <div>
          <p>Credit Balance</p>
          <p className="text-[2rem] font-bold">$3942.58</p>
        </div>
        <div>
          <CiMenuKebab className="text-xl" />
          <img
            className="absolute bottom-8 right-5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAUCAYAAAA+wTUXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF/SURBVHgB7ZbhcYMwDIU1QkfwCIzACB2BDcoGZQO6QbJBR2AERmAEj6Da4flQCHWxK0jI5bvzj8QW1pNk2UQ7wMylG60bvRuWJ/zvk5+nZ8GJKdzoeB3D4cU7AR9CkM9ug4y/iTU+KDUEBz5pI7B/SVvgHRcivqTQiE0zK3tDigifLGkzE1wl2hqR9UFDuA84+kagIU1QroGaMtAUDn8GccTeSRNEdNCIJr7VC+EFJYKKs4vBw2RL/4THK+myASkA4d+plcNjs+qF3W1PEdH4s9lENjJiE0OK8G2DKxfW+AD5W6ATawf+rVOLhRVlIr7R0AZ43/j6WrPYs5v9H+aaaBIRIU9HGcChEFlDG4FqqhdEyiDUvKZiURo2tzSFExXtBAJQYhScczSd0RmOnxLtwqtLpXntCiIXsl0m2OyeZVV46pKrziZP10lSdTwcPHXhqHCenpqrAvTQ8PVL6JJFWe6Yb8W87rPunvD4iolhD3uOY6BRnWeZD/ehoRfH4gfXjltUbHmMtQAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
      <p className="text-gray-400 mt-4 mb-2">Recent</p>

      {secondData.map((item) => {
        return <Info key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Second;

// #262e50

import { useContext, useState } from "react";
import { sidebarItem } from "../constants/sidebarData";
import { NavLink, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { SidebarContext } from "../constants/SidebarContextProvider";

const Sidebar = () => {
  const [selected, setSelected] = useState([]);
  const location = useLocation();
  const { active, setActive } = useContext(SidebarContext);

  const handleDropdown = (id) => {
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
    } else {
      const data = selected.filter((item) => item !== id);
      setSelected(data);
    }
  };

  return (
    <div
      id="container"
      onClick={(e) => e.target.id === "container" && setActive(false)}
      className={`z-20 xl:${
        active ? "" : "hidden"
      } w-[20%] xl:w-[100%] p-5 pr-0 sticky top-0 h-screen bg-gray-100 xl:bg-black xl:bg-opacity-50 xl:fixed xl:inset-0 xl:z-20 dark:bg-[#0c1435]`}
    >
      <div className="bg-white xl:w-[18rem] rounded-2xl h-full flex flex-col items-center dark:bg-[#131c41] relative">
        <RxCross2
          onClick={() => setActive(false)}
          className="hidden xl:block absolute top-3 right-5 text-xl cursor-pointer dark:text-gray-400"
        />
        <h1 className="uppercase py-12 text-2xl text-gray-800 dark:text-white cursor-pointer">
          <span className="font-bold">Horizon</span> Pro
        </h1>
        <hr className="w-full border-gray-300" />
        <div className="my-3">
          {sidebarItem.map((item) => {
            return (
              <div
                className="capitalize text-gray-500 cursor-pointer my-3"
                key={item.id}
              >
                <div
                  className="flex items-center justify-between w-44"
                  onClick={() => {
                    handleDropdown(item.id);
                  }}
                >
                  <div
                    className={`flex items-center text-base ${
                      item.links.some(
                        (i) =>
                          "/" + i.name.replace(/\s+/g, "-") == location.pathname
                      )
                        ? "text-[#422afb] dark:text-white"
                        : ""
                    }`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>

                  <span>
                    {selected.includes(item.id)
                      ? item.arrowUpIcon
                      : item.arrowDownIcon}
                  </span>
                </div>

                {selected.includes(item.id) && (
                  <div>
                    {item.links.map((link) => {
                      return (
                        <div className="ml-6 text-sm py-1" key={link.id}>
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "text-[#422afb] dark:text-white" : ""
                            }
                            to={`/${link.name.replace(/\s+/g, "-")}`}
                          >
                            {link.name}
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

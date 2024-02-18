import React, { useEffect, useState } from "react";
import downarrow from "../../assets/downarrow.svg";
import { subNavLinks } from "../../../constants";
import { NavLink, useLocation } from "react-router-dom";
function SettingsItem({ item }) {
  const [hidden, updateHidden] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.replace("%20", " ").includes(item)) {
      updateHidden(true);
    }
  }, [pathname]);

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#409a70" : "",
    };
  };
  const subNavLinkStyles = ({ isActive }) => {
    return {
      borderWidth: isActive ? "3px" : "",
      borderColor: isActive
        ? "transparent transparent transparent #409a70 "
        : "",
      color: isActive ? "rgb(15 237 134)" : "#d5d7db",
      paddingLeft: isActive ? "8px" : "",
    };
  };
  return (
    <NavLink style={navLinkStyles} to={`/${item}`} className=" rounded-md">
      <div className="">
        <div className="flex justify-between  items-center py-3 px-3">
          <div className="text-sm text-nowrap text-[#d5d7db] lg:text-xl ">
            {item}
          </div>
          <img
            className={` cursor-pointer ${!hidden ? "rotate-180" : ""}`}
            src={downarrow}
            alt=""
            width={24}
            height={24}
            onClick={() => updateHidden(!hidden)}
          />
        </div>
        <div
          className={`rounded-md py-3 ${
            hidden ? "hidden" : ""
          } flex gap-3 flex-col px-5 bg-[#607D8B]`}
        >
          {subNavLinks.map((listItem, index) => (
            <NavLink
              key={index}
              style={subNavLinkStyles}
              to={`${item}/${listItem}`}
            >
              <div className="text-[12px] text-[inherit] lg:text-xl ">
                {listItem}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </NavLink>
  );
}

export default SettingsItem;

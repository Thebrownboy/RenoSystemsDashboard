import React from "react";
import searchIcon from "../../assets/magnifying-glass.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import { availalbeSettings } from "../../../constants";
import SettingsItem from "../SettingsItem/SettingsItem";
import styles from "./sidebar.module.css";
function SideBar() {
  return (
    <div
      className={`${styles["sidebar"]} p-3 lg:p-5 hidden overflow-y-scroll gap-5 h-screen bg-[#050E2C] sticky md:flex  flex-col md:w-[200px]   lg:w-[300px] top-0 left-0`}
    >
      <div className="logo">
        <h1 className=" text-2xl lg:text-4xl capitalize text-white text-center">
          reno systems
        </h1>
      </div>
      <div className="side-search h-fit relative">
        <img
          src={searchIcon}
          alt=""
          className="w-[24px] h-[24px] absolute top-[25%] right-4 cursor-pointer"
        />
        <input
          type="search"
          className="w-full h-10 rounded-full text-sm px-4 m-0 outline-none "
          placeholder="Quick search"
        />
      </div>

      <div className="title mb-3">
        <div className=" flex px-3 gap-3">
          <img src={dashboardIcon} width={30} height={30} alt="" />
          <p className="text-[#d5d7db] text-xl"> Dashboard</p>
        </div>
      </div>

      <div className="settings px-3">
        <p className="text-[#9fa5b1] text-[1rem] uppercase">settings</p>
      </div>
      <div className=" pl-3 flex gap-7 flex-col">
        {availalbeSettings.map((item, index) => (
          <SettingsItem item={item} key={index} />
        ))}
        <div className="text-[#d5d7db] text-xl ">License Managment</div>
      </div>
    </div>
  );
}

export default SideBar;

import React, { useEffect, useRef, useState } from "react";
import burger from "../../assets/burger.svg";
import { weekDays, months } from "../../../constants";
import notificationIcon from "../../assets/notification.svg";
import burgerIcon from "../../assets/burger.svg";
import UserSettings from "../UserSettings/UserSettings";
function Header({ firstName, lastName, updateSideBarDisplay, sideBarDisplay }) {
  console.log(new Date().getDay());
  const date = new Date();
  const [showSettings, updateShowSettings] = useState(false);
  return (
    <div className="border-b ">
      <header className="flex items-center justify-between bg-white  px-3 py-2">
        <div className="hamburger-greeting-date flex gap-3  items-center">
          <div className="flex  gap-3 items-center">
            <div
              className=" cursor-pointer "
              onClick={() => updateSideBarDisplay(!sideBarDisplay)}
            >
              <img src={burger} width={24} height={24} alt="" />
            </div>
            <p className="text-sm text-[#6a6c70] font-bold">
              {date.getHours() > 12 ? "Good Afternoon" : "Good Morning"}!
            </p>
          </div>
          <div className=" flex text-[#a2a5ac] font-bold  gap-3 text-sm">
            <p className="date  ">
              {weekDays[date.getDay()].substring(0, 3)},
              {months[date.getMonth()].substring(0, 3)} {date.getDate()}{" "}
              {date.getFullYear()}
            </p>
            <p className="time">
              {date.getHours()}:
              {date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes()}{" "}
              {date.getHours() > 12 ? "PM" : "AM"}
            </p>
          </div>
        </div>

        <UserSettings
          firstName={firstName}
          lastName={lastName}
          classStyles="hidden  sm:flex text-sm md:text-[1rem] user-settings   gap-3  items-center"
        />

        <div className="sm:hidden relative ">
          <div
            className="cursor-pointer"
            onClick={() => updateShowSettings(!showSettings)}
          >
            <img src={burgerIcon} width={16} height={16} alt="" />
          </div>
          {showSettings && (
            <UserSettings
              firstName={firstName}
              lastName={lastName}
              classStyles="absolute left-[-64px] top-7 rounded-sm flex  flex-col gap-3 justify-center items-center bg-[#f1eaea] p-5"
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;

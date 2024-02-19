import React, { useEffect, useRef } from "react";
import burger from "../../assets/burger.svg";
import { weekDays, months } from "../../../constants";
import notificationIcon from "../../assets/notification.svg";
function Header({ firstName, lastName, updateSideBarDisplay, sideBarDisplay }) {
  console.log(new Date().getDay());
  const date = new Date();
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

        <div className="user-settings  flex gap-3  items-center">
          <p className=" question text-[gray] border-1 border border-[gray] w-8 rounded-full flex justify-center font-bold">
            ?
          </p>

          <div
            className="notification  px-3 border-r relative border-[gray] before:w-4 before:h-4 before:bg-red-600 before:absolute
           before:text-[white] before:text-[10px] before:content-['+9'] before:top-0 before:right-1 before:rounded-md "
          >
            <img src={notificationIcon} width={20} height={20} alt="" />
          </div>

          <div className=" font-semibold user-name">
            {firstName} {lastName}
          </div>

          <div className=" bg-blue-300 rounded-full p-1">
            {firstName.substring(0, 1)}
            {lastName.substring(0, 1)}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

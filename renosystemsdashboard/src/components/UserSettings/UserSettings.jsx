import React from "react";
import notificationIcon from "../../assets/notification.svg";
function UserSettings({ firstName, lastName, classStyles }) {
  return (
    <div className={` ${classStyles}`}>
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
  );
}

export default UserSettings;

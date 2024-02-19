import React, { useState } from "react";

function TableRow({
  firstName,
  lastName,
  userName,
  email,
  group,
  status,
  createdOn,
}) {
  const [checked, updateChecked] = useState(false);
  return (
    <div
      className={`px-4 py-4 gap-3 flex items-center ${
        checked ? "bg-[#eff0f3]" : ""
      }  border border-1 min-w-fit  text-nowrap`}
    >
      <div className="mr-3 w-5 h-5">
        <input
          type="checkbox"
          className=" w-full h-full"
          value={checked}
          onChange={() => updateChecked(!checked)}
        />
      </div>

      <div className="name flex gap-1  min-w-[200px]  items-center">
        <div className="bg-black rounded-full text-white w-8 h-8 flex justify-center items-center">
          {firstName.substring(0, 1)}
          {lastName.substring(0, 1)}
        </div>
        <div>
          {firstName} {lastName}
        </div>
      </div>

      <div className="  min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis  ">
        {userName}
      </div>
      <div className="  min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis  ">
        {email}
      </div>
      <div className="  min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis  ">
        {group}
      </div>
      <div className="  min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis  ">
        {status}
      </div>
      <div className="  min-w-[200px] overflow-hidden text-ellipsis  ">
        {createdOn}
      </div>
    </div>
  );
}

export default TableRow;

import React from "react";

function TableRow({
  firstName,
  lastName,
  userName,
  email,
  group,
  status,
  createdOn,
}) {
  return (
    <div className="px-4 py-4 gap-3 flex items-center bg-[#f1f1fa] min-w-fit  text-nowrap">
      <div className="mr-3 w-5 h-5">
        <input type="checkbox" className=" w-full h-full" />
      </div>

      <div className="name flex gap-1  min-w-[200px] ">
        <div className="bg-black rounded-full text-white w-">
          {firstName.substring(0, 1)}
          {lastName.substring(0, 1)}
        </div>
        <div>
          {firstName} {lastName}
        </div>
      </div>

      <div className="  min-w-[200px] overflow-hidden text-ellipsis  ">
        {userName}
      </div>
      <div className="  min-w-[200px] overflow-hidden text-ellipsis  ">
        {email}
      </div>
      <div className="  min-w-[200px] overflow-hidden text-ellipsis  ">
        {group}
      </div>
      <div className="  min-w-[200px] overflow-hidden text-ellipsis  ">
        {status}
      </div>
      <div className="  min-w-[200px] overflow-hidden text-ellipsis  ">
        {createdOn}
      </div>
    </div>
  );
}

export default TableRow;

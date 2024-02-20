import React from "react";
import { tableSections } from "../../../constants";
function TableHeader() {
  return (
    <div className="px-4 py-4  bg-[#F8FAFB] gap-3 flex min-w-fit items-center">
      <div className="mr-3 w-5 h-5">
        <input type="checkbox" className=" w-full h-full" />
      </div>

      {tableSections.map((item, index) => (
        <div className="min-w-[200px] text-[#9da0a4] font-bold" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default TableHeader;

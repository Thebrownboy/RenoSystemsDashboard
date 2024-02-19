import React from "react";
import { tableSections } from "../../../constants";
function TableHeader() {
  return (
    <div className="px-3 py-2 flex items-center">
      <div className="mr-3 w-5 h-5">
        <input type="checkbox" className=" w-full h-full" />
      </div>

      {tableSections.map((item, index) => (
        <div className="flex-1" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default TableHeader;

import React, { useEffect, useRef } from "react";
import { tableSections } from "../../../constants";
import { useSelector } from "react-redux";
function TableHeader() {
  const length = useSelector((state) => state.rows.length);
  const inputRef = useRef();
  useEffect(() => {
    if (length > 0 && inputRef.current.checked === false) {
      inputRef.current.checked = true;
    }
    if (length === 0) {
      inputRef.current.checked = false;
    }
  }, [length]);
  return (
    <div className="px-4 py-4  bg-[#F8FAFB] gap-3 flex min-w-fit items-center">
      <div className="mr-3 w-5 h-5">
        <input
          ref={inputRef}
          type="checkbox"
          className=" w-full h-full"
          onClick={(e) => {
            e.preventDefault();
            return;
          }}
        />
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

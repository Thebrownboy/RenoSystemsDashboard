import React, { useEffect, useRef, useState } from "react";
import downarrowIcon from "../../assets/downarrow.svg";

function CustomizedSelect({ selectValue, updateSelectValue, items }) {
  const [showOptions, updateShowOptions] = useState(false);
  const selectRef = useRef();
  const expandRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target !== selectRef.current && e.target !== expandRef.current) {
        updateShowOptions(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className=" flex items-center justify-between w-full"
        onClick={() => updateShowOptions(!showOptions)}
        ref={selectRef}
      >
        <div>{selectValue}</div>
        <div>
          <img
            src={downarrowIcon}
            width={24}
            height={24}
            alt=""
            ref={expandRef}
          />
        </div>
      </div>
      <div
        className={`${
          showOptions ? "block" : "hidden"
        } flex flex-col absolute z-50 w-full top-full left-0`}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              id={`${item}`}
              className=" p-3 bg-white border-b-1 border hover:bg-blue-400"
              onClick={(e) => {
                updateSelectValue(e.target.id);
                updateShowOptions(false);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CustomizedSelect;

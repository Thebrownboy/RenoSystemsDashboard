import React, { useEffect, useRef, useState } from "react";
import downarrowIcon from "../../assets/downarrow.svg";

function CustomizedSelect({
  selectValue,
  updateSelectValue,
  items,
  selectName,
  additionalStyles,
}) {
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
    <div
      className={`relative 
              ${additionalStyles} py-2 flex items-center border-1 border rounded-md px-3
              before:absolute before:top-[-14px] 
              before:left-[10px] before:content-['${selectName}'] before:w-fit before:h-5
              before:z-10 before:bg-white before:text-[#7A7E90]`}
    >
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
        } flex flex-col absolute z-50 w-full top-full left-0 rounded-md`}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              id={`${item}`}
              className=" p-3 bg-white border-b-1 border hover:bg-blue-800 rounded-md"
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
    </div>
  );
}

export default CustomizedSelect;

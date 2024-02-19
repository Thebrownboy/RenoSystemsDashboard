import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import downarrowIcon from "../../assets/downarrow.svg";
import { statusFliter } from "../../redux/Employees/EmployeesSlice";
function CustomizedSelect({ selectValue, updateSelectValue }) {
  const [showOptions, updateShowOptions] = useState(false);
  const [value, upateValue] = useState("any");
  const selectRef = useRef();
  const expandRef = useRef();
  const dispatch = useDispatch();
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
        <div>{value}</div>
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
        } flex flex-col absolute w-full top-full left-0`}
      >
        <div
          id="locked"
          className=" p-3 bg-white border-b-1 border hover:bg-blue-400"
          onClick={(e) => {
            upateValue(e.target.id);
            updateShowOptions(false);
            dispatch(statusFliter(e.target.id));
          }}
        >
          locked
        </div>
        <div
          id="inactive"
          className=" p-3 bg-white border-b-1 border  hover:bg-blue-400"
          onClick={(e) => {
            updateShowOptions(false);
            upateValue(e.target.id);
            dispatch(statusFliter(e.target.id));
          }}
        >
          Inactive
        </div>
        <div
          id="active"
          className=" p-3 bg-white border-b-1 border  hover:bg-blue-400"
          onClick={(e) => {
            upateValue(e.target.id);
            updateShowOptions(false);
            dispatch(statusFliter(e.target.id));
          }}
        >
          Active
        </div>
      </div>
    </>
  );
}

export default CustomizedSelect;

import React from "react";
import { useRef } from "react";
import CustomizedSelect from "../CustomizedSelect/CustomizedSelect";
import searchIcon from "../../assets/magnifying-glass.svg";
function FilterBar() {
  const generalSearchRef = useRef();
  const usernameSearchRef = useRef();
  const calenderRef = useRef();
  return (
    <div className=" flex gap-5 py-5 px-4">
      <div className="relative ">
        <img
          className=" absolute top-[10px] left-2 cursor-pointer"
          src={searchIcon}
          width={24}
          height={24}
          alt=""
        />
        <input
          name="general-search"
          type="text"
          ref={generalSearchRef}
          placeholder="Search..."
          className="outline-none pl-10 py-2 border border-1 rounded-md max-w-[200px]"
        />
      </div>

      <div>
        <input
          type="text"
          name="username-search"
          ref={usernameSearchRef}
          className="outline-none  px-2 py-2 border border-1 rounded-md max-w-[150px]"
          placeholder="User Name"
        />
      </div>

      <div className="relative  w-[200px] flex items-center border-1 border rounded-md px-3">
        <CustomizedSelect />
      </div>
      <div
        className="flex items-center gap-4 border-1 border rounded-md px-3 cursor-pointer "
        onClick={() => calenderRef.current.click()}
      >
        <input type="date" className=" outline-none" />
      </div>
    </div>
  );
}

export default FilterBar;

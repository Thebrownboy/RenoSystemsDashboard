import React, { useEffect, useState } from "react";
import { useRef } from "react";
import CustomizedSelect from "../CustomizedSelect/CustomizedSelect";
import searchIcon from "../../assets/magnifying-glass.svg";
import { useDispatch } from "react-redux";
import {
  dateFilter,
  nameFilter,
  statusFliter,
  usernameFilter,
} from "../../redux/Employees/EmployeesSlice";

const status = ["Locked", "Active", "Inactive"];
function FilterBar() {
  const [statusValue, updateStatusValue] = useState("any");
  const generalSearchRef = useRef();
  const usernameSearchRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (statusValue === "any") return;
    dispatch(statusFliter(statusValue));
  }, [statusValue]);
  return (
    <div className=" flex gap-5 py-5 px-4 flex-wrap ">
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
          className="outline-none pl-10 py-2 border border-1 rounded-md max-w-[200px] "
          onChange={(e) => dispatch(nameFilter(e.target.value))}
        />
      </div>

      <div>
        <input
          type="text"
          name="username-search"
          ref={usernameSearchRef}
          className="outline-none  px-2 py-2 border border-1 rounded-md max-w-[200px]"
          placeholder="User Name"
          onChange={(e) => dispatch(usernameFilter(e.target.value))}
        />
      </div>

      <CustomizedSelect
        items={status}
        selectValue={statusValue}
        updateSelectValue={updateStatusValue}
        selectName={"User"}
        additionalStyles={"w-[200px]"}
      />

      <div className=" w-[200px] relative flex items-center gap-4 py-2 border-1 border rounded-md px-3 cursor-pointer  before:absolute before:top-[-14px] before:left-[10px] before:content-['Created\_On'] before:w-fit before:h-5 before:z-10 before:bg-white before:text-[#7A7E90]">
        <input
          type="date"
          className=" outline-none"
          onChange={(e) => dispatch(dateFilter(e.target.value))}
        />
      </div>
    </div>
  );
}

export default FilterBar;

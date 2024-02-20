import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSelected, removeFromSelected } from "../../redux/Rows/RowsSlice";
function TableRow({
  firstName,
  lastName,
  userName,
  email,
  group,
  status,
  createdOn,
  id,
}) {
  const length = useSelector((state) => state.rows.length);
  const [checked, updateChecked] = useState(false);
  const parentRef = useRef();
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    if (length === 0 && checked) {
      inputRef.current.click();
      // if the unselect all button clicked
    }
  }, [length]);
  return (
    <div
      ref={parentRef}
      id={id}
      className={`text-[#2F3650] px-4 py-4 gap-3 flex items-center ${
        checked ? "bg-[#eff0f3]" : ""
      }  border border-1 min-w-fit  text-nowrap`}
    >
      <div className="mr-3 w-5 h-5">
        <input
          ref={inputRef}
          type="checkbox"
          className=" w-full h-full"
          value={checked}
          onChange={() => {
            if (checked === false) {
              dispatch(addToSelected(parentRef.current.id));
            } else {
              dispatch(removeFromSelected(parentRef.current.id));
            }
            updateChecked(!checked);
          }}
        />
      </div>

      <div className="name flex gap-1  min-w-[200px]  items-center ">
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

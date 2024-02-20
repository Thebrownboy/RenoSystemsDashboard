import React from "react";
import dotsIcon from "../../assets/dots-vertical-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import AssignGroup from "../AssignGroup/AssignGroup";
import { unselectAll } from "../../redux/Rows/RowsSlice";
import EditingUser from "../EditingUser/EditingUser";
import BanIcon from "../BanIcon/BanIcon";
function EditingBar() {
  const length = useSelector((state) => state.rows.length);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between py-3 px-4 items-center text-[10px] text-nowrap lg:text-[1rem]">
      <div className=" editing-icons flex-col w-full flex flex-wrap sm:flex-row  sm:flex-nowrap gap-3 items-center">
        <div className="select-number border-r pr-2 w-full md:w-auto ">
          {length} selected
        </div>
        {!(length > 1) && <EditingUser />}

        <BanIcon status="InActive" />
        <BanIcon status="Locked" />

        <div className=" w-full text-center md:w-auto assign-profile p-2 bg-[#E7E9Ef] rounded-md text-[#707689] font-semibold cursor-pointer">
          Assign to Profile
        </div>
        <AssignGroup />
        <div className="w-full flex justify-center sm:w-auto sm:block  three-dots bg-[#E7E9Ef] p-2 rounded-md cursor-pointer min-h-[24px] min-w-[24px]">
          <img src={dotsIcon} width={24} height={24} alt="" />
        </div>
        <div
          className=" underline text-sm cursor-pointer text-[#707689]"
          onClick={() => dispatch(unselectAll())}
        >
          Unselect all
        </div>
      </div>

      <div className="download-icon"></div>
    </div>
  );
}

export default EditingBar;

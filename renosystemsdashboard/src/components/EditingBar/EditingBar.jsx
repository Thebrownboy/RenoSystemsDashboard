import React from "react";
import penIcon from "../../assets/pen-svgrepo-com.svg";
import dotsIcon from "../../assets/dots-vertical-svgrepo-com.svg";
import lockIcon from "../../assets/lock-keyhole-svgrepo-com.svg";
import blockIcon from "../../assets/block-prohibited-svgrepo-com.svg";
function EditingBar() {
  return (
    <div className="flex justify-between py-3 px-4 items-center">
      <div className="editing-icons flex gap-3 items-center">
        <div className="select-number border-r pr-2 ">1 selected</div>
        <div className="edit-icon bg-[#E7E9Ef] p-1  rounded-md cursor-pointer">
          <img src={penIcon} width={24} height={24} alt="" />
        </div>
        <div className="block-icon bg-[#E7E9Ef] p-1 rounded-md cursor-pointer">
          <img src={blockIcon} width={24} height={24} alt="" />
        </div>
        <div className="lock-icon bg-[#E7E9Ef] p-1 rounded- cursor-pointer">
          <img src={lockIcon} width={24} height={24} alt="" />
        </div>
        <div className="assign-profile p-2 bg-[#E7E9Ef] rounded-md text-[#707689] font-semibold cursor-pointer">
          Assign to Profile
        </div>
        <div className="assign-group p-2 bg-[#E7E9Ef] rounded-md text-[#707689] font-semibold cursor-pointer">
          Assign to group
        </div>
        <div className="three-dots bg-[#E7E9Ef] p-2 rounded-md cursor-pointer">
          <img src={dotsIcon} width={24} height={24} alt="" />
        </div>
        <div className=" underline text-sm cursor-pointer text-[#707689]">
          Unselect all
        </div>
      </div>

      <div className="download-icon"></div>
    </div>
  );
}

export default EditingBar;

import React from "react";
import { useSelector } from "react-redux";

function AssignGroup() {
  const selected = useSelector((state) => state.rows.selected);

  return (
    <div className="w-full text-center sm:w-auto assign-group p-2 bg-[#E7E9Ef] rounded-md text-[#707689] font-semibold cursor-pointer">
      Assign to group
    </div>
  );
}

export default AssignGroup;

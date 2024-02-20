import React from "react";
import { useSelector } from "react-redux";

function AssignGroup() {
  const selected = useSelector((state) => state.rows.selected);
  const clickHandle = async () => {
    for (let i = 0; i < selected.length; i++) {
      try {
        const res = await fetch(
          `http://localhost:3000/employees/${selected[i]}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              group: "HR",
            }),
          }
        ).then((res) => res.json());
      } catch (err) {
        return;
      }
    }
    window.location.reload();
  };
  return (
    <div
      onClick={clickHandle}
      className="assign-group p-2 bg-[#E7E9Ef] rounded-md text-[#707689] font-semibold cursor-pointer"
    >
      Assign to group
    </div>
  );
}

export default AssignGroup;

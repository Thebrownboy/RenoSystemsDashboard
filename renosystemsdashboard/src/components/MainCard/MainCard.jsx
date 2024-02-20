import React from "react";
import TableSection from "../TableSection/TableSection";
import FilterBar from "../FilterBar/FilterBar";
import EditingBar from "../EditingBar/EditingBar";

function MainCard() {
  return (
    <div className=" p-3 ">
      <div className="  border border-1 rounded-md bg-white">
        <FilterBar />
        <EditingBar />
        <TableSection />
      </div>
    </div>
  );
}

export default MainCard;

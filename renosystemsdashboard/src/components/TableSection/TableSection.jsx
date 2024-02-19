import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

function TableSection() {
  return (
    <div className="border-1 overflow-scroll border border-l-[transparent] border-r-[transparent] ">
      <TableHeader />
      <TableRow
        firstName={"Ramy"}
        lastName={"Mohsen"}
        userName={"Ramy.Mohsen"}
        createdOn={"Dec 10,2022"}
        email={"ramy.mohsen@google.com"}
        group={"Office"}
        status={"locked"}
      />
    </div>
  );
}

export default TableSection;

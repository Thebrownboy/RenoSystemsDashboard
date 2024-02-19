import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import styles from "./tablesection.module.css";
function TableSection() {
  return (
    <div
      className={`${styles["table-section"]} border-1 overflow-x-scroll border border-l-[transparent] border-r-[transparent] `}
    >
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

      <TableRow
        firstName={"Ramy"}
        lastName={"Mohsen"}
        userName={"Ramy.Mohsen"}
        createdOn={"Dec 10,2022"}
        email={"ramy.mohsen@google.com"}
        group={"Office"}
        status={"locked"}
      />
      <TableRow
        firstName={"Ramy"}
        lastName={"Mohsen"}
        userName={"Ramy.Mohsen"}
        createdOn={"Dec 10,2022"}
        email={"ramy.mohsen@google.com"}
        group={"Office"}
        status={"locked"}
      />
      <TableRow
        firstName={"Ramy"}
        lastName={"Mohsen"}
        userName={"Ramy.Mohsen"}
        createdOn={"Dec 10,2022"}
        email={"ramy.mohsen@google.com"}
        group={"Office"}
        status={"locked"}
      />
      <TableRow
        firstName={"Ramy"}
        lastName={"Mohsen"}
        userName={"Ramy.Mohsen"}
        createdOn={"Dec 10,2022"}
        email={"ramy.mohsen@google.com"}
        group={"Office"}
        status={"locked"}
      />
      <TableRow
        firstName={"Ramy"}
        lastName={"Mohsen"}
        userName={"Ramy.Mohsen"}
        createdOn={"Dec 10,2022"}
        email={"ramy.mohsen@google.com"}
        group={"Office"}
        status={"locked"}
      />
      <TableRow
        firstName={"Ramy"}
        lastName={"Mohsen"}
        userName={"Ramy.Mohsen"}
        createdOn={"Dec 10,2022"}
        email={"ramy.mohsen@google.com"}
        group={"Office"}
        status={"locked"}
      />
      <TableRow
        firstName={"كريم"}
        lastName={"محسن"}
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

import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import styles from "./tablesection.module.css";
import { users } from "../../../constants";
function TableSection() {
  return (
    <div
      className={`${styles["table-section"]} border-1 overflow-x-scroll border border-l-[transparent] border-r-[transparent] `}
    >
      <TableHeader />
      {users.map((item, index) => {
        return (
          <TableRow
            createdOn={item.createdOn}
            email={item.email}
            firstName={item.firstName}
            group={item.group}
            lastName={item.lastName}
            status={item.status}
            userName={item.userName}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default TableSection;

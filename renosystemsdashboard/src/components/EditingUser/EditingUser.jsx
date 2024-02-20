import React, { useState } from "react";
import penIcon from "../../assets/pen-svgrepo-com.svg";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";
function EditingUser() {
  const [showPopUp, updateShowPopUp] = useState(false);
  const selected = useSelector((state) => state.rows.selected);
  const [selectedUser, updateSelectedUser] = useState({});
  return (
    <>
      <div
        onClick={async () => {
          if (selected.length > 0) {
            const response = await fetch(
              `http://localhost:3000/employees/${selected[0]}`
            ).then((res) => res.json());
            updateSelectedUser(() => ({ ...response }));
            updateShowPopUp(!showPopUp);
          }
        }}
        className="edit-icon bg-[#E7E9Ef] p-1  rounded-md cursor-pointer min-w-[24px] min-h-[24px]"
      >
        <img src={penIcon} width={24} height={24} alt="" />
      </div>
      {showPopUp && (
        <Popup user={selectedUser} updateShowPopup={updateShowPopUp} />
      )}
    </>
  );
}

export default EditingUser;

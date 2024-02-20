import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import UserMangment from "../UserManage/UserMangment";
import MainCard from "../MainCard/MainCard";
import Popup from "../Popup/Popup";

function MainSection({ updateSideBarDisplay, sideBarDisplay }) {
  const [showPopUp, updateShowPopup] = useState(false);
  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopUp]);
  return (
    <div className="  bg-[#f1f3f5]">
      <Header
        firstName={"Nader"}
        lastName={"Amer"}
        updateSideBarDisplay={updateSideBarDisplay}
        sideBarDisplay={sideBarDisplay}
      />

      {showPopUp && <Popup updateShowPopup={updateShowPopup} />}

      <UserMangment updateShowPopup={updateShowPopup} />
      <MainCard />
    </div>
  );
}

export default MainSection;

import React from "react";
import Header from "../Header/Header";
import UserMangment from "../UserManage/UserMangment";
import MainCard from "../MainCard/MainCard";
import Popup from "../Popup/Popup";

function MainSection({ updateSideBarDisplay, sideBarDisplay }) {
  return (
    <div className="  bg-[#f1f3f5]">
      <Header
        firstName={"Nader"}
        lastName={"Amer"}
        updateSideBarDisplay={updateSideBarDisplay}
        sideBarDisplay={sideBarDisplay}
      />

      <Popup />

      <UserMangment />
      <MainCard />
    </div>
  );
}

export default MainSection;

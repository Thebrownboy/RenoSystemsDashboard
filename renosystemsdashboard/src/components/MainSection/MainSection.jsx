import React from "react";
import Header from "../Header/Header";
import UserMangment from "../UserManage/UserMangment";
import MainCard from "../MainCard/MainCard";

function MainSection({ updateSideBarDisplay, sideBarDisplay }) {
  return (
    <div className=" flex-1  bg-[#f1f3f5]">
      <Header
        firstName={"Nader"}
        lastName={"Amer"}
        updateSideBarDisplay={updateSideBarDisplay}
        sideBarDisplay={sideBarDisplay}
      />

      <UserMangment />
      <MainCard />
    </div>
  );
}

export default MainSection;

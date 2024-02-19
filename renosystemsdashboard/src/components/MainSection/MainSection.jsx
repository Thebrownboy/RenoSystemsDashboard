import React from "react";
import Header from "../Header/Header";
import UserMangment from "../UserManage/UserMangment";

function MainSection({ updateSideBarDisplay, sideBarDisplay }) {
  return (
    <div className=" flex-1 ">
      <Header
        firstName={"Nader"}
        lastName={"Amer"}
        updateSideBarDisplay={updateSideBarDisplay}
        sideBarDisplay={sideBarDisplay}
      />

      <UserMangment />
    </div>
  );
}

export default MainSection;

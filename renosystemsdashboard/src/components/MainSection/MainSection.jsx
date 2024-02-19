import React from "react";
import Header from "../Header/Header";

function MainSection({ updateSideBarDisplay, sideBarDisplay }) {
  return (
    <div className=" flex-1 ">
      <Header
        firstName={"Nader"}
        lastName={"Amer"}
        updateSideBarDisplay={updateSideBarDisplay}
        sideBarDisplay={sideBarDisplay}
      ></Header>
    </div>
  );
}

export default MainSection;

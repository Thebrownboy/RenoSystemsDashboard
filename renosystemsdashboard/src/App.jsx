import { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
function App() {
  const [sideBarDisplay, updateSideBarDisplay] = useState(true);
  return (
    <div className=" flex  relative  h-[1880px]">
      {sideBarDisplay && <SideBar />}
      {console.log(sideBarDisplay)}
      <Routes>
        <Route
          path="/home"
          element={
            <MainSection
              updateSideBarDisplay={updateSideBarDisplay}
              sideBarDisplay={sideBarDisplay}
            />
          }
        />
        <Route path="/*" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;

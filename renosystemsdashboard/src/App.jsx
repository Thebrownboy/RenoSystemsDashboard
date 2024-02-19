import { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
function App() {
  const [sideBarDisplay, updateSideBarDisplay] = useState(true);
  return (
    <div className=" flex  relative  h-[1880px]">
      {sideBarDisplay && (
        <SideBar updateSideBarDisplay={updateSideBarDisplay} />
      )}
      {console.log(sideBarDisplay)}
      <div
        className=" !w-full  md:w-auto"
        style={{
          width: !sideBarDisplay ? "calc(100%)" : "calc(100% - 300px )",
        }}
      >
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
    </div>
  );
}

export default App;
